<template>
  <div>
    <!-- 轮播 -->
    <div class="swiperbox">
      <swiper
        :slidesPerView="1"
        :spaceBetween="30"
        :loop="true"
        :centeredSlides="true"
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 250, disableOnInteraction: false }"
        :navigation="true"
        :modules="modules"
      >
        <swiper-slide><img src="../src/assets/public/lunb.png" alt="" /></swiper-slide>
        <swiper-slide><img src="../src/assets/public/lunb.png" alt="" /></swiper-slide>
      </swiper>
    </div>
    <!-- 轮播 -->
    <div class="hospone1">
      <div class="hospone">
        <div class="hostitle">我们提供的服务</div>
        <div class="hoscontent">
          Services ortor arcu feugiat elitin suscipit dolor urna commodo maurissemper liberosed
          magna pretium malesuadras non tellus quis nisl ornare tincidunt pretium malesuadrasornare
          tincidunt pretium.
        </div>
      </div>
    </div>
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
    <!-- 3 -->
    <div class="hospthreeb">
      <div class="hosptwo">
        <div class="hospthre1" v-for="(itme, i) in hosptwo" :key="i">
          <div class="thretitle">{{ itme.title }}</div>
          <div class="threcenter">{{ itme.conter }}</div>
          <button @click="update(itme.link)" class="threebut">{{ itme.but }}</button>
        </div>
        <div class="hospthre2">
          <div class="thre2-tit">OPD时间</div>
          <div class="thre2-cont">周至周五:上午 09点至晚上07点</div>
          <div class="thre2-cont">周六: 上午09点至晚上07点</div>
          <div class="thre2-cont">周日: 上午09点至晚上07点</div>
        </div>
      </div>
    </div>
    <!-- 4 -->
    <div class="hospone">
      <div class="hostitle">欢迎来到亚洲医院</div>
      <div class="hoscontent">
        我们致力于关心和改善人类生活，认识到这一承诺，我们努力为我们所服务的社区提供高质量，具有成本效益的护理。我们
        可以自豪地说，我们是100%遵守世界医疗保健标准的多专科和多超级专科医院。
      </div>
      <div class="hos4">
        <div class="img3"><img src="./assets//index/3.png" alt="" /></div>
        <div class="hos4riht">
          <div class="hos4tit">我们致力于满足于不亚于以下 <br />最好的。</div>
          <div class="hos4con">
            <div class="sjtimg"><img src="../src/assets/sjt.png" alt="" /></div>
            拥有最有经验和最合格的专业人员的团队。
          </div>
          <div class="hos4con">
            <div class="sjtimg"><img src="../src/assets/sjt.png" alt="" /></div>
            宽敞的客房包括套房，豪华房,经济房等。
          </div>
          <div class="hos4con">
            <div class="sjtimg"><img src="../src/assets/sjt.png" alt="" /></div>
            通过选择位于市中心来提供最佳位置。
          </div>
          <button class="hos4but">更多关于我们</button>
        </div>
      </div>
    </div>
    <!-- 5 -->
    <div class="hospthreeb">
      <div class="hosptwo">
        <div class="hos5left" v-for="(itme, i) in hos5" :key="i">
          <div class="hos5left-titl">{{ itme.title }}</div>
          <div class="lefttto">
            <div class="imgp11"><img :src="itme.image" alt="" /></div>
            <div class="leftr">
              <div class="name">{{ itme.name }}</div>
              <div class="position">{{ itme.illness }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 5 -->
    <!-- 6 -->
    <div class="hosp6">
      <div class="hosp6-title">由2，000多名患者信任我们，用他们的甜蜜爱。</div>
      <button class="hosp6-but">查看全部评论</button>
    </div>
    <!-- 7 -->
    <!-- 3 -->
    <div class="hosp7">
      <div class="hostitle">最新消息和更新</div>
      <div class="hospbox">
        <div class="hospthre1" v-for="(itme, q) in 3" :key="q">
          <div class="hosp7-title">寻找印度最好的医院?</div>
          <div class="hosp7-bot">
            <div class="hos7-img"><img src="./assets/index/rl.png" alt="" /></div>
            <div class="zit2">25 7月，2020</div>
            <div class="hos7-img2"><img src="./assets/index/user.png" alt="" /></div>
            <div class="zit">由管理员</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 4 -->
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue' // swiper 所需组件
import { Autoplay, Navigation, Pagination, A11y } from 'swiper' // 分页器
import 'swiper/swiper-bundle.css'

const modules = [Autoplay, Pagination, Navigation, A11y]
</script>
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
      ],
      hosptwo: [
        {
          title: '紧急情况',
          conter: '事故和紧急情况是没有人放过的事情，也 没有偏见。',
          but: '联系我们',
          link: 'gotolink'
        },
        {
          title: '紧急情况',
          conter: '事故和紧急情况是没有人放过的事情，也 没有偏见。',
          but: '预约',
          link: 'gotolink2'
        }
      ],
      hos5: [
        {
          title:
            ' “我非常感谢您和您的团队在我在亚洲医院治疗心脏病发作期间给予的出色支持。出色的诊断和治疗加上您对我的耐心和善意是非常可观的”',
          image: '../src/assets/index/peopl1.png',
          name: '阿莱西亚戴维森',
          illness: '心脏病发作幸存者'
        },
        {
          title:
            ' ““由于我从护士、艾滋病和主管护士那里得到的出色护理，白天和黑夜变得更加轻松，他们对确保我的健康的关注非常出色让我说，由于工作人员提供的出色护理，你把我的噩梦变成了一一个充满希望的梦想。 ”',
          image: '../src/assets/index/peopl1.png',
          name: '珍妮特地恩',
          illness: '爱伤病人'
        }
      ]
    }
  },
  methods: {
    update(methodsNums) {
      //触发这个参数的方法
      this[methodsNums]()
    },
    gotolink() {
      //指定跳转地址
      this.$router.replace('/ContactUs')
      console.log(22)
    },
    gotolink2() {
      //指定跳转地址
      this.$router.replace('/ServiceList')
      console.log(22)
    }
  }
}
</script>
<style lang="scss" scoped>
.hos7-img {
  width: 17%;
}
.hos7-img img {
  width: 65%;
  height: 30px;
}
.hos7-img2 {
  width: 18%;
}
.hos7-img2 img {
  width: 53%;
  height: 30px;
}
.zit {
  font-size: 22px;
  line-height: 36px;
}
.hospbox {
  display: flex;
  justify-content: space-between;
}
.zit2 {
  font-size: 22px;
  line-height: 36px;
  color: #878b8d;
}
// .hosp7-title {
//   font-size: 30px;
//   margin-bottom: 25px;
// }
.hosp7-bot {
  display: flex;
  white-space: nowrap;
  /* 文字用省略号代替超出的部分 */
  text-overflow: ellipsis;
  /* 匀速溢出内容，隐藏 */
  overflow: hidden;
}
.hosp7 {
  width: 70%;
  margin: 20px auto;
}
// 7
.hosp6 {
  padding: 50px 0;
  background-color: #25aae2;
  .hosp6-title {
    color: #fff;
    font-size: 25px;
    text-align: center;
    margin-bottom: 20px;
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
.hos5left {
  width: 49%;
  .hos5left-titl {
    color: #818a92;
    font-weight: bold;
    font-size: 20px;
  }
  .lefttto {
    display: flex;
    margin-top: 25px;
    .imgp11 {
      width: 10%;
      border-radius: 10px;
    }
    .leftr {
      line-height: 30px;
      margin-left: 10px;
      .name {
        font-size: 20px;
      }
      .position {
        color: #559ab7;
      }
    }
  }
}
// 5
.hos4riht {
  // width: 48%;
  padding: 15px;
  .hos4tit {
    font-size: 30px;
    margin-bottom: 20px;
  }
  .hos4con {
    color: #ccc;
    line-height: 40px;
    display: flex;
  }
}
.sjtimg {
  width: 10px;
  height: 10px;
}
.hos4but {
  background-color: #133477;
  color: #fff;
  padding: 15px;
  border: none;
  border-radius: 8px;
  margin-top: 30px;
}
.hos4 {
  display: flex;
  margin-top: 20px;
  .img3 {
    width: 45%;
    border-radius: 8px;
  }
}
// 4
.hospthre2 {
  padding: 20px;
  width: 27%;
  box-shadow: 0 0 5px #ccc;
  background-color: #133575;
  color: #fff;
  .thre2-tit {
    font-size: 20px;
  }
  .thre2-cont {
    color: #d2e1f5;
    border-bottom: 1px solid #0e2e6b;
    line-height: 36px;
    font-size: 14px;
    margin-top: 10px;
  }
}
.hospthre1 {
  padding: 20px;
  width: 27%;
  box-shadow: 0 0 5px #ccc;
  .thretitle {
    font-size: 20px;
    margin-bottom: 15px;
  }
  .threcenter {
    color: #ccc;
    margin-bottom: 20px;
  }
  .threebut {
    border: none;
    background-color: #25aae2;
    padding: 10px;
    border-radius: 5px;
  }
}
.hospthreeb {
  padding: 20px 0 20px 0;
  background-color: #f5f9fc;
}
// 3
.htwo1:hover {
  img {
    transition: all 0.3s linear;
    transform: scale(1.1);
  }
}
.hosptwo {
  width: 70%;
  margin: 15px auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .htwo1 {
    overflow: hidden;
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
.hospone1 {
  border-bottom: 1px solid #ccc;
}
.hospone {
  width: 70%;
  margin: 20px auto;

  .hoscontent {
    color: #264571;
    line-height: 25px;
    font-size: 18px;
  }
}
.hostitle {
  font-size: 30px;
  color: #3d3a39;
  margin-bottom: 15px;
}
@media screen and (max-width: 768px) {
  .hosptwo[data-v-75662ee6] {
    width: 90%;
    margin: 15px auto;
  }
  .hosptwo .htwo1 {
    box-shadow: 0 0 5px #ccc;
    border-radius: 5px;
    padding: 15px;
    width: 100%;
    margin-bottom: 15px;
  }
  .hosptwo .htwo1 .img1 {
    width: 35%;
    margin: auto;
  }
  .hospthre1 {
    padding: 10px;
    width: 100%;
    box-shadow: 0 0 5px #ccc;
    margin-bottom: 10px;
  }
  .hospthre2 {
    padding: 10px;
    width: 100%;
    box-shadow: 0 0 5px #ccc;
    background-color: #133575;
    color: #fff;
  }
  .hospone {
    width: 90%;
    margin: 20px auto;
  }
  .hos4 .img3 {
    width: 100%;
    border-radius: 8px;
  }
  .hos4 {
    display: block;
    margin-top: 20px;
  }
  .hos5left {
    margin-top: 20px;
    width: 100%;
  }
  .hosp7 {
    width: 90%;
    margin: auto;
  }
  .hospbox {
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
