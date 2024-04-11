<template>
  <div class="bg-slate-100 shadow-inner">

    <Container v-if="!isConfigureOpen" class="pt-12 pb-24 min-h-svh">
      <Chat/>
    </Container>

    <Container v-if="isConfigureOpen" class="pt-12 pb-24 lg:max-w-[1440px] min-h-svh">
      <Configure/>
    </Container>

    <div class="fixed z-40 bottom-4 w-full">
      <Container>
        <AppMenu @on-toggle="isConfigureOpen = !isConfigureOpen"/>
      </Container>
    </div>

  </div>
</template>

<script>
import {getConfigStore} from "@/stores/config"

import Container from "@/components/atoms/Container.vue"

import AppMenu from "@/components/AppMenu.vue"

import Chat from "@/partials/chat.vue"
import Configure from "@/partials/configure.vue"


export default {
  name: 'App',
  components: {
    Container,
    AppMenu,
    Chat,
    Configure,
  },
  data() {
    return {
      isConfigureOpen: false
    }
  },
  mounted() {
    getConfigStore().init()
  }
}
</script>
