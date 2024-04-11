import {defineStore} from "pinia"
import {getConfigStore} from "@/stores/config"

import {postFeedback, postInference} from "@/api"

export const getChatStore = defineStore('chat', {
    state: () => ({
        userTyping: '',
        messages: [], //get_debug_chat()
        loading: false,
    }),
    getters: {
        getUserTyping: (state) => state.userTyping,
        canUserSubmit: (state) => state.userTyping.length > 8 && !state.loading,
        getMessages: (state) => state.messages,
        isMessagesEmpty: (state) => state.messages.length === 0,
        isLoading: (state) => state.loading
    },
    actions: {
        setUserTyping(text) {
            this.userTyping = text
        },
        postUserMessage() {
            this.messages.push({
                id: -1,
                name: getConfigStore().getUser.name,
                icon: getConfigStore().getUser.icon,
                text: this.userTyping,
                model: null,
                feedback: null,
            })
            this.setUserTyping('')
            this.requestAgentResponse()
        },
        requestAgentResponse() {
            this.loading = true

            console.debug(`>> model: ${getConfigStore().getActiveModel}`)
            console.debug(`>> persona: ${getConfigStore().getActivePersonaContent.prompt}`)
            console.debug(`>> messages:`)
            console.debug(this.messages)

            postInference(
                getConfigStore().getActiveModel,
                getConfigStore().getActivePersonaContent.prompt,
                this.messages.map(item => ({
                    role: item.name === getConfigStore().getUser.name ? 'user' : 'assistant',
                    content: item.text
                }))
            )
                .then(res => {
                    this.messages.push({
                        id: res.id,
                        name: getConfigStore().getActivePersonaContent.name,
                        icon: getConfigStore().getActivePersonaContent.icon,
                        model: getConfigStore().getActiveModel,
                        text: res.response,
                        feedback: null,
                    })
                })
                .then(() => this.loading = false)
        },
        postUserFeedback(id, content) {
            postFeedback(id, content)
                .then(() => {
                    this.messages.filter(item => item.id === id)[0].feedback = content
                    console.debug(`>> feedback: ${id} - ${content}`)
                })
        },
        reset() {
            this.messages = []
            console.debug('>> chat store reset')
        }
    },
})
