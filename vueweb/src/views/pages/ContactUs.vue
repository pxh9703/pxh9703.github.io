import { ElButton } from '../../../../.nuxt/components';
<template>
  <div>
    <div class="topimg">
      <img src="../../assets/img/ContactUs/movet.png" alt="" class="imgmove" />
      <img src="../../assets/img/ContactUs/about.png" alt="" class="imgweb" />
      <div class="top_text">
        <div class="text-3xl">联系我们</div>
        <div class="text_contnt">
          联系我们联系我们联系我们联系我们联系我们联系我们联系我们联系我们
        </div>
        <a class="jiaru" href="">立即加入</a>
      </div>
    </div>
    <div class="title">
      COHNTARTUS
      <div class="titlezw">联系我们</div>
    </div>
    <div class="bodyco">
      <div>
        <div class="body">
          <div class="contact">
            <div class="Contact flex items-baseline">
              <div class="text-3xl">联系我们</div>
              <div class="ml-4">Contact us</div>
            </div>
            <div class="flex items-center mt-5" v-for="item in cintent" :key="item">
              <div class="w-4"><img :src="item.log" alt="" /></div>
              <div class="ml-3">{{ item.name }}</div>
            </div>
          </div>
          <!-- 右侧表单 -->
          <div class="formriht">
            <div class="flex items-baseline">
              <div class="text-3xl online">在线留言</div>
              <div class="ml-4 online2">online message</div>
            </div>
            <el-form class="mt-5" v-model="formData" :model="formData">
              <el-form-item label="姓名:">
                <el-input placeholder="ssd" v-model="formData.name" />
              </el-form-item>
              <el-form-item label="电话:">
                <el-input placeholder="ssd" v-model="formData.tel" />
              </el-form-item>
              <el-form-item label="邮箱:">
                <el-input placeholder="ssd" v-model="formData.email" />
              </el-form-item>
              <el-form-item label="内容:">
                <el-input type="textarea" v-model="formData.content" class="sad" />
              </el-form-item>
            </el-form>
            <ElButton @click="onSubmit" type="warning" class="but"> 提交留言 </ElButton>
          </div>
        </div>
      </div>
      <div class="map">
        <img src="../../assets/img/ContactUs/map.png" alt="" />
      </div>
    </div>

    <!-- <Map></Map> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
const formData = ref({
  name: '',
  tel: '',
  email: '',
  content: ''
})
const onSubmit = () => {
  console.log(formData.value)
}
// 表单
const cintent = ref([
  {
    log: '/src/assets/img/ContactUs/nam.png',
    name: '山东la有限公司'
  },
  {
    log: '/src/assets/img/ContactUs/tel.png',
    name: '电话:1234567890'
  },
  {
    log: '/src/assets/img/ContactUs/em.png',
    name: '邮箱:123456@qq.com'
  },
  {
    log: '/src/assets/img/ContactUs/dz.png',
    name: '地址:山东省泰安布岱出'
  }
])
</script>

<style lang="scss" scoped>
.map {
  width: 75%;
  margin: auto;
}

::v-deep .el-textarea__inner {
  resize: none;
}

.body {
  width: 75%;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;

  .contact {
    width: 50%;
  }

  .formriht {
    width: 50%;
  }
}

// 标题
.title {
  text-align: center;
  font-size: 30px;
  color: #e5e5e5;
  position: relative;

  .titlezw {
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, 50%);
    color: #0b6cfe;
  }
}

.topimg {
  position: relative;

  .text_contnt {
    width: 45%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    margin: 20px 0;
  }

  .jiaru {
    border-radius: 5px;
    background-color: #0468fe;
    color: #fff;
    padding: 5px 10px;
  }

  .top_text {
    position: absolute;
    top: 40%;
    left: 11%;
    transform: translate(-50%, 0, 0, 0);
  }
}

// 顶部
img {
  width: 100%;
  height: 100%;
}

.imgmove {
  display: none;
}

.mt-5 {
  width: 80%;
}

.but {
  width: 50%;
  margin: auto;
  display: block;
}

@media screen and (max-width: 950px) {
  .map {
    width: 95%;
    margin: auto;
  }

  .body {
    width: 95%;
    margin: 30px auto;
  }

  .topimg .top_text[data-v-8ba87313] {
    position: absolute;
    top: 22%;
    left: 11%;
  }
}

@media screen and (max-width: 750px) {
  .Contact {
    display: none;
  }

  .mt-5 {
    width: 80%;
    margin: auto;
  }

  .imgmove {
    display: block;
  }

  .imgweb {
    display: none;
  }

  .bodyco {
    margin-top: 20px;
    display: flex;
    flex-direction: column-reverse;
  }

  .text-3xl {
    font-size: 1.5rem;
    line-height: 1rem;
  }

  .topimg .text_contnt[data-v-8ba87313] {
    font-size: 16px;
    width: 45%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    margin: 15px 0;
  }

  .body {
    width: 95%;
    margin: 30px auto;
    display: block;

    .contact {
      width: 100%;
    }

    .formriht {
      width: 100%;
    }
  }

  .online {
    font-size: 16px;
    margin: 10px 10px 10px 10%;
  }
  .online2 {
    font-size: 14px;
  }
}
</style>
