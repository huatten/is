import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'is',
  description: '一个用于对象检查判断的javascript工具库',
  base: '/',
  appearance: true,
  themeConfig: {
    logo: '/logo/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '开始使用', link: '/about/start' },
      { text: '关于', link: '/about/about' }
    ],
    sidebar: {
      '/': [
        {
          text: '基础',
          items: [
            { text: '开始使用', link: '/about/start' },
            { text: '实时演示', link: '/demo' },
            { text: '关于', link: '/about/about' }
          ]
        },
        {
          text: '类型检查',
          items: [
            { text: 'is-arguments', link: '/type/is-arguments' },
            { text: 'is-array', link: '/type/is-array' },
            { text: 'is-array-like', link: '/type/is-array-like' },
            { text: 'is-arraybuffer', link: '/type/is-arraybuffer' },
            { text: 'is-async-function', link: '/type/is-async-function' },
            { text: 'is-bigint', link: '/type/is-bigint' },
            { text: 'is-blob', link: '/type/is-blob' },
            { text: 'is-boolean', link: '/type/is-boolean' },
            { text: 'is-date', link: '/type/is-date' },
            { text: 'is-element', link: '/type/is-element' },
            { text: 'is-empty', link: '/type/is-empty' },
            { text: 'is-error', link: '/type/is-error' },
            { text: 'is-file', link: '/type/is-file' },
            { text: 'is-form-data', link: '/type/is-form-data' },
            { text: 'is-function', link: '/type/is-function' },
            { text: 'is-generator', link: '/type/is-generator' },
            { text: 'is-json', link: '/type/is-json' },
            { text: 'is-map', link: '/type/is-map' },
            { text: 'is-nan', link: '/type/is-nan' },
            { text: 'is-null', link: '/type/is-null' },
            { text: 'is-number', link: '/type/is-number' },
            { text: 'is-object', link: '/type/is-object' },
            { text: 'is-promise', link: '/type/is-promise' },
            { text: 'is-regexp', link: '/type/is-regexp' },
            { text: 'is-set', link: '/type/is-set' },
            { text: 'is-string', link: '/type/is-string' },
            { text: 'is-symbol', link: '/type/is-symbol' },
            { text: 'is-typed-array', link: '/type/is-typed-array' },
            { text: 'is-undefined', link: '/type/is-undefined' }
          ]
        },
        {
          text: '数字检查',
          items: [
            { text: 'is-decimal', link: '/number/is-decimal' },
            { text: 'is-even', link: '/number/is-even' },
            { text: 'is-finite', link: '/number/is-finite' },
            { text: 'is-infinite', link: '/number/is-infinite' },
            { text: 'is-integer', link: '/number/is-integer' },
            { text: 'is-multiple-of', link: '/number/is-multiple-of' },
            { text: 'is-natural', link: '/number/is-natural' },
            { text: 'is-negative', link: '/number/is-negative' },
            { text: 'is-negative-decimal', link: '/number/is-negative-decimal' },
            { text: 'is-negative-integer', link: '/number/is-negative-integer' },
            { text: 'is-non-zero', link: '/number/is-non-zero' },
            { text: 'is-odd', link: '/number/is-odd' },
            { text: 'is-positive', link: '/number/is-positive' },
            { text: 'is-positive-decimal', link: '/number/is-positive-decimal' },
            { text: 'is-positive-integer', link: '/number/is-positive-integer' },
            { text: 'is-prime', link: '/number/is-prime' },
            { text: 'is-safe-integer', link: '/number/is-safe-integer' },
            { text: 'is-zero', link: '/number/is-zero' }
          ]
        },
        {
          text: '正则检查',
          items: [
            { text: 'is-PascalCase', link: '/regexp/is-PascalCase' },
            { text: 'is-ascii', link: '/regexp/is-ascii' },
            { text: 'is-base64', link: '/regexp/is-base64' },
            { text: 'is-camelCase', link: '/regexp/is-camelCase' },
            { text: 'is-chinese', link: '/regexp/is-chinese' },
            { text: 'is-credit-card', link: '/regexp/is-credit-card' },
            { text: 'is-email', link: '/regexp/is-email' },
            { text: 'is-english', link: '/regexp/is-english' },
            { text: 'is-full-width', link: '/regexp/is-full-width' },
            { text: 'is-half-width', link: '/regexp/is-half-width' },
            { text: 'is-hexColor', link: '/regexp/is-hexColor' },
            { text: 'is-html', link: '/regexp/is-html' },
            { text: 'is-ip', link: '/regexp/is-ip' },
            { text: 'is-ipv4', link: '/regexp/is-ipv4' },
            { text: 'is-ipv6', link: '/regexp/is-ipv6' },
            { text: 'is-json-string', link: '/regexp/is-json-string' },
            { text: 'is-jwt', link: '/regexp/is-jwt' },
            { text: 'is-lowercase', link: '/regexp/is-lowercase' },
            { text: 'is-mac-address', link: '/regexp/is-mac-address' },
            { text: 'is-magnet-uri', link: '/regexp/is-magnet-uri' },
            { text: 'is-md5', link: '/regexp/is-md5' },
            { text: 'is-mime-type', link: '/regexp/is-mime-type' },
            { text: 'is-multibyte', link: '/regexp/is-multibyte' },
            { text: 'is-phone-number', link: '/regexp/is-phone-number' },
            { text: 'is-postal-code', link: '/regexp/is-postal-code' },
            { text: 'is-province', link: '/regexp/is-province' },
            { text: 'is-sha256', link: '/regexp/is-sha256' },
            { text: 'is-snake_case', link: '/regexp/is-snake_case' },
            { text: 'is-surrogate-pair', link: '/regexp/is-surrogate-pair' },
            { text: 'is-uppercase', link: '/regexp/is-uppercase' },
            { text: 'is-url', link: '/regexp/is-url' },
            { text: 'is-uuid', link: '/regexp/is-uuid' }
          ]
        },
        {
          text: '环境检查',
          items: [
            { text: 'is-android', link: '/env/is-android' },
            { text: 'is-android-phone', link: '/env/is-android-phone' },
            { text: 'is-android-tablet', link: '/env/is-android-tablet' },
            { text: 'is-blackberry', link: '/env/is-blackberry' },
            { text: 'is-blackberry-phone', link: '/env/is-blackberry-phone' },
            { text: 'is-blackberry-tablet', link: '/env/is-blackberry-tablet' },
            { text: 'is-browser', link: '/env/is-browser' },
            { text: 'is-chrome', link: '/env/is-chrome' },
            { text: 'is-desktop', link: '/env/is-desktop' },
            { text: 'is-edge', link: '/env/is-edge' },
            { text: 'is-firefox', link: '/env/is-firefox' },
            { text: 'is-ie', link: '/env/is-ie' },
            { text: 'is-ios', link: '/env/is-ios' },
            { text: 'is-ipad', link: '/env/is-ipad' },
            { text: 'is-iphone', link: '/env/is-iphone' },
            { text: 'is-ipod', link: '/env/is-ipod' },
            { text: 'is-linux', link: '/env/is-linux' },
            { text: 'is-mac', link: '/env/is-mac' },
            { text: 'is-meego', link: '/env/is-meego' },
            { text: 'is-mobile', link: '/env/is-mobile' },
            { text: 'is-node', link: '/env/is-node' },
            { text: 'is-offline', link: '/env/is-offline' },
            { text: 'is-online', link: '/env/is-online' },
            { text: 'is-opera', link: '/env/is-opera' },
            { text: 'is-safari', link: '/env/is-safari' },
            { text: 'is-tablet', link: '/env/is-tablet' },
            { text: 'is-wechat', link: '/env/is-wechat' },
            { text: 'is-windows', link: '/env/is-windows' },
            { text: 'is-windows-phone', link: '/env/is-windows-phone' },
            { text: 'is-windows-tablet', link: '/env/is-windows-tablet' }
          ]
        },
        {
          text: '日期检查',
          items: [
            { text: 'is-feature', link: '/date/is-feature' },
            { text: 'is-last-month', link: '/date/is-last-month' },
            { text: 'is-last-week', link: '/date/is-last-week' },
            { text: 'is-last-year', link: '/date/is-last-year' },
            { text: 'is-leapyear', link: '/date/is-leapyear' },
            { text: 'is-next-month', link: '/date/is-next-month' },
            { text: 'is-next-week', link: '/date/is-next-week' },
            { text: 'is-next-year', link: '/date/is-next-year' },
            { text: 'is-past', link: '/date/is-past' },
            { text: 'is-this-month', link: '/date/is-this-month' },
            { text: 'is-this-week', link: '/date/is-this-week' },
            { text: 'is-this-year', link: '/date/is-this-year' },
            { text: 'is-time', link: '/date/is-time' },
            { text: 'is-time12', link: '/date/is-time12' },
            { text: 'is-time24', link: '/date/is-time24' },
            { text: 'is-timestamp', link: '/date/is-timestamp' },
            { text: 'is-today', link: '/date/is-today' },
            { text: 'is-tomorrow', link: '/date/is-tomorrow' },
            { text: 'is-weekday', link: '/date/is-weekday' },
            { text: 'is-weekend', link: '/date/is-weekend' },
            { text: 'is-yesterday', link: '/date/is-yesterday' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/huatten/is' }
    ],
    footer: {
      message: 'Released under the ISC License.',
      copyright: 'Copyright © 2023-present huatten'
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./.vitepress/theme/custom.css";`
        }
      }
    }
  }
})