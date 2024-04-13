<template>
  <div class="bg-slate-100 shadow-inner">


    <Container v-if="getAppStore().getinteractType === 'chat' & !getAppStore().isConfigureOpen" class="pt-12 pb-24  lg:max-w-[1440px] min-h-svh">
      <Chat/>
    </Container>

    <Container v-if="getAppStore().getinteractType === 'arena' & !getAppStore().isConfigureOpen" class="pt-12 pb-24 lg:max-w-[1440px] min-h-svh">
      <Arena />
    </Container>

    <Container v-if="getAppStore().isConfigureOpen" class="pt-12 pb-24 lg:max-w-[1440px] min-h-svh">
      <Container>
        <Headline>configure</Headline>
        <span class="h-16"></span>
      </Container>

      <Configure/>
    </Container>

    <div class="fixed z-40 bottom-4 w-full">
      <Container class="w-1/3">
        <AppMenu/>
      </Container>
    </div>

  </div>
</template>

<script>
import {getAppStore} from "@/stores/app"
import {getChatStore} from "@/stores/chat"

import Container from "@/components/atoms/Container.vue"

import AppMenu from "@/components/AppMenu.vue"

import Chat from "@/partials/chat.vue"
import Configure from "@/components/AppConfigure.vue"
import Arena from "@/partials/arena.vue"
import Headline from "@/components/typography/Headline.vue";


export default {
  name: 'App',
  methods: {getChatStore, getAppStore},
  components: {
    Headline,
    Arena,
    Container,
    AppMenu,
    Chat,
    Configure,
  },
  data() {
    return {
      type: 'chat',
      isConfigureOpen: false
    }
  },
  mounted() {
    getAppStore().init()
  }
}
</script>
