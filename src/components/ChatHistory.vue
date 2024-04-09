<template>
  <div class="flex flex-col gap-8">
    <template v-for="item in getParsedMessages">

      <div class="flex gap-4">

        <div class="shrink-0 text-3xl text-center leading-tight">
          {{ item.icon }}
        </div>

        <div>
          <TextExtraBold v-if="item.name === 'User'" class="block">{{ item.name }}</TextExtraBold>
          <TextBold v-else class="block">{{ item.name }}</TextBold>
          <Text v-html="item.text"/>
        </div>

        <div class="flex items-end">
          <Floater v-if="item.name === 'Model'" class="!p-1.5 leading-none -mb-4">
            <Button>
              <ArrowTrendingUpIcon class="h-4 w-4 text-green-600"/>
            </Button>
            <br>
            <Button>
              <ArrowTrendingDownIcon class="h-4 w-4 text-red-600"/>
            </Button>
          </Floater>
        </div>

      </div>

    </template>
  </div>
</template>

<script>
import {marked} from "marked"
import {ArrowTrendingDownIcon, ArrowTrendingUpIcon} from "@heroicons/vue/24/outline"

import {getChatStore} from "@/stores/chat"
import {getConfigStore} from "@/stores/config"

import Floater from "@/components/atoms/Floater.vue"
import Button from "@/components/atoms/Button.vue"

import Text from "@/components/typography/Text.vue"
import TextBold from "@/components/typography/TextBold.vue"
import TextExtraBold from "@/components/typography/TextExtraBold.vue"


export default {
  name: "ChatHistory",
  components: {
    ArrowTrendingUpIcon,
    ArrowTrendingDownIcon,
    Button,
    Floater,
    Text,
    TextBold,
    TextExtraBold,
  },
  computed: {
    getParsedMessages() {
      return getChatStore().getHistory.map((item) => {
        item.text = marked.parse(item.text)
        return item
      })
    },
  },
  methods: {
    getConfigStore,
  }
}
</script>
