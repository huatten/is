<template>
  <div class="modern-home">
    <!-- 动态背景网格 -->
    <div class="grid-background"></div>
    
    <!-- 渐变光效 -->
    <div class="gradient-overlay"></div>
    
    <!-- 浮动元素 -->
    <div class="floating-elements">
      <div class="floating-element" v-for="i in 8" :key="i" :style="{
        left: `${10 + i * 10}%`,
        top: `${20 + (i % 3) * 20}%`,
        animationDelay: `${i * 0.2}s`
      }"></div>
    </div>
    
    <!-- 主要内容 -->
    <div class="main-content">
      <!-- 英雄区域 -->
      <section class="hero-section">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="badge-text">v1.0.0</span>
          </div>
          <h1 class="hero-title">
            <span class="title-main">is</span>
            <span class="title-sub">Modern Check Library</span>
          </h1>
          <p class="hero-description">
            轻量级、高性能的JavaScript对象检查工具库<br>
            支持类型、数字、正则、环境等全方位检查
          </p>
          <div class="hero-actions">
            <a href="/about/start" class="action-button primary">
              <span>开始使用</span>
              <div class="button-ripple"></div>
            </a>
            <a href="https://github.com/huatten/is" class="action-button secondary">
              <span>查看源码</span>
            </a>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="code-container">
            <div class="code-window">
              <div class="code-header">
                <div class="code-dots">
                  <div class="dot red"></div>
                  <div class="dot yellow"></div>
                  <div class="dot green"></div>
                </div>
              </div>
              <div class="code-content">
                <pre><code><span class="keyword">import</span> { <span class="function">isArray</span>, <span class="function">isString</span> } <span class="keyword">from</span> <span class="string">'is-check'</span>

<span class="comment">// 类型检查</span>
<span class="function">console</span>.<span class="function">log</span>(<span class="function">isArray</span>([<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>])) <span class="comment">// true</span>
<span class="function">console</span>.<span class="function">log</span>(<span class="function">isString</span>(<span class="string">'hello'</span>)) <span class="comment">// true</span>

<span class="comment">// 数字检查</span>
<span class="function">console</span>.<span class="function">log</span>(<span class="function">isEven</span>(<span class="number">4</span>)) <span class="comment">// true</span>
<span class="function">console</span>.<span class="function">log</span>(<span class="function">isPrime</span>(<span class="number">7</span>)) <span class="comment">// true</span></code></pre>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- 交互式特性展示 -->
      <section class="interactive-features">
        <div class="section-header">
          <h2 class="section-title">核心特性</h2>
          <p class="section-subtitle">探索强大的检查功能</p>
        </div>
        
        <div class="features-showcase">
          <div 
            class="feature-showcase-card" 
            v-for="(feature, index) in features" 
            :key="feature.title"
            :class="{ active: activeFeature === index }"
            @click="activeFeature = index"
            @mouseenter="activeFeature = index"
          >
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3 class="feature-title">{{ feature.title }}</h3>
          </div>
        </div>
        
        <div class="feature-detail" v-if="features[activeFeature]">
          <div class="detail-content">
            <h3 class="detail-title">{{ features[activeFeature].title }}</h3>
            <p class="detail-description">{{ features[activeFeature].details }}</p>
            <div class="detail-example" v-html="features[activeFeature].example"></div>
          </div>
        </div>
      </section>

      <RealDemoModule/>
      
      <!-- 统计数据 -->
      <section class="stats-section">
        <div class="stats-grid">
          <div 
            class="stat-item" 
            v-for="(stat, index) in stats" 
            :key="stat.label"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="stat-number">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </section>
      
      <!-- 行动号召 -->
      <section class="cta-section">
        <div class="cta-content">
          <h2 class="cta-title">立即开始使用</h2>
          <p class="cta-description">零配置，即刻使用</p>
          <div class="cta-code">
            <pre><code>npm install is-check</code></pre>
            <button class="copy-button" @click="copyInstallCommand" :class="{ copied: copied }">
              <span v-if="!copied">📋 复制</span>
              <span v-else>✓ 已复制</span>
            </button>
          </div>
          <div class="cta-actions">
            <a href="/about/start" class="action-button primary large">
              <span>查看完整文档</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const features = ref([
  {
    icon: '🔬',
    title: '类型检查',
    details: '提供全面的JavaScript类型检查功能，包括基础类型和复杂对象类型',
    example: `<pre><code><span class="keyword">import</span> { <span class="function">isArray</span>, <span class="function">isString</span>, <span class="function">isObject</span> } <span class="keyword">from</span> <span class="string">'is-check'</span>

<span class="function">isArray</span>([<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>])     <span class="comment">// true</span>
<span class="function">isString</span>(<span class="string">'hello'</span>)       <span class="comment">// true</span>
<span class="function">isObject</span>({ <span class="function">a</span>: <span class="number">1</span> })      <span class="comment">// true</span></code></pre>`
  },
  {
    icon: '🔢',
    title: '数字验证',
    details: '支持整数、小数、奇偶数、正负数、质数等多种数字检查功能',
    example: `<pre><code><span class="keyword">import</span> { <span class="function">isEven</span>, <span class="function">isPrime</span>, <span class="function">isPositive</span> } <span class="keyword">from</span> <span class="string">'is-check'</span>

<span class="function">isEven</span>(<span class="number">4</span>)        <span class="comment">// true</span>
<span class="function">isPrime</span>(<span class="number">7</span>)       <span class="comment">// true</span>
<span class="function">isPositive</span>(-<span class="number">5</span>)     <span class="comment">// false</span></code></pre>`
  },
  {
    icon: '🔍',
    title: '正则匹配',
    details: '内置常用的正则表达式检查，如邮箱、手机号、URL、UUID等',
    example: `<pre><code><span class="keyword">import</span> { <span class="function">isEmail</span>, <span class="function">isUrl</span>, <span class="function">isUUID</span> } <span class="keyword">from</span> <span class="string">'is-check'</span>

<span class="function">isEmail</span>(<span class="string">'user@example.com'</span>)  <span class="comment">// true</span>
<span class="function">isUrl</span>(<span class="string">'https://example.com'</span>) <span class="comment">// true</span>
<span class="function">isUUID</span>(<span class="string">'550e8400-e29b-41d4-a716-446655440000'</span>) <span class="comment">// true</span></code></pre>`
  },
  {
    icon: '🌐',
    title: '环境检测',
    details: '准确识别运行环境，包括浏览器、Node.js、移动端等',
    example: `<pre><code><span class="keyword">import</span> { <span class="function">isBrowser</span>, <span class="function">isNode</span>, <span class="function">isMobile</span> } <span class="keyword">from</span> <span class="string">'is-check'</span>

<span class="function">isBrowser</span>()  <span class="comment">// true (在浏览器中)</span>
<span class="function">isNode</span>()     <span class="comment">// true (在Node.js中)</span>
<span class="function">isMobile</span>()   <span class="comment">// true (在移动端)</span></code></pre>`
  },
  {
    icon: '📅',
    title: '日期判断',
    details: '丰富的日期检查功能，支持今天、昨天、周末、闰年等判断',
    example: `<pre><code><span class="keyword">import</span> { <span class="function">isToday</span>, <span class="function">isWeekend</span>, <span class="function">isLeapYear</span> } <span class="keyword">from</span> <span class="string">'is-check'</span>

<span class="function">isToday</span>(<span class="keyword">new</span> <span class="function">Date</span>())    <span class="comment">// true</span>
<span class="function">isWeekend</span>(<span class="keyword">new</span> <span class="function">Date</span>()) <span class="comment">// true (如果是周末)</span>
<span class="function">isLeapYear</span>(<span class="number">2024</span>)     <span class="comment">// true</span></code></pre>`
  },
  {
    icon: '⚡',
    title: '极致性能',
    details: '轻量级设计，无依赖，性能卓越，支持按需引入',
    example: `<pre><code><span class="comment">// 按需引入，减少打包体积</span>
<span class="keyword">import</span> <span class="function">isArray</span> <span class="keyword">from</span> <span class="string">'is-check/array/is-array'</span>
<span class="keyword">import</span> <span class="function">isString</span> <span class="keyword">from</span> <span class="string">'is-check/type/is-string'</span>

<span class="function">isArray</span>([<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>])  <span class="comment">// true</span>
<span class="function">isString</span>(<span class="string">'hello'</span>)    <span class="comment">// true</span></code></pre>`
  }
])

const stats = ref([
  { value: '50+', label: '检查函数' },
  { value: '< 1KB', label: '压缩体积' },
  { value: '100%', label: '测试覆盖率' },
  { value: 'MIT', label: '开源协议' }
])

const activeFeature = ref(0)
const demoInput = ref('')
const demoResult = ref('等待输入...')
const demoResultClass = ref('')
const copied = ref(false)

const demoFunctions = ref([
  { name: 'isArray', active: true },
  { name: 'isString', active: true },
  { name: 'isNumber', active: true },
  { name: 'isBoolean', active: true }
])

const toggleFunction = (func) => {
  func.active = !func.active
  checkInput()
}

const checkInput = () => {
  if (!demoInput.value) {
    demoResult.value = '等待输入...'
    demoResultClass.value = ''
    return
  }
  
  // 模拟检查结果
  const results = []
  demoFunctions.value.forEach(func => {
    if (func.active) {
      // 简单模拟检查逻辑
      let result = false
      if (func.name === 'isArray') result = Array.isArray(JSON.parse(demoInput.value || '[]'))
      if (func.name === 'isString') result = typeof demoInput.value === 'string'
      if (func.name === 'isNumber') result = !isNaN(Number(demoInput.value))
      if (func.name === 'isBoolean') result = demoInput.value === 'true' || demoInput.value === 'false'
      
      results.push(`${func.name}: ${result ? '✅' : '❌'}`)
    }
  })
  
  demoResult.value = results.length > 0 ? results.join('\n') : '请选择检查函数'
  demoResultClass.value = results.some(r => r.includes('✅')) ? 'success' : 'error'
}

const copyInstallCommand = () => {
  navigator.clipboard.writeText('npm install is-check')
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<style scoped>
.modern-home {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f4f8 0%, #e6f0fa 50%, #dce8f5 100%);
  color: #2d3748;
  overflow: hidden;
}

/* 网格背景 */
.grid-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(rgba(66, 184, 131, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(66, 184, 131, 0.1) 1px, transparent 1px);
  background-size: 30px 30px;
  z-index: 1;
  animation: grid-move 20s linear infinite;
}

@keyframes grid-move {
  0% { transform: translate(0, 0); }
  100% { transform: translate(30px, 30px); }
}

/* 渐变光效 */
.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 10% 20%, rgba(66, 184, 131, 0.15) 0%, transparent 20%),
              radial-gradient(circle at 90% 80%, rgba(66, 138, 255, 0.15) 0%, transparent 20%);
  z-index: 2;
}

/* 浮动元素 */
.floating-elements {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  pointer-events: none;
}

.floating-element {
  position: absolute;
  width: 8px;
  height: 8px;
  background: rgba(66, 184, 131, 0.6);
  border-radius: 50%;
  animation: float 6s infinite ease-in-out;
  box-shadow: 0 0 10px rgba(66, 184, 131, 0.8);
}

@keyframes float {
  0%, 100% { 
    transform: translate(0, 0) scale(1);
    opacity: 0.6;
  }
  50% { 
    transform: translate(10px, -10px) scale(1.5);
    opacity: 1;
  }
}

/* 主要内容 */
.main-content {
  position: relative;
  z-index: 4;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}


.nav-logo {
  font-size: 1.8rem;
  font-weight: 800;
  background: linear-gradient(45deg, #2d3748, #4a5568);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: #4a5568;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #42b883;
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #2d3748;
}

.nav-link:hover::after {
  width: 100%;
}

/* 英雄区域 */
.hero-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  padding: 2rem 0;
}

.hero-content {
  position: relative;
}

.hero-badge {
  display: inline-block;
  padding: 0.25rem 1rem;
  background: rgba(66, 184, 131, 0.1);
  border: 1px solid rgba(66, 184, 131, 0.3);
  border-radius: 20px;
  margin-bottom: 1.5rem;
}

.badge-text {
  color: #42b883;
  font-size: 0.875rem;
  font-weight: 600;
}

.hero-title {
  margin-bottom: 1.5rem;
}

.title-main {
  display: block;
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(45deg, #2d3748, #42b883);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;
  margin-bottom: 0.5rem;
}

.title-sub {
  display: block;
  font-size: 1.3rem;
  color: #4a5568;
  font-weight: 500;
}

.hero-description {
  font-size: 1.1rem;
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.action-button {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  overflow: hidden;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.primary {
  background: linear-gradient(45deg, #42b883, #349c6f);
  color: white;
}

.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(66, 184, 131, 0.4);
}

.primary .button-ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transform: translate(-50%, -50%);
  animation: ripple 0.6s linear;
}

@keyframes ripple {
  to {
    width: 400px;
    height: 400px;
    opacity: 0;
  }
}

.secondary {
  background: rgba(255, 255, 255, 0.9);
  color: #2d3748;
  border: 1px solid rgba(66, 184, 131, 0.3);
}

.secondary:hover {
  background: rgba(66, 184, 131, 0.1);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* 代码可视化 */
.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.code-container {
  position: relative;
  width: 100%;
  max-width: 500px;
  transform: perspective(1000px) rotateY(-3deg);
  animation: code-float 4s ease-in-out infinite;
}

@keyframes code-float {
  0%, 100% { transform: perspective(1000px) rotateY(-3deg) translateY(0px); }
  50% { transform: perspective(1000px) rotateY(-3deg) translateY(-15px); }
}

.code-window {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
}

.code-header {
  padding: 0.75rem 1rem;
  background: rgba(247, 250, 252, 0.9);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.code-dots {
  display: flex;
  gap: 0.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.red { background: #ff5f56; }
.yellow { background: #ffbd2e; }
.green { background: #27c93f; }

.code-content {
  padding: 1.5rem;
  overflow-x: auto;
}

.code-content pre {
  margin: 0;
  font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
  font-size: 0.85rem;
  line-height: 1.5;
  color: #2d3748;
}

.keyword { color: #c792ea; }
.function { color: #6182b8; }
.string { color: #91b859; }
.number { color: #f76d47; }
.comment { color: #aabfc9; }

/* 交互式特性展示 */
.interactive-features {
  padding: 0rem 0 2rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 700;
  background: linear-gradient(45deg, #2d3748, #4a5568);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #4a5568;
}

.features-showcase {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
}

.feature-showcase-card {
  background: rgba(255, 255, 255, 0.8);
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 120px;
  backdrop-filter: blur(10px);
}

.feature-showcase-card:hover,
.feature-showcase-card.active {
  transform: translateY(-5px);
  border-color: #42b883;
  box-shadow: 0 10px 25px rgba(66, 184, 131, 0.2);
  background: rgba(255, 255, 255, 1);
}

.feature-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  display: block;
}

.feature-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
}

.feature-detail {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  max-width: 800px;
  margin: 0 auto;
}

.detail-content pre {
  background: rgba(247, 250, 252, 0.8);
  border-radius: 8px;
  padding: 1rem;
  font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
  font-size: 0.85rem;
  line-height: 1.5;
  color: #2d3748;
  margin: 1rem 0;
  overflow-x: auto;
}

.detail-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.detail-description {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1rem;
}

/* 统计数据 */
.stats-section {
  padding: 4rem 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
}

.stat-item {
  padding: 2rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
  animation: stat-fadeIn 0.6s forwards;
}

@keyframes stat-fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stat-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(45deg, #42b883, #2d3748);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #4a5568;
  font-size: 1rem;
}

/* 行动号召 */
.cta-section {
  padding: 2rem 0;
  text-align: center;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 24px;
  padding: 3rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.cta-title {
  font-size: 2.2rem;
  font-weight: 700;
  background: linear-gradient(45deg, #2d3748, #42b883);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.cta-description {
  font-size: 1.1rem;
  color: #4a5568;
  margin-bottom: 2rem;
}

.cta-code {
  background: rgba(247, 250, 252, 0.9);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.cta-code pre {
  margin: 0;
  font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
  font-size: 1rem;
  color: #2d3748;
}

.copy-button {
  background: rgba(66, 184, 131, 0.1);
  color: #42b883;
  border: 1px solid rgba(66, 184, 131, 0.3);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.copy-button:hover {
  background: rgba(66, 184, 131, 0.2);
}

.copy-button.copied {
  background: rgba(72, 187, 120, 0.2);
  color: #48bb78;
}

.cta-actions {
  margin-top: 2rem;
}

.large {
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .hero-section {
    gap: 2rem;
  }
  
  .title-main {
    font-size: 3rem;
  }
  
  .title-sub {
    font-size: 1.1rem;
  }
}

@media (max-width: 768px) {
  .main-content {
    padding: 1rem;
  }
  
  .hero-section {
    grid-template-columns: 1fr;
    text-align: center;
    min-height: auto;
    gap: 2rem;
  }
  
  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .modern-nav {
    flex-direction: column;
    gap: 1rem;
  }
  
  .title-main {
    font-size: 2.5rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .cta-content {
    padding: 2rem 1rem;
  }
  
  .cta-code {
    flex-direction: column;
    gap: 1rem;
  }
  
  .features-showcase {
    gap: 0.5rem;
  }
  
  .feature-showcase-card {
    padding: 1rem;
    min-width: 100px;
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .action-button {
    width: 100%;
    justify-content: center;
  }
  
  .demo-container {
    padding: 2rem 1rem;
  }
  
  .demo-functions {
    gap: 0.25rem;
  }
  
  .demo-function {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
}
</style>