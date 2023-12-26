<template>
  <div>
    <div class="btn-group mb-2">
      <ElButton
        size="small"
        plain
        @click="[(visDialogType = 'add'), (visviableDialog = true), (formData = { meta: {} })]"
      >
        添加用户
      </ElButton>
    </div>

    <ElTable :data="pageData.list" border>
      <ElTableColumn prop="id" label="ID" width="80" align="center"></ElTableColumn>
      <ElTableColumn prop="parent_id" label="父级ID" width="180" align="center"></ElTableColumn>
      <ElTableColumn prop="name" label="账户" align="center" width="120"></ElTableColumn>
      <ElTableColumn prop="path" label="路径" align="center" width="180"> </ElTableColumn>
      <ElTableColumn prop="component" label="组件" width="150" align="center"> </ElTableColumn>
      <ElTableColumn prop="remark" label="路由备注" width="" align="center"> </ElTableColumn>
      <ElTableColumn prop="status" label="路由状态" width="100" align="center">
        <template #default="{ row }">
          <el-tag v-if="row.status" @click="toggleDisable(row.id)">正常</el-tag>
          <el-tag v-else>禁用</el-tag>
        </template>
      </ElTableColumn>
      <ElTableColumn prop="frameSrc" label="外链地址" width="" align="center"> </ElTableColumn>
      <ElTableColumn prop="hidden" label="是否隐藏" width="" align="center">
        <template #default="{ row }">
          <el-tag v-if="row.hidden == '1'" @click="toggleDisable(row.id)">显示</el-tag>
          <el-tag v-else>禁用</el-tag>
        </template>
      </ElTableColumn>
      <ElTableColumn prop="icon" label="图标" width="180" align="center">
        <template #default="{ row }">
          <ElIcon v-if="row.icon && row.icon.indexOf('icon') == -1" size="26px" :icon="row.icon">
            <component :is="row.icon"></component>
          </ElIcon>
          <SvgIcon v-if="row.icon && row.icon.indexOf('icon') != -1" size="26" :name="row.icon.replace('icon-', '')" />
        </template>
      </ElTableColumn>
      <ElTableColumn prop="title" label="菜单标题" width="" align="center">
        <template #default="{ row }">
          {{ JSON.parse(row.meta).title }}
        </template>
      </ElTableColumn>
      <ElTableColumn prop="frameSrcType" label="外链地址" width="" align="center">
        <template #default="{ row }">
          <el-tag v-if="row.frameSrcType == '_self'">正常</el-tag>
          <el-tag v-else type="info">新网页</el-tag>
        </template>
      </ElTableColumn>

      <ElTableColumn label="操作" width="200" fixed="right" align="center">
        <template #default="{ row }">
          <ElButton size="small" @click="editUser(row)">编辑</ElButton>
          <el-popconfirm
            title="你确认删除吗?"
            cancel-button-text="取消"
            confirm-button-text="确认"
            @confirm="deleteUser(row.id)"
          >
            <template #reference>
              <ElButton size="small" type="danger" plain>删除</ElButton>
            </template>
          </el-popconfirm>
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
      @size-change="sizeChange"
      @current-change="currentChange"
    ></ElPagination>
    <!--弹窗用户修改 -->
    <el-dialog v-model="visviableDialog" :title="visDialogType == 'add' ? '添加路由' : '编辑路由'">
      <el-form v-model="formData" :model="formData" :rules="rules">
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
        <ElFormItem label="路由路径" prop="name">
          <ElInput v-model="formData.path" placeholder="请输入路由路径"></ElInput>
        </ElFormItem>
        <ElFormItem label="路由组件" prop="name">
          <ElSelect v-model="formData.component">
            <ElOption v-for="item in resultFilesPath" :key="item" :label="item" :value="item"></ElOption>
          </ElSelect>
        </ElFormItem>
        <ElFormItem label="路由备注" prop="name">
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
      </el-form>
      <template #footer>
        <ElButton @click="visviableDialog = false">取消</ElButton>
        <ElButton type="primary" @click="submit">提交</ElButton>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import * as icons from '@element-plus/icons-vue'
import userRoutes from '../../../composables/Api/userRoutes'
const { getAllViewsFiles, getAllSvgIconsFiles } = getViewsFiles()
const hasFiles = getAllViewsFiles()
const resultFilesPath = ref(
  Object.keys(hasFiles).map((item) => {
    return item.replace('/src/views', '').replace('.vue', '')
  })
)
// console.log(resultFilesPath)
// 图标
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
const customSvgIcons = getAllSvgIconsFiles()
iconGroup.value[1].options = customSvgIcons
//弹窗/标题
const visDialogType = ref('add')
const visviableDialog = ref(false)
// 编辑用户信息
const editUser = (row) => {
  visviableDialog.value = true
  visDialogType.value = 'edit'
  formData.value = row
}
// 表单数据?添加?编辑
const formData = ref({
  meta: {
    title: '1'
  }
})
const rules = {}

const pageData = ref({
  lest: [],
  total: 20,
  page: 1,
  pageSize: 10
})
const routeApi = userRoutes()
// 获取用户列表
const getRefreshData = () => {
  routeApi.getRouterlist().then((res) => {
    pageData.value.list = res.rows
  })
}
getRefreshData()

// 切换用户状态
const toggleDisable = (id) => {
  console.log(id)
}

//确认提交
const submit = () => {
  // formData.value.password = 123123123
  switch (visDialogType.value) {
    //添加信息提交
    case 'add':
      let cloneData = JSON.parse(JSON.stringify(formData.value))
      cloneData.meta = JSON.stringify(cloneData.meta)
      console.log(cloneData)

      routeApi.createrouter(cloneData).then(() => {
        getRefreshData()
      })
      break
    //修改信息提交
    case 'edit':
      routeApi.updateRouter(formData.value).then(() => {
        getRefreshData()
      })
      break
    default:
      break
  }
  visviableDialog.value = false
}
// 删除用户信息deleteUser
const deleteUser = (id) => {
  routeApi.deleteRouter({ id }).then(() => {
    getRefreshData()
  })
}
// 分页
const currentChange = (val) => {
  pageData.value.page = val
  getRefreshData()
}
const sizeChange = (val) => {
  pageData.value.pageSize = val
  getRefreshData()
}
// 树形结构树状菜单
const tree = ref(null)
const treeDataList = ref()
const getTreeData = () => {
  routeApi.gettree().then((res) => {
    treeDataList.value = res
  })
}

getTreeData()
</script>

<style lang="scss" scoped></style>
