import {defineStore} from "pinia"
import {getConfigStore} from "@/stores/config"

import {postInference} from "@/api"

export const getChatStore = defineStore('chat', {
    state: () => ({
        userTyping: '',
        history: [], //get_debug_chat()
        loading: false,
    }),
    getters: {
        getUserTyping: (state) => state.userTyping,
        canUserSubmit: (state) => state.userTyping.length > 8 && !state.loading,
        getHistory: (state) => state.history,
        isHistoryEmpty: (state) => state.history.length === 0,
        isLoading: (state) => state.loading
    },
    actions: {
        setUserTyping(text) {
            this.userTyping = text
        },
        postUserMessage() {
            this.history.push({
                'name': getConfigStore().getUser.name,
                'icon': getConfigStore().getUser.icon,
                'text': this.userTyping
            })
            this.setUserTyping('')
            this.requestAgentResponse()
        },
        requestAgentResponse() {
            this.loading = true

            console.debug(`>> model: ${getConfigStore().getActiveModel}`)
            console.debug(`>> model: ${getConfigStore().getActivePersonaContent.prompt}`)
            console.debug(`>> prompt:\n${this.history}`)

            postInference(
                getConfigStore().getActiveModel,
                getConfigStore().getActivePersonaContent.prompt,
                this.history.map(item => ({
                    role: item.name === getConfigStore().getUser.name ? 'user' : 'assistant',
                    content: item.text
                }))
            )
                .then(res => {
                    this.history.push({
                        'id': res.id,
                        'name': getConfigStore().getActivePersonaContent.name,
                        'icon': getConfigStore().getActivePersonaContent.icon,
                        'model': getConfigStore().getActiveModel,
                        'text': res.response
                    })
                })
                .then(() => this.loading = false)
        },
        reset() {
            this.history = []
        }
    },
})

function get_debug_chat() {
    return [
        {
            'name': 'Model',
            'icon': '🖲',
            'text': 'Hello my name is Bishop, I am here to assist you!'
        },
        {
            'name': 'User',
            'icon': '🗣',
            'text': 'Thanks for your help Bishop'
        }
    ]
}

export function getExampleMessages() {
    return [
        {
            name: 'introduce yourself',
            message: 'Introduce yourself in a creative way.',
        },
        {
            name: 'explain NLP',
            message: 'Explain the research field of Natural Language Processing.',
        },
        {
            name: 'discuss AI risks ',
            message: 'Discuss the risk of generative AI on society.',
        }

    ]
}