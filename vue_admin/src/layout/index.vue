import { RouterView } from 'vue-router';
<template>
  <div :class="['layout_box', isCollapse ? 'active' : '']">
    <index></index>
    <div class="right_content">
      <div class="navbar">
        <bread-nav></bread-nav>
        <userIfo></userIfo>
      </div>
      <section class="min-sction">
        <appMin></appMin>
      </section>
    </div>
  </div>
</template>

<script setup>
import breadNav from './components/breadNav.vue'
import index from './components/slidebar/index.vue'
import appMin from './components/appMin.vue'
import userIfo from './components/userIfo.vue'
import { useSettings } from '@/stores/settings'

const settingStore = useSettings()
const isCollapse = computed(() => settingStore.isCollapse)
// console.log(isCollapse)
</script>

<style lang="scss" scoped>
@import '@/styles/dyStales/layout.scss';
</style>
