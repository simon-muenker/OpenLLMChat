<template>
  <div class="grid grid-cols-2 gap-4">
    <template v-for="item in options">
      <input :id=item v-model="picked" :value=item class="hidden" type=radio @change="onSelect">
      <label
          :class="[item === this.active ? 'bg-emerald-100' : '']"
          :for=item
          class="cursor-pointer text-sm text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition-all"
      >
        {{ item }}
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
