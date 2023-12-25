<!-- 风格指南 -->
<template>
  <div>
    <div class="fgzhimg"><img src="../src/assets/fgzn.png" alt="" /></div>
    <div class="fgznbody">
      <div class="box1">
        <div class="title">字体系列</div>
        <div class="box1-bot">
          <div class="box1-1">
            <div class="box1fb">对于标题</div>
            <div class="box1z">梅里韦瑟</div>
          </div>
          <div class="box1-1">
            <div class="box1fb">对于底座</div>
            <div class="box1z">梅里韦瑟无斯</div>
          </div>
        </div>
      </div>
      <div class="box1">
        <div class="title">字体排印学</div>
        <h1>H1-标题-34pX</h1>
        <h2>H2-标题- 24px</h2>
        <h3>H3-标题- 21px</h3>
        <h4>H4-标题- 16px</h4>
        <h5>H5-标题- 14px</h5>
        <h6>H6-根题-12px</h6>
      </div>
      <div class="box1">
        <div class="title">发短信</div>
        <p class="z1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce eu lacus imperdiet, cursus
          erat vitae, dictum is et euismod sedroin velrhoncus muisque mattis dictum etiarem ipsum
          dolor sit amet, consectetur adipiscing elit.Fusce eu lacus impsus erat vitae, dictum
          nusmod sed nunc.Proin vel rhoncus maurisuisque mattism ipsum dolor sit amet. consectetur
          adipiscing elit.Fusce eu lacus imperdiet, cursus erat vitadictum nulla.Mauris et euismod
          sed nunc.
        </p>
        <div class="p2">
          Consectetur adipiscing elit.Fusce eu lacus imperdiet, cursus erat vitae, dictum is et
          euismod sedroin vel rhoncus muisque mattis dictum etiarem ipsum dolor sit
          amet，consectetur adipiscing elit.Fusce eu lacus impsus erat vitae dictum nusmod sed
          nuncroin vel rhoncus Maurisuisque mattism ipsum dolor sit amet consectetur adipiscing
          elit.
        </div>
        <div class="title">标题在这里</div>
        <div class="z1">
          Lorem ipsum dolor sit amet，consectetur adipiscing elit.Fusce eu lacus imperdiet，cursus
          erat vitae，dictum is et euismod sedroin vel rhoncus muisque mattis dictum etiarem ipsum
          dolor sit amet，consectetur adipiscing elit.Fusce eu lacus impsus erat vitae，dictum
          nusmod sed nunc.Proin vel rhoncus maurisuisque mattism ipsum dolor sit amet, consectetur
          adipiscing elit.Fusce eu lacus imperdiet, cursus erat vitadictum nulla.Mauris et euismod
          sed nunc.
        </div>
        <div class="title2">标题在这里</div>
        <div class="z2">
          Etiarem ipsum dolor sit amet, consectetur adipiscing elit.Fusce eu lacus impsus erat
          vitae, dictum nusmod sed nunc.Proin vel rhoncus maurisuisque mattism ipsum dolor sit
          amet，consectetur adipiscing elit.Fusce eu lacus imperdiet，cursus erat vitadictum
          nulla.Mauris et euismod sed nunce.
        </div>
        <div class="title3">标题在这里</div>
        <div class="z3">
          Etiarem ipsum dolor sit amet, consectetur adipiscing elit.Fusce eu lacus impsus erat
          vitae, dictum nusmod sed nunc.Proin vel rhoncus maurisuisque mattism ipsum dolor sit
          amet，consectetur adipiscing elit.Fusce eu lacus imperdiet，cursus erat vitadictum
          nulla.Mauris et euismod sed nunce.
        </div>
        <div class="box1-2">
          <div class="title2">标题在这里</div>
          <div class="z2">
            Etiarem ipsum dolor sit amet, consectetur adipiscing elit.Fusce eu lacus impsus erat
            vitae, dictum nusmod sed nunc.Proin vel rhoncus maurisuisque mattism ipsum dolor sit
            amet，consectetur adipiscing elit.Fusce eu lacus imperdiet，cursus erat vitadictum
            nulla.Mauris et euismod sed nunce.
          </div>
        </div>
      </div>
      <div class="box1">
        <div class="title">列表</div>
        <div class="box2">
          <div class="box2-1">
            <div class="fbt">无序</div>
            <div class="project-l">
              <div class="proj" v-for="(itme, i) in 4" :key="i">
                <div class="sjt"><img src="../src/assets/sjt.png" alt="" /></div>
                Dolor pulvinar etiam.
              </div>
            </div>
          </div>
          <div class="box2-1">
            <div class="fbt">命令</div>
            <div class="project-l">
              <div class="proj" v-for="(itme, i) in 4" :key="i">
                <div class="sjt">{{ itme++ }}</div>
                Dolor pulvinar etiam.
              </div>
            </div>
          </div>
          <div class="box2-1">
            <div class="fbt">阿尔滕纳特</div>
            <div class="project-l">
              <div class="proj2" v-for="(itme, i) in 4" :key="i">
                <div class="sjt">{{ itme++ }}</div>
                Dolor pulvinar etiam.
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 块引用 -->
      <div class="box1">
        <div class="title">块引用</div>
        <div class="blog-left-4">
          <div class="tit5">
            “Morbi justo nundignissim non scelerisque necscelerisque acantorem ipsumsitamet ante
            ipsum pis in faucibus' ”
          </div>
          <div class="name5">-约输尼-精罗斯</div>
        </div>
      </div>
      <!-- 块引用 -->
      <!-- 调色板 -->
      <div class="box1">
        <div class="title">调色板</div>
        <div class="box5dis">
          <div class="box5">
            <div class="y1"></div>
            <div class="sss">
              <div class="def">Default</div>
              <div class="ys">#143575</div>
            </div>
          </div>
          <div class="box5">
            <div class="y2"></div>
            <div class="sss">
              <div class="def">Primary</div>
              <div class="ys">#25aae1</div>
            </div>
          </div>
          <div class="box5">
            <div class="y3"></div>
            <div class="sss">
              <div class="def">#25aae1</div>
              <div class="ys">#252728</div>
            </div>
          </div>
          <div class="box5">
            <div class="y4"></div>
            <div class="sss">
              <div class="def">Secondary</div>
              <div class="ys">#768185</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 调色板 -->
      <!-- buttons -->
      <div class="box1">
        <div class="title">buttons</div>
        <div class="busbox">
          <div class="busbox1">
            <button class="buus">Extra Small Button</button>
            <button class="buus">Small Button</button>
            <button class="buus">Default Button</button>
            <button class="buus">Large Buttonn</button>
          </div>
          <div class="busbox1">
            <button class="buus2">Extra Small Button</button>
            <button class="buus2">Small Button</button>
            <button class="buus2">Default Button</button>
            <button class="buus2">Large Buttonn</button>
          </div>
          <div class="busbox2">
            <div class="title4">link</div>
            <div><a href="" class="ass">link</a></div>
          </div>
        </div>
      </div>
      <!-- buttons -->
      <!--Form Elements -->
      <div class="box1">
        <div class="title">Form Elements</div>
        <form action="">
          <input type="text" name="" placeholder="INPUT TYPE" class="inpu" />
        </form>
        <textarea rows="10" cols="40" class="textare"></textarea>
        <div class="mb-2 flex items-center text-sm">
          <el-radio-group v-model="radio1" class="ml-4">
            <el-radio label="1" size="large">Option 1</el-radio>
            <el-radio label="2" size="large">Option 2</el-radio>
          </el-radio-group>
        </div>
        <div>
          <el-checkbox v-model="checked1" label="Option 1" size="large" />
          <el-checkbox v-model="checked2" label="Option 2" size="large" />
        </div>
      </div>
      <!-- Form Elements -->
      <!--Form Elements -->
      <div class="box1">
        <div class="title">Tables</div>
        <div class="title57">Default Table</div>
        <div class="fbt">无序</div>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column prop="ss" label="#" width="180" />
          <el-table-column prop="date" label="Date" width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="address" label="Address" />
        </el-table>
      </div>
      <!-- Form Elements -->
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const tableData = [
  { ss: '1', date: '2016-05-03', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
  { ss: '2', date: '2016-05-02', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
  { ss: '3', date: '2016-05-04', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' },
  { ss: '4', date: '2016-05-01', name: 'Tom', address: 'No. 189, Grove St, Los Angeles' }
]
const checked1 = ref(true)
const checked2 = ref(false)
const radio1 = ref('1')
</script>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.title57 {
  font-size: 18px;
}
.textare {
  width: 40%;
  border: none;
  box-shadow: 0 0 5px #ccc;
  resize: none;
  border-radius: 5px;
  text-indent: 2em;
}
.inpu {
  margin: 15px 0 15px 0;
  width: 40%;
  border: none;
  box-shadow: 0 0 5px #ccc;
  height: 60px;
  border-radius: 5px;
  text-indent: 2em;
}
.ass {
  color: #435173;
  text-decoration: underline;
}
.title4 {
  font-size: 35px;
}
.busbox1 {
  width: 25%;
}
.busbox {
  display: flex;
}
.buus {
  margin-bottom: 15px;
  display: block;
  color: #fff;
  padding: 15px;
  border-radius: 5px;
  border: none;
  background-color: #143575;
}
.buus2 {
  margin-bottom: 15px;
  display: block;
  color: #fff;
  padding: 15px;
  border-radius: 5px;
  border: none;
  background-color: #25abe2;
}
// buttons

// 调色板
.box5dis {
  display: flex;
  margin-top: 15px;
}
.box5 {
  width: 17%;
  margin-right: 15px;
  text-align: center;
}
.def {
  margin: 10px 0 10px 0;
}
.ys {
  color: #989c9d;
}
.y1 {
  width: 100%;
  height: 192px;
  border-radius: 50%;
  background-color: #133575;
}
.y2 {
  width: 100%;
  height: 192px;
  border-radius: 50%;
  background-color: #25aae1;
}
.y4 {
  width: 100%;
  height: 192px;
  border-radius: 50%;
  background-color: #768185;
}
.y3 {
  width: 100%;
  height: 192px;
  border-radius: 50%;
  background-color: #252728;
}
// 调色板

// 块引用
.name5 {
  margin-top: 15px;
}
.tit5 {
  font-size: 25px;
  line-height: 40px;
}
.blog-left-4 {
  width: 70%;
  padding: 20px;
  border-radius: 8px;
  background-color: #133575;
  color: #fff;
}
// 块引用
.box2 {
  display: flex;
  justify-content: space-between;
  .box2-1 {
    width: 31%;
  }
  .proj2 {
    display: flex;
    color: #989c9d;
    border-bottom: 1px solid#ccc;
  }
}
.fbt {
  font-size: 20px;
  color: #716a72;
  margin-top: 10px;
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
.box1-2 {
  border-radius: 5px;
  width: 95%;
  padding: 10px;
  margin: 15px auto;
  box-shadow: 0 0 3px #ccc;
}
.z1 {
  color: #ccc;
}
.z2 {
  color: #ccc;
  font-size: 14px;
}
.z3 {
  color: #ccc;
  font-size: 13px;
}
.p2 {
  margin-top: 15px;
  color: #4b5472;
  font-size: 18px;
}
.box1 {
  padding: 30px 0;
  border-bottom: 1px solid #ccc;
}
.box1-1 {
  line-height: 70px;
  margin-right: 50px;
}
.box1z {
  font-size: 40px;
}
.box1fb {
  color: #ccc;
  font-size: 20px;
}
.box1-bot {
  display: flex;
}
.title2 {
  font-size: 25px;
  margin-bottom: 10px;
  margin-top: 10px;
}
.title3 {
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 10px;
}
.title {
  font-size: 30px;
  margin-bottom: 15px;
  margin-top: 15px;
}
.fgznbody {
  width: 60%;
  margin: 15px auto;
}
.fgzhimg {
  width: 100%;
}
.project-l {
  width: 100%;
  line-height: 30px;
}
@media screen and (max-width: 768px) {
  .box1-bot {
    display: block;
  }
  .fgznbody {
    width: 95%;
    margin: 15px auto;
  }
  .box2 {
    display: block;
    justify-content: space-between;
  }
  .project-l {
    width: 100%;
    line-height: 30px;
  }
  .box2 .box2-1 {
    width: 100%;
  }
  .blog-left-4 {
    width: 100%;
    padding: 0;
    border-radius: 8px;
    background-color: #133575;
    color: #fff;
  }
  .tit5 {
    font-size: 15px;
    line-height: 40px;
  }
  .box5dis {
    display: block;
    margin-top: 15px;
  }
  .box5 {
    width: 100%;
    margin-right: 15px;
    text-align: center;
    display: flex;
  }
  .y1 {
    width: 29%;
    height: 192px;
    border-radius: 50%;
    background-color: #133575;
    margin-bottom: 20px;
  }
  .y2 {
    width: 29%;
    height: 192px;
    border-radius: 50%;
    background-color: #133575;
    margin-bottom: 20px;
  }
  .y3 {
    width: 29%;
    height: 192px;
    border-radius: 50%;
    background-color: #133575;
    margin-bottom: 20px;
  }
  .y4 {
    width: 29%;
    height: 192px;
    border-radius: 50%;
    margin-bottom: 20px;
    background-color: #133575;
  }
  .sss{
    margin: 67px 0 0 35px;
  }.busbox {
  display: block;
}.busbox1{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}.inpu {
    margin: 15px 0 15px 0;
    width: 100%;
    border: none;
    box-shadow: 0 0 5px #ccc;
    height: 60px;
    border-radius: 5px;
    text-indent: 2em;
}.textare[data-v-129bd53a] {
    width: 100%;
    border: none;
    box-shadow: 0 0 5px #ccc;
    resize: none;
    border-radius: 5px;
    text-indent: 2em;
}


}
</style>
