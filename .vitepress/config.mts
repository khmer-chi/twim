import { defineConfig } from 'vitepress'
import llmstxt from 'vitepress-plugin-llms'
import { generateSidebar } from '../utils/generateSidebar'
const sidebar = await generateSidebar()
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-TW',
  title: "台灣即時通",
  description: "TWIM",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/khmer-chi' }
    ],
    footer: {
      // message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present Chi'
    },

    // search: {
    //   provider: 'local'
    // }
  },
  head: [
    [
      'script',
      {
        async: '',
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1159719568845688',
        crossorigin: 'anonymous'
      }
    ]
  ],
  sitemap: {
    hostname: 'https://taiwan.im'
  },
  vite: {
    plugins: [llmstxt()]
  },
  // async transformHead(context) {
  //   console.log(context)
  // },
  srcDir: './docs',
  markdown: {
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true
    },
    math: true
  },
  lastUpdated: true
})
