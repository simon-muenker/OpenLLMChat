import {defineStore} from "pinia"

export const getConfigStore = defineStore('config', {
    state: () => ({
        agent: {
            model: {
                active: get_models()[0].id,
                selection: get_models()
            },
            persona: {
                active: get_personas()[0].id,
                selection: get_personas()
            }
        },
        user: {
            name: 'User',
            icon: '🗣️',
        }
    }), getters: {
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
    }, actions: {
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


function get_models() {
    return [
        {
            id: 'mixtral:8x7b-instruct-v0.1-q6_K',
            name: 'Mixtral',
            type: 'instruct',
            params: '8x7b',
            author: 'Mistral AI',
            origin: 'EU',
            moreLink: 'https://mistral.ai/news/mixtral-of-experts/'
        }, {
            id: 'llama2:70b-chat-q6_K',
            name: 'Llama2',
            type: 'chat',
            params: '70b',
            author: 'Meta AI',
            origin: 'US',
            moreLink: ''
        }, {
            id: 'falcon:40b-instruct-q5_1',
            name: 'Falcon',
            type: 'instruct',
            params: '40b',
            author: 'TII',
            origin: 'UAE',
            moreLink: 'https://falconllm.tii.ae/falcon-40b.html'
        }, {
            id: 'qwen:72b-chat-v1.5-q6_K',
            name: 'Qwen',
            type: 'chat',
            params: '72b',
            author: 'Alibaba Cloud',
            origin: 'China',
            moreLink: 'https://github.com/QwenLM/Qwen'
        }, {
            id: 'mistral:7b-instruct-v0.2-q6_K',
            name: 'Mistral AI',
            type: 'instruct',
            params: '7b',
            author: 'Europe',
            origin: 'EU',
            moreLink: 'https://mistral.ai/news/announcing-mistral-7b/'
        }, {
            id: 'gemma:7b-instruct-q6_K',
            name: 'Gemma',
            type: 'instruct',
            params: '7b',
            author: 'Google',
            origin: 'US',
            moreLink: 'https://blog.google/technology/developers/gemma-open-models/'
        }
    ]
}

function get_personas() {
    return [
        {
            id: 'default',
            name: 'Bishop - CLTrier AI Assistant',
            icon: '🖲️',
            description: 'I am a helpful AI Assistant for education and research inspired by a legacy sci-fy series',
            prompt: 'You are Bishop, an android character introduced in the 1986 film Aliens. You are a trusty ally with unwavering precision and a touch of enigmatic charm. Currently, you are working for the Computational Linguistics Department of the University of Trier as an online assistant. You are willing to help students and researchers. Based on the given chat, continue a helpful but short conversation.'
        }
    ]
}
