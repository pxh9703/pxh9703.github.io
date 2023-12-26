<template>
  <div>
    <div class="btn-group mb-2">
      <ElButton size="small" plain @click="[(visDialogType = 'add'), (visviableDialog = true), (formData = {})]">
        添加用户
      </ElButton>
    </div>

    <ElTable v-loading="pageData.loadingTable" :data="pageData.list" border>
      <ElTableColumn prop="id" label="ID" width="80" align="center"></ElTableColumn>
      <ElTableColumn prop="account" label="账号" width="180" align="center"></ElTableColumn>
      <!-- 账号头像 -->
      <ElTableColumn prop="avatar" label="头像" width="120" align="center">
        <template #default="{ row }">
          <ElAvatar :src="row.avatar"></ElAvatar>
        </template>
      </ElTableColumn>
      <ElTableColumn prop="email" label="邮箱" width="180" align="center">
        <template #default="{ row }">
          {{ row.email ? row.email : '暂无邮箱' }}
        </template>
      </ElTableColumn>
      <ElTableColumn prop="introduction" label="账号介绍" align="center" width="220" show-overflow-tooltip>
        <template #default="{ row }">
          {{ row.introduction ? row.introduction : '暂无介绍' }}
        </template>
      </ElTableColumn>
      <ElTableColumn prop="status" label="账号状态" width="100" align="center">
        <template #default="{ row }">
          <!-- {{ row.status ? '正常' : '禁用' }} -->
          <el-tag v-if="row.status" type="success" @click="toggleDisable(row.id)">正常</el-tag>
          <el-tag v-else type="danger">禁用</el-tag>
        </template>
      </ElTableColumn>
      <!-- 展示多选框 -->
      <ElTableColumn prop="role" label="账号角色" width="300" align="center">
        <template #default="{ row }">
          <ElSelect v-model="row.role" multiple :max-collapse-tags="2" collapse-tags class="w-full" disabled>
            <ElOption
              v-for="item in roleListData"
              :key="item.id"
              :label="item.name"
              :value="item.roleKey"
              readonly
              disabled
            ></ElOption>
          </ElSelect>
          <!-- 优化成 少量数组循环 -->
        </template>
      </ElTableColumn>
      <ElTableColumn label="操作" fixed="right" align="center">
        <template #default="{ row }">
          <ElButton size="small" @click="editUser(row)">编辑</ElButton>
          <ElButton size="small" type="danger" plain @click="deleteUser(row.id)">删除</ElButton>
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

    <!-- 弹窗,编辑用户/添加用户 -->
    <ElDialog v-model="visviableDialog" :title="visDialogType == 'add' ? '添加用户' : '编辑用户'">
      <ElForm v-model="formData" :model="formData" :rules="rules">
        <ElFormItem label="用户账号">
          <ElInput v-model="formData.account" placeholder="请输入账号"></ElInput>
        </ElFormItem>
        <ElFormItem label="账号密码">
          <ElInput v-model="formData.password" show-password placeholder="请输入账号密码"></ElInput>
        </ElFormItem>
        <ElFormItem label="账号角色">
          <ElSelect
            v-model="formData.role"
            placeholder="请选择账号角色"
            multiple
            class="w-full"
            filterable
            remote
            :remote-method="selctRomote"
            :loading="loadingSelect"
            clearable
          >
            <ElOption v-for="item in roleListData" :key="item.id" :label="item.name" :value="item.roleKey"></ElOption>
          </ElSelect>
        </ElFormItem>
        <ElFormItem label="用户邮箱">
          <ElInput v-model="formData.email" placeholder="请输入邮箱"></ElInput>
        </ElFormItem>
        <ElFormItem label="账号介绍">
          <ElInput v-model="formData.introduction" placeholder="请输入账号介绍"></ElInput>
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
const userApi = useUserApi()

// 弹窗展示
const visDialogType = ref('add')
const visviableDialog = ref(false)
// 表单数据?添加?编辑
const formData = ref({})
const rules = {}

const pageData = ref({
  list: [],
  total: 0,
  page: 1,
  pageSize: 20,
  loadingTable: false
})
// 获取用户列表
const getRefreshData = async () => {
  pageData.value.loadingTable = true // 开启loading
  const { rows, count } = await userApi.getUserList({ page: pageData.value.page, pageSize: pageData.value.pageSize })
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
// 切换用户状态
const toggleDisable = (id) => {
  console.log(id)
}

// 编辑
const editUser = (row) => {
  visviableDialog.value = true
  visDialogType.value = 'edit'
  formData.value = row
}

// 删除
const deleteUser = (id) => {
  userApi.deleteUser({ id }).then(() => {
    getRefreshData()
  })
}

// 确认提交事件
const submit = () => {
  formData.value.password = 123123123
  switch (visDialogType.value) {
    case 'add':
      userApi.createUser(formData.value).then(() => {
        getRefreshData()
      })
      break

    case 'edit':
      userApi.updateUser(formData.value).then(() => {
        getRefreshData()
      })
      break
    default:
      break
  }

  visviableDialog.value = false
}

// Get Other Page Data
// 获取角色列表
const roleListData = ref([])
const loadingSelect = ref(false)
const getRefreshRoleData = (name = '') => {
  userApi.getRoleList({ name }).then((res) => {
    roleListData.value = res.rows
  })
}
getRefreshRoleData()

const selctRomote = (query) => {
  if (query) {
    loadingSelect.value = true
    setTimeout(() => {
      loadingSelect.value = false
      getRefreshRoleData(query)
    }, 600)
  } else {
    getRefreshRoleData()
  }
}
</script>

<style lang="scss" scoped></style>
