import { RouterView } from 'vue-router';
<template>
  <div class="main_show">
    <ElScrollbar> <RouterView></RouterView></ElScrollbar>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.main_show {
  height: calc(100vh - 70px);
  overflow: auto;
}
</style>
