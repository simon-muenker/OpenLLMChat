<template>
  <div class="container max-w-[640px] mx-auto px-3">
    <div class="flex flex-col gap-3">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Container'
}
</script>