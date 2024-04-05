<template>
  <button
      :class="[
          'font-medium sm:text-lg text-slate-700 px-2 py-1 border-2 border-slate-700',
          'hover:opacity-60',
          'disabled:opacity-40 disabled:cursor-not-allowed',
          'transition-opacity',
      ]"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'Button'
}
</script>