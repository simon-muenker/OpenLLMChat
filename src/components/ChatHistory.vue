<template>
  <div class="flex flex-col gap-8">
    <template v-for="item in getParsedMessages">

      <div class="flex gap-4">

        <div class="shrink-0 text-3xl text-center leading-tight">
          {{ item.icon }}
        </div>

        <div>
          <TextExtraBold class="block" v-if="item.name === 'User'">{{ item.name }}</TextExtraBold>
          <TextBold class="block" v-else>{{ item.name }}</TextBold>
          <Text v-html="item.text"/>
        </div>

        <div class="flex items-end">
          <Floater v-if="item.name === 'Model'" class="!p-2 -mb-8">
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

import Text from "@/components/typography/Text.vue"
import TextBold from "@/components/typography/TextBold.vue"
import Floater from "@/components/atoms/Floater.vue"
import Button from "@/components/atoms/Button.vue"
import TextExtraBold from "@/components/typography/TextExtraBold.vue";


export default {
  name: "ChatHistory",
  components: {
    TextExtraBold,
    Button,
    Floater,
    TextBold,
    Text,
    ArrowTrendingUpIcon,
    ArrowTrendingDownIcon
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
