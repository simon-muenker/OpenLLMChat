<template>
  <Container>
    <Spacer size="large"></Spacer>
    <Headline>{{ headline }}</Headline>
    <Spacer size="large"></Spacer>
  </Container>
</template>
<script>
import Container from "@/components/atoms/Container.vue"
import Spacer from "@/components/atoms/Spacer.vue"

import Headline from "@/components/typography/Headline.vue"


export default {
  name: 'AppHeader',
  components: {
    Container,
    Spacer,
    Headline,
  },
  props: {
    headline: {
      type: String,
      required: true,
    }
  }
}
</script>