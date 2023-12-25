<template>
  <div>
    <div class="hzpj"><img src="../src/assets/hzpj.png" alt="" /></div>
    <div class="hzpj-body">
      <!-- 5 -->

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
      <!-- 5 -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
            ' “由于我从护士，艾滋病和主营护士那里得到了出色的护理，白天和黑夜直接变得更容易了他们对确保我的健康的关注非常出色让我说由于工作人员提供的出色护理，你把我的噩梦变成了-个充满希望的梦想”，',
          image: '../src/assets/index/peopl1.png',
          name: '珍妮特地恩',
          illness: '爱伤病人'
        },
        {
          title:
            '"Etiam scelerisque dignissim luctus.Cras ultricies tempor sapiensitamnet auctor unceu lectus molestie elementum odioeu vulputatetellushasellus sitamet urna ultriciesnun commodo cur uspendissepotentionec qui mouris volutpat dictum libero non"',
          image: '../src/assets/index/peopl1.png',
          name: '珍妮特地恩',
          illness: '爱伤病人'
        }, {
          title:
            '"Etiam scelerisque dignissim luctus.Cras ultricies tempor sapiensitamnet auctor unceu lectus molestie elementum odioeu vulputatetellushasellus sitamet urna ultriciesnun commodo cur uspendissepotentionec qui mouris volutpat dictum libero non"',
          image: '../src/assets/index/peopl1.png',
          name: '珍妮特地恩',
          illness: '爱伤病人'
        }, {
          title:
            '"Etiam scelerisque dignissim luctus.Cras ultricies tempor sapiensitamnet auctor unceu lectus molestie elementum odioeu vulputatetellushasellus sitamet urna ultriciesnun commodo cur uspendissepotentionec qui mouris volutpat dictum libero non"',
          image: '../src/assets/index/peopl1.png',
          name: '珍妮特地恩',
          illness: '爱伤病人'
        }, {
          title:
            '"Etiam scelerisque dignissim luctus.Cras ultricies tempor sapiensitamnet auctor unceu lectus molestie elementum odioeu vulputatetellushasellus sitamet urna ultriciesnun commodo cur uspendissepotentionec qui mouris volutpat dictum libero non"',
          image: '../src/assets/index/peopl1.png',
          name: '珍妮特地恩',
          illness: '爱伤病人'
        },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.hos5left {
  width: 48%;
  margin-bottom: 30px;
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
// /2
.hzpj-body {
  width: 70%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 15px auto;
}
.hzpj {
  width: 100%;
}
@media screen and (max-width: 768px) {
    .hzpj-body {
  width: 90%;
  display: block;
  margin: 15px auto;
}  
.hos5left {
  width: 100%;
  margin-bottom: 30px;}
}
</style>
