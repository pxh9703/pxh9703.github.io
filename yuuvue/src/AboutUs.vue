<!-- 关于我们 -->
<template>
  <div>
    <div class="topimg"><img src="../src/assets/about/aboutus.png" alt="" /></div>
    <!-- 1 -->
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
          <div class="hos4tit">
            Cras vulputate, neque et cursuor arcu feugiat elitin suscipit dolor urna
          </div>
          <a href=""
            ><div class="hos4con">
              <div class="sjtimg"><img src="../src/assets/sjt.png" alt="" /></div>
              拥有最有经验和最合格的专业人员的团队。
            </div></a
          >
          <a href=""
            ><div class="hos4con">
              <div class="sjtimg"><img src="../src/assets/sjt.png" alt="" /></div>
              宽敞的客房包括套房，豪华房,经济房等。
            </div></a
          >
          <div class="hos4con">
            <div class="sjtimg"><img src="../src/assets/sjt.png" alt="" /></div>
            通过选择位于市中心来提供最佳位置。
          </div>
        </div>
      </div>
    </div>
    <!-- 1 -->
    <!-- 2 -->
    <div class="aboutb">
      <div class="aboutwo">
        <div class="hostitle">医生团队</div>
        <div class="aboutbox">
          <div class="aboutbox-1" v-for="(itme, i) in about1" :key="i">
            <a href="">
              <div><img :src="itme.image" alt="" /></div>
              <div class="name">{{ itme.name }}</div>
              <div class="duties">{{ itme.duties }}</div></a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- 2 -->
    <!-- 3 -->
    <div class="three">
      <div class="aboutwo">
        <div class="hostitle">为什么选择亚洲</div>
        <div class="aboutbox">
          <div class="aboutbox-1" v-for="(itme, i) in aboubox1" :key="i">
            <a href="">
              <div class="whyimg"><img :src="itme.image" alt="" /></div>
              <div class="abouttit">{{ itme.name }}</div>
              <div class="abcont">
                {{ itme.duties }}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- 3 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      aboubox1: [
        {
          image: '../src/assets/about/why1.png',
          name: '以患者为中心',
          duties:
            '  Nulla failisied ut laoreet lorem is masstiam consequat vestibulums tonece dictumpharetranis.'
        },
        {
          image: '../src/assets/about/why2.png',
          name: '适应变化',
          duties:
            '  Vivamus consectetur egetelitsit isamet pellentesquonec scelerisqueplacerat erosin ultricies.'
        },
        {
          image: '../src/assets/about/why3.png',
          name: '卑微',
          duties:
            ' Sed dapibus bibendm lacinia onemorbiac iaculisin a sapien necerisusultrices rhoncusvelie..'
        },
        {
          image: '../src/assets/about/why4.png',
          name: '高质量护理',
          duties:
            '  Nulla facilisied ut laoreet lorem is masstiam consequat vestibulumstonece dictum pharetranis.'
        }
      ],

      about1: [
        {
          image: '../src/assets/about/1.png',
          name: '泽维尔阿科斯塔博士',
          duties: '外科肿瘤学家'
        },
        {
          image: '../src/assets/about/2.png',
          name: '丽贝卡布尔戈斯博士',
          duties: '胃外科'
        },
        {
          image: '../src/assets/about/3.png',
          name: '凯文梦露博士',
          duties: '普通外科'
        },
        {
          image: '../src/assets/about/1.png',
          name: '海伦库克博士',
          duties: '耳鼻喉科'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
// 3
.three {
  padding: 40px 0 40px 0;
}
.abcont {
  color: #88817f;
  font-size: 14px;
}
.whyimg {
  width: 30%;
  height: 40%;
}
.abouttit {
  margin: 20px 0;
  font-size: 20px;
  color: #88817f;
}
// 3
// 2
.duties {
  color: #4eb9dd;
  text-align: center;
  font-size: 14px;
}
.name {
  font-size: 20px;
  text-align: center;
  margin: 10px 0 10px 0;
}
.aboutbox-1 {
  width: 23%;
}
.aboutbox {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.aboutwo {
  width: 65%;
  margin: auto;
}
.aboutb {
  padding: 30px 0 30px 0;
  width: 100%;
  background-color: #f5f9fc;
}
// 2
/* 1 */
.sjtimg {
  width: 10px;
  height: 10px;
}
.hostitle {
  font-size: 30px;
  color: #3d3a39;
  margin-bottom: 15px;
}
.hospone {
  width: 65%;
  margin: 20px auto;

  .hoscontent {
    color: #264571;
    line-height: 25px;
    font-size: 18px;
  }
}
.hos4riht {
  width: 37%;
  padding: 15px;

  .hos4tit {
    // font-size: 30px;
    color: #a6a4a6;
    margin-bottom: 20px;
  }
  .hos4con {
    display: flex;
    color: #ccc;
    line-height: 40px;
  }
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
/* 1 */
.topimg {
  width: 100%;
}
@media screen and (max-width: 768px) {
  .hospone {
    width: 95%;
    margin: 20px auto;
  }
  .hos4 {
    display: block;
    margin-top: 20px;
  }
  .hos4 .img3 {
    border-radius: 8px;
    width: 100%;
    margin: auto;
  }
  .hos4riht {
    width: 100%;
    padding: 0;
  }
  .aboutbox-1 {
    width: 95%;
    margin: 15px auto;
  }
  .aboutwo {
    width: 95%;
    margin: auto;
  }
  .aboutbox {
    display: block;
    margin-top: 20px;
  }
}
</style>
