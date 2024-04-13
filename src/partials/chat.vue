<template>

  <Container>
    <Headline>OpenLLMChat</Headline>
    <span class="h-16"></span>
  </Container>

  <AppConfigure v-if="!getChatStore().isConfigured"/>

  <Container v-else>

    <ChatMessages :messages="getChatStore().getMessages"/>

    <Loader v-if="getChatStore().isLoading"/>
    <span class="h-8"></span>

    <ChatExamples
        v-if="getChatStore().isMessagesEmpty"
        :click-message="(message) => {getChatStore().setUserTyping(message); getChatStore().postUserMessage()}"
    />

    <span class="h-0.5"></span>

    <ChatInteraction
        :get-typing="getChatStore().getUserTyping"
        :canSubmit="getChatStore().canUserSubmit"
        :submit-message="getChatStore().postUserMessage"
        :do-reset="getChatStore().reset"
        :set-typing="getChatStore().setUserTyping"
    />

    <AppFooter/>

  </Container>
</template>
<script>
import {getChatStore} from "@/stores/chat"

import Headline from "@/components/typography/Headline.vue"

import ChatMessages from "@/components/ChatMessages.vue"
import ChatExamples from "@/components/ChatExamples.vue"
import ChatInteraction from "@/components/ChatInteraction.vue"

import AppFooter from "@/components/AppFooter.vue"
import AppConfigure from "@/components/AppConfigure.vue"
import Container from "@/components/atoms/Container.vue"
import Loader from "@/components/atoms/Loader.vue";


export default {
  name: 'Chat',
  components: {
    Loader,
    Headline,
    ChatMessages,
    ChatExamples,
    ChatInteraction,
    AppFooter,
    AppConfigure,
    Container,
  },
  methods: {
    getChatStore,
  }
}
</script>