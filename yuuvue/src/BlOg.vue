<template>
  <div>
    <div><img src="../src/assets/blok/bok.png" alt="" /></div>
    <div class="blog">
      <div class="blog-left">
        <div class="blog-left-1" v-for="(itme, i) in blogs" :key="i">
          <div><img :src="itme.image" alt="" /></div>
          <div class="blog-left-12">
            <div class="title">{{ itme.title }}</div>
            <div class="rl">
              <div class="hos7-img"><img src="./assets/index/rl.png" alt="" /></div>
              <div class="zit2">25 7月，2020</div>
              <div class="hos7-img"><img src="./assets/index/user.png" alt="" /></div>
              <div class="zit5">由管理员</div>
            </div>
            <div class="zit">
              {{ itme.zit }}
            </div>
            <button class="buterr-3">阅读更多</button>
          </div>
        </div>
        <div class="blog-left-123">
          <div class="title">寻找最好的医院在印度?</div>
          <div class="rl">
            <div class="hos7-img"><img src="./assets/index/rl.png" alt="" /></div>
            <div class="zit2">25 7月，2020</div>
            <div class="hos7-img"><img src="./assets/index/user.png" alt="" /></div>
            <div class="zit5">由管理员</div>
          </div>
          <div class="zit">
            Nunc cursus leo risus non ac efficitur vel sed Mauris iaculis finibus ex et viverra
            lorem, Aliquam blandit ornare justo，in sagittis sem ornare sit aditpat.
          </div>
          <button class="buterr-3">阅读更多</button>
        </div>
        <div class="blog-left-5">
          <div class="tit5">
            "Duis non quam sagittis ultricies sem vitae luctussem In bibidum pharetra”
          </div>
          <div class="name5">-约输尼-精罗斯</div>
        </div>
        <div class="pagination">
          <a href="#">&laquo;</a>
          <a href="#">1</a>
          <a class="active" href="#">2</a>
          <a href="#">3</a>
          <a href="#">&raquo;</a>
        </div>
      </div>
      <div class="blg-riht">
        <div class="blg-riht1">
          <el-input
                  placeholder="请输入"
                  class="input"
                  @focus="focus"
                >
                <el-icon><Search /></el-icon>
                </el-input>
        </div>
        <div class="blg-riht1">
          <div class="lb">类别</div>
          <div class="hg">
            <div class="sblg-riht1im" v-for="(itme, e) in riht1im" :key="e">
              <div class="sjt"><img src="../src/assets/sjt.png" alt="" /></div>
              {{ itme.title }}
            </div>
          </div>
        </div>
        <div class="blg-riht1">
          <div class="lb">档案</div>
          <div class="hg">
            <div class="sblg-riht1im" v-for="(itme, e) in riht1im2" :key="e">
              <div class="sjt"><img src="../src/assets/sjt.png" alt="" /></div>
              {{ itme.title }}
            </div>
          </div>
        </div>
        <div class="blg-riht1">
          <div class="lb">最近的帖子</div>
          <div class="sblg-riht1im" v-for="(itme, e) in zjtz" :key="e">
            <div class="sjt2"><img :src="itme.image" alt="" /></div>
            <div class="sjtt2">
              <div class="xz">{{ itme.xz }}</div>
              <div class="sjtb">
                <div class="rlimg"><img src="../src/assets/index/rl.png" alt="" /></div>
                {{ itme.time }}
              </div>
            </div>
          </div>
        </div>
        <div class="blg-riht1">
          <div class="lb">标签</div>

          <div class="sblg-riht1im-3">
            <button class="butt2" v-for="(itme, e) in but2" :key="e">{{ itme.titl }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      but2: [
        { titl: '多色人' },
        { titl: '医院' },
        { titl: '耳鼻喉科' },
        { titl: '妇科' },
        { titl: '骨科' },
        { titl: '喉' }
      ],
      zjtz: [
        {
          image: '../src/assets/blok/1.png',
          xz: '寻找最好的医院在印度?',
          time: ' 23七月， 2020'
        },
        {
          image: '../src/assets/blok/2.png',
          xz: '在世界之际糖尿病日',
          time: ' 23月，2020'
        },
        {
          image: '../src/assets/blok/3.png',
          xz: '如何找到多个艾哈迈达巴德的医院?',
          time: ' 23七月， 2020'
        }
      ],
      riht1im: [
        {
          title: '妇科'
        },
        {
          title: '心脏病学'
        },
        {
          title: '骨科'
        },
        {
          title: '眼科学'
        },
        {
          title: '耳朵/鼻子/喉咙'
        },
        {
          title: '胃肠'
        },
        {
          title: '皮肤科医生'
        },
        {
          title: '心理医生'
        },
        {
          title: '普通外科医生科'
        }
      ],
      riht1im2: [
        {
          title: '三月(2018)'
        },
        {
          title: '二月(2018)'
        },
        {
          title: '一月(2018)'
        },
        {
          title: '十二月(2017)'
        },
        {
          title: '十一月(2017)'
        }
      ],
      blogs: [
        {
          image: '../src/assets/blok/1.png',
          title: '寻找最好的医院在印度?',
          zit: ' Nunc cursus leo risus non ac efficitur vel sed Mauris iaculis finibus ex et viveriquam blandit ornare justo，in sagittis sem ornare sit lorem ipsu dolro sit ameamet.'
        },
        {
          image: '../src/assets/blok/2.png',
          title: '如何找到多专科医院在艾哈迈达巴德??',
          zit: ' Eleifend flls tortor quis diam praesent feugiat in metus tempor faucibus maecenas egetconsectetur curabitur hendrerit fingill enim acumsan turpis aliquam rigila.'
        },
        {
          image: '../src/assets/blok/3.png',
          title: '寻找最好的医院在印度?',
          zit: ' Consectetur et interdum et vulputate mauris vestibulum llamncorper sapien eget sodalesfeugiat etiam ut justo ut sem molestilorem ipsum dolot sit non.'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.butt2 {
  background-color: #8c9ba1;
  color: #fff;
  border: none;
  border-radius: 7px;
  padding: 15px;
  margin-right: 15px;
  margin-bottom: 15px;
}
.sblg-riht1im-3 {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;
  color: #989c9d;
  font-size: 14px;
}
.xz {
  font-size: 17px;
}
.sjtb {
  display: flex;
  font-weight: bold;
  color: #7f8388;
}
.rlimg {
  width: 20px;
}
.sjtt2 {
  line-height: 30px;
  margin-left: 8px;
}
.sjt2 {
  width: 30%;
}
.sjt2 img {
  border-radius: 5px;
}
.lb {
  font-size: 20px;
  margin-bottom: 15px;
  color: #3d4549;
}
.sblg-riht1im {
  margin-bottom: 20px;
  display: flex;
  color: #989c9d;
  font-size: 14px;
}
.hg {
  line-height: 30px;
}
.sjt {
  width: 10px;
  height: 10px;
  margin-right: 10px;
}
.blg-riht1 {
  border-radius: 5px;
  padding: 20px;
  border: 1px solid #e3e5e4;
  margin-bottom: 15px;
}
.blg-riht {
  width: 30%;
}
// 右边
.name5 {
  margin-top: 15px;
}
.tit5 {
  font-size: 25px;
  line-height: 40px;
}
.blog-left-5 {
  margin-top: 15px;
  background-color: #133575;
  padding: 20px;
  color: #fff;
  box-shadow: 7px;
}
.buterr-3 {
  background-color: #25aae2;
  border: none;
  padding: 15px;
  border-radius: 5px;
  color: #fff;
}
.zit {
  color: #989c9d;
  line-height: 32px;
  font-size: 19px;
  margin-bottom: 20px;
  margin-top: 15px;
}
.hos7-img {
  width: 20px;
  height: 20px;
}
.zit2 {
  color: #7f8388;
}
.rl {
  display: flex;
  margin-top: 15px;
  border-bottom: 1px solid #e3e5e4;
  height: 50px;
}
.title {
  font-size: 25px;
  color: #3b4a47;
}
.blog-left-12 {
  padding: 20px;
}
.blog-left-123 {
  border: 1px solid #e3e5e4;
  padding: 20px;
}
.blog-left-1 {
  margin-bottom: 15px;
  border: 1px solid #e3e5e4;
}
.blog-left {
  width: 65%;
}
.blog {
  width: 70%;
  margin: 25px auto;
  display: flex;
  justify-content: space-between;
} // 分页
.pagination {
  margin: 15px auto;
  width: 50%;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.pagination a.active {
  background-color: dodgerblue;
  color: white;
}

.pagination a:hover:not(.active) {
  background-color: #ddd;
}
// 分页
@media screen and (max-width: 768px) {
  .blog {
    width: 95%;
    margin: 25px auto;
    margin: auto;
    display: block;
    justify-content: space-between;
  }
  .blog-left {
    width: 100%;
  }
  .blg-riht {
    width: 100%;
    margin-top: 100px;
  }
}
</style>
