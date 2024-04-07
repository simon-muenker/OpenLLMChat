<template>
  <div class="grid grid-cols-2 gap-8">
    <template v-for="item in options">
      <input :id=item.id v-model="picked" :value=item.id class="hidden" type=radio @change="onSelect">
      <label
          :class="[item.id === this.active ? '!bg-emerald-100' : '']"
          :for=item.id
          class="cursor-pointer text-sm rounded-xl bg-white shadow-xl p-3 transition-colors"
      >
        <span class="font-bold">{{ item.name }}</span>&nbsp;
        <span>({{ item.type }}, {{ item.params }})</span><br>
        <span>{{ item.author }}</span>&nbsp;
        <span>({{ item.origin }})</span>&nbsp;
        <a class="underline underline-offset-2" :href=item.moreLink target="_blank">more</a>
      </label>
    </template>
  </div>
</template>
<script>

export default {
  props: {
    options: Array,
    active: String,
  },
  emits: ['onSelect'],
  data() {
    return {
      picked: this.active
    }
  },
  methods: {
    onSelect() {
      this.$emit('onSelect', this.picked);
    }
  }

}
</script>
