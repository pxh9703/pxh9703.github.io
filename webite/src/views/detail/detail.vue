<script setup lang="ts">
import { getArticleDetail } from "~/api";
const route = useRoute();
const { data } = await useAsyncData(
  () => {
    return getArticleDetail({ id: route.query.id });
  },
  {
    default: () => ({}),
  }
);
console.log(data);
</script>

<template>
  <div class="content">
    <el-breadcrumb separator="/" class="w-1/2 mx-auto mt-2 text-lg">
      <el-breadcrumb-item>
        <nuxt-link to="/">首页</nuxt-link>
      </el-breadcrumb-item>
      <el-breadcrumb-item>详情</el-breadcrumb-item>
    </el-breadcrumb>
    <u-card class="w-1/2 mx-auto mt-2">
      <template #header>
        <h1>{{ data.data.title }}</h1>
      </template>
      <detail v-html="data.data.content"></detail>
      <div class="cover" v-if="data.data.cover">
        <el-image :src="data.data.cover"></el-image>
      </div>
    </u-card>
  </div>
</template>

<style scoped></style>
