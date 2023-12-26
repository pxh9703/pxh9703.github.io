<template>
  <component :is="Type" v-bind="propsLink(to)">
    <slot></slot>
  </component>
</template>

<script setup>
const { to } = defineProps({
  to: {
    type: [String, Object],
    default: '',
    required: true
  }
})
const { isHttpUrl } = useUtils()
const propsLink = (to) => {
  if (isHttpUrl(to.frameSrc) && to.frameSrc) {
    return {
      href: to.frameSrc,
      target: to.frameSrcType,
      class: 'flex items-center justify-between w-full'
    }
  } else {
    return {
      to: to,
      class: 'flex items-center justify-between w-full'
    }
  }
}

const Type = computed(() => {
  if (isHttpUrl(to.frameSrc) && to.frameSrc) {
    return 'a'
  } else {
    return 'router-link'
  }
})
</script>

<style lang="scss" scoped></style>
