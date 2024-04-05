<template>
  <div class="flex flex-col gap-3">
    <template v-for="item in messages">
      <ChatMessage
          :name="item.name"
          :icon="item.icon"
          :text="item.text"
      />
    </template>
  </div>
</template>

<script>
import ChatMessage from "@/components/ChatMessage.vue"

export default {
  components: {
    ChatMessage
  },
  props: {
    messages: Array
  }
}
</script>