import Layout from './Layout.vue';

import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

export default {
  extends: DefaultTheme,
  async enhanceApp(payload) {
    // console.log(payload.siteData.value)
    // { app }
    // 注册自定义全局组件
    // app.component('MyGlobalComponent' /* ... */);
  },
  Layout,
} satisfies Theme;
