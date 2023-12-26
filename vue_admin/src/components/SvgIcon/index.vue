<template>
  <svg aria-hidden="true" :class="['icon', className]" :width="props.size" :height="props.size">
    <use :xlink:href="symbolId" :fill="props.color" :style="{ color: props.color }" />
  </svg>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#000'
  },
  size: {
    type: String,
    default: '1em'
  },
  className: {
    type: String,
    default: 'icon'
  }
})

const symbolId = computed(() => `#${props.prefix}-${props.name}`)
</script>

<style>
.icon {
  display: inline-block;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
</style>
