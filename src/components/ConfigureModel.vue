<template>
  <form class="grid grid-cols-2 gap-4">
    <template v-for="item in getAppStore().getModels">
      <label class="cursor-pointer">
        <input
            :value=item.id
            class="hidden"
            type=radio
            @change="(event) => {setActive(event.target.value)}"
        >
        <Floater
            class="pr-1 sm:pr-3 border-2 border-r-8 border-transparent"
            :class="[getActive && item.id === getActive.id ? '!border-green-400' : '']"
        >
          <TextExtraBold>{{ item.name }}</TextExtraBold>&nbsp;
          <Caption class="whitespace-nowrap">{{ item.type }}, {{ item.params }}</Caption>
          <br>
          <Text>{{ item.author }}</Text>&nbsp;
          <Caption>{{ item.origin }}</Caption>&nbsp;
          <Caption><a :href=item.more_link class="underline underline-offset-2" target="_blank">more</a></Caption>
        </Floater>
      </label>
    </template>
  </form>
</template>
<script>
import {getAppStore} from "@/stores/app"
import {getChatStore} from "@/stores/chat"

import Floater from "@/components/atoms/Floater.vue"

import Text from "@/components/typography/Text.vue"
import TextExtraBold from "@/components/typography/TextExtraBold.vue"
import Caption from "@/components/typography/Caption.vue"


export default {
  name: "ConfigureModel",
  components: {
    TextExtraBold,
    Text,
    Caption,
    Floater
  },
  props: {
    setActive: Function,
    getActive: Object
  },
  methods: {
    getChatStore,
    getAppStore,
  }
}
</script>
