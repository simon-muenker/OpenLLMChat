<template>
  <Floater>
    <div class="flex gap-4">

      <Button
          :disabled="getWinner"
          @click="onRank(id0, id1)"
      >
        <ArrowUpLeftIcon v-if="!getWinner || getWinner === id0" class="h-10 w-10 text-green-600"/>
        <ArrowDownLeftIcon v-else class="h-10 w-10 text-red-600"/>
      </Button>

      <Button @click="doReset">
        <ArrowPathIcon class="h-10 w-10 text-red-600"/>
      </Button>

      <Button
          :disabled="getWinner"
          @click="onRank(id0, id1)"
      >
        <ArrowUpRightIcon v-if="!getWinner || getWinner === id1" class="h-10 w-10 text-green-600"/>
        <ArrowDownRightIcon v-else class="h-10 w-10 text-red-600"/>
      </Button>

    </div>
  </Floater>
</template>

<script>
import {
  ArrowDownLeftIcon,
  ArrowDownRightIcon,
  ArrowPathIcon,
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  ArrowUpLeftIcon,
  ArrowUpRightIcon
} from "@heroicons/vue/24/outline"

import Floater from "@/components/atoms/Floater.vue"
import Button from "@/components/atoms/Button.vue"


export default {
  name: "ArenaRanking",
  components: {
    ArrowDownLeftIcon, ArrowUpLeftIcon, ArrowDownRightIcon, ArrowPathIcon, ArrowUpRightIcon,
    ArrowTrendingUpIcon,
    ArrowTrendingDownIcon,
    Button,
    Floater,
  },
  props: {
    id0: {
      type: String,
      required: true,
    },
    id1: {
      type: String,
      required: true,
    },
    getWinner: {
      type: String,
      required: true,
    },
    onRank: {
      type: Function,
      required: true,
    },
    doReset: {
      type: Function,
      required: true,
    },
  }
}
</script>
