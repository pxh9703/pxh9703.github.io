<template>
  <div>
    <div class="game_box" v-for="item in game" key="item">
      <div class="game_one">
        <div class="left_img"><img :src="item.img" alt=""></div>
      </div>
      <!-- 内容 -->
      <div class="game_content">
        <div class="text-2xl"> 赛事名称</div>
        <div class="text-xs mt-3 mb-3">赛事类型:</div>
        <div class="lxcontent">
          <el-tag @click="show = i" v-for="(items, i) in item.tag" :key="i" :class="show == i ? 'option' : 'option2'" type="info" size="small">{{ items.name }}
          </el-tag>
        </div>
        <div class="text-xl mt-3 mb-3">参赛组别:</div>
        <div class="lxcontent">
          <el-tag @click="show2 = i" v-for="(itemss, i) in item.tag2" :key="i" :class="show2 == i ? 'option' : 'option2'" type="info" size="small">{{ itemss.name }}
          </el-tag>
        </div>
        <div class="text-xl mt-3 mb-3">报名时间:</div>
        <div class="text-xs">2023年6月1日~2023年6月1日</div>
        <div class=" dbsd">
          <div class="flex ">
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
</template>

<script lang="ts" setup>
const show = ref(0)
const show2 = ref(0)
const game = ref([{
  s:"show",
  img: "/_nuxt/assets/img/game/move1.png",
  lx: "",
  zb: "",
  tag: [
    {
      name: "独舞"
    }, {
      name: "独舞"
    }, {
      name: "独舞"
    }], tag2: [{
      name: "芭蕾舞A组"
    }, {
      name: "原创剧目B组"
    }, {
      name: "中国舞A组"
    }]
}, {
  img: "/_nuxt/assets/img/game/move2.png",
  lx: "",
  zb: "",
  tag: [
    {
      name: "独舞"
    }, {
      name: "独舞"
    }, {
      name: "独舞"
    }], tag2: [{
      name: "芭蕾舞A组"
    }, {
      name: "原创剧目B组"
    }, {
      name: "中国舞A组"
    }]
},])

</script>

<style lang="scss" scoped>
.game_box {
  width: 90%;
  margin: 25px auto;
  position: relative;

  .game_content {
    box-shadow: 0 0 5px #ccc;
    position: absolute;
    top: 50%;
    left: 70%;
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

  .option2 {

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
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: self-end;
  }



  .game_one {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;

    .left_img {
      width: 70%;
    }

  }
}

.asd {
  color: #98BEF7;
  font-size: 10px;
}

img {
  width: 100%;
  height: 100%;
}

@media screen and (max-width:570px) {
  .text-2xl {
    font-size: 1rem;
    line-height: 0.45rem;
    margin-bottom: 0.25rem;
  }



  .game_box .game_content .ljbm[data-v-fee052f3] {
    display: block;
    border: 1px solid #0B6CFE;
    color: #0B6CFE;
    padding: 4px;
    font-size: 6px;
    border-radius: 4px;
    margin-top: 3px;
    margin-right: 15px;
  }

  .text-xl {
    margin-bottom: 0.45rem;
    margin-top: 0.45rem;
    font-size: 0.75rem;
    line-height: 0.75rem;
  }

  .asd {
    color: #98BEF7;
    font-size: 6px;
    width: 32%;
  }
}

@media screen and (max-width:500px) {


  .text-xs {
    margin-bottom: 0;
    margin-top: 0.45rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  //   .lxcontent{
  //     display: -webkit-box;
  //     /* 设置或检索伸缩盒对象的子元素的排列方式 。 */
  //     -webkit-box-orient: vertical;
  //     /*  用来限制在一个块元素显示的文本的行数 */
  //     -webkit-line-clamp: 1;
  //     overflow: hidden;
  //   }
}

@media screen and (max-width:460px) {
  .game_box .game_content .ljbm {
    display: block;
    border: 1px solid #0B6CFE;
    color: #0B6CFE;
    padding: 4px;
    font-size: 4px;
    border-radius: 4px;
    margin-top: 3px;
    margin-right: 15px;
  }

  .flex {
    width: 70%;
  }
}

@media screen and (max-width:425px) {
  .text-2xl[data-v-fee052f3] {
    font-size: 0.85rem;
    line-height: 0.45rem;
    margin-bottom: 0.25rem;
  }

  text-xs[data-v-fee052f3] {
    font-size: 0.65rem;
  }

  .option {
    color: #5E9EFE;
    border: 1px solid #0B6CFE;
    font-size: 8px;
    margin-right: 12px;
  }

  .option2 {
    border: 1px solid #0B6CFE;
    margin-right: 12px;
    font-size: 8px;
  }
}
</style>
