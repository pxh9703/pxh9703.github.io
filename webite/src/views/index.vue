import { _backgroundSize, corePlugins, _2 } from '../../.nuxt/tailwind.config';
<template>
  <div>
    <Swipers></Swipers>
    <!-- 头部 -->
    <!-- 内容 管理后台 -->
    <div class="htbag">
      <div class="Admin_ground bg-fixed">
        <div class="Admin_ground_title">
          <div class="w-25 h-4"><a href=""><img src="../assets/img/index/Seemore.png" alt=""></a></div>
          <div class="flex">
            <div class="w-10"><img src="../assets/img/index/a.jpg" alt=""></div>
            <div class="ml-5">
              <div class="text-sm">- dmin Background</div>
              <div class="text-sm">管理后台</div>
            </div>
          </div>
        </div>
        <!-- 响应标题 -->
        <div class="title">dmin Background
          <div class="titlezw">管理后台</div>
        </div>
        <!-- 内容 -->
        <div class="Admin_content">
          <div class="Admin_content_box" v-for="item in Admin" key="item">
            <div class="Admin_content-img">
              <a href=""> <img :src="item.image" alt=""></a>
            </div>
            <div class="Admin_text">
              <div class="font-black">{{ item.title }}</div>
              <div class="Admin_text-content">{{ item.content }}</div>
              <div class="admin_a"><a href="">MORE></a> </div>
            </div>
          </div>
        </div>
        <!-- 响应式轮播 -->
        <Indexswiper class="indexswiper"></Indexswiper>
        <!-- 查看更多 -->
        <div class="ckgd"><a href=""><img src="../assets/img/index/Seemore.png" alt=""></a></div>
      </div>
    </div>
    <!-- 活动报名 -->
    <div class="application">
      <!-- 标题 -->
      <div class="Admin_ground_title">
        <div class="flex ">
          <div class="w-10"><img src="../assets/img/index/E.jpg" alt=""></div>
          <div class="ml-5">
            <div class="text-sm">- vent registration</div>
            <div class="text-sm">活动报名</div>
          </div>
        </div>
        <div class="w-25 h-4"><a href=""><img src="../assets/img/index/Seemore.png" alt=""></a></div>
      </div>
      <!-- 标题 -->
      <!-- 响应标题 -->
      <div class="title">vent registration
        <div class="titlezw">活动报名</div>
      </div>
      <div class="lication_box" v-for="item in lication" key="item">
        <div class="lication_img"><a href=""><img :src="item.image" alt=""></a></div>
        <div class="lication_riht">
          <div class="_riht_title"> {{ item.title }} </div>
          <div class="_riht_content"> {{ item.content }} </div>
          <div class="flex justify-between bm">
            <div class="flex items-center">
              <div class="w-6"><img src="../assets/img/index/rx.png" alt=""></div>
              <div class="text-xs">已报名2200</div>
            </div>
            <div class="w-24"><img src="../assets/img/index/dad.png" alt=""></div>
          </div>
          <a href="" class="enroll">立即报名</a>
        </div>
      </div>
      <!-- 查看更多 -->
      <div class="ckgd"><a href=""><img src="../assets/img/index/Seemore.png" alt=""></a></div>
    </div>
    <!-- 赛事大屏 -->
    <div class="screen">
      <!-- 标题 -->
      <div class="Admin_ground_title">
        <div class="w-25 h-4"><a href=""><img src="../assets/img/index/Seemore.png" alt=""></a></div>
        <div class="flex items-center ">
          <div class="w-10"><img src="../assets/img/index/T.jpg" alt=""></div>
          <div class="ml-5">
            <div class="text-sm">- hebig screen of the event</div>
            <div class="text-sm">赛事大屏</div>
          </div>
        </div>
      </div>
      <!-- 标题 -->

      <!-- 响应标题 -->
      <div class="title"> he big screen of the event
        <div class="titlezw">赛事大屏</div>
      </div>
      <!-- <div class="screen_img"> -->
      <div class="screen_img" v-for="item in bigScreen" key="item">
        <a href="">
          <img :src="item.image" alt="">
          <div class="screen_content  ">
            <div class="font-black">{{ item.title }}</div>
            <div class="contentaa">{{ item.content }}</div>
            <div class="flex items-center">
              <div>Read More</div>
              <div class="w-8 h-6"><img src="../assets/img/index/rihtjt.png" alt=""></div>
            </div>
          </div>
        </a>
      </div>
      <!-- 查看更多 -->
      <div class="ckgd"><a href=""><img src="../assets/img/index/Seemore.png" alt=""></a></div>
    </div>
  </div>
</template>
<script setup>
useHead({
  title: '首页'
})
const bigScreen = reactive({
});

const lication = ref([{}])
onMounted(() => {
  getactivity().then((res) => {
    const data = res.value.data;
    lication.value = data
  }).catch((err) => {
    console.log(err, "错误");
  })
// 获取赛事大屏bigScreen
  getbigScreen().then((res) => {
    const data = res.value.data;
    bigScreen.value = data;
  }).catch((err) => {
    console.log(err, "错误");
  });
// 获取活动列表activity

})
// 获取后台管理
const Admin = ref([{}])
onMounted(() => {
  getadmin().then((res) => {
    const data = res.value.data;
    Admin.value = data
  }).catch((err) => {
    console.log(err, "错误");
  });
})
</script>

<style lang="scss" scoped>
.screen {
  width: 75%;
  margin: 20px auto;

  .screen_img:hover {
    .screen_content {
      line-height: 30px;
      transition: all 1s linear 0s;
      display: block;

    }

    .contentaa {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }

  }

  .screen_img {
    position: relative;
    margin-top: 20px;
    border-radius: 5px;


    .screen_content {
      border-radius: 5px;
      display: none;
      position: absolute;
      bottom: 0;
      width: 100%;
      padding-left: 5%;
      padding-top: 2%;
      color: #fff;
      background-color: rgba(11, 76, 180, 0.6);
    }
  }
}

// 赛事大屏
.lication_box2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.bm {
  margin-top: 20px;
  margin-bottom: 20px;
}

.enroll {
  background-color: #F7AB73;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
}

._riht_title {
  background: url('../assets/img/index/titlebg.png') 0% 100% no-repeat;

}

._riht_content {
  margin-top: 25px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
  line-height: 35px;
  font-size: 15px;
}

.lication_riht {
  width: 46%;
}

.lication_img {
  width: 48%;
}

.lication_box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.application {
  width: 75%;
  margin: 20px auto;
}

// 响应轮播
.indexswiper {
  display: none;
}

// 活动报名
.Admin_content {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  .Admin_content_box {
    background-color: #fff;
    width: 31%;
    box-shadow: 0 0 5px #ccc;
    border-radius: 10px;

    .Admin_text {
      padding: 15px;
      border-radius: 10px;

      .Admin_text-content {
        font-size: 14px;
        color: #7D7D7D;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }

      .admin_a {
        margin-left: auto;
        margin-top: 10px;
        width: max-content;
        font-size: 12px;
        border: 1px solid #6FD7A4;
        padding: 5px;
        border-radius: 4px;
      }
    }
  }

}

.Admin_content_box:hover {
  transform: scale(1.01);
  transition: all 0.3s linear;
  color: #fff;

  .Admin_text {
    transition: all 0.3s linear;
    background-color: #0B6CFE;

    .Admin_text-content {
      color: #fff;
    }

    .admin_a {
      border: none;

      background-color: #F7AB73;
    }
  }
}

.htbag {
  background-image: url('../assets/img/index/bageone.png');
  background-size: 100% 100%;
  background-repeat: repeat-x;
}

.Admin_ground {
  // background-image: url('../assets/index/bageone.png');
  // background-size: 100% 100%;
  width: 75%;
  margin: 20px auto;
}

// 标题
.Admin_ground_title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

img {
  width: 100%;
  height: 100%;
}

* {
  padding: 0;
  margin: 0;
}

.title {
  display: none;
}

.ckgd {
  display: none;
}

@media screen and (max-width:1200px) {
  .Admin_ground {
    // background-image: url('../assets/index/bageone.png');
    // background-size: 100% 100%;
    width: 85%;
    margin: 20px auto;
  }

  .screen[data-v-b4ab3518] {
    width: 85%;
    margin: 20px auto;
  }

  .application {
    width: 85%;
    margin: 20px auto;

    ._riht_content {
      margin-top: 25px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
      line-height: 30px;
      font-size: 15px;
    }
  }
}

@media screen and (max-width:1000px) {
  .application {
    width: 85%;
    margin: 20px auto;

    ._riht_content {
      margin-top: 20px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      overflow: hidden;
      line-height: 28px;
      font-size: 14px;
    }
  }

  .bm {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}

@media screen and (max-width:900px) {
  .application {
    width: 85%;
    margin: 20px auto;

    ._riht_content {
      margin-top: 20px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      line-height: 28px;
      font-size: 14px;
    }
  }
}

@media screen and (max-width:750px) {
  .screen {
    width: 90%;
    margin: auto;

    .screen_img:hover {
      .screen_content {
        transition: all 1s linear 0s;
        display: block;
      }

      .contentaa {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 1;
      }
    }
  }

  .lication_box2 {
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }

  .lication_img {
    width: 100%;
  }

  .lication_riht {
    margin-top: 10px;
    width: 100%;
  }

  .lication_box {
    flex-wrap: wrap;


  }

  .ckgd {
    display: block;
    margin: 10px auto;
    width: 20%;
  }

  // 响应轮播
  .indexswiper {
    margin-top: 20px;
    display: block;
  }

  .Admin_content {
    display: none;
  }

  .Admin_ground_title {
    display: none;
  }

  // 标题
  .title {
    display: block;
    text-align: center;
    font-size: 28px;
    color: #E5E5E5;
    position: relative;

    .titlezw {
      font-size: 25px;
      position: absolute;
      transform: translate(-50%, -50%);
      top: 90%;
      left: 50%;
      color: #0B6CFE;
    }
  }

  .Admin_ground {
    width: 90%;
    margin: auto;
  }

  .application {
    width: 90%;
    margin: auto;
  }



}
</style>
