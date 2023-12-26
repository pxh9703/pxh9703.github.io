<template>
  <ElConfigProvider :locale="zhCN">
    <RouterView />
  </ElConfigProvider>
</template>

<script setup>
import zhCN from 'element-plus/es/locale/lang/zh-cn'
</script>

<style lang="scss" scoped></style>
