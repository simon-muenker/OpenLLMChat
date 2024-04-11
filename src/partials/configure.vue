<template>
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
</template>
<script>
import Headline from "@/components/typography/Headline.vue"
import SubHeadline from "@/components/typography/SubHeadline.vue"

import ConfigureModel from "@/components/ConfigureModel.vue"
import ConfigurePersona from "@/components/ConfigurePersona.vue"


export default {
  name: 'Configure',
  components: {
    Headline,
    SubHeadline,
    ConfigureModel,
    ConfigurePersona,
  }
}
</script>