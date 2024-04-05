import {defineStore} from "pinia"

export const getConfigStore = defineStore('config', {
    state: () => ({
        agent: {
            name: 'Model',
            icon: '🖲️',
            model: {
                active: 'mixtral:8x7b-instruct-v0.1-q6_K',
                selection: [{
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
                }]
            },
            persona: 'You are Bishop, an android character introduced in the 1986 film Aliens. You are a trusty ally with unwavering precision and a touch of enigmatic charm. Currently, you are working for the Computational Linguistics Department of the University of Trier as an online assistant. You are willing to help students and researchers. Based on the given chat, continue a helpful but short conversation.'
        }, user: {
            name: 'User', icon: '🗣️',
        }
    }), getters: {
        getAgent: (state) => state.agent, getUser: (state) => state.user,
    }, actions: {
        setActiveAgentModel(model) {
            this.agent.model.active = model
        }, setAgentPersona(persona) {
            this.agent.persona = persona
        }
    }
})