<template>
  <div
      :class="[name === 'Bishop' ? 'bg-slate-100' : 'bg-amber-200 ml-auto', '']"
      class="flex gap-3 text-slate-700 rounded-lg p-3 w-fit"
  >
    <div>
      <div class="text-3xl bg-slate-300 rounded-full p-1 h-12 w-12 text-center leading-tight">
        {{ icon }}
      </div>
    </div>
    <div>
    <span class="block font-light text-sm mb-1">
      <span class="font-bold pr-1">{{ name }}</span>
    </span>
      <span >
        {{ text }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    icon: String,
    text: String,
  }
}
</script>