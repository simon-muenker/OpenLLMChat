<template>
  <div class="flex flex-col gap-3">
    <template v-for="item in parsedMessages">
      <div class="flex gap-3 w-fit bg-white">
        <div class="shrink-0 text-3xl h-12 w-12 text-center leading-tight">
          {{ item.icon }}
        </div>
        <div>
          <span class="block font-bold text-slate-500">{{ item.name }}</span>
          <span class="text-slate-700 leading-relaxed" v-html="item.text"></span>
        </div>
      </div>

      <div class="h-1 bg-slate-700 w-1/3 -ml-3 my-2"></div>
    </template>

    <span v-if="isLoading" class="text-6xl font-bold text-slate-500 text-center animate-pulse">...</span>
  </div>
</template>

<script>
import {marked} from "marked"

export default {
  name: "History",
  props: {
    messages: {
      type: Array,
      required: true
    },
    isLoading: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    parsedMessages() {
      return this.messages.map((item) => {
        item.text = marked.parse(item.text)
        return item
      })
    },
  }
}
</script>