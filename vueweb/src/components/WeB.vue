<template>
  <div>
    <div class="nav">
      <div class="log"><img src="../assets/img/log.png" alt="" /></div>
      <div class="w-60% content sds">
        <RouterLink to="/" active-class="active">首页</RouterLink>
        <RouterLink to="/Service" active-class="active">服务介绍</RouterLink>
        <RouterLink to="/game" active-class="active">实时赛事</RouterLink>
        <RouterLink to="/ContactUs" active-class="active">联系我们</RouterLink>
      </div>
      <div class="riht_tel">
        <div class="tel">
          <img src="../assets/img/tel.png" alt="" />
        </div>
        <div>4000-100-100</div>
      </div>
    </div>
    <MoVe class="move" />

    <slot />
    <Foot></Foot>
  </div>
</template>
<script lang="ts" setup>
import MoVe from './MoVe.vue'
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
}
.log {
  width: 6%;
  height: 35px;
}
.riht_tel {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .tel {
    margin-right: 15px;
    width: 20px;
    height: 20px;
  }
}
// .content {
//   display: flex;
//   justify-content: space-between;
// }

.sds a {
  padding: 8px 15px 8px 15px;
  margin-right: 10px;
  text-decoration: none;
}

.sds a.active {
  background-color: white;
  border-radius: 28px;
  color: #096bfe;
}

.sds a:hover {
  padding: 8px 15px 8px 15px;
  margin-right: 10px;
  border-radius: 28px;
  color: black;
  background-color: #096bfe;
  text-decoration: none;
}

.nav {
  position: absolute;
  top: 0;
  left: 10%;
  z-index: 999;
  padding: 10px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  width: 80%;
  align-items: center;
  color: #fff;
}

.move {
  display: none;
}

@media screen and (max-width: 750px) {
  .move {
    display: block;
    position: absolute;
    z-index: 999;
  }

  .nav {
    display: none;
  }
}
</style>
