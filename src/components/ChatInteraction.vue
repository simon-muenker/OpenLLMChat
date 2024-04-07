<template>
  <div class="bg-white p-3 shadow-2xl rounded-xl hover:drop-shadow-xl transition-all">

    <div class="flex flex-row gap-3 items-center">
          <Textarea
              :value="message"
              placeholder="type our message"
              @input="(event) => {this.message = event.target.value; this.onMessageChange()}"
          />
      <Button :disabled="isSubmitDisabled" @click="handleSubmit">
        <PaperAirplaneIcon class="h-10 w-10 text-teal-600"/>
      </Button>
    </div>

    <div class="flex flex-row gap-3 justify-between items-center">
      <Button @click="handleReset">
        <ArrowPathIcon class="h-5 w-5 text-red-600"/>
      </Button>
      <Caption>Generated content may be inaccurate or false.</Caption>
    </div>

  </div>
</template>
<script>
import {ArrowPathIcon, PaperAirplaneIcon} from "@heroicons/vue/24/outline"
import Button from "@/components/atoms/Button.vue"
import Textarea from "@/components/atoms/Textarea.vue"
import Caption from "@/components/typography/Caption.vue"

export default {
  name: "ChatInteraction",
  components: {
    Caption,
    Textarea,
    Button,
    PaperAirplaneIcon,
    ArrowPathIcon,
  },
  props: {
    isSubmitDisabled: {
      type: Boolean,
      default: true
    },
    handleSubmit: {
      type: Function,
      required: true
    },
    handleReset: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      message: '',
    }
  },
  methods: {
    onMessageChange() {
      this.$emit('onMessageChange', this.message);
    }
  }
}
</script>