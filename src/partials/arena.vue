<template>

  <AppHeader headline="OpenLLMArena"/>

  <AppConfigure v-if="!getArenaStore().isConfigured"/>

  <template v-else>

    <Container>
      <ChatMessages :messages="getArenaStore().getAgents[0].messages.slice(0, 1)" class="sm:self-center"/>
    </Container>

    <Spacer/>

    <div class="grid grid-cols-1 sm:grid-cols-2 mx-auto gap-4">
      <Container v-for="i in Array(2).keys()" :key="i">
        <ChatMessages :messages="getArenaStore().getAgents[i].messages.slice(1)"/>
      </Container>
    </div>

    <Spacer/>

    <Loader v-if="getArenaStore().isLoading"/>

    <Spacer/>

    <div v-if="getArenaStore().isSubmitted && !getArenaStore().isLoading" class="flex flex-col items-center">
      <ArenaRanking
          :do-reset="getArenaStore().reset"
          :get-winner="getArenaStore().getWinner"
          :id0="getArenaStore().getAgents[1].messages[1].id"
          :id1="getArenaStore().getAgents[0].messages[1].id"
          :on-rank="getArenaStore().postUserRanking"
      />
    </div>

    <Container v-if="!getArenaStore().isSubmitted">

      <ChatExamples
          :click-message="(message) => {getArenaStore().setUserTyping(message); getArenaStore().postUserMessage()}"
      />

      <Spacer size="tiny"/>

      <ChatInteraction
          :canSubmit="getArenaStore().canUserSubmit"
          :get-typing="getArenaStore().getUserTyping"
          :set-typing="getArenaStore().setUserTyping"
          :submit-message="getArenaStore().postUserMessage"
      />

    </Container>

  </template>

</template>
<script>
import {getArenaStore} from "@/stores/arena"

import Container from "@/components/atoms/Container.vue"
import Loader from "@/components/atoms/Loader.vue"
import Spacer from "@/components/atoms/Spacer.vue"

import AppHeader from "@/components/AppHeader.vue"
import AppConfigure from "@/components/AppConfigure.vue"

import ChatMessages from "@/components/ChatMessages.vue"
import ChatExamples from "@/components/ChatExamples.vue"
import ChatInteraction from "@/components/ChatInteraction.vue"

import ArenaRanking from "@/components/ArenaRanking.vue"


export default {
  name: 'Arena',
  components: {
    Container,
    Spacer,
    Loader,
    AppHeader,
    AppConfigure,
    ChatMessages,
    ChatExamples,
    ChatInteraction,
    ArenaRanking,
  },
  methods: {
    getArenaStore,
  }
}
</script>