<template>
  <div class="grid grid-cols-2 gap-8">
    <template v-for="item in getConfigStore().getAgent.model.selection">
      <input
          :id=item.id
          :value=item.id
          class="hidden"
          type=radio
          @change="event => {getConfigStore().setActiveAgentModel(event.target.value)}"
      >
      <label
          :class="[item.id === getConfigStore().getAgent.model.active ? '!bg-emerald-100' : '']"
          :for=item.id
          class="cursor-pointer text-sm rounded-xl bg-white shadow-xl p-3 transition-colors"
      >
        <span class="font-bold">{{ item.name }}</span>&nbsp;
        <Caption>({{ item.type }}, {{ item.params }})</Caption><br>
        <span>{{ item.author }}</span>&nbsp;
        <span>({{ item.origin }})</span>&nbsp;
        <Caption><a :href=item.moreLink class="underline underline-offset-2" target="_blank">more</a></Caption>
      </label>
    </template>
  </div>
</template>
<script>

import {getConfigStore} from "@/stores/config"
import Caption from "@/components/typography/Caption.vue"

export default {
  name: "ConfigureModel",
  components: {
    Caption
  },
  methods: {
    getConfigStore,
  }
}
</script>
