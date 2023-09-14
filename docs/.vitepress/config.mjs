import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'is',
  description: 'a mini javascript check and judgment library',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '../logo/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide' },
      { text: 'API', link: '/type/is-arguments' },
    ],

    sidebar: [
      {
        text: '类型',
        items: [
          { text: 'isArguments', link: '/type/is-arguments' },
          { text: 'isArray', link: '/type/is-array' },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/huatten/is' }],
  },
})
