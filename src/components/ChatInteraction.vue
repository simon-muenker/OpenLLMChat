<template>
  <Floater>

    <div class="flex flex-row gap-3 items-center">
          <Textarea
              placeholder="type our message"
              @input="(event) => {getChatStore().setUserTyping(event.target.value)}"
          />
      <Button :disabled="!getChatStore().canUserSubmit" @click="handleSubmit">
        <PaperAirplaneIcon class="h-10 w-10 text-teal-600"/>
      </Button>
    </div>

    <div class="flex flex-row gap-3 justify-between items-center">
      <Button @click="handleReset">
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
import Caption from "@/components/typography/Caption.vue"
import Floater from "@/components/atoms/Floater.vue"

export default {
  name: "ChatInteraction",
  components: {
    Floater,
    Caption,
    Textarea,
    Button,
    PaperAirplaneIcon,
    ArrowPathIcon,
  },
  props: {
    handleSubmit: {
      type: Function,
      required: true
    },
    handleReset: {
      type: Function,
      required: true
    }
  },
  methods: {
    getChatStore
  }
}
</script>