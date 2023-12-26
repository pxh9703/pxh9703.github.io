<template>
  <div class="slibar">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      :default-active="activeMenu"
      text-color="#fff"
      :router="true"
      :collapse="isCollapse"
      :collapse-transition="false"
      unique-opened
      @select="handleSelect"
    >
      <Item v-for="item in menu" :key="item.id" :item="item" />
      <!-- <elicons index="/user">
        <el-icon><document /></el-icon>
        <span>用户</span>
      </elicons/index.vue'
      <el-menu-item index="/role">
        <el-icon><document /></el-icon>
        <span>角色管理</span>
      </el-menu-item>
      <el-menu-item index="/route">
        <el-icon><document /></el-icon>
        <span>路由管理</span>
      </el-menu-item> -->
    </el-menu>
  </div>
</template>

<script setup>
import { useSettings } from '@/stores/settings'
import Item from './item.vue'
import { useAuth } from '@/stores/auth'
const router = useRouter()
const settingStore = useSettings()
const isCollapse = computed(() => settingStore.isCollapse)
const activeMenu = computed(() => settingStore.activeMenu)
const menu = [...useAuth().menu]
const handleSelect = (index) => {
  settingStore.setActiveMenu(index)
  router.push(index)
}
</script>

<style lang="scss" scoped></style>
