<template>
  <nav class="fixed top-0 w-full border-b-4 border-slate-800 bg-white z-40">
    <Container>
      <div class="flex flex-row justify-between items-center gap-4">
        <ChatBubbleLeftRightIcon class="h-8 w-8 sm:h-10 sm:w-10"/>
        <h1 class="text-slate-700 sm:text-2xl font-bold">OpenLLMChat</h1>
        <button
            class="text-slate-200 text-sm tracking-wider leading-none bg-slate-800 p-4 sm:p-6"
            @click="onMenuToggle"
        >
          menu
        </button>
      </div>
    </Container>
  </nav>
</template>
<script>
import Container from "@/components/atoms/Container.vue"
import {ChatBubbleLeftRightIcon} from "@heroicons/vue/24/outline"

export default {
  name: 'Topbar',
  components: {
    Container,
    ChatBubbleLeftRightIcon
  },
  methods: {
    onMenuToggle() {
      this.$emit('onMenuToggle');
    }
  }
}
</script>