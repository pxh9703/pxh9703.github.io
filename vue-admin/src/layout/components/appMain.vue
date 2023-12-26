<template>
  <div class="main-show-view">
    <div class="p-[20px]">
      <el-scrollbar>
        <!-- 滚动条 -->
        <div class="p-4">
          <router-view v-slot="{ Component, route }">
            <!-- 修改显示方案为 Component -->
            <keep-alive :max="20">
              <component :is="Component" :key="route.fullPath" />
            </keep-alive>
          </router-view>
        </div>
      </el-scrollbar>
    </div>
    <!-- 返回顶部 -->
    <ElBacktop target=".main-show-view" :visibility-height="200" />
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.main-show-view {
  width: 100%;
  height: calc(100vh - 70px);
  overflow: auto;
}
</style>
