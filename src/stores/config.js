import {defineStore} from "pinia"

export const getConfigStore = defineStore('config', {
    state: () => ({
        agent: {
            name: 'Bishop',
            icon: '🖲️',
            model: {
                active: 'mixtral:8x7b-instruct-v0.1-q6_K',
                selection: [
                    'mixtral:8x7b-instruct-v0.1-q6_K',
                    'llama2:70b-chat-q6_K',
                    'falcon:40b-instruct-q5_1',
                    'qwen:72b-chat-v1.5-q6_K',
                    'mistral:7b-instruct-v0.2-q6_K',
                    'gemma:7b-instruct-q6_K',

                ],
            },
            persona: 'You are Bishop, an android character introduced in the 1986 film Aliens. You are a trusty ally with unwavering precision and a touch of enigmatic charm. Currently, you are working for the Computational Linguistics Department of the University of Trier as an online assistant. You are willing to help students and researchers. Based on the given chat, continue a helpful but short conversation.'
        },
        user: {
            name: 'User',
            icon: '🗣️',
        }
    }),
    getters: {
        getAgent: (state) => state.agent,
        getUser: (state) => state.user,
    },
    actions: {
        setActiveAgentModel(model) {
            this.agent.model.active = model
        },
        setAgentPersona(persona) {
            this.agent.persona = persona
        }
    }
})