<!-- 服务业 -->
<template>
  <div>
    <div class="seimg"><img src="../src/assets/index/se.png" alt="" /></div>
    <!-- 2 -->
    <div class="hosptwo">
      <div class="htwo1" v-for="(htwo1, i) in htwo1" :key="i">
        <a href="">
          <div class="img1">
            <img :src="htwo1.img" alt="" />
          </div>
          <div class="htwotitle">{{ htwo1.title }}</div>
        </a>
      </div>
    </div>
    <!-- 2 -->
    <!-- 6 -->
    <div class="hosp6">
      <div class="hosp6-title">由2，000多名患者信任我们，用他们的甜蜜爱。</div>
      <button class="hosp6-but">查看全部评论</button>
    </div>
    <!-- 6 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      htwo1: [
        {
          img: '../src/assets/index/1.png',
          title: '妇科'
        },
        {
          img: '../src/assets/index/2.png',
          title: '心脏病学'
        },
        {
          img: '../src/assets/index/1.png',
          title: '胃肠'
        },
        {
          img: '../src/assets/index/1.png',
          title: '普通外科医生'
        },
        {
          img: '../src/assets/index/1.png',
          title: '皮肤科医生'
        },
        {
          img: '../src/assets/index/1.png',
          title: '耳朵/鼻子/联晓'
        },
        {
          img: '../src/assets/index/1.png',
          title: '骨科'
        },
        {
          img: '../src/assets/index/1.png',
          title: '精神'
        },
        {
          img: '../src/assets/index/1.png',
          title: '眼科'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.hosp6 {
  padding: 50px 0;
  background-color: #25aae2;
  .hosp6-title {
    color: #fff;
    font-size: 25px;
    text-align: center;
    margin-bottom: 20px;
    display: -webkit-box;
    /* 设置或检索伸缩盒对象的子元素的排列方式 。 */
    -webkit-box-orient: vertical;
    /*  用来限制在一个块元素显示的文本的行数 */
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .hosp6-but {
    border-radius: 10px;
    padding: 15px;
    border: none;
    color: #fff;
    display: block;
    margin: auto;
    background-color: #113770;
    font-weight: bold;
  }
}
// 6
// 6
.hosptwo {
  width: 70%;
  margin: 15px auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .htwo1 {
    box-shadow: 0 0 5px #ccc;
    border-radius: 5px;
    padding: 15px;
    width: 27%;
    margin-bottom: 15px;
    .img1 {
      width: 80%;
      margin: auto;
      height: 80%;
    }
  }
  .htwotitle {
    text-align: center;
  }
}
// 2
.seimg {
  width: 100%;
}
@media screen and (max-width: 768px) {
  .hosptwo {
    display: block;
    width: 100%;
    margin: 15px auto;
  }
  .hosptwo .htwo1 {
    box-shadow: 0 0 5px #ccc;
    border-radius: 5px;
    padding: 15px;
    width: 80%;
    /* margin-bottom: 15px; */
    margin: 15px auto;
  }
}
</style>
