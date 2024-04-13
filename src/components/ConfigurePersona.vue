<template>
  <form class="grid grid-cols-1 gap-4">
    <template v-for="item in getAppStore().getPersonas">
      <label class="cursor-pointer">
        <input
            :value=item.id
            class="hidden"
            type=radio
            @change="event => {setActive(event.target.value)}"
        >
        <Floater
            :class="[getActive && item.id === getActive.id ? '!border-green-400' : '']"
            class="pr-1 sm:pr-3 border-2 border-r-8 border-transparent"
        >
          <div class="flex gap-2 w-fit">
            <div class="shrink-0 text-2xl h-8 w-8 text-center leading-tight select-none">
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
  </form>
</template>
<script>
import {getAppStore} from "@/stores/app"

import Caption from "@/components/typography/Caption.vue"
import Floater from "@/components/atoms/Floater.vue"

import TextExtraBold from "@/components/typography/TextExtraBold.vue"

export default {
  name: "ConfigurePersona",
  components: {
    TextExtraBold,
    Caption,
    Floater
  },
  props: {
    setActive: Function,
    getActive: Object
  },
  methods: {
    getAppStore,
  }
}
</script>
