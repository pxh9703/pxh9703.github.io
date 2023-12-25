<template>
  <div>
    <div><img src="../src/assets/lxwo.png" alt="" /></div>
    <div class="lxwo255">
      <div class="lxw-left">
        <div class="qd">取得联系</div>
        <div class="tglx">通过联系表格给我们留言。我们将尽最大努力尽快回复。</div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item class="forw">
            <el-input v-model="formInline.name" placeholder="名字" class="name" /> </el-form-item
          ><el-form-item class="forw">
            <el-input
              v-model="formInline.emal"
              placeholder="电子邮件"
              class="name"
            /> </el-form-item
          ><el-form-item class="forw">
            <el-input v-model="formInline.tel" placeholder="电话" class="name" /> </el-form-item
          ><el-form-item class="forw">
            <el-input v-model="formInline.zt" placeholder="主题" class="name" />
          </el-form-item>
          <textarea rows="10" cols="40" class="textss" placeholder="消息"></textarea>
          <button type="primary" @click="onSubmit" class="tj">给我们留言</button>
        </el-form>
      </div>
      <div class="lxw-riht">
        <div>
          <div class="wz">
            <div class="imgwz"><img src="../src//assets/位置.png" alt="" /></div>
            <div class="wzr">
              <div>医院位置</div>
              <div>4499巴顿巷罗利，NC 7603</div>
            </div>
          </div>
          <div class="wz">
            <div class="imgwz"><img src="../src//assets/tel.png" alt="" /></div>
            <div class="wzr">
              <div>医院位置</div>
              <div>4499巴顿巷罗利，NC 7603</div>
            </div>
          </div>
          <div class="wz">
            <div class="imgwz"><img src="../src//assets/邮箱.png" alt="" /></div>
            <div class="wzr">
              <div>医院位置</div>
              <div>4499巴顿巷罗利，NC 7603</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <baidu-map
        class="map"
        ak="3IVDljG2YMK6vETgaPKenQdWQLZTxwnr"
        v="3.0"
        type="API"
        :center="{ lng: 116.404, lat: 39.915 }"
        :zoom="15"
      ></baidu-map>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { BaiduMap } from 'vue-baidu-map-3x'
const formInline = reactive({
  name: '',
  emal: '',
  tel: '',
  zt: ''
})

const onSubmit = () => {
  console.log('submit!')
}
</script>
<style lang="scss" scoped>
.map {
  width: 100%;
  height: 300px;
}
.wzr {
  color: #fff;
  font-size: 20px;
  margin-left: 15px;
  line-height: 40px;
  margin-bottom: 30px;
}
.imgwz {
  width: 5 0px;
  height: 50px;
}
.wz {
  display: flex;
}
.lxw-riht {
  height: 443px;
  padding: 20px;
  width: 24%;
  border-radius: 10px;
  background-color: #25aae2;
}
// 表单
.tj {
  padding: 15px;
  border: none;
  margin-top: 15px;
  background-color: #25abdf;
  color: #fff;
  border-radius: 5px;
}
.textss {
  padding: 10px;
  width: 100%;
  border: none;
  box-shadow: 0 0 4px #ccc;
  resize: none;
}
.forw {
  width: 46%;
}
.name {
  width: 100%;
  height: 50px;
}
.demo-form-inline {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
// 表单
.lxw-left {
  width: 67%;
  box-shadow: 0 0 3px #ccc;
  border-radius: 7px;
  padding: 15px;
  .qd {
    font-size: 30px;
    color: #2a3037;
  }
  .tglx {
    color: #ccc;
    font-size: 18px;
    margin: 10px 0 0 0;
  }
}
.lxwo255 {
  width: 70%;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
}
@media screen and (max-width: 768px) {
  .wzr[data-v-daca7d83] {
    color: #fff;
    font-size: 14px;
    margin-left: 15px;
    line-height: 40px;
    margin-bottom: 30px;
  }
  .lxwo255 {
    width: 95%;
    margin: auto;
    display: block;
  }
  .lxw-left {
    width: 100%;
    box-shadow: 0 0 3px #ccc;
    border-radius: 7px;
    padding: 0;
  }
  .lxw-left .qd {
    font-size: 30px;
    color: #2a3037;
    margin: 20px 0 10px 5%;
  }
  .lxw-left .tglx {
    color: #ccc;
    font-size: 18px;
    margin: 20px 0 10px 5%;
  }
  .forw {
    width: 90%;
    margin: 15px auto;
  }
  .textss[data-v-daca7d83] {
    width: 90%;
    margin: auto;
    border: none;
    box-shadow: 0 0 4px #ccc;
    resize: none;
  }
  .tj[data-v-daca7d83] {
    padding: 15px;
    border: none;
    margin: 15px 0 15px 5%;
    background-color: #25abdf;
    color: #fff;
    border-radius: 5px;
  }
  .lxw-riht {
    height: auto;
    padding: 0;
    width: 100%;
    border-radius: 10px;
    background-color: #25aae2;
    margin: 20px 0 15px 0;
  }
  .wz[data-v-daca7d83] {
    display: flex;
    margin: 15px 0 0 5%;
  }
}
</style>
