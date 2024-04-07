<template>
  <nav class="flex flex-row justify-evenly items-center gap-4 mx-auto w-full">
    <div class="rounded-xl bg-white shadow-xl p-3 hover:bg-slate-100 hover:drop-shadow-xl transition-all"
         @click="onToggle">
      <CogIcon v-if="!switched" class="h-8 w-8"/>
      <XMarkIcon v-if="switched" class="h-8 w-8"/>
    </div>
  </nav>
</template>
<script>
import {CogIcon, XMarkIcon} from "@heroicons/vue/24/outline"

export default {
  name: 'MenuToggle',
  components: {
    CogIcon,
    XMarkIcon,
  },
  data() {
    return {
      switched: false
    }
  },
  methods: {
    onToggle() {
      this.$emit('onToggle')
      this.switched = !this.switched
    }
  }
}
</script>