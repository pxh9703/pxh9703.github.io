<template>
  <div class="foot">
    <div class="foot_box">
      <div class="box_cont" v-for="item in botton" key="item">
        <NuxtLink to="/" class=" block mb-4 font-black">{{ item.name }}</NuxtLink>
        <ul>
          <li v-for="items in item.children " key="items"> <a href="">{{ items.name }}</a></li>
        </ul>
      </div>
      <!-- <div class="box_cont">
        <NuxtLink to="/Service" class=" block mb-4 font-black">服务支持</NuxtLink>
        <ul>
          <li> <a href="">服务介绍</a></li>
          <li> <a href="">服务列表</a></li>
        </ul>
      </div>
      <div class="box_cont">
        <NuxtLink to="/game" class=" block mb-4 font-black">实时赛事</NuxtLink>
        <ul>
          <li> <a href="">实时赛事</a></li>
        </ul>
      </div>
      <div class="box_cont">
        <NuxtLink to="/ContactUs" class=" block mb-4 font-black">联系我们</NuxtLink>
        <ul>
          <li> <a href="">电话:1558582266</a></li>
          <li> <a href="">手机:1558582266</a></li>
          <li> <a href="">QQ:1558582266</a></li>
          <li> <a href="">邮箱:1558582266</a></li>
          <li> <a href="">邮编:1558582266</a></li>
        </ul>
      </div> -->
      <div class="mt-10">
        <img src="../assets/img/ewm.png" alt="">
      </div>
    </div>
    <div class="hx"></div>
    <div class="xys">
      <div> 版权所有@2017 </div>
      <div> 地址:山东省泰安市岱岳区 </div>
      <div>苏ICP备12312122311号</div>
    </div>
    <div class="foot_text">Copyright @ 2020-2025 TanxianzheAll Rights Reserved.山东LY公司版权所有浙CP备19029460号-2
    </div>
  </div>
</template>

<script setup>
const botton = ref([{}])
onMounted(() => {
  bottonUrl().then((res) => {
    const data = res.value.data;
    botton.value = data

  })
})
</script>

<style lang="scss" scoped>
.foot {
  background: url('../assets/img/foot.png');
  background-size: 100%;

  .foot_text {
    color: #8F9193;
    text-align: center;
    font-size: 14px;
  }

  .hx {
    margin: 5px 0 5px 0;
    border: 1px solid #ccc;
  }

  .foot_box ul li {
    margin-bottom: 10px;
  }

  .foot_box {
    display: flex;
    justify-content: space-between;
    padding-top: 4%;
    width: 75%;
    margin: auto;
    color: #fff;

  }

}

.xys {
  display: none;
}

@media screen and (max-width:750px) {
  .xys {
    display: block;
    text-align: center;
    color: #ffff;
    font-size: 12px;
  }

  .box_cont {
    display: none;
  }

  .foot_text {
    display: none;
  }
}
</style>
