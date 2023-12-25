import { _auto } from '../../.nuxt/tailwind.config';
<template>
  <div>
    <el-carousel height="450px" direction="vertical" :autoplay="true">
      <el-carousel-item v-for="item in 4" :key="item">
        <div style="height: 450px;"> <img src="../assets/img/game/gameswiper.png" alt=""></div>
      </el-carousel-item>
    </el-carousel>
    <!-- 轮播 -->
    <div class="body">
      <div class="title">TOURNAMEWINTRODUCTION
        <div class="titlezw">赛事介绍</div>
      </div>
      <GameMove class="move"></GameMove>
      <div class="game_box">
        <div class="game_one">
          <div class="left_img"><img src="../assets/img/game/game1.png" alt=""></div>
          <div class="game_riht"></div>
        </div>
        <!-- 内容 -->
        <div class="game_content">
          <div class="text-xl"> 赛事名称</div>
          <div class="text-xs mt-2 mb-2">赛事类型:</div>
          <div>
            <el-tag @click="show = i" v-for="(item, i) in tag" :key="i" :class="show == i ? 'option' : 'mr-3'" type="info"  size="small">{{ item.name }}
            </el-tag>
          </div>
          <div class="text-xs mt-2 mb-2">参赛组别:</div>
          <div>
            <el-tag @click="show2 = i" v-for="(item, i) in tag2" :key="i" :class="show2 == i ? 'option' : 'mr-3'" type="info"  size="small">{{ item.name }}
            </el-tag>
          </div>
          <div class="text-xs mt-2 mb-2">报名时间:</div>
          <div class="text-xs">2023年6月1日~2023年6月1日</div>
          <div class=" dbsd">
            <div class="flex">
              <a href="" class="ljbm">立即报名</a>
              <a href="" class="ljbm">咨询报名</a>
            </div>
            <div class="asd">
              TOURNAMENT INTRODUCTION
            </div>
          </div>
        </div>
      </div>
      <!-- 2 -->
      <div class="game_box">
        <div class="game_one">
          <div class="game_riht"></div>
          <div class="left_img"><img src="../assets/img/game/game2.png" alt=""></div>
        </div>
        <!-- 内容 -->
        <div class="game_content2">
          <div class="text-xl"> 赛事名称</div>
          <div class="text-xs mt-2 mb-2">赛事类型:</div>
          <div>
            <el-tag @click="shows = i" v-for="(item, i) in tag" :key="i" :class="shows == i ? 'option' : 'mr-3'" type="info">{{ item.name }}
            </el-tag>
          </div>
          <div class="text-xs mt-2 mb-2">参赛组别:</div>
          <div>
            <el-tag @click="shows2 = i" v-for="(item, i) in tag2" :key="i" :class="shows2 == i ? 'option' : 'mr-3'" type="info">{{ item.name }}
            </el-tag>
          </div>
          <div class="text-xs mt-2 mb-2">报名时间:</div>
          <div class="text-xs">2023年6月1日~2023年6月1日</div>
          <div class=" dbsd">
            <div class="flex">
              <a href="" class="ljbm2">已报名</a>
            </div>
            <div class="asd">
              TOURNAMENT INTRODUCTION
            </div>
          </div>
        </div>
      </div>
      <!-- 3 -->
      <div class="game_box">
        <div class="game_one">
          <div class="left_img"><img src="../assets/img/game/daf-1.png" alt=""></div>
          <div class="game_riht"></div>
        </div>
        <!-- 内容 -->
        <div class="game_content">
          <div class="text-xl"> 赛事名称</div>
          <div class="text-xs mt-2 mb-2">赛事类型:</div>
          <div style="display: flex; flex-wrap: wrap;">
            <el-tag @click="shows3 = i" v-for="(item, i) in tag" :key="i" :class="shows3 == i ? 'option' : 'mr-3'" type="info">{{ item.name }}
            </el-tag>
          </div>
          <div class="text-xs mt-2 mb-2">参赛组别:</div>
          <div>
            <el-tag @click="shows4 = i" v-for="(item, i) in tag2" :key="i" :class="shows4 == i ? 'option' : 'mr-3'" type="info">{{ item.name }}
            </el-tag>
          </div>
          <div class="text-xs mt-2 mb-2">报名时间:</div>
          <div class="text-xs">2023年6月1日~2023年6月1日</div>
          <div class=" dbsd">
            <div class="flex">
              <a href="" class="ljbm">立即报名</a>
              <a href="" class="ljbm">咨询报名</a>
            </div>
            <div class="asd">
              TOURNAMENT INTRODUCTION
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 标题 -->
    <a class="ckgd" href=""> <img src="../assets/img/Service/ckgd.png" style="text-align: center;" alt=""></a>
  </div>
</template>
<script setup >
const show = ref(0)
const show2 = ref(0)
const shows = ref(0)
const shows2 = ref(0)
const shows3 = ref(0)
const shows4 = ref(0)

const tag2 = ref([{
  name: "芭蕾舞A组"
}, {
  name: "原创剧目B组"
}, {
  name: "中国舞A组"
}])
const tag = ref([{
  name: "独舞"
}, {
  name: "独舞"
}, {
  name: "独舞"
}])
</script>
<style lang="scss" scoped>
.ckgd {
  width: 10%;
  display: block;
  margin: 20px auto;
}

.game_box {
  width: 75%;
  margin: 25px auto;
  position: relative;

  .game_content {
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    width: 60%;
    padding: 15px 20px 15px 25px;
    border-radius: 4px;

    .ljbm:hover {
      border: 1px solid #0B6CFE;
      background-color: #0B6CFE;
      color: #fff;
    }

    .ljbm {
      display: block;
      border: 1px solid #0B6CFE;
      color: #0B6CFE;
      padding: 4px;
      font-size: 12px;
      border-radius: 4px;
      margin-top: 10px;
      margin-right: 15px;
    }

  }

  .option {
    color: #5E9EFE;
    border: 1px solid #0B6CFE;
    margin-right: 12px;
  }

  .game_content2 {
    position: absolute;
    top: 50%;
    left: 40%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    width: 60%;
    padding: 15px 20px 15px 25px;
    border-radius: 4px;

    .ljbm2 {
      display: block;
      background-color: #FF6569;
      color: #fff;
      padding: 4px 8px;
      font-size: 12px;
      border-radius: 4px;
      margin-top: 10px;
      margin-right: 15px;
    }
  }

  .dbsd {
    display: flex;
    justify-content: space-between;
    align-items: self-end;

    .asd {
      color: #98BEF7;
    }
  }

  .game_one {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;

    .left_img {
      width: 50%;
    }

    .game_riht {
      width: 50%;
      background-color: #98BEF7;
    }
  }
}

// 主体
// 标题
.title {
  text-align: center;
  font-size: 30px;
  color: #E5E5E5;
  position: relative;

  .titlezw {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #0B6CFE;
  }
}

.body {
  background-image: url('../assets/img/index/bageone.png');
  background-size: 100% 100%;
  // background-repeat: repeat-x;
}

img {
  width: 100%;
  height: 100%;
}
.move{
  display: none ;
}
@media screen and (max-width:1050px) {
  .text-xl {
    font-size: 20PX;
  }
}

@media screen and (max-width:1050px) {
  .text-xl {
    font-size: 20PX;
  }

  .game_box[data-v-ddcbbdb5] {
    width: 95%;
  }

  .game_box .game_content .ljbm {
    font-size: 8px;
  }

  .text-xs {
    font-size: 17px;
  }

  .text-xs{
    line-height: auto;
  }

}

@media screen and (max-width:750px) {
.title{
  font-size: 20px;
}
  .game_box{
    display: none;
  }
  .move{
  display: block ;
}
}
</style>
