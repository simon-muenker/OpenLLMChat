<template>
  <nav class="flex flex-row justify-evenly items-center gap-4 mx-auto w-full">
    <Button v-if="!getAppStore().isConfigureOpen" @click="getAppStore().switchInteractType">
      <Floater>
        <ChatBubbleBottomCenterTextIcon v-if="getAppStore().getinteractType === 'arena'" class="h-8 w-8"/>
        <ArrowsUpDownIcon v-if="getAppStore().getinteractType === 'chat'" class="h-8 w-8"/>
      </Floater>
    </Button>
    <Button v-if="canOpenConfig" @click="getAppStore().toggleConfigureOpen">
      <Floater>
        <CogIcon v-if="!getAppStore().isConfigureOpen" class="h-8 w-8"/>
        <XMarkIcon v-if="getAppStore().isConfigureOpen" class="h-8 w-8"/>
      </Floater>
    </Button>
  </nav>
</template>
<script>
import {ArrowsUpDownIcon, ChatBubbleBottomCenterTextIcon, CogIcon, XMarkIcon} from "@heroicons/vue/24/outline"

import {getAppStore} from "@/stores/app"

import Button from "@/components/atoms/Button.vue"
import Floater from "@/components/atoms/Floater.vue"
import {getChatStore} from "@/stores/chat";
import {getArenaStore} from "@/stores/arena";

export default {
  name: 'AppMenu',
  components: {
    CogIcon,
    XMarkIcon,
    ChatBubbleBottomCenterTextIcon,
    ArrowsUpDownIcon,
    Button,
    Floater,
  },
  computed: {
    canOpenConfig() {
      return (getChatStore().isConfigured && getAppStore().getinteractType === 'chat') ||
          (getArenaStore().isConfigured && getAppStore().getinteractType === 'arena')
    }
  },
  methods: {
    getChatStore,
    getAppStore,
  }
}
</script>