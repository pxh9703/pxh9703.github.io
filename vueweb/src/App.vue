<template>
  <WeB></WeB>
  <RouterView class="ssdss"></RouterView>
  <FooT></FooT>
  <div class="ssdss">
    <div class="ssdss" v-for="i in 10000000" :key="i">
      <p>{{ i }}</p>
      <p>{{ i + 1 }}</p>
    </div>
  </div>
</template>

<script setup>
import WeB from './components/WeB.vue'
import FooT from './components/FooT.vue'
</script>

<style lang="scss" scoped></style>
