<template>
  <div class="flex flex-row gap-4">
    <Floater v-for="item in getExampleMessages()" class="!p-2">
      <Button
          class="italic text-slate-500 text-sm"
          @click="() => {getChatStore().setUserTyping(item.message); getChatStore().postUserMessage()}"
      >
        {{ item.name }}
      </Button>
    </Floater>
  </div>
</template>
<script>
import {getChatStore, getExampleMessages} from "@/stores/chat"

import Floater from "@/components/atoms/Floater.vue"
import Button from "@/components/atoms/Button.vue"


export default {
  name: 'ChatExamples',
  components: {
    Floater,
    Button,
  },
  methods: {
    getChatStore,
    getExampleMessages
  }
}
</script>