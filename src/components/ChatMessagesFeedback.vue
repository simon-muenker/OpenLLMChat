<template>
  <Floater class="!p-1.5 leading-none -mb-4">
    <Button
        v-if="!feedback || feedback === 'positive'"
        :disabled="feedback"
        @click.once="onFeedback(id, 'positive')"

    >
      <ArrowTrendingUpIcon class="h-4 w-4 text-green-600 transition-all"/>
    </Button>
    <br v-if="!feedback">
    <Button
        v-if="!feedback || feedback === 'negative'"
        :disabled="feedback"
        @click.once="onFeedback(id, 'negative')"
    >
      <ArrowTrendingDownIcon class="h-4 w-4 text-red-600 transition-all"/>
    </Button>
  </Floater>
</template>

<script>
import {ArrowTrendingDownIcon, ArrowTrendingUpIcon} from "@heroicons/vue/24/outline"

import Floater from "@/components/atoms/Floater.vue"
import Button from "@/components/atoms/Button.vue"


export default {
  name: "ChatMessagesFeedback",
  components: {
    ArrowTrendingUpIcon,
    ArrowTrendingDownIcon,
    Button,
    Floater,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    feedback: {
      type: String,
      required: true,
    },
    onFeedback: {
      type: Function,
      required: true,
    }
  }
}
</script>
