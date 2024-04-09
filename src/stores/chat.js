import {defineStore} from "pinia"
import {getConfigStore} from "@/stores/config"

import {postInference} from "@/api"
import {fillPrompt} from "@/prompt"

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

            let model = getConfigStore().getActiveModel
            let prompt = fillPrompt(getConfigStore().getActivePersonaContent.prompt, this.history)

            console.debug(`>> model: ${model}`)
            console.debug(`>> prompt:\n${prompt}`)

            postInference(model, prompt)
                .then(res => {
                    this.history.push({
                        'name': getConfigStore().getActivePersonaContent.name,
                        'icon': getConfigStore().getActivePersonaContent.icon,
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