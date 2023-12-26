<template>
  <div>
    <div v-for="items in atricle" :key="items" class="content" @click="insurance(items.id)">
      <div>{{ items.id }}</div>
      <div>{{ items.author }}</div>
      <div>{{ items.createdAt }}</div>
      <div>{{ items.updatedAt }}</div>
      <div v-html="items.content"></div>
    </div>
  </div>
</template>

<script setup>
import ArticleList from '../../composables/Api/ArticleList'
import { ref } from 'vue'
const atricle = ref([{}])

const article = ArticleList()
article.getarticle().then((res) => {
  console.log(res.rows)
  atricle.value = res.rows
})
const insurance = (id) => {
  console.log(id)
  self.location.href = `/article/cate`
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  text-align: center;
  margin-bottom: 50px;
  background-color: aqua;
}
</style>
