<template>
  <div class="bg-slate-100">

    <Container class="pt-12 min-h-svh">
      <Headline>OpenLLMChat</Headline>

      <span class="h-16"></span>

      <ChatHistory :is-loading="isLoading" :messages="getChatStore().getItems"/>

      <span class="h-8"></span>

      <ChatInteraction
          :handle-reset="reset"
          :handle-submit="submit"
          :is-submit-disabled="isSubmitDisabled"
          @on-message-change="(newMessage) => this.message = newMessage"
      />

      <AppFooter/>
    </Container>

    <div class="fixed z-40 bottom-4 w-full">
      <Container>
        <MenuToggle @on-toggle="isSidebarOpen = !isSidebarOpen"/>
      </Container>
    </div>

    <MenuContainer :is-open="isSidebarOpen">
      <Container class="pt-12 min-h-svh">
        <Headline>configure</Headline>

        <span class="h-16"></span>

        <SubHeadline>model selection</SubHeadline>
        <ConfigureModel
            :active="getConfigStore().getAgent.model.active"
            :options="getConfigStore().getAgent.model.selection"
            @onSelect="model => {getConfigStore().setActiveAgentModel(model)}"
        />

        <div class="my-8"></div>

        <SubHeadline>persona customization</SubHeadline>
        <Textarea
            :value="getConfigStore().getAgent.persona"
            class="text-sm text-slate-400"
            @input="(event) => getConfigStore().setAgentPersona(event.target.value)"
        />

      </Container>
    </MenuContainer>

  </div>
</template>

<script>
import Container from "@/components/atoms/Container.vue"
import Textarea from "@/components/atoms/Textarea.vue"
import ChatHistory from "@/components/ChatHistory.vue"
import AppFooter from "@/components/AppFooter.vue"

import {inference} from "@/inference"
import {fillPrompt, formatChat} from "@/prompt"

import {getChatStore} from "@/stores/chat"
import {getConfigStore} from "@/stores/config"
import ConfigureModel from "@/components/ConfigureModel.vue"
import MenuToggle from "@/components/atoms/MenuToggle.vue"
import ChatInteraction from "@/components/ChatInteraction.vue"
import SubHeadline from "@/components/typography/SubHeadline.vue"
import Headline from "@/components/typography/Headline.vue"
import MenuContainer from "@/components/atoms/MenuContainer.vue"

export default {
  name: 'App',
  components: {
    MenuContainer,
    Headline,
    SubHeadline,
    ChatInteraction,
    MenuToggle,
    ChatHistory,
    Container,
    Textarea,
    ConfigureModel,
    AppFooter,
  },
  data() {
    return {
      message: '',
      isLoading: true,
      isSidebarOpen: false
    }
  },
  computed: {
    isSubmitDisabled() {
      return this.message.length < 4;
    }
  },
  mounted() {
    this.reset()
  },
  methods: {
    getConfigStore,
    getChatStore,
    submit() {
      getChatStore().addUserMessage(this.message)
      this.getResponse(getChatStore().getItems)
      this.message = ''
    },
    getResponse(chat) {
      this.isLoading = true

      inference(getConfigStore().getAgent.model.active, fillPrompt(getConfigStore().getAgent.persona, formatChat(chat)))
          .then(res => getChatStore().addAgentMessage(res.response))
          .then(() => this.isLoading = false)
    },
    reset() {
      getChatStore().reset()
      this.getResponse([{
        name: getConfigStore().getUser.name,
        icon: getConfigStore().getUser.icon,
        text: 'Introduce yourself.'
      }])
    },
  }
}
</script>