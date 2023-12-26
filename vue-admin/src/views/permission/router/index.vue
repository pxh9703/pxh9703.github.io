<template>
  <div>
    <div class="btn-group mb-2">
      <ElButton
        size="small"
        plain
        @click="[(visDialogType = 'add'), (visviableDialog = true), (formData = { meta: {}, parent_id: 0 })]"
      >
        添加路由
      </ElButton>
    </div>
    <component :is="Test" />

    <ElTable v-loading="pageData.loadingTable" :data="pageData.list" border>
      <ElTableColumn prop="id" label="ID" width="80" align="center"></ElTableColumn>
      <ElTableColumn prop="parent_id" label="父级ID" width="180" align="center"></ElTableColumn>

      <ElTableColumn prop="name" label="路由名称" width="180" align="center"></ElTableColumn>
      <!-- 账号头像 -->
      <ElTableColumn prop="path" label="路由路径" width="120" align="center"> </ElTableColumn>
      <ElTableColumn prop="component" label="组件位置" width="180" align="center"> </ElTableColumn>
      <ElTableColumn prop="status" label="路由状态" width="100" align="center">
        <template #default="{ row }">
          <!-- {{ row.status ? '正常' : '禁用' }} -->
          <el-tag v-if="row.status" type="success" @click="toggleDisable(row.id)">正常</el-tag>
          <el-tag v-else type="danger">禁用</el-tag>
        </template>
      </ElTableColumn>
      <!-- 外链地址 -->
      <ElTableColumn prop="frameSrc" label="外链地址" width="180" align="center"> </ElTableColumn>
      <ElTableColumn prop="hidden" label="是否隐藏" width="180" align="center"> </ElTableColumn>
      <ElTableColumn prop="icon" label="图标" width="180" align="center">
        <template #default="{ row }">
          <ElIcon v-if="row.icon && row.icon.indexOf('icon') == -1" size="26px" :icon="row.icon">
            <component :is="row.icon"></component>
          </ElIcon>
          <SvgIcon v-if="row.icon && row.icon.indexOf('icon') != -1" size="26" :name="row.icon.replace('icon-', '')" />
        </template>
      </ElTableColumn>
      <ElTableColumn prop="meta" label="菜单标题" width="180" align="center">
        <template #default="{ row }">
          {{ JSON.parse(row.meta).title }}
        </template>
      </ElTableColumn>
      <ElTableColumn prop="frameSrcType" label="外链方式" width="180" align="center">
        <template #default="{ row }">
          <!-- {{ row.status ? '正常' : '禁用' }} -->
          <el-tag v-if="row.frameSrcType == '_self'" type="success">当前页</el-tag>
          <el-tag v-else type="info">新网页</el-tag>
        </template>
      </ElTableColumn>
      <ElTableColumn prop="remark" label="路由备注" align="center" width="220" show-overflow-tooltip> </ElTableColumn>

      <ElTableColumn label="操作" fixed="right" align="center" width="160">
        <template #default="{ row }">
          <ElButton size="small" @click="editUser(row)">编辑</ElButton>
          <ElButton size="small" type="danger" plain @click="deleteRoute(row.id)">删除</ElButton>
        </template>
      </ElTableColumn>
    </ElTable>

    <!-- 分页 -->
    <ElPagination
      :current-page="pageData.page"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageData.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageData.total"
      class="mt-3 float-right"
      background
      @size-change="sizeChange"
      @current-change="currentChange"
    ></ElPagination>

    <!-- 弹窗,编辑路由/添加路由 -->
    <ElDialog v-model="visviableDialog" :title="visDialogType == 'add' ? '添加路由' : '编辑路由'">
      <ElForm v-model="formData" :model="formData" :rules="rules" label-width="80px">
        <ElFormItem label="父级ID">
          <el-tree-select
            ref="tree"
            v-model="formData.parent_id"
            :data="treeDataList"
            :props="{
              label: 'name',
              children: 'children'
            }"
            show-checkbox
            node-key="id"
            default-expand-all
            check-strictly
            accordion
            :render-after-expand="false"
          ></el-tree-select>
        </ElFormItem>
        <ElFormItem label="路由名称" prop="name">
          <ElInput v-model="formData.name" placeholder="请输入路由名称"></ElInput>
        </ElFormItem>
        <ElFormItem label="路由路径" prop="path">
          <ElInput v-model="formData.path" placeholder="请输入路由路径"></ElInput>
        </ElFormItem>
        <ElFormItem label="组件位置" prop="component">
          <ElSelect v-model="formData.component">
            <ElOption v-for="item in resultFilesPath" :key="item" :label="item" :value="item"></ElOption>
          </ElSelect>
        </ElFormItem>
        <ElFormItem label="路由备注" prop="path">
          <ElInput v-model="formData.remark" placeholder="请输入路由备注"></ElInput>
        </ElFormItem>
        <ElFormItem label="菜单标题" prop="frameSrc">
          <ElInput v-model="formData.title" placeholder="请输入菜单标题"></ElInput>
        </ElFormItem>
        <ElFormItem label="图标" prop="icon">
          <!-- 选择图标 -->
          <ElSelect v-model="formData.icon" filterable>
            <ElOptionGroup v-for="group in iconGroup" :key="group" :label="group.label">
              <ElOption v-for="item in group.options" :key="item" :label="item" :value="item">
                <ElIcon v-if="item.indexOf('icon') == -1" :icon="item">
                  <component :is="item"></component>
                </ElIcon>
                <ElIcon v-else :icon="item">
                  <SvgIcon :name="item.replace('icon-', '')" />
                </ElIcon>
                <span class="float-right">
                  {{ item }}
                </span>
              </ElOption>
            </ElOptionGroup>
          </ElSelect>
          <ElIcon
            v-if="formData.icon && formData.icon.indexOf('icon') == -1"
            size="26px"
            class="ml-3"
            :icon="formData.icon"
          >
            <component :is="formData.icon"></component>
          </ElIcon>
          <SvgIcon
            v-if="formData.icon && formData.icon.indexOf('icon') != -1"
            size="26"
            class="ml-3"
            :name="formData.icon.replace('icon-', '')"
          />
        </ElFormItem>
        <ElFormItem label="外链地址" prop="frameSrc">
          <ElInput v-model="formData.frameSrc" placeholder="请输入外链地址"></ElInput>
        </ElFormItem>
        <ElFormItem label="外链方式" prop="frameSrcType">
          <ElRadioGroup v-model="formData.frameSrcType">
            <ElRadioButton label="_self">当前页</ElRadioButton>
            <ElRadioButton label="_blank">新网页</ElRadioButton>
          </ElRadioGroup>
        </ElFormItem>
        <ElFormItem label="是否隐藏" prop="hidden">
          <ElRadioGroup v-model="formData.hidden">
            <ElRadioButton label="0">显示</ElRadioButton>
            <ElRadioButton label="1">隐藏</ElRadioButton>
          </ElRadioGroup>
        </ElFormItem>

        <ElFormItem label="路由固定" prop="status">
          <ElRadioGroup v-model="formData.isAffix">
            <ElRadioButton label="0">是</ElRadioButton>
            <ElRadioButton label="1">否</ElRadioButton>
          </ElRadioGroup>
        </ElFormItem>
        <ElFormItem label="是否缓存" prop="status">
          <ElRadioGroup v-model="formData.isCache">
            <ElRadioButton label="0">否</ElRadioButton>
            <ElRadioButton label="1">是</ElRadioButton>
          </ElRadioGroup>
        </ElFormItem>
        <ElFormItem label="路由状态" prop="status">
          <ElRadioGroup v-model="formData.status">
            <ElRadioButton label="0">禁用</ElRadioButton>
            <ElRadioButton label="1">正常</ElRadioButton>
          </ElRadioGroup>
        </ElFormItem>
        <ElFormItem label="排序" prop="sort">
          <ElInputNumber v-model="formData.sort" placeholder="请输入排序" class="!w-full"></ElInputNumber>
        </ElFormItem>
      </ElForm>
      <!-- 确认提交 -->
      <template #footer>
        <ElButton @click="visviableDialog = false">取消</ElButton>
        <ElButton type="primary" @click="submit">提交</ElButton>
      </template>
    </ElDialog>
  </div>
</template>

<script setup>
import * as icons from '@element-plus/icons-vue'

// import Test from '@/components/Test/index.vue'

const { getAllViewsFiles, getAllSvgIconsFiles } = getViewsFiles()
const hasFiles = getAllViewsFiles()

const resultFilesPath = ref(
  Object.keys(hasFiles).map((item) => {
    return item.replace('/src/views', '').replace('.vue', '')
  })
)
// iconGroup
const iconGroup = ref([
  {
    label: '组件库图标',
    options: Object.keys(icons).map((item) => {
      return item
    })
  },
  {
    label: '自定义图标',
    options: getAllSvgIconsFiles()
  }
])

// element-plus 图标
iconGroup.value[0].options = Object.keys(icons).map((item) => {
  return item
})
// 自定义图标
const customSvgIcons = getAllSvgIconsFiles()
iconGroup.value[1].options = customSvgIcons

const routesApi = useRoutes()

// 弹窗展示
const visDialogType = ref('add')
const visviableDialog = ref(false)
// 表单数据?添加?编辑
const formData = ref({
  parent_id: 0,
  title: '1'
})
const rules = {}

const pageData = ref({
  list: [],
  total: 0,
  page: 1,
  pageSize: 20,
  loadingTable: false
})
// 获取路由列表
const getRefreshData = async () => {
  pageData.value.loadingTable = true // 开启loading
  const { rows, count } = await routesApi.getRoutes({ page: pageData.value.page, pageSize: pageData.value.pageSize })
  pageData.value.list = rows
  pageData.value.total = count
  await nextTick() // 等待dom更新,推迟到下一次dom更新循环结束之后执行下方代码
  pageData.value.loadingTable = false
}
getRefreshData()
const sizeChange = (val) => {
  pageData.value.pageSize = val
  getRefreshData()
}
const currentChange = (val) => {
  pageData.value.page = val
  getRefreshData()
}
// 切换路由状态
const toggleDisable = (id) => {
  console.log(id)
}

// 编辑
const editUser = (row) => {
  visviableDialog.value = true
  visDialogType.value = 'edit'
  formData.value = row
  // 处理meta
  formData.value.meta = JSON.parse(row)
}

// 删除
const deleteRoute = (id) => {
  routesApi.deleteRoute({ id }).then(() => {
    getRefreshData()
  })
}

// 确认提交事件
const submit = () => {
  // eslint-disable-next-line
  let cloneData = JSON.parse(JSON.stringify(formData.value))
  cloneData.meta = JSON.stringify(cloneData.meta)
  switch (visDialogType.value) {
    case 'add':
      routesApi.addRoute(cloneData).then(() => {
        getRefreshData()
      })
      break

    case 'edit':
      routesApi.editRoute(cloneData).then(() => {
        getRefreshData()
      })
      break
    default:
      break
  }

  visviableDialog.value = false
}

// 树形结构树状菜单
const tree = ref(null)
const treeDataList = ref([])
const getTreeData = () => {
  treeDataList.value.push({
    id: 0,
    name: '顶级菜单',
    children: []
  })
  routesApi.getTreeMenu().then((res) => {
    treeDataList.value.push(...res)
  })
}

getTreeData()
</script>

<style lang="scss" scoped></style>
