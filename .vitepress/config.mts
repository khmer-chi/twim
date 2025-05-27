import { defineConfig } from 'vitepress'

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

})
