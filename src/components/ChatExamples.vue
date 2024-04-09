<template>
  <div class="flex flex-row gap-4">

    <Button
        v-for="item in getExampleMessages()"
        @click="() => {getChatStore().setUserTyping(item.message); getChatStore().postUserMessage()}"
    >
      <Floater class="italic text-slate-500 text-sm !p-2">
        {{ item.name }}
      </Floater>
    </Button>
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