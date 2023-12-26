<template>
  <div>
    <div class="slidbar">
      <ElScrollbar class="w-full">
        <ElMenu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          :default-active="activeMenu"
          text-color="#fff"
          :router="false"
          :collapse="isCollapse"
          :collapse-transition="false"
          unique-opened
          @select="handleSelect"
        >
          <ElSubMenu index="/permission">
            <template #title>
              <ElIcon>
                <Setting />
              </ElIcon>
              <span>权限管理</span>
            </template>
            <ElMenuItem index="/users">用户管理</ElMenuItem>
            <ElMenuItem index="/roles">角色管理</ElMenuItem>
            <ElMenuItem index="/menus">路由管理</ElMenuItem>
          </ElSubMenu>
          <ElMenuItem index="/zyzy">角色管理</ElMenuItem>
        </ElMenu>
      </ElScrollbar>
    </div>
  </div>
</template>

<script setup>
import { useSettings } from '@/stores/settings'

const router = useRouter()
const settingStore = useSettings()
const isCollapse = computed(() => settingStore.isCollapse)
const activeMenu = computed(() => settingStore.activeMenu)
const handleSelect = (index) => {
  settingStore.setActiveMenu(index)
  router.push(index)
}
</script>

<style lang="scss" scoped></style>
