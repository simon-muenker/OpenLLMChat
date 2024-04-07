<template>
  <nav class="flex flex-row justify-evenly items-center gap-4 mx-auto w-full">
    <div class="rounded-xl bg-white shadow-xl p-3 hover:bg-slate-100 hover:drop-shadow-xl transition-all"
         @click="onToggle">
      <CogIcon class="h-8 w-8"/>
    </div>
  </nav>
</template>
<script>
import {CogIcon} from "@heroicons/vue/24/outline"

export default {
  name: 'MenuToggle',
  components: {
    CogIcon,
  },
  methods: {
    onToggle() {
      this.$emit('onToggle');
    }
  }
}
</script>