<template>
  <div class="bg-slate-100 shadow-inner">

    <Container fill-height is-large>

      <template v-if="getAppStore().isConfigureOpen">
        <AppHeader headline="configure"/>
        <Configure/>
      </template>

      <template v-if="!getAppStore().isConfigureOpen">
        <Chat v-if="getAppStore().getinteractType === 'chat'"/>
        <Arena v-if="getAppStore().getinteractType === 'arena'"/>
      </template>

    </Container>

    <AppFooter/>
    <AppMenu/>

  </div>
</template>

<script>
import {getAppStore} from "@/stores/app"

import Container from "@/components/atoms/Container.vue"

import AppHeader from "@/components/AppHeader.vue"
import AppMenu from "@/components/AppMenu.vue"
import AppFooter from "@/components/AppFooter.vue"

import Chat from "@/partials/chat.vue"
import Arena from "@/partials/arena.vue"
import Configure from "@/components/AppConfigure.vue"


export default {
  name: 'App',
  components: {
    Container,
    AppHeader,
    AppMenu,
    AppFooter,
    Chat,
    Arena,
    Configure,
  },
  mounted() {
    getAppStore().init()
  },
  methods: {
    getAppStore
  }
}
</script>
