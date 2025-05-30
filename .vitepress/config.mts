import { defineConfig } from 'vitepress'
import llmstxt from 'vitepress-plugin-llms'
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
    sidebar: {
      '/article': [
        {
          text: '文章列表',
          items: [
            { text: '陣列（array）如何變成聯合類型(union type)', link: '/article/typescript-array-to-unionType' },
            { text: 'vim小提示', link: '/article/vim-tip.md' },
            { text: 'redius替代品出現了', link: '/article/redius-alternative' },
            { text: '為什麼是台灣即時通', link: '/article/what-is-twim' },
            { text: '關於我', link: '/article/about-me' },
          ]
        }
      ],
      '/bug': [
        {
          text: 'bug',
          items: [
            { text: 'vitepress 在手機 Arc browser 報錯 503', link: '/bug/cloudflare-speed-optimization' },
            { text: '影響半天的 @types/node bug', link: '/bug/typescript_parentDir_node_modules_effect.md' },
          ]
        }
      ],
    },

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
})
