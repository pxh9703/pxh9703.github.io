<template>
  <div class="Bread_crumb">
    <!-- 导航折叠控件 -->
    <div class="slidebar-controll">
      <div v-if="!isCollapse" @click="store.setIsCollapse(true)">
        <el-icon size="24"><ArrowLeft /></el-icon>
      </div>
      <div v-else>
        <el-icon size="24" @click="store.setIsCollapse(false)"><ArrowRight /></el-icon>
      </div>
    </div>
    <div>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item>
          <router-link to="/">后台首页</router-link>
        </el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">
          <el-link v-if="index !== breadcrumbList.length - 1" :to="item.path">
            {{ item.meta.title || item.name }}
          </el-link>
          <span v-else>{{ item.meta.title || item.name }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>
<script setup>
import { useSettings } from '@/stores/settings'
import { ArrowRight } from '@element-plus/icons-vue'
// 引入路由
const route = useRoute()
const store = useSettings()

const isCollapse = computed(() => store.isCollapse)

const breadcrumbList = ref([])
const initBreadcrumbList = () => {
  breadcrumbList.value = route.matched // matched是一个数组，里面存放着当前路由的所有信息,包括父路由,完整的路径信息
}

// 观察者,watch监听路由变化,当路由发生变化时,重新初始化面包屑导航
watch(
  route,
  () => {
    initBreadcrumbList()
  },
  { deep: true, immediate: true } // deep: true 深度监听, immediate: true 立即执行
)
</script>

<style lang="scss" scoped>
.Bread_crumb,
.slidebar-controll {
  @apply flex items-center;
}
</style>
