<template>
  <div>
    <div class="move">
      <div class="log"><img src="../assets/img/log.png" alt=""></div>
      <el-dropdown @click="handleClick" trigger="click" class="riht">
        <img  src="../assets/img/riht.png" alt="">
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item >
              <NuxtLink to="/" >首页</NuxtLink>
            </el-dropdown-item>
            <el-dropdown-item>
              <NuxtLink to="/Service">服务介绍</NuxtLink>
            </el-dropdown-item>
            <el-dropdown-item>
              <NuxtLink to="/game">实时赛事</NuxtLink>
            </el-dropdown-item>
            <el-dropdown-item>
              <NuxtLink to="/ContactUs">联系我们</NuxtLink>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
<!-- 登录表单 -->
</div>
</template>

<script lang="ts" setup>

const handleClick = () => {
  // eslint-disable-next-line no-alert
  alert('button click')
}
</script>

<style lang="scss" scoped>
.move {
  padding: 0 2%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
 
}

.log {
    width: 6%;
    height: 35px;
  }
.riht {
    width: 4%;
    height: 20px;
  }
img {
  width: 100%;
  height: 100%;
}
@media screen and (max-width:550px) {
  .log {
    width: 18%;
    height: 35px;
  }
}
</style>
