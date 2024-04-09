<template>
  <div class="bg-slate-100 shadow-inner">

    <Container class="pt-12 min-h-svh">

      <Headline>OpenLLMChat</Headline>
      <span class="h-16"></span>

      <ChatHistory/>

      <span v-if="getChatStore().isLoading" class="text-6xl font-bold text-slate-500 text-center animate-pulse">...</span>
      <span class="h-8"></span>

      <ChatExamples v-if="getChatStore().isHistoryEmpty"/>

      <span class="h-0.5"></span>

      <ChatInteraction/>

      <AppFooter/>

    </Container>

    <div class="fixed z-40 bottom-4 w-full">
      <Container>
        <MenuToggle @on-toggle="isSidebarOpen = !isSidebarOpen"/>
      </Container>
    </div>

    <MenuContainer :is-open="isSidebarOpen">
      <Container class="pt-12 pb-32 lg:max-w-[1440px] min-h-svh">

        <Headline>configure</Headline>
        <span class="h-16"></span>

        <div class="flex flex-col lg:flex-row gap-8">
          <div>
            <SubHeadline>select a model</SubHeadline>
            <div class="h-8"></div>
            <ConfigureModel/>
          </div>
          <div>
            <SubHeadline>select a persona</SubHeadline>
            <div class="h-8"></div>
            <ConfigurePersona/>
          </div>
        </div>

      </Container>
    </MenuContainer>

  </div>
</template>

<script>
import {getChatStore} from "@/stores/chat"

import Container from "@/components/atoms/Container.vue"
import Textarea from "@/components/atoms/Textarea.vue"
import MenuToggle from "@/components/atoms/MenuToggle.vue"
import MenuContainer from "@/components/atoms/MenuContainer.vue"

import Headline from "@/components/typography/Headline.vue"
import SubHeadline from "@/components/typography/SubHeadline.vue"

import ChatHistory from "@/components/ChatHistory.vue"
import ChatExamples from "@/components/ChatExamples.vue"
import ChatInteraction from "@/components/ChatInteraction.vue"
import AppFooter from "@/components/AppFooter.vue"

import ConfigureModel from "@/components/ConfigureModel.vue"
import ConfigurePersona from "@/components/ConfigurePersona.vue"


export default {
  name: 'App',
  components: {
    Container,
    Textarea,
    MenuToggle,
    MenuContainer,
    Headline,
    SubHeadline,
    ChatHistory,
    ChatExamples,
    ChatInteraction,
    AppFooter,
    ConfigurePersona,
    ConfigureModel,
  },
  data() {
    return {
      isSidebarOpen: false
    }
  },
  methods: {
    getChatStore
  }
}
</script>
