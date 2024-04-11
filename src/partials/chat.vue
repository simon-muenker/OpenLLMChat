<template>
  <Headline>OpenLLMChat</Headline>
  <span class="h-16"></span>

  <ChatMessages/>

  <span v-if="getChatStore().isLoading"
        class="text-6xl font-bold text-slate-500 text-center animate-pulse">...</span>
  <span class="h-8"></span>

  <ChatExamples v-if="getChatStore().isHistoryEmpty"/>

  <span class="h-0.5"></span>

  <ChatInteraction/>

  <AppFooter/>
</template>
<script>
import {getChatStore} from "@/stores/chat"

import Headline from "@/components/typography/Headline.vue"

import ChatMessages from "@/components/ChatMessages.vue"
import ChatExamples from "@/components/ChatExamples.vue"
import ChatInteraction from "@/components/ChatInteraction.vue"

import AppFooter from "@/components/AppFooter.vue"


export default {
  name: 'Chat',
  components: {
    Headline,
    ChatMessages,
    ChatExamples,
    ChatInteraction,
    AppFooter,
  },
  methods: {
    getChatStore
  }
}
</script>