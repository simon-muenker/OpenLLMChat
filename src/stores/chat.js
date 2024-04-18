import {defineStore} from "pinia"

import {getAppStore} from "@/stores/app"

import {postChat, postFeedback} from "@/api"

export const getChatStore = defineStore('chat', {
    state: () => ({
        userTyping: '',
        messages: [],
        loading: false,
        agent: {
            model: null,
            persona: null,
        }
    }),
    getters: {
        getUserTyping: (state) => state.userTyping,
        canUserSubmit: (state) => state.userTyping.length > 8 && !state.loading,
        isSubmitDisabled: (state) => !state.canUserSubmit,
        getMessages: (state) => state.messages,
        isMessagesEmpty: (state) => state.messages.length === 0,
        isLoading: (state) => state.loading,
        getModel: (state) => state.agent.model,
        getPersona: (state) => state.agent.persona,
        isConfigured: (state) => state.agent.model && state.agent.persona
    },
    actions: {
        setUserTyping(text) {
            this.userTyping = text
        },
        setModel(model_id) {
            this.agent.model = getAppStore().findModelById(model_id)
            console.debug('>> model set')
            console.debug(this.getModel)
        },
        setPersona(persona_id) {
            this.agent.persona = getAppStore().findPersonaById(persona_id)
            console.debug('>> persona set')
            console.debug(this.getPersona)
        },
        postUserMessage() {
            this.messages.push(getAppStore().formatUserMessage(this.getUserTyping))
            this.setUserTyping('')
            this.requestAgentResponse()
        },
        requestAgentResponse() {
            this.loading = true

            console.debug(`>> model: ${this.getModel.id}`)
            console.debug(`>> system: ${this.getPersona.id}`)
            console.debug(`>> messages:`)
            console.debug(this.messages)

            postChat(this.getModel.id, getAppStore().formatChat(this.getPersona.prompt, this.getMessages))
                .then(res => {
                    this.messages.push({
                        id: res.id,
                        name: this.getPersona.name,
                        icon: this.getPersona.icon,
                        model: this.getModel.id,
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
