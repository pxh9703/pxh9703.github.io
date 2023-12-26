<template>
  <div>
    <WangEditor v-model="content" c></WangEditor>
    <el-button @click="dialogVisible = true">提交 </el-button>

    <!-- 弹窗 -->
    <el-dialog v-model="dialogVisible" title="文章">
      <ElFormItem label="文章">
        <el-input v-model="formData.title" placeholder="请介绍" />
      </ElFormItem>
      <ElFormItem label="作者">
        <el-input v-model="formData.author" placeholder="请介绍" />
      </ElFormItem>
      <ElFormItem label="简介">
        <el-input v-model="formData.introduction" type="textarea" rows="2" />
      </ElFormItem>

      <el-button @click="submit">提交 </el-button>
      <ElButton type="danger" plain @click="dialogVisible = false">取消</ElButton>
    </el-dialog>

    <div class="mt-10">
      <ElTable :data="pageData.list" border>
        <ElTableColumn prop="id" label="ID" width="80" align="center"></ElTableColumn>
        <!-- 账号头像 -->
        <ElTableColumn prop="author" label="作者" align="center"></ElTableColumn>
        <ElTableColumn prop="createdAt" label="时间" align="center"></ElTableColumn>
        <ElTableColumn prop="updatedAt" label="上传时间" align="center"></ElTableColumn>
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
    </div>
  </div>
</template>

<script setup>
import ArticleList from '../../composables/Api/ArticleList'
const content = ref('')
const textarea = ref('')
const article = ArticleList()

const pageData = ref({
  lest: [],
  total: 0,
  page: 1,
  pageSize: 10
})

// 增加文章
const dialogVisible = ref(false)
const formData = ref({})
const submit = () => {
  formData.value.cover = 115588
  formData.value.status = 1
  formData.value.tag = 15585
  article.uptarticle(content, formData.value).then((res) => {
    console.log(res)
    dialogVisible.value = false
  })
}
// 获取文章
const getArticleList = () => {
  article.getarticle().then((res) => {
    pageData.value.list = res.rows
  })
}
// getArticleList()
// 删除文章
const deleteUser = (id) => {
  article.deletearticle({ id }).then(() => {
    getArticleList()
  })
}
</script>

<style lang="scss" scoped></style>
