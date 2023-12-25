<!-- 服务列表 -->
<template>
  <div>
    <!-- 顶部 -->
    <div class="top">
      <img src="../src/assets/topp.jpg" alt="" />
      <div class="titll">
        <div class="ti1">妇科</div>
        <div class="ti2">家/服务单</div>
      </div>
    </div>
    <!-- 顶部 -->
    <div class="serbody">
      <!-- 左侧 -->
      <div class="serriht">
        <div class="serr-1">
          <div class="pubwenz" v-for="(itme, i) in pubz" :key="i">
            {{ itme.titl }}
            <div class="jt"><img src="../src/assets/jts.png" alt="" /></div>
          </div>
        </div>
        <div class="serr-2">
          <div class="serr-titl">预约</div>
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item class="iputt2">
              <el-input v-model="formInline.user" placeholder="名字" class="iputt" />
            </el-form-item>
            <el-form-item class="iputt2">
              <el-input v-model="formInline.eml" placeholder="电子邮件" class="iputt" />
            </el-form-item>
            <el-form-item class="iputt2">
              <el-input v-model="formInline.tel" placeholder="电话" class="iputt" />
            </el-form-item>
            <el-form-item class="iputt2">
              <el-date-picker
                v-model="formInline.date"
                type="date"
                placeholder="日期"
                style="width: 100%; height: 45px"
              />
            </el-form-item>
            <el-form-item class="iputt2">
              <el-select v-model="formInline.region" placeholder="" class="iputt">
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
            </el-form-item>
            <el-form-item class="iputt2">
              <el-button type="primary" @click="onSubmit" class="butt">预约</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="serr-3">
          <div class="emer">紧急预约</div>
          <div class="ce3-con">事故和紧急情况是没有，人放过的事情,也 没有偏见。</div>
          <button class="buterr-3">联系我们</button>
        </div>
      </div>
      <div class="seleft">
        <div><img src="../src/assets/fk1.png" alt="" /></div>
        <div class="zit">
          Donec finibus massa sedelit sollicitudinnon congueleo sagittiurabitur egeturna place lorem
          dignissim lorem acmaximus leousce vulputate eros risuseget dignissim leo scelerisque
          iaecenas dignissim elementumnisl ut sagitillam varius enimat nullas.
        </div>
        <div class="zit">
          Egeturna place lorem dignissim lorem acmaximus leousce vulputate eros risuseget dignissim
          leo scelerisque iaecenas dignissim elementumnisl ut sagittiullam varius enimate.
        </div>
        <div class="emer">紧急预约</div>
        <div class="project">
          <div class="project-l">
            <div class="proj" v-for="(itme, i) in 5" :key="i">
              <div class="sjt"><img src="../src/assets/sjt.png" alt="" /></div>
              腹腔镜输卵管结扎术
            </div>
          </div>
          <div class="project-l">
            <div class="proj" v-for="(itme, i) in 5" :key="i">
              <div class="sjt"><img src="../src/assets/sjt.png" alt="" /></div>
              腹腔镜输卵管结扎术
            </div>
          </div>
        </div>
        <div class="zit">
          Duis malesuadavelitvel dapibus tinciduntst magna lobortis annec pulvinar lorem massa et
          nisI.莫尔 比维维拉夸姆.伏隔膜(Morbi viverraquam accumsan eleifend pulvinar libero mauris
          ultricies leeu auctor liberonunc ut massaoin quis dignissim seusce aliqueteratet ultricies
          volutpaunc tortor iaculis risus)。
        </div>
        <div class="zit">
          Placerat lorem dignissim lorem acmaximus leousce vulputate eros risuseget dignissimleo
          scelerisque iaecenas dignissim elementumnisI ut sagittiullam varius
          enimate.莫尔比维维拉夸姆伏 隔膜(Morbi viverraquam accumsan eleifend pulvinar libero mauris
          ultricies leeu auctor liberonunc ut massaoin quis dignissim seusce aliqueteratet ultricies
          volutpaunc tortor iaculis risus)。Duis malesuadavelitvel dapibus tinciduntst magna
          lobortis annec pulvinar lorem massa et nisl.
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from 'vue'

const formInline = reactive({
  user: '',
  eml: '',
  tel: '',
  date: ''
})

const onSubmit = () => {
  console.log('submit!')
}
</script>
<script>
export default {
  data() {
    return {
      pubz: [
        { titl: '妇科' },
        { titl: '心脏病学' },
        { titl: '骨科' },
        { titl: '眼科学' },
        { titl: '耳朵/鼻子/喉咙' },
        { titl: '胃肠' },
        { titl: '皮肤科医生' },
        { titl: '心理医生' },
        { titl: '普通外科医生' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.project {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  .project-l {
    width: 50%;
    line-height: 30px;
  }
  .proj {
    display: flex;
    color: #989c9d;
    .sjt {
      width: 10px;
      height: 10px;
      margin-right: 10px;
    }
  }
}
.zit {
  color: #989c9d;
  line-height: 32px;
  font-size: 19px;
  margin-bottom: 20px;
}
.seleft {
  width: 65%;
}
// 右侧
// 紧急预约
.buterr-3 {
  background-color: #25aae2;
  border: none;
  padding: 15px;
  border-radius: 5px;
  color: #fff;
}
.ce3-con {
  color: #787682;
  font-size: 19px;
  margin: 15px 0 15px 0;
}
.emer {
  color: #787682;
  font-size: 25px;
}
.serr-3 {
  box-shadow: 0 0 5px #ccc;
  padding: 20px;
  border-radius: 8px;
  margin-top: 15px;
}
// 紧急预约
// 预约输入框
.butt {
  width: 100%;
  height: 40px;
  background-color: #25aae2;
}
.iputt {
  width: 100%;
  height: 45px;
}
.iputt2 {
  width: 100%;
  height: 45px;
}
.demo-form-inline {
  width: 100%;
}
.serr-2 {
  box-shadow: 0 0 5px #ccc;
  padding: 20px;
  border-radius: 8px;
  margin-top: 15px;
  .serr-titl {
    text-align: center;
    font-size: 20px;
    color: #989c9d;
    margin-bottom: 15px;
  }
}
// 预约输入框
.serr-1 {
  background-color: #25aae2;
  padding: 20px;
  border-radius: 8px;
  line-height: 30px;
  .pubwenz {
    display: flex;
    justify-content: space-between;
    color: #fff;
  }
  .jt {
    width: 18px;
  }
}
.serriht {
  width: 30%;
}
.serbody {
  width: 70%;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
}
.top {
  position: relative;
  .titll {
    position: absolute;
    top: 20%;
    left: 15%;
    width: 70%;
    margin: auto;
    color: #fff;
    .ti1 {
      font-size: 50px;
    }
    .ti2 {
      font-size: 14px;
      margin-top: 15px;
    }
  }
}
@media screen and (max-width: 768px) {
  .serbody {
    width: 95%;
    margin: 20px auto;
    display: block;
    justify-content: space-between;
  }
  .serriht {
    width: 95%;
    margin: auto;
  }
  .seleft {
    width: 95%;
    margin: auto;
  }
  .zit {
    color: #989c9d;
    line-height: 32px;
    font-size: 11px;
    margin-bottom: 20px;
  }
  .project {
    margin-top: 20px;
    display: block;
  }
  .project .project-l {
    width: 100%;
    line-height: 30px;
    margin-bottom: 15px;
  }
  .top .titll .ti1[data-v-40c8e170] {
    font-size: 8px;
  }
}
</style>
