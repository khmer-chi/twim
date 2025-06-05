import Layout from './Layout.vue';

import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

export default {
  extends: DefaultTheme,
  Layout,
  // async enhanceApp(payload) {
  //   console.log({ payload })
  // },
} satisfies Theme;
