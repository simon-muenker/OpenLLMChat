import {defineStore} from "pinia"
import {getConfigStore} from "@/stores/config"

export const getChatStore = defineStore('chat', {
    state: () => ({
        items: []
    }),
    getters: {
        getItems: (state) => state.items,
    },
    actions: {
        addItem(item) {
            this.items.push({
                'name': item.name,
                'icon': item.icon,
                'text': item.text
            })
        },
        addUserMessage(text) {
            this.addItem({
                'name': getConfigStore().getUser.name,
                'icon': getConfigStore().getUser.icon,
                'text': text
            })
        },
        addAgentMessage(text) {
            this.addItem({
                'name': getConfigStore().getAgent.name,
                'icon': getConfigStore().getAgent.icon,
                'text': text
            })
        },
        reset() {
            this.items = []
        }
    },
})