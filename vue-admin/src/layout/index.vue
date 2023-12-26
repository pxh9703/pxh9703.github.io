<template>
  <div :class="['layout-container', isCollapse ? 'active' : '']">
    <slideBar />
    <div class="main-view">
      <div class="navbar">
        <bread-nav></bread-nav>
        <userInfo></userInfo>
      </div>
      <section class="main-section-container">
        <appMain />
      </section>
    </div>
  </div>
</template>

<script setup>
import breadNav from './components/breadNav.vue'
import slideBar from './components/slidebar/index.vue'
import appMain from './components/appMain.vue'
import userInfo from './components/userInfo.vue'
import { useSettings } from '@/stores/settings'

const settingStore = useSettings()
const isCollapse = computed(() => settingStore.isCollapse)
</script>

<style lang="scss" scoped>
@import '@/styles/dyStyles/layout.scss';
</style>
