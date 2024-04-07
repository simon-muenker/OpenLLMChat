<template>
  <div class="flex flex-col gap-3">
    <template v-for="item in getParsedMessages">
      <div class="flex gap-3 w-fit">
        <div class="shrink-0 text-3xl h-12 w-12 text-center leading-tight">
          {{ item.icon }}
        </div>
        <div>
          <span class="block font-bold text-slate-500">{{ item.name }}</span>
          <span class="text-slate-600 leading-relaxed" v-html="item.text"></span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import {marked} from "marked"
import {getChatStore} from "@/stores/chat"

export default {
  name: "ChatHistory",
  computed: {
    getParsedMessages() {
      return getChatStore().getItems.map((item) => {
        item.text = marked.parse(item.text)
        return item
      })
    },
  }
}
</script>