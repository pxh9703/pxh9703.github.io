<template>
  <div class="foot">
    <div class="foot_box">
      <div class="box_cont">
        <RouterLink to="/" class="block mb-4 font-black">首页</RouterLink>
        <ul>
          <li><a href="">管理后台</a></li>
          <li><a href="">活动报名</a></li>
          <li><a href="">赛事大屏</a></li>
        </ul>
      </div>
      <div class="box_cont">
        <RouterLink to="/Service" class="block mb-4 font-black">服务支持</RouterLink>
        <ul>
          <li><a href="">服务介绍</a></li>
          <li><a href="">服务列表</a></li>
        </ul>
      </div>
      <div class="box_cont">
        <RouterLink to="/game" class="block mb-4 font-black">实时赛事</RouterLink>
        <ul>
          <li><a href="">实时赛事</a></li>
        </ul>
      </div>
      <div class="box_cont">
        <RouterLink to="/ContactUs" class="block mb-4 font-black">联系我们</RouterLink>
        <ul>
          <li><a href="">电话:1558582266</a></li>
          <li><a href="">手机:1558582266</a></li>
          <li><a href="">QQ:1558582266</a></li>
          <li><a href="">邮箱:1558582266</a></li>
          <li><a href="">邮编:1558582266</a></li>
        </ul>
      </div>
      <div class="mt-10">
        <img src="../assets/img/ewm.png" alt="" />
      </div>
    </div>
    <div class="hx"></div>
    <div class="xys">
      <div>版权所有@2017</div>
      <div>地址:山东省泰安市岱岳区</div>
      <div>苏ICP备12312122311号</div>
    </div>
    <div class="foot_text">
      Copyright @ 2020-2025 TanxianzheAll Rights Reserved.山东LY公司版权所有浙CP备19029460号-2
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.foot {
  background: url('../assets/img/foot.png');
  background-size: 100%;

  .foot_text {
    color: #8f9193;
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
@media screen and (max-width: 750px) {
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
