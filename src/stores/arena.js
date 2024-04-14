import {defineStore} from "pinia"

import {getAppStore} from "@/stores/app"

import {postChat, postRank} from "@/api"

export const getArenaStore = defineStore('arena', {
    state: () => ({
        userTyping: '',
        loading: false,
        submitted: false,
        agents: [
            {
                model: null,
                messages: []
            },
            {
                model: null,
                messages: []
            },
        ],
        persona: null,
        winner: null,
    }),
    getters: {
        getUserTyping: (state) => state.userTyping,
        canUserSubmit: (state) => state.userTyping.length > 8 && !state.loading,
        getAgents: (state) => state.agents,
        isLoading: (state) => state.loading,
        isSubmitted: (state) => state.submitted,
        getPersona: (state) => state.persona,
        isConfigured: (state) => {
            return state.persona && state.agents[0].model && state.agents[1].model
        },
        getWinner: (state) => state.winner
    },
    actions: {
        setUserTyping(text) {
            this.userTyping = text
        },
        setModel(n, model_id) {
            this.agents[n].model = getAppStore().findModelById(model_id)
            console.debug('>> model set')
            console.debug(this.getAgents[n].model)
        },
        setPersona(persona_id) {
            this.persona = getAppStore().findPersonaById(persona_id)
            console.debug('>> persona set')
            console.debug(this.getPersona)
        },
        postUserMessage() {
            this.submitted = true
            this.agents.forEach(agent => {
                agent.messages.push(getAppStore().formatUserMessage(this.getUserTyping))
            })

            this.setUserTyping('')
            this.requestAgentResponse()
        },
        requestAgentResponse() {
            this.loading = true

            this.agents.forEach((agent, index) => {
                postChat(agent.model.id, getAppStore().formatChat(this.getPersona.prompt, agent.messages))
                    .then(res => {
                        agent.messages.push({
                            id: res.id,
                            name: `${agent.model.name} (${this.getPersona.name})`,
                            icon: this.getPersona.icon,
                            model: agent.model.id,
                            text: res.response,
                            feedback: null,
                        })
                    }).then(() => index === this.agents.length - 1 ? this.loading = false : null)
            })
        },
        postUserRanking(winner, loser) {
            postRank(winner, loser)
                .then(() => {
                    console.debug(`>> rankin: ++ ${winner} | -- ${loser}`)
                    this.winner = winner
                })
        },
        reset() {
            this.submitted = false
            this.winner = null
            this.agents.forEach(agent => {
                agent.messages = []
            })
            console.debug('>> arena store reset')
        }
    },
})
