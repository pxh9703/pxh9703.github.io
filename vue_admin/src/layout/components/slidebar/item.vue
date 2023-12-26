<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
    default: () => ({})
  }
})
</script>
<template>
  <template v-if="!item.hidden">
    <el-sub-menu v-if="item.children && item.children.length > 0" :index="item.path">
      <template #title>
        <el-icon v-if="item.meta.icon.indexOf('icon-') <= -1">
          <component :is="item.meta.icon" />
        </el-icon>
        <SvgIcon v-else :name="item.meta.icon.replace('icon-', '')" />
        <span>{{ item.meta.title }}</span>
      </template>

      <Item v-for="child in item.children" :key="child.id" :item="child" />
    </el-sub-menu>
    <ElMenuItem v-else :index="item.path">
      <el-icon v-if="item.meta.icon.indexOf('icon-') <= -1">
        <component :is="item.meta.icon" />
      </el-icon>
      <SvgIcon v-else :name="item.meta.icon.replace('icon-', '')" />
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
    </ElMenuItem>
  </template>
</template>
