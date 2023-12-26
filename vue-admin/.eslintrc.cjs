/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  ignorePatterns: ['./auto-imports.d.ts', './components.d.ts'], // 忽略文件
  extends: [
    "./.eslintrc-auto-import.json",
    'plugin:vue/vue3-essential', // vue3基础规则包
    'eslint:recommended', // eslint推荐规则包
    '@vue/eslint-config-prettier/skip-formatting', // 关闭和prettier冲突的规则
    'plugin:vue/vue3-recommended', // vue3推荐
    'plugin:vue/vue3-strongly-recommended', // vue3强烈推荐
    'prettier' //防止和prettier冲突
  ],
  parserOptions: {
    ecmaVersion: 'latest', // 使用最新的ecma版本
    sourceType: 'module' // 使用esm模块
  },
  rules: {
    'vue/multi-word-component-names': ['off'], //关闭多个单词组成的组件名
    'vue/no-arrow-functions-in-watch': ['error'], //禁止在watch中使用箭头函数
    'vue/no-async-in-computed-properties': ['error'], //禁止在计算属性中使用async
    'vue/no-dupe-keys': ['error'] //禁止出现重复的key
  }
}
