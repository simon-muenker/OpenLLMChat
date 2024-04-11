import {defineStore} from "pinia"
import {getModels, getPersonas} from "@/api"


export const getConfigStore = defineStore('config', {
    state: () => ({
        agent: {
            model: {
                active: '',
                selection: []
            },
            persona: {
                active: '',
                selection: []
            }
        },
        user: {
            name: 'User',
            icon: '🗣️',
        }
    }),
    getters: {
        getAgent: (state) => state.agent,
        getUser: (state) => state.user,
        getActiveModel: (state) => state.agent.model.active,
        getActiveModelContent: (state) => {
            return state.agent.model.selection.filter(model => model.id === state.agent.model.active)[0]
        },
        getActivePersona: (state) => state.agent.persona.active,
        getActivePersonaContent: (state) => {
            return state.agent.persona.selection.filter(persona => persona.id === state.agent.persona.active)[0]
        },
    },
    actions: {
        init() {
            getModels()
                .then(res => {
                    this.agent.model.selection = res
                    this.agent.model.active = this.agent.model.selection[0].id
                    console.debug('>> models retrieved')
                })

            getPersonas()
                .then(res => {
                    this.agent.persona.selection = res
                    this.agent.persona.active = this.agent.persona.selection[0].id
                    console.debug('>> personas retrieved')
                })
        },
        setActiveModel(id) {
            this.agent.model.active = id

            console.debug('>> active model set')
            console.debug(this.getActiveModelContent)
        },
        setActivePersona(id) {
            this.agent.persona.active = id

            console.debug('>> active persona set')
            console.debug(this.getActivePersonaContent)
        }
    }
})
