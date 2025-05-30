import Layout from './Layout.vue';

import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    // app.component('MyGlobalComponent' /* ... */);
  },
  Layout,
} satisfies Theme;
