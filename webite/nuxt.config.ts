// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "node:url";

export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src",
  // @amap/amap-jsapi-types
  modules: ["@nuxt/ui", "@element-plus/nuxt", "@nuxt/image", "nuxt-swiper"],
  image: {},
  postcss: {
    plugins: {
      autoprefixer: {},
      tailwindcss: {},
    },
  },
  dir: {
    pages: "views",
  },
  router:{
    base:"/nuxt-bloge"
  },
generate: {
  dir:'docs',
  subFolders:false
},
  app: {
    head: {
      // title: 'nuxt3-ts-vite',
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
        { name: "keywords", content: "网站，后台" },
        {
          name: "description",
          content:
            "春花，秋月，夏日，冬雪。你若盛开，清风自来。心若浮沉，浅笑安然。",
        },
        { name: "format-detection", content: "telephone=no" },
        // pc 等比例缩放
        // { name: 'viewport', content: 'user-scalable=yes' }
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      style: [],
      script: [
        {src:"https://webapi.amap.com/maps?v=1.4.15&key=d4b3723e6e2d24bb73937cbc201162e7"}
  
      ],
      noscript: [{ children: "JavaScript is required" }],
    },
    pageTransition: true,
    layoutTransition: true,
  },
  alias: {
    "@": resolve(__dirname, "./src"),
    "@components": resolve(__dirname, "./src/components"),
    "@views": resolve(__dirname, "./src/views"),
    "@assets": resolve(__dirname, "./src/assets"),
    "@utils": resolve(__dirname, "./src/utils"),
    "@store": resolve(__dirname, "./src/store"),
    "@router": resolve(__dirname, "./src/router"),
    "@plugins": resolve(__dirname, "./src/plugins"),
    "@static": resolve(__dirname, "./src/static"),
    "@api": resolve(__dirname, "./src/api"),
    "@config": resolve(__dirname, "./src/config"),
    "@mixins": resolve(__dirname, "./src/mixins"),
  },
  imports: { dirs: ["types", "stores", "api"] },
  runtimeConfig: {
    public: {
      api: {
        baseUrl: process.env.NUXT_PUBLIC_API_BASEURL,
      },
    },
  },
});
