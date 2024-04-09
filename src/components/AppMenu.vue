<template>
  <nav class="flex flex-row justify-evenly items-center gap-4 mx-auto w-full">
    <Button @click="onToggle">
      <Floater>
        <CogIcon v-if="!switched" class="h-8 w-8"/>
        <XMarkIcon v-if="switched" class="h-8 w-8"/>
      </Floater>
    </Button>
  </nav>
</template>
<script>
import {CogIcon, XMarkIcon} from "@heroicons/vue/24/outline"
import Button from "@/components/atoms/Button.vue"
import Floater from "@/components/atoms/Floater.vue"

export default {
  name: 'AppMenu',
  components: {
    Button,
    Floater,
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