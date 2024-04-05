<template>
  <div class="fixed bottom-0 w-full">
    <Container class="!px-0 sm:px-3">
      <div class="bg-white p-3 border-slate-800 border-t-4 border-l-0 border-r-0 sm:border-l-4 sm:border-r-4">

        <div class="flex flex-row gap-3 items-center">
          <Textarea
              :value="message"
              placeholder="type our message"
              @input="(event) => {this.message = event.target.value; this.onMessageChange()}"
          />
          <Button :disabled="isSubmitDisabled" class="!border-0" @click="handleSubmit">
            <PaperAirplaneIcon class="h-10 w-10"/>
          </Button>
        </div>

        <div class="my-4 flex flex-row gap-3 justify-between items-center">
          <Button @click="handleReset">
            <div class="flex">
              <ArrowPathIcon class="h-5 w-5"/>
              <span class="text-sm ml-2">Reset</span>
            </div>
          </Button>
          <Caption>Generated content may be inaccurate or false.</Caption>
        </div>

        <div class="h-1 bg-slate-700"></div>

        <div class="grid grid-cols-3 gap-3 items-center mt-4">
          <Caption>instruction</Caption>
          <div class="col-span-2">
            <Slider
                v-model="annotation.value"
                v-bind="annotation"
            />
          </div>
          <Caption>persona</Caption>
          <div class="col-span-2">
            <Slider
                v-model="annotation.value"
                v-bind="annotation"
            />
          </div>
        </div>

        <div class="mt-4 flex flex-row gap-3 justify-between items-center">
          <Button>
            <div class="flex">
              <ArrowTopRightOnSquareIcon class="h-5 w-5"/>
              <span class="text-sm ml-2">feedback</span>
            </div>
          </Button>

          <Caption>model: {{ activeModel }}, persona: {{ activePersona }}</Caption>
        </div>
      </div>
    </Container>
  </div>
</template>
<script>
import {ArrowPathIcon, ArrowTopRightOnSquareIcon, PaperAirplaneIcon} from "@heroicons/vue/24/outline"
import Button from "@/components/atoms/Button.vue"
import Container from "@/components/atoms/Container.vue"
import Textarea from "@/components/atoms/Textarea.vue"
import Slider from "@vueform/slider"
import Caption from "@/components/atoms/typography/Caption.vue"

export default {
  name: "Interaction",
  components: {
    Caption,
    Textarea,
    Container,
    Button,
    PaperAirplaneIcon,
    ArrowPathIcon,
    ArrowTopRightOnSquareIcon,
    Slider
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
    },
    activeModel: {
      type: String,
      default: null,
    },
    activePersona: {
      type: String,
      default: null,
    }
  },
  data() {
    return {
      message: '',
      annotation: {
        value: 50,
        showTooltip:
            false
      }
    }
  },
  methods: {
    onMessageChange() {
      this.$emit('onMessageChange', this.message);
    }
  }
}
</script>