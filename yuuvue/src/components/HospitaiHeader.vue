<template>
  <div>
    <div class="headtop">
      <div class="headtop-left">
        <div class="imgdq"><img src="../assets/public/dq.png" alt="" /></div>
        <div class="chara">
          <div class="chara1">Asia Medicare</div>
          <div class="chara2">MULTI-SPECIALIST HOSPITAL</div>
        </div>
      </div>
      <div class="headtop-left2">
        <div class="imgdq2"><img src="../assets/public/wz.png" alt="" /></div>
        <div class="chara">
          <div class="chara2">4499巴顿巷罗利，NC 7603</div>
        </div>
      </div>
      <div class="headtop-left2">
        <div class="imgdq2"><img src="../assets/public/tel.png" alt="" /></div>
        <div class="chara">
          <div class="chara2">+1800-123-4567</div>
          <div class="chara2">+1800-123-4567</div>
        </div>
      </div>
      <button class="butt">预约</button>
    </div>
    <!-- 顶部 -->
    <!-- 导航 -->
    <div class="navigation">
      <div class="navoo">
        <router-link to="/" class="active">家</router-link>
        <router-link to="/AboutUs" class="active">关于我们</router-link>
        <!-- 下拉框 -->
        <el-dropdown>
          <span class="el-dropdown-link">
            <router-link to="/SeRvice" class="ssss"> 服务业 </router-link>
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                ><router-link to="/ServiceList">服务列表 </router-link>
              </el-dropdown-item>
              <el-dropdown-item> <router-link to="/404">服务-单人</router-link> </el-dropdown-item>
              <el-dropdown-item disabled>Action 4</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <!-- 下拉框 -->
        <!-- 下拉框 -->
        <el-dropdown>
          <span class="el-dropdown-link">
            <router-link to="/BlOg" class="ssss"> 博客</router-link>
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Action 1</el-dropdown-item>
              <el-dropdown-item disabled>Action 4</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <!-- 下拉框 -->
        <!-- 下拉框 -->
        <el-dropdown>
          <span class="el-dropdown-link">
            <router-link to="/GalLery" class="ssss">特征</router-link>
            <el-icon class="el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item
                ><router-link to="/PatiEnt">患者评价</router-link>
              </el-dropdown-item>
              <el-dropdown-item
                ><router-link to="/StyleGuide">风格指南</router-link>
              </el-dropdown-item>
              <el-dropdown-item disabled>Action 4</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <!-- 下拉框 -->
        <router-link to="/ContactUs" class="active">联系我们</router-link>
      </div>
    </div>
    <!-- 导航结束 -->
    <!-- 移动 -->
    <div class="nav-ul">
      <div class="move-tit">菜单</div>
      <div class="menu" @click.stop="ShowHidden = !ShowHidden">
        <img src="../assets/cd.png" alt="" class="ul-menu" />
      </div>
      <div class="mobile-ul" v-if="ShowHidden" @click.stop="">
        <div><router-link to="/" class="active">家</router-link></div>
        <div><router-link to="/AboutUs" class="active">关于我们</router-link></div>
        <!-- 下拉框 -->
        <div>
          <el-dropdown>
            <span class="el-dropdown-link2">
              <router-link to="/SeRvice" class="ssss"> 服务业 </router-link>
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  ><router-link to="/ServiceList">服务列表 </router-link>
                </el-dropdown-item>
                <el-dropdown-item>
                  <router-link to="/404">服务-单人</router-link>
                </el-dropdown-item>
                <el-dropdown-item disabled>Action 4</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <!-- 下拉框 -->
        <!-- 下拉框 -->
        <div>
          <el-dropdown>
            <span class="el-dropdown-link2">
              <router-link to="/BlOg" class="ssss"> 博客</router-link>
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item disabled>Action 4</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <!-- 下拉框 -->
        <!-- 下拉框 -->
        <div>
          <el-dropdown>
            <span class="el-dropdown-link2">
              <router-link to="/GalLery" class="ssss">特征</router-link>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  ><router-link to="/PatiEnt">患者评价</router-link>
                </el-dropdown-item>
                <el-dropdown-item
                  ><router-link to="/StyleGuide">风格指南</router-link>
                </el-dropdown-item>
                <el-dropdown-item disabled>Action 4</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          
        </div>
        <!-- 下拉框 -->
        <div><router-link to="/ContactUs" class="active">联系我们</router-link></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ShowHidden: false
    }
  },
  mounted() {
    document.addEventListener('click', this.HiddenClick)
  },
  methods: {
    // 点击页面事件 隐藏需要隐藏的区域
    HiddenClick() {
      this.ShowHidden = false
    }
    // 点击列表内，选中内容，并隐藏
  }
}
</script>

<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
</script>
<style lang="scss" scoped>
.move-tit {
  color: #fff;
  font-size: 20px;
}
.el-dropdown-link2 {
  color: #fff;
  border: none;
  font-size: 17px;
}
.sd1 {
  display: flex;
  justify-content: space-between;
}
.ssds {
  width: 15px;
  height: 15px;
}
.nav-ul {
  display: none;
}

// 导航
// 下拉框
.ssss {
  color: #f2f2f2;
}

.navigation {
  background-color: #133575;
  .navoo {
    width: 70%;
    margin: auto;
    display: flex;
    .active {
      display: block;
      color: #f2f2f2;
      text-align: center;
      padding: 14px 16px;
      font-size: 17px;
      border: 1px solid #0c2c69;
    }
  }
}
// 下拉框
// 导航栏

.el-dropdown-link {
  text-align: center;
  color: #fff;
  border: 1px solid #0c2c69;
  padding: 14px 16px;
  font-size: 17px;
}
.headtop {
  width: 70%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  .butt {
    width: 10%;
    background-color: #28abe1;
    color: #fff;
    border: none;
    border-radius: 10px;
  }
  .headtop-left2 {
    display: flex;
    width: 20%;
    .imgdq2 {
      width: 10%;
    }
  }
  .headtop-left {
    display: flex;
    width: 30%;
    .imgdq {
      width: 15%;
    }
    .imgdq2 {
      width: 10%;
    }
    .chara {
      .chara1 {
        font-size: 20px;
        font-weight: bold;
      }
      .chara2 {
        color: #7e7e7e;
        font-weight: bold;
        font-size: 12px;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .navigation {
    display: none;
  }
  .nav-ul {
    display: block;
  }
  .index-list2[data-v-7131493d] {
    display: none;
  }
  .index-list3[data-v-7131493d] {
    display: none;
  }
  .index-tit4[data-v-7131493d] {
    display: none;
  }
  .index-list[data-v-7131493d] {
    display: flex;
    width: 53%;
  }
  .index-nav[data-v-7131493d] {
    width: 100%;
    margin: 1% auto;
    display: flex;
  }
  .xiala[data-v-7131493d] {
    display: none;
    height: 60px;
    background-color: #133575;
  }

  .nav-ul {
    position: absolute;
    z-index: 99;
    display: block;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  nav {
    display: none;
  }

  .nav-ul img {
    /* height: 50px; */
    width: 60%;
  }

  .mobile-ul a {
    text-decoration: none;
    color: #fff;
    padding-bottom: 10px;
    box-sizing: border-box;
    color: #fff;
    width: 160px;
    top: 10px;
    text-align: left;
    line-height: 40px;
    margin-left: 30px;
  }

  .mobile-ul {
    background-image: url(../../img/footerLogo.png);
    background-repeat: no-repeat;
    background-color: #133575;
    width: 100%;
    position: absolute;
    right: 0;
    top: -2px;
    z-index: 10;
    padding-bottom: 3%;
  }

  .sd1 {
    margin: -3% 4%;
    font-size: 22px;
    border-bottom: 1px solid black;
  }
  .mobile-ul {
    line-height: 40px;
  }

  .menu {
    /* margin-left: 500px; */
    width: 10%;
    margin-right: 2%;
    /* width: 30px; */
  }
  .headtop-left2 {
    display: none;
  }
  .butt {
    display: none;
  }
  .headtop .headtop-left2[data-v-129b38d8] {
    display: none;
    width: 20%;
  }
  .headtop .headtop-left .imgdq[data-v-129b38d8] {
    width: 14%;
  }
  .headtop .headtop-left[data-v-129b38d8] {
    display: flex;
    width: 67%;
  }
  .headtop[data-v-129b38d8] {
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
}
</style>
