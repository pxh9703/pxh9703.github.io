<template>
  <div id="map" ></div>
</template>
  
<script setup lang="ts">
import "@amap/amap-jsapi-types";
// 地图对象
const map = shallowRef<AMap.Map>()
 
// 加载地图文件
onMounted(() => {
  const map = new AMap.Map('map', {
    center: [116.397428, 39.90923],
    zoom: 13
  })
})
</script>
  
<style scoped>
#map {
  width: 100%;
  height: 700px;
}
</style>
