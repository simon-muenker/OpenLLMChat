<template>
  <div class="flex flex-col gap-8">
    <template v-for="item in getParsedMessages">

      <div class="flex gap-4">

        <div class="shrink-0 text-3xl w-10 text-center leading-tight select-none">
          {{ item.icon }}
        </div>

        <div>
          <TextExtraBold v-if="item.name === 'User'">{{ item.name }}</TextExtraBold>
          <TextBold v-else>{{ item.name }}</TextBold>
          <Caption v-if="item.name !== 'User'" class="block">{{ item.model }}</Caption>
          <Text class="markdown-message pt-2 block" v-html="item.text"/>
          <Caption v-if="item.name !== 'User'" class="block">
            id:<a :href="`https://inf.cl.uni-trier.de/responses/${item.id}`" target="_blank">{{ item.id }}</a>
          </Caption>
        </div>

        <div class="flex items-end">
          <ChatMessagesFeedback v-if="item.id" :id="item.id" :feedback="item.feedback"/>
        </div>

      </div>

    </template>
  </div>
</template>

<script>
import {marked} from "marked"
import {ArrowTrendingDownIcon, ArrowTrendingUpIcon} from "@heroicons/vue/24/outline"

import {getChatStore} from "@/stores/chat"

import Floater from "@/components/atoms/Floater.vue"
import Button from "@/components/atoms/Button.vue"

import Text from "@/components/typography/Text.vue"
import TextBold from "@/components/typography/TextBold.vue"
import TextExtraBold from "@/components/typography/TextExtraBold.vue"
import Caption from "@/components/typography/Caption.vue"

import ChatMessagesFeedback from "@/components/ChatMessagesFeedback.vue"


export default {
  name: "ChatMessages",
  components: {
    ArrowTrendingUpIcon,
    ArrowTrendingDownIcon,
    Button,
    Floater,
    Text,
    TextBold,
    TextExtraBold,
    Caption,
    ChatMessagesFeedback,

  },
  props: {
    messages: Array,
  },
  computed: {
    getParsedMessages() {
      return this.messages.map((item) => {
        item.text = marked.parse(item.text)
        return item
      })
    },
  }
}
</script>
