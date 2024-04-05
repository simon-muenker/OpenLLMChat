<template>
  <button
      :class="[
          'font-medium sm:text-lg text-white',
          'px-4 py-2 rounded-lg bg-sky-500',
          'hover:opacity-60',
          'disabled:opacity-25 disabled:cursor-not-allowed',
          'transition-opacity',
      ]"
  >
    <slot></slot>
  </button>
</template>