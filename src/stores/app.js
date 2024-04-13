import {defineStore} from "pinia"
import {getModels, getPersonas} from "@/api"


export const getAppStore = defineStore('app', {
    state: () => ({
        models: [],
        personas: [],
        user: {
            name: 'User',
            icon: '🗣️',
        },
        interactType: 'chat',
        configureOpen: false,

    }),
    getters: {
        getModels: (state) => state.models,
        getPersonas: (state) => state.personas,
        getUser: (state) => state.user,
        getinteractType: (state) => state.interactType,
        isConfigureOpen: (state) => state.configureOpen,
    },
    actions: {
        init() {
            getModels()
                .then(res => {
                    this.models = res
                    console.debug('>> models retrieved')
                })

            getPersonas()
                .then(res => {
                    this.personas = res
                    console.debug('>> personas retrieved')
                })
        },
        toggleConfigureOpen() {
            this.configureOpen = !this.configureOpen
            console.debug(`>> config partial open: ${this.configureOpen}`)
        },
        switchInteractType() {
            this.interactType = this.interactType === 'chat' ? 'arena' : 'chat'
            console.debug(`>> app interact type: ${this.interactType}`)
        },
        findModelById(idx) {
            return this.getModels.filter(item => item.id === idx)[0]
        },
        findPersonaById(idx) {
            return this.getPersonas.filter(item => item.id === idx)[0]
        },
        formatUserMessage(text) {
            return {
                id: null,
                name: this.getUser.name,
                icon: this.getUser.icon,
                text: text,
                model: null,
                feedback: null,
            }
        },
        formatChat(system, messages) {
            return [{
                role: 'system',
                content: system
            }].concat(messages.map(item => ({
                role: item.name === this.getUser.name ? 'user' : 'assistant',
                content: item.text
            })))
        }
    }
})
