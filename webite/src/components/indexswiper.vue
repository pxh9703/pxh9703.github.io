<template>
  <div>
    <el-carousel type="card" >
      <el-carousel-item v-for="item in Admin" key="item">
        <div class="Admin_content_box" >
          <div class="Admin_content-img">
            <a href=""> <img :src="item.image" alt=""></a>
          </div>
          <div class="Admin_text">
            <div class="font-black">{{ item.title }}</div>
            <div class="Admin_text-content">{{ item.content }}</div>
            <div class="admin_a"><a href="">MORE></a> </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
   
  </div>
</template>

<script  setup>
const Admin = ref([{}])
onMounted(() => {
  getadmin().then((res) => {
    const data = res.value.data;
    Admin.value = data
  }).catch((err) => {
    console.log(err, "错误");
  });
})
</script>

<style lang="scss" scoped>
.Admin_content_box {
  background-color: #fff;
  width: 100%;
  box-shadow: 0 0 5px #ccc;
  border-radius: 10px;

  .Admin_text {
    padding: 15px;
    border-radius: 10px;

    .Admin_text-content {
      font-size: 14px;
      color: #7D7D7D;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }

    .admin_a {
      margin-left: auto;
      margin-top: 10px;
      width: max-content;
      font-size: 12px;
      border: 1px solid #6FD7A4;
      padding: 5px;
      border-radius: 4px;
    }
  }
}
.Admin_content_box:hover {
  transform: scale(1.01);
  transition: all 0.3s linear;
  color: #fff;



  .Admin_text {
    transition: all 0.3s linear;
    background-color: #0B6CFE;

    .Admin_text-content {
      color: #fff;
    }

    .admin_a {
      border: none;

      background-color: #F7AB73;
    }
  }
}

</style>
