<template>
  <div>
    <div class="btn-group mb-2">
      <ElButton size="small" plain @click="[(visDialogType = 'add'), (visviableDialog = true), (formData = {})]">
        添加用户
      </ElButton>
    </div>
    <ElTable :data="pageData.list" border>
      <ElTableColumn prop="id" label="ID" width="80" align="center"></ElTableColumn>
      <!-- 账号头像 -->
      <ElTableColumn prop="avatar" label="头像" width="120" align="center">
        <template #default="{ row }">
          <ElAvatar :src="row.avatar"></ElAvatar>
        </template>
      </ElTableColumn>
      <ElTableColumn prop="account" label="账户" align="center"></ElTableColumn>
      <ElTableColumn prop="email" label="邮箱" align="center">
        <template #default="{ row }"> {{ row.email ? row.email : '暂无邮箱' }} </template>
      </ElTableColumn>
      <ElTableColumn prop="introduction" label="介绍" width="150" align="center">
        <template #default="{ row }"> {{ row.introduction ? row.introduction : '暂无介绍' }} </template>
      </ElTableColumn>

      <ElTableColumn prop="status" label="状态" width="80" align="center">
        <template #default="{ row }">
          <el-tag v-if="row.status" @click="toggleDisable(row.id)">正常</el-tag>
          <el-tag v-else>禁用</el-tag>
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
        </template>
      </ElTableColumn>
      <ElTableColumn label="操作" fixed="right" align="center">
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
    <!--弹窗用户修改 -->
    <el-dialog v-model="visviableDialog" :title="visDialogType == 'add' ? '添加用户' : '编辑用户'">
      <el-form v-model="formData" :model="formData" :rules="rules">
        <ElFormItem label="用户账号">
          <el-input v-model="formData.account" placeholder="请输入账号" />
        </ElFormItem>
        <ElFormItem label="账号密码">
          <el-input v-model="formData.password" show-password placeholder="请输入密码" />
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
          <el-input v-model="formData.email" placeholder="请输入邮箱" />
        </ElFormItem>
        <ElFormItem label="账号介绍">
          <el-input v-model="formData.introduction" placeholder="请介绍" />
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
import useRoleApi from '../../../composables/Api/useRoleApi'
import useUserApi from '../../../composables/Api/useUserApi'
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
const formData = ref({})
const rules = {}

const pageData = ref({
  lest: [],
  total: 0,
  page: 1,
  pageSize: 10
})
const useApi = useUserApi()
// 获取用户列表
const getRefreshData = () => {
  useApi.getuserlist().then((res) => {
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
      useApi.UserAdd(formData.value).then(() => {
        getRefreshData()
      })
      break
    //修改信息提交
    case 'edit':
      useApi.updataUser(formData.value).then(() => {
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
  useApi.deleteUser({ id }).then(() => {
    getRefreshData()
  })
}
//数据获取
//获取角色列表
const roleListData = ref([])
const loadingSelect = ref(false)
const roleApi = useRoleApi()
const getRefreshRoleData = (name = '') => {
  roleApi.getRoleList({ name }).then((res) => {
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
