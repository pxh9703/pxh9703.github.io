<template>
  <div>
    <div class="btn-group mb-2">
      <ElButton size="small" plain @click="[(visDialogType = 'add'), (visviableDialog = true), (formData = {})]">
        添加角色
      </ElButton>
    </div>

    <ElTable :data="pageData.list" border>
      <ElTableColumn prop="id" label="ID" align="center" width="80"></ElTableColumn>
      <ElTableColumn prop="roleKey" show-overflow-tooltip label="角色唯一标识" align="center"></ElTableColumn>
      <ElTableColumn prop="name" label="角色" align="center"></ElTableColumn>
      <ElTableColumn prop="introduction" label="角色介绍" show-overflow-tooltip width="180">
        <template #default="{ row }">
          {{ row.introduction ? row.introduction : '暂无介绍' }}
        </template>
      </ElTableColumn>
      <ElTableColumn prop="status" label="角色状态">
        <template #default="{ row }">
          <!-- {{ row.status ? '正常' : '禁用' }} -->
          <el-tag v-if="row.status" type="success" @click="toggleDisable(row.id, row.status)">正常</el-tag>
          <el-tag v-else type="danger " @click="toggleDisable(row.id, row.status)">禁用</el-tag>
        </template>
      </ElTableColumn>
      <ElTableColumn label="操作">
        <template #default="{ row }">
          <ElButton size="small" @click="editUser(row)">编辑</ElButton>
          <el-popconfirm
            title="你确认删除吗?"
            confirm-button-text="确认"
            cancel-button-text="取消"
            @confirm="deleteRole(row.id)"
          >
            <template #reference>
              <ElButton size="small" type="danger" plain>删除</ElButton>
            </template>
          </el-popconfirm>
          <ElButton size="small" type="danger" plain @click="visviableRolePermissionDialog = true"
            >角色权限设置</ElButton
          >
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

    <!-- 弹窗,编辑用户/添加用户 -->
    <ElDialog v-model="visviableDialog" :title="visDialogType == 'add' ? '添加角色' : '编辑角色'">
      <ElForm v-model="formData" :model="formData" :rules="rules">
        <ElFormItem label="角色名称">
          <ElInput v-model="formData.name" placeholder="请输入角色名称"></ElInput>
        </ElFormItem>
        <ElFormItem label="角色介绍">
          <ElInput v-model="formData.introduction" placeholder="请输入角色介绍"></ElInput>
        </ElFormItem>
      </ElForm>
      <!-- 确认提交 -->
      <template #footer>
        <ElButton @click="visviableDialog = false">取消</ElButton>
        <ElButton type="primary" @click="submit">提交</ElButton>
      </template>
    </ElDialog>

    <!-- 角色权限 -->
    <ElDialog v-model="visviableRolePermissionDialog" title="编辑角色权限">
      <ElTree
        ref="treeRoutes"
        :data="treeData"
        :props="{
          label: 'name',
          children: 'children'
        }"
        node-key="id"
        show-checkbox
        default-expand-all
        :expand-on-click-node="false"
      ></ElTree>
      <template #footer>
        <ElButton @click="visviableRolePermissionDialog = false">取消</ElButton>
        <ElButton type="primary" @click="submitRoutes">提交</ElButton>
      </template>
    </ElDialog>
  </div>
</template>

<script setup>
import userRoutes from '../../../composables/Api/userRoutes'

const roleApi = useRoleApi()

// 弹窗展示
const visDialogType = ref('add')
const visviableDialog = ref(false)
// 表单数据?添加?编辑
const formData = ref({})
const rules = {}

const pageData = ref({
  list: [],
  total: 20,
  page: 1,
  pageSize: 10
})
// 获取用户列表
const getRefreshData = () => {
  roleApi
    .getRoleList({
      page: pageData.value.page,
      limit: pageData.value.pageSize
    })
    .then((res) => {
      console.log(res)
      pageData.value.list = res.rows
    })
}
const sizeChange = (val) => {
  pageData.value.pageSize = val
  getRefreshData()
}
const currentChange = (val) => {
  pageData.value.page = val
  getRefreshData()
}
getRefreshData()

// 切换用户状态
const toggleDisable = (id, status) => {
  const tgStatus = status ? 0 : 1
  roleApi.updateRoleStatus({ id, status: tgStatus }).then(() => {
    getRefreshData()
  })
}

// 编辑
const editUser = (row) => {
  visviableDialog.value = true
  visDialogType.value = 'edit'
  formData.value = row
}

// 删除
const deleteRole = (id) => {
  roleApi.deleteRole({ id }).then(() => {
    getRefreshData()
  })
}

// 确认提交事件
const submit = () => {
  switch (visDialogType.value) {
    case 'add':
      roleApi.createRole(formData.value).then(() => {
        getRefreshData()
      })
      break

    case 'edit':
      roleApi.updateRole(formData.value).then(() => {
        getRefreshData()
      })
      break
    default:
      break
  }

  visviableDialog.value = false
}

// 权限设置
const visviableRolePermissionDialog = ref(false)

// Get Other Page Data
// 获取 路由数据
const updateId = ref(null)
const treeRoutes = ref(null)
const treeData = ref([])
const routerApi = userRoutes()
const getRefreshRoutes = () => {
  routerApi.getRouterlist().then((res) => {
    treeData.value = res.rows
  })
}
getRefreshRoutes()
const submitRoutes = () => {
  const filterId = treeRoutes.value.getCheckedNodes().map((item) => item.id)
  console.log(filterId)
  roleApi.setRolePermission({ id: updateId.value, routes: JSON.stringify(filterId) }).then((res) => {
    console.log(res)
    // getRefreshData()
    location.reload()
  })
}
</script>

<style lang="scss" scoped></style>
