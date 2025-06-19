import Layout from '@/.vitepress/theme/Layout.vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import "virtual:uno.css"
import BoardGameAgricolaFence from '@/components/BoardGameAgricolaFence.vue';
export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('BoardGameAgricolaFence', BoardGameAgricolaFence);
  },
} satisfies Theme;
