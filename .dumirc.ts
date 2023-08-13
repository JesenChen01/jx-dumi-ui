import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'jx-dumi-ui',
  },
  base: '/jx-dumi-ui/',
  publicPath: '/jx-dumi-ui/',
  theme: {
    nav: [
      { title: '介绍', link: './guide' },
      { title: '组件', link: './Components' }, // components会默认自动对应到src文件夹
    ],
  },

  mfsu: {},
});
