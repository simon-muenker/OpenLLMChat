<template>

  <AppHeader headline="OpenLLMChat"/>

  <AppConfigure v-if="!getChatStore().isConfigured"/>

  <Container v-else>

    <ChatMessages :messages="getChatStore().getMessages" :on-feedback="getChatStore().postUserFeedback"/>

    <Loader v-if="getChatStore().isLoading"/>
    <Spacer/>

    <ChatExamples
        v-if="getChatStore().isMessagesEmpty"
        :click-message="(message) => {getChatStore().setUserTyping(message); getChatStore().postUserMessage()}"
    />

    <Spacer size="tiny"/>

    <ChatInteraction
        :is-submit-disabled="getChatStore().isSubmitDisabled"
        :do-reset="getChatStore().reset"
        :get-typing="getChatStore().getUserTyping"
        :set-typing="getChatStore().setUserTyping"
        :submit-message="getChatStore().postUserMessage"
    />

  </Container>

</template>
<script>
import {getChatStore} from "@/stores/chat"

import Container from "@/components/atoms/Container.vue"
import Loader from "@/components/atoms/Loader.vue"
import Spacer from "@/components/atoms/Spacer.vue"

import AppHeader from "@/components/AppHeader.vue"
import AppConfigure from "@/components/AppConfigure.vue"
import AppFooter from "@/components/AppFooter.vue"

import ChatMessages from "@/components/ChatMessages.vue"
import ChatExamples from "@/components/ChatExamples.vue"
import ChatInteraction from "@/components/ChatInteraction.vue"


export default {
  name: 'Chat',
  components: {
    Container,
    Loader,
    Spacer,
    AppHeader,
    AppConfigure,
    AppFooter,
    ChatMessages,
    ChatExamples,
    ChatInteraction,
  },
  methods: {
    getChatStore,
  }
}
</script>