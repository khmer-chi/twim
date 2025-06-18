import Layout from '@/.vitepress/theme/Layout.vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import "virtual:uno.css"
export default {
  extends: DefaultTheme,
  Layout,
  // async enhanceApp(payload) {
  //   console.log({ payload })
  // },
} satisfies Theme;
