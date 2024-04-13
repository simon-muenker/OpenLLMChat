<template>
  <div class="flex flex-col lg:flex-row gap-8 mx-auto">
    <template v-if="getAppStore().getinteractType === 'arena'">
      <div>
        <SubHeadline>select arena model (#1)</SubHeadline>
        <div class="h-8"></div>
        <ConfigureModel
            :get-active="getArenaStore().getAgents[0].model"
            :set-active="(model) => getArenaStore().setModel(0, model)"
        />
      </div>
      <div>
        <SubHeadline>select arena model (#2)</SubHeadline>
        <div class="h-8"></div>
        <ConfigureModel
            :get-active="getArenaStore().getAgents[1].model"
            :set-active="(model) => getArenaStore().setModel(1, model)"
        />
      </div>
      <div>
        <SubHeadline>select arena persona</SubHeadline>
        <div class="h-8"></div>
        <ConfigurePersona
            :get-active="getArenaStore().getPersona"
            :set-active="getArenaStore().setPersona"
        />
      </div>
    </template>
    <template v-if="getAppStore().getinteractType === 'chat'">
      <div>
        <SubHeadline>select chat model</SubHeadline>
        <div class="h-8"></div>
        <ConfigureModel
            :get-active="getChatStore().getModel"
            :set-active="getChatStore().setModel"
        />
      </div>
      <div>
        <SubHeadline>select chat persona</SubHeadline>
        <div class="h-8"></div>
        <ConfigurePersona
            :get-active="getChatStore().getPersona"
            :set-active="getChatStore().setPersona"
        />
      </div>
    </template>
  </div>
</template>
<script>
import {getAppStore} from "@/stores/app"
import {getChatStore} from "@/stores/chat"

import Headline from "@/components/typography/Headline.vue"
import SubHeadline from "@/components/typography/SubHeadline.vue"

import ConfigureModel from "@/components/ConfigureModel.vue"
import ConfigurePersona from "@/components/ConfigurePersona.vue"
import ChatMessages from "@/components/ChatMessages.vue"
import {getArenaStore} from "@/stores/arena";


export default {
  name: 'Configure',
  methods: {
    getArenaStore,
    getChatStore,
    getAppStore,
  },
  components: {
    ChatMessages,
    Headline,
    SubHeadline,
    ConfigureModel,
    ConfigurePersona,
  }
}
</script>