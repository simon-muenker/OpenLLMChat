<template>
  <div class="my-4">
    <Container>

      <h1 class="text-slate-700 mb-3">
        <span class="font-bold text-4xl sm:text-5xl">{{ getConfigStore().getAgent.name }}</span>
        <span class="text-sm sm:text-base">
          Chat with the friendly <span class="font-bold text-sky-800">A</span>ndro<span
            class="font-bold text-sky-800">I</span>d
        </span>
      </h1>

      <Chat :messages="getChatStore().getItems"/>

      <span v-if="loading" class="text-6xl font-bold text-slate-500 text-center animate-pulse">...</span>

      <div class="mt-4 flex flex-row gap-3 items-center">
        <Textarea
            :value="message"
            placeholder="Chat with Bishop"
            @input="event => {message = event.target.value}"
        />
        <Button class="bg-emerald-400" :disabled="isSubmitDisabled" @click="submit">
          <PaperAirplaneIcon class="h-8 w-8"/>
        </Button>
      </div>

      <div class="my-4 flex flex-row gap-3 justify-between align-items">
        <Button @click="reset">
          <div class="flex">
            <ArrowPathIcon class="h-5 w-5"/>
            <span class="text-sm ml-2">Reset</span>
          </div>
        </Button>
        <span class="text-sm text-slate-500">Generated content may be inaccurate or false.</span>
      </div>

      <span class="text-sm text-slate-500">model selection</span>
      <ModelSelection
          :active="getConfigStore().getAgent.model.active"
          :options="getConfigStore().getAgent.model.selection"
          @onSelect="model => {getConfigStore().setActiveAgentModel(model)}"
      />

      <span class="text-sm text-slate-500">persona customization</span>
        <Textarea
            class="text-sm text-slate-400"
            :value="getConfigStore().getAgent.persona"
            @input="(event) => getConfigStore().setAgentPersona(event.target.value)"
        />

      <Footer/>


    </Container>
  </div>
</template>

<script>
import Container from "@/components/Container.vue"
import Textarea from "@/components/Textarea.vue"
import Button from "@/components/Button.vue"
import Chat from "@/components/Chat.vue"
import Footer from "@/components/Footer.vue"

import {ArrowPathIcon, PaperAirplaneIcon} from "@heroicons/vue/24/outline"
import {inference} from "@/inference"
import {fillPrompt, formatChat} from "@/prompt"

import {getChatStore} from "@/stores/chat"
import {getConfigStore} from "@/stores/config"
import ModelSelection from "@/components/ModelSelection.vue"


export default {
  name: 'App',
  components: {
    Chat,
    Container,
    Textarea,
    Button,
    PaperAirplaneIcon,
    ArrowPathIcon,
    ModelSelection,
    Footer

  },
  data() {
    return {
      message: '',
      loading: true,
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
    submit() {
      if (this.isSubmitDisabled) return

      getChatStore().addUserMessage(this.message)
      this.getResponse(getChatStore().getItems)
      this.message = ''
    },
    getResponse(chat) {
      this.loading = true

      inference(getConfigStore().getAgent.model.active, fillPrompt(getConfigStore().getAgent.persona, formatChat(chat)))
          .then(res => getChatStore().addAgentMessage(res.response))
          .then(() => this.loading = false)
    },
    reset() {
      getChatStore().reset()
      this.getResponse([{
        name: getConfigStore().getUser.name,
        icon: getConfigStore().getUser.icon,
        text: 'Introduce yourself.'
      }])
    },
    getChatStore
  }
}
</script>