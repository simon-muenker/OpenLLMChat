<template>
  <div class="grid grid-cols-2 gap-4">
    <template v-for="item in getConfigStore().getAgent.model.selection">
      <input
          :id=item.id
          :value=item.id
          class="hidden"
          type=radio
          @change="event => {getConfigStore().setActiveModel(event.target.value)}"
      >
      <label :for=item.id class="cursor-pointer">
        <Floater
            class="pr-1 sm:pr-3 border-2 border-r-8 border-transparent"
            :class="[item.id === getConfigStore().getActiveModel ? '!border-green-400' : '']"
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
  </div>
</template>
<script>
import {getConfigStore} from "@/stores/config"

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
  methods: {
    getConfigStore,
  }
}
</script>
