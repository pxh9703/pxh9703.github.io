<template>
  <div>
    <div class="imghl"><img src="../src/assets/galley/hl.png" alt="" /></div>
    <div class="gallery">
      <div class="img1" v-for="(itme, i) in sss" :key="i">
        <img :src="itme.image" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sss: [
        {
          image: '../src/assets/galley/1.png'
        }, {
          image: '../src/assets/galley/2.png'
        }, {
          image: '../src/assets/galley/3.png'
        }, {
          image: '../src/assets/galley/4.png'
        }, {
          image: '../src/assets/galley/5.png'
        },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.img1 {
  width: 30%;
  margin-bottom: 20px;
}
.img1 img{
border-radius: 8px;
}
.gallery {
  width: 70%;
  margin:15px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.imghl {
  width: 100%;
}
@media screen and (max-width: 768px) {
    .gallery {
  width: 90%;
  margin:15px auto;
  display: block;
}.img1 {
    width: 100%;
    margin-bottom: 20px;
}
}
</style>
