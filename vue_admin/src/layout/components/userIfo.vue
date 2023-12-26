<template>
  <div class="userinfo-container">
    <el-dropdown>
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item @click="logoOut">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { removeStorage } from '@/api/helper'

const router = useRouter()
const logoOut = () => {
  removeStorage('token')
  router.push('/login')
}
</script>

<style lang="scss" scoped></style>
