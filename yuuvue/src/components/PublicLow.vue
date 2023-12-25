<template>
  <div class="Publiclowsss">
    <div class="Publiclow">
      <div class="pubo" v-for="(itme, q) in 2" :key="q">
        <div class="pubtitle">我的服务</div>
        <div class="pubwenz">妇科</div>
        <div class="pubwenz">骨科</div>
        <div class="pubwenz">胃肠</div>
        <div class="pubwenz">皮肤科医生</div>
        <div class="pubwenz">耳朵/鼻子/喉咙</div>
        <div class="pubwenz">精神病学</div>
      </div>
      <div class="pubo">
        <div class="pubtitle">关注我们</div>
        <div class="pubwenz2">
          <div class="teimg"><img src="../assets/index/te.jpg" alt="" /></div>
          <div class="te">推特</div>
        </div>
        <div class="pubwenz2">
          <div class="teimg"><img src="../assets/index/te.jpg" alt="" /></div>
          <div class="te">推特</div>
        </div>
        <div class="pubwenz2">
          <div class="teimg"><img src="../assets/index/te.jpg" alt="" /></div>
          <div class="te">推特</div>
        </div>
        <div class="pubwenz2">
          <div class="teimg"><img src="../assets/index/te.jpg" alt="" /></div>
          <div class="te">推特</div>
        </div>
        <div class="pubwenz2">
          <div class="teimg"><img src="../assets/index/te.jpg" alt="" /></div>
          <div class="te">推特</div>
        </div>
      </div>
      <div class="hospthre2">
        <div class="thre2-tit">OPD时间</div>
        <div class="thre2-cont">周至周五:上午 09点至晚上07点</div>
        <div class="thre2-cont">周六: 上午09点至晚上07点</div>
        <div class="thre2-cont">周日: 上午09点至晚上07点</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.pubwenz2 {
  display: flex;
  color: #474c54;
  line-height: 39px;
  margin-bottom: 10px;
}
.te {
  margin-left: 10px;
}
.teimg {
    width: 30px;
    height: 30px;
  img {
    border-radius: 50%;
  }
}
.pubo {
  width: 22%;
}
.hospthre2 {
  padding: 20px;
  width: 27%;
  background-color: #133575;
  color: #fff;
  .thre2-tit {
    font-size: 20px;
  }
  .thre2-cont {
    color: #d2e1f5;
    border-bottom: 1px solid #0e2e6b;
    line-height: 36px;
    line-height: 50px;
    font-size: 20px;
  }
}
.pubwenz {
  color: #474c54;
  line-height: 39px;
}
.pubtitle {
  color: #fff;
  font-size: 20px;
  margin-bottom: 20px;
}
.Publiclow {
  width: 70%;
  justify-content: space-between;
  display: flex;
  margin: auto;
}
.Publiclowsss {
  background-color: #1e1f22;
  padding: 50px 0;
}
@media screen and (max-width: 768px) {
  .pubo{
    width: 100%}
  .Publiclow {
  width: 95%;
  flex-wrap: wrap;
  margin: auto;
}.hospthre2 {
  padding: 20px;
  width: 95%;
  margin: auto;
  background-color: #133575;
  color: #fff;}
}
</style>
