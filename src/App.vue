<template>

  <Topbar @on-menu-toggle="isSidebarOpen = !isSidebarOpen"/>

  <div
      class="py-24 fixed top-0 -left-full w-full h-full bg-white z-10 opacity-50 transition-all"
      :class="[{ '!left-0 !opacity-100': isSidebarOpen }]"
  >
    <Container>
      <SubHeadline>model selection</SubHeadline>
      <ModelSelection
          :active="getConfigStore().getAgent.model.active"
          :options="getConfigStore().getAgent.model.selection"
          @onSelect="model => {getConfigStore().setActiveAgentModel(model)}"
      />

      <div class="h-1 bg-slate-700 my-8"></div>

      <SubHeadline>persona customization</SubHeadline>
      <Textarea
          :value="getConfigStore().getAgent.persona"
          class="text-sm text-slate-400"
          @input="(event) => getConfigStore().setAgentPersona(event.target.value)"
      />

      <Footer/>
    </Container>
  </div>

  <div class="pt-24 pb-72 min-h-svh">
    <Container>

      <History :is-loading="isLoading" :messages="getChatStore().getItems"/>

    </Container>
  </div>

  <Interaction
      :active-model="'mistral'"
      :active-persona="'bishop'"
      :handle-reset="reset"
      :handle-submit="submit"
      :is-submit-disabled="isSubmitDisabled"
      @on-message-change="(newMessage) => this.message = newMessage"
  />

</template>

<script>
import Container from "@/components/atoms/Container.vue"
import Textarea from "@/components/atoms/Textarea.vue"
import History from "@/components/History.vue"
import Footer from "@/components/Footer.vue"

import {inference} from "@/inference"
import {fillPrompt, formatChat} from "@/prompt"

import {getChatStore} from "@/stores/chat"
import {getConfigStore} from "@/stores/config"
import ModelSelection from "@/components/ModelSelection.vue"
import Topbar from "@/components/Topbar.vue"
import Interaction from "@/components/Interaction.vue"
import SubHeadline from "@/components/atoms/typography/SubHeadline.vue";

export default {
  name: 'App',
  components: {
    SubHeadline,
    Interaction,
    Topbar,
    History,
    Container,
    Textarea,
    ModelSelection,
    Footer,

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
<style src="@vueform/slider/themes/default.css"></style>