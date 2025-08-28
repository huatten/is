// 自定义主题入口文件
import DefaultTheme from 'vitepress/theme'
import './custom.css'

import ModernHome from './components/ModernHome.vue'
import RealDemoModule from './components/RealDemoModule.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    DefaultTheme.enhanceApp({ app })
    app.component('ModernHome', ModernHome)
    app.component('RealDemoModule', RealDemoModule)
  }
}