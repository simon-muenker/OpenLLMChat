<template>

  <Container>
    <Headline>OpenLLMArena</Headline>
    <span class="h-16"></span>
  </Container>

  <AppConfigure v-if="!getArenaStore().isConfigured"/>

  <template v-else>

    <div class="grid grid-cols-2 mx-auto">
        <ChatMessages :messages="getArenaStore().getAgents[0].messages"/>
      <ChatMessages :messages="getArenaStore().getAgents[1].messages"/>
    </div>

    <span class="h-8"></span>

    <Loader v-if="getArenaStore().isLoading"/>

    <div class="flex flex-col items-center" v-if="getArenaStore().isSubmitted && !getArenaStore().isLoading">
      <Floater>
        <div class="flex gap-4">
          <Button
              :disabled="getArenaStore().hasFeedback"
              @click="getArenaStore().postUserRanking(getArenaStore().getAgents[0].messages[1].id, getArenaStore().getAgents[1].messages[1].id)"
          >
            <ArrowUpLeftIcon class="h-10 w-10 text-green-600 transition-all"/>
          </Button>
          <Button @click="getArenaStore().reset">
            <ArrowPathIcon class="h-10 w-10 text-red-600"/>
          </Button>
          <Button
              :disabled="getArenaStore().hasFeedback"
              @click="getArenaStore().postUserRanking(getArenaStore().getAgents[1].messages[1].id, getArenaStore().getAgents[0].messages[1].id)"
          >
            <ArrowUpRightIcon class="h-10 w-10 text-green-600 transition-all"/>
          </Button>
        </div>
      </Floater>
    </div>

    <Container>

      <template v-if="!getArenaStore().isSubmitted">
        <ChatExamples
            :click-message="(message) => {getArenaStore().setUserTyping(message); getArenaStore().postUserMessage()}"
        />

        <span class="h-0.5"></span>

        <ChatInteraction
            :canSubmit="getArenaStore().canUserSubmit"
            :do-reset="getArenaStore().reset"
            :get-typing="getArenaStore().getUserTyping"
            :set-typing="getArenaStore().setUserTyping"
            :submit-message="getArenaStore().postUserMessage"
        />
      </template>

      <AppFooter/>

    </Container>

  </template>

</template>
<script>
import Headline from "@/components/typography/Headline.vue"

import ChatMessages from "@/components/ChatMessages.vue"
import ChatExamples from "@/components/ChatExamples.vue"
import ChatInteraction from "@/components/ChatInteraction.vue"

import AppFooter from "@/components/AppFooter.vue"
import SubHeadline from "@/components/typography/SubHeadline.vue"
import Container from "@/components/atoms/Container.vue"
import AppConfigure from "@/components/AppConfigure.vue"
import Loader from "@/components/atoms/Loader.vue"
import {getArenaStore} from "@/stores/arena";
import {ArrowPathIcon, ArrowTrendingUpIcon, ArrowUpLeftIcon, ArrowUpRightIcon} from "@heroicons/vue/24/outline";
import Floater from "@/components/atoms/Floater.vue";
import Button from "@/components/atoms/Button.vue";


export default {
  name: 'Arena',
  components: {
    ArrowPathIcon, Button, ArrowUpLeftIcon,
    ArrowUpRightIcon,
    Floater,
    ArrowTrendingUpIcon,
    Loader,
    SubHeadline,
    Headline,
    ChatMessages,
    ChatExamples,
    ChatInteraction,
    AppFooter,
    Container,
    AppConfigure
  },
  methods: {
    getArenaStore,
  }
}
</script>