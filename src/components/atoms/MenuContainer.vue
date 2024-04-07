<template>
  <div
      :class="[{ '!left-0 !opacity-100': isOpen }]"
      class="absolute top-0 overscroll-y-auto -left-full w-full h-auto min-h-full bg-slate-100 bg-opacity-70 backdrop-blur z-10 transition-all"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'MenuContainer',
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    }
  }
}
</script>