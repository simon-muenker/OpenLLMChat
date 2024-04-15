<template>
  <Floater @keyup.ctrl.enter="() => !isSubmitDisabled ? submitMessage() : null">

    <div class="flex flex-row gap-3 items-center">
          <Textarea
              :value="getTyping"
              placeholder="type our message"
              @input="(event) => {setTyping(event.target.value)}"
          />
      <Button
          :disabled="isSubmitDisabled"
          @click="submitMessage"
      >
        <PaperAirplaneIcon class="h-10 w-10 text-teal-600"/>
      </Button>
    </div>

    <div class="flex flex-row gap-3 justify-between items-center">
      <Button v-if="doReset" @click="doReset">
        <ArrowPathIcon class="h-5 w-5 text-red-600"/>
      </Button>
      <Caption class="select-none self-end">Generated content may be inaccurate or false.</Caption>
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
  props: {
    getTyping: Object,
    setTyping: Function,
    isSubmitDisabled: {
      type: Boolean,
      required: true,
    },
    submitMessage: {
      type: Function,
      required: true,
    },
    doReset: {
      type: Function,
      required: false,
    },
  },
  methods: {
    getChatStore,
  }
}
</script>