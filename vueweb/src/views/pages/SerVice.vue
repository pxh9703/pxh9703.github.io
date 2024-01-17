<template>
  <div>
    <div><img src="../../assets/img/Service/fujs.png" alt="" /></div>
    <div class="body">
      <div class="title">
        SERVICENTRORUCTION
        <div class="titlezw">服务介绍</div>
      </div>
      <!-- 标题 -->
      <div class="mainbody">
        <div class="mainbody_box" v-for="item in content" :key="item">
          <div class="text-2xl">{{ item.title }}</div>
          <div class="content leading-6">{{ item.conten }}</div>
          <div class="text-4xl" style="color: #f7ab73">￥{{ item.price }}/年</div>
          <a href="" class="zx">一键咨询</a>
        </div>
      </div>
    </div>
    <a class="ckgd" href=""> <img src="../../assets/img/Service/ckgd.png" alt="" /></a>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const content = ref([
  {
    title: '服务标题',
    conten:
      '服务内容服务内容服务内容服务内容服务内容服务内容服务内容服 务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容...',
    price: '100',
    http: ''
  },
  {
    title: '服务标题',
    conten:
      '服务内容服务内容服务内容服务内容服务内容服务内容服务内容服 务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容...',
    price: '100',
    http: ''
  },
  {
    title: '服务标题',
    conten:
      '服务内容服务内容服务内容服务内容服务内容服务内容服务内容服 务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容...',
    price: '100',
    http: ''
  },
  {
    title: '服务标题',
    conten:
      '服务内容服务内容服务内容服务内容服务内容服务内容服务内容服 务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容服务内容...',
    price: '100',
    http: ''
  }
])
</script>

<style lang="scss" scoped>
.ckgd {
  width: 10%;
  display: block;
  margin: 20px auto;
}

.mainbody {
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  flex-wrap: wrap;
  margin: 25px auto;

  .mainbody_box {
    width: 47%;
    border-radius: 5px;
    padding: 15px 20px 15px 15px;
    box-shadow: 0 0 10px #e1f0fd;
    background-color: #f8fbfe;
    margin-top: 10px;

    .zx {
      width: 80%;
      padding: 8px;
      margin-top: 20px;
      border-radius: 5px;
      text-align: center;
      display: block;
      color: #fff;
      background-color: #0b6cfe;
    }

    .content {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      font-size: 14px;
      margin: 15px 0 15px 0;
    }
  }
}

// 标题
.title {
  text-align: center;
  font-size: 30px;
  color: #e5e5e5;
  position: relative;

  .titlezw {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #0b6cfe;
  }
}

.body {
  background-image: url('../assets/img/index/bageone.png');
  background-size: 100% 100%;
  background-repeat: repeat-x;
}

@media screen and (max-width: 750px) {
  .mainbody {
    width: 90%;
  }
}

@media screen and (max-width: 450px) {
  .title {
    text-align: center;
    font-size: 25px;
    color: #e5e5e5;
    position: relative;

    .titlezw {
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #0b6cfe;
    }
  }
  .mainbody {
    .mainbody_box {
      width: 100%;
      border-radius: 5px;
      padding: 15px 20px 15px 15px;
      box-shadow: 0 0 10px #e1f0fd;
      background-color: #f8fbfe;
      margin: 10px auto;
    }
  }

  .ckgd {
    width: 30%;
    margin: 10px auto;
  }
}
</style>
