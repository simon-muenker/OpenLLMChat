<template>
  <Floater @keyup.ctrl.enter="getChatStore().postUserMessage">

    <div class="flex flex-row gap-3 items-center">
          <Textarea
              class="text-sm sm:text-base"
              :value="getChatStore().getUserTyping"
              placeholder="type our message"
              @input="(event) => {getChatStore().setUserTyping(event.target.value)}"
          />
      <Button
          :disabled="!getChatStore().canUserSubmit"
          @click="getChatStore().postUserMessage"
      >
        <PaperAirplaneIcon class="h-10 w-10 text-teal-600"/>
      </Button>
    </div>

    <div class="flex flex-row gap-3 justify-between items-center">
      <Button @click="getChatStore().reset">
        <ArrowPathIcon class="h-5 w-5 text-red-600"/>
      </Button>
      <Caption>Generated content may be inaccurate or false.</Caption>
    </div>

  </Floater>
</template>
<script>
import {ArrowPathIcon, PaperAirplaneIcon} from "@heroicons/vue/24/outline"

import {getChatStore} from "@/stores/chat"

import Button from "@/components/atoms/Button.vue"
import Textarea from "@/components/atoms/Textarea.vue"
import Floater from "@/components/atoms/Floater.vue"

import Caption from "@/components/typography/Caption.vue"


export default {
  name: "ChatInteraction",
  components: {
    PaperAirplaneIcon,
    ArrowPathIcon,
    Floater,
    Textarea,
    Button,
    Caption,
  },
  methods: {
    getChatStore,
  }
}
</script>