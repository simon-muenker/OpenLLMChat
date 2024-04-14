<template>
  <div class="flex flex-col lg:flex-row gap-8 mx-auto">
    <template v-if="getAppStore().getinteractType === 'arena'">
      <div>
        <SubHeadline>select arena model (#1)</SubHeadline>
        <Spacer/>
        <ConfigureModel
            :get-active="getArenaStore().getAgents[0].model"
            :set-active="(model) => getArenaStore().setModel(0, model)"
        />
      </div>
      <div>
        <SubHeadline>select arena model (#2)</SubHeadline>
        <Spacer/>
        <ConfigureModel
            :get-active="getArenaStore().getAgents[1].model"
            :set-active="(model) => getArenaStore().setModel(1, model)"
        />
      </div>
      <div>
        <SubHeadline>select arena persona</SubHeadline>
        <Spacer/>
        <ConfigurePersona
            :get-active="getArenaStore().getPersona"
            :set-active="getArenaStore().setPersona"
        />
      </div>
    </template>
    <template v-if="getAppStore().getinteractType === 'chat'">
      <div>
        <SubHeadline>select chat model</SubHeadline>
        <Spacer/>
        <ConfigureModel
            :get-active="getChatStore().getModel"
            :set-active="getChatStore().setModel"
        />
      </div>
      <div>
        <SubHeadline>select chat persona</SubHeadline>
        <Spacer/>
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
import {getArenaStore} from "@/stores/arena"

import Headline from "@/components/typography/Headline.vue"
import SubHeadline from "@/components/typography/SubHeadline.vue"

import Spacer from "@/components/atoms/Spacer.vue"

import ConfigureModel from "@/components/ConfigureModel.vue"
import ConfigurePersona from "@/components/ConfigurePersona.vue"


export default {
  name: 'AppConfigure',
  components: {
    Headline,
    SubHeadline,
    Spacer,
    ConfigureModel,
    ConfigurePersona,
  },
  methods: {
    getAppStore,
    getChatStore,
    getArenaStore,
  },
}
</script>