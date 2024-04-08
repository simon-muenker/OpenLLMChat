import {defineStore} from "pinia"
import {getConfigStore} from "@/stores/config"

import {postInference} from "@/api"
import {fillPrompt} from "@/prompt"

export const getChatStore = defineStore('chat', {
    state: () => ({
        userTyping: '',
        history: get_debug_chat()
    }),
    getters: {
        getUserTyping: (state) => state.userTyping,
        canUserSubmit: (state) => state.userTyping.length > 8,
        getHistory: (state) => state.history,
    },
    actions: {
        setUserTyping(text) {
            this.userTyping = text
        },
        postUserMessage(text) {
            this.history.push({
                'name': getConfigStore().getUser.name,
                'icon': getConfigStore().getUser.icon,
                'text': text
            })

            this.requestAgentResponse()
        },
        requestAgentResponse() {
            postInference(getConfigStore().getActiveModel, fillPrompt(getConfigStore().getActivePersona, this.history))
                .then(res => {
                    this.history.push({
                        'name': getConfigStore().getAgent.name,
                        'icon': getConfigStore().getAgent.icon,
                        'text': res.response
                    })
                })
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
