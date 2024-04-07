<template>
  <nav class="py-4 px-2">
    <div class="flex flex-col sm:flex-row justify-center sm:justify-between gap-4">
      <a href="https://www.twon-project.eu/" target="_blank">
        <Caption>TWON - TWin of Online Social Networks</Caption>
      </a>
      <a href="https://github.com/simon-muenker/OpenLLMChat" target="_blank">
        <Caption>Github</Caption>
      </a>
      <a href="https://www.linkedin.com/in/simon-muenker" target="_blank">
        <Caption>Simon Münker, University of Trier</Caption>
      </a>
    </div>
  </nav>
</template>
<script>

import Caption from "@/components/typography/Caption.vue"

export default {
  name: 'AppFooter',
  components: {
    Caption
  },
}
</script>