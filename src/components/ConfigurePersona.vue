<template>
  <div class="grid grid-cols-1 gap-4">
    <template v-for="item in getConfigStore().getAgent.persona.selection">
      <input
          :id=item.id
          :value=item.id
          class="hidden"
          type=radio
          @change="event => {getConfigStore().setActivePersona(event.target.value)}"
      >
      <label :for=item.id class="cursor-pointer">
        <Floater
            class="pr-1 sm:pr-3 border-2 border-r-8 border-transparent"
            :class="[item.id === getConfigStore().getActivePersona ? '!border-green-400' : '']"
        >
          <div class="flex gap-2 w-fit">
            <div class="shrink-0 text-2xl h-8 w-8 text-center leading-tight">
              {{ item.icon }}
            </div>
            <div>
              <TextExtraBold class="block">{{ item.name }}</TextExtraBold>
              <Caption>{{ item.description }}</Caption>&nbsp;
            </div>
          </div>
        </Floater>
      </label>
    </template>
  </div>
</template>
<script>
import Caption from "@/components/typography/Caption.vue"
import Floater from "@/components/atoms/Floater.vue"

import {getConfigStore} from "@/stores/config"
import TextExtraBold from "@/components/typography/TextExtraBold.vue"

export default {
  name: "ConfigurePersona",
  components: {
    TextExtraBold,
    Caption,
    Floater
  },
  methods: {
    getConfigStore,
  }
}
</script>
