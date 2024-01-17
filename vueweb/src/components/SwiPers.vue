<template>
  <div class="nav">
    <el-carousel height="450px" direction="vertical" :autoplay="true">
      <el-carousel-item v-for="items in swipe" :key="items">
        <a href="">
          <div class="swiper_img">
            <!-- <img src="../assets/img/swiper/swiper.png" alt="" style=""> -->
            <img :src="items.imgs" alt="" style="" />;

            <!-- 轮播图文字 -->
            <div class="swiper_text">
              <div class="text-2xl">{{ items.title }}</div>
              <div class="swiper_contenr">{{ items.con }}</div>
              <div class="text-base">
                Lorem ipsum neiduntconsequat. dolorsit armet,con
                <div>secteturadipiscingelitMassa elementum eu proent。</div>
                sit mi nisl tin Aturpis fco somper noue
              </div>
              <div class="sing">
                <div>Enter your information</div>
                <div class="up_now">Sign up now</div>
              </div>
            </div>
          </div>
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const swipe = ref([
  {
    imgs: 'src/assets/img/swiper/swiper.png',
    con: '即使世态无常也要纵容梦想',
    title: 'STREET CUL TURE X. -SPORTS'
  }
])
</script>

<style lang="scss" scoped>
.swiper_img {
  height: 100%;
  position: relative;

  .swiper_text {
    color: #fff;
    position: absolute;
    top: 26%;
    left: 10%;

    .swiper_contenr {
      font-size: 20px;
      margin-top: 2%;
      margin-bottom: 2%;
    }

    .sing {
      width: 80%;
      margin-top: 15px;
      height: 50px;
      padding: 10px;
      border-radius: 30px;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #acacac;

      .up_now {
        background-color: #f7ab73;
        color: #fff;
        padding: 8px;
        border-radius: 30px;
      }
    }

    .sing div .active {
      background-color: #f7ab73;
      color: #fff;
    }
  }
}

// 轮播图

img {
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 750px) {
  .text-2xl {
    font-size: 18px;
  }

  .swiper_contenr {
    font-size: 16px;
  }
  .text-base {
    font-size: 14px;
  }
  .sing {
    font-size: 14px;
  }
}
</style>
