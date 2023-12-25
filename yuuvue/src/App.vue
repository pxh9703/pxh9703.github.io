<template>
  <div>
    <HospitaiHeader></HospitaiHeader>
    <router-view></router-view>
    <Publiclow></Publiclow>
  </div>
</template>
<script setup >
import HospitaiHeader from './components/HospitaiHeader.vue';
import Publiclow from './components/PublicLow.vue'
</script>

<style lang="scss" scoped></style>
