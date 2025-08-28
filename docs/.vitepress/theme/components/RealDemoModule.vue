<template>
  <div class="demo-module">
    <div class="demo-header">
      <h2 class="demo-title">实时演示</h2>
      <p class="demo-subtitle">直接测试各种检查函数</p>
    </div>
    
    <div class="demo-content">
      <!-- 函数分类菜单 -->
      <div class="function-categories">
        <button 
          v-for="category in categories" 
          :key="category.id"
          :class="['category-btn', { active: activeCategory === category.id }]"
          @click="activeCategory = category.id"
        >
          {{ category.name }}
        </button>
      </div>
      
      <!-- 函数列表 -->
      <div class="function-list">
        <div 
          v-for="func in filteredFunctions" 
          :key="func.name"
          :class="['function-item', { active: activeFunction?.name === func.name }]"
          @click="selectFunction(func)"
        >
          <div class="function-info">
            <span class="function-name">{{ func.name }}</span>
            <span class="function-desc">{{ func.description }}</span>
          </div>
          <div class="function-tag" :class="func.category">
            {{ getCategoryName(func.category) }}
          </div>
        </div>
      </div>
      
      <!-- 演示区域 -->
      <div class="demo-area" v-if="activeFunction">
        <div class="demo-input-section">
          <label class="input-label">{{ activeFunction.name }} 演示</label>
          <div class="input-container">
            <input 
              v-model="inputValue"
              :placeholder="activeFunction.placeholder || '请输入要检查的值'"
              @input="runDemo"
              class="demo-input"
            />
            <button @click="clearInput" class="clear-btn">清除</button>
          </div>
        </div>
        
        <!-- 结果展示 -->
        <div class="demo-result">
          <div class="result-header">
            <span class="result-label">执行结果</span>
            <span class="result-status" :class="{ success: lastResult, error: lastResult === false }">
              {{ getResultText() }}
            </span>
          </div>
          
          <div class="result-content">
            <pre class="result-code"><code>{{ resultCode }}</code></pre>
            
            <div class="result-details" v-if="resultDetails">
              <h4>详细信息:</h4>
              <div class="detail-item" v-for="(value, key) in resultDetails" :key="key">
                <span class="detail-key">{{ key }}:</span>
                <span class="detail-value">{{ String(value) }}</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 使用示例 -->
        <div class="usage-example" v-if="activeFunction.example">
          <h4>使用示例:</h4>
          <pre class="example-code"><code>{{ activeFunction.example }}</code></pre>
        </div>
      </div>
      
      <!-- 默认提示 -->
      <div class="demo-placeholder" v-else>
        <div class="placeholder-content">
          <div class="placeholder-icon">🔍</div>
          <p>请选择一个函数开始演示</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive, watch } from 'vue'

// 实际导入你的is库
import is from '../../../../src/index.js'

// 函数分类
const categories = ref([
  { id: 'type', name: '类型检查' },
  { id: 'number', name: '数字检查' },
  { id: 'regexp', name: '正则检查' },
  { id: 'env', name: '环境检查' },
  { id: 'date', name: '日期检查' }
])

const activeCategory = ref('type')

// 函数列表 - 使用实际的is库函数
const functions = ref([
  // 类型检查
  {
    name: 'isArray',
    category: 'type',
    description: '检查值是否为数组',
    placeholder: '[1, 2, 3] 或 "hello"',
    example: `import is from 'is-check'\n\nis.array([1, 2, 3]) // true\nis.array("hello") // false`,
    func: (value) => {
      try {
        const parsed = JSON.parse(value)
        return is.array(parsed)
      } catch {
        return is.array(value)
      }
    }
  },
  {
    name: 'isString',
    category: 'type',
    description: '检查值是否为字符串',
    placeholder: '"hello" 或 123',
    example: `import is from 'is-check'\n\nis.string("hello") // true\nis.string(123) // false`,
    func: (value) => is.string(value)
  },
  {
    name: 'isNumber',
    category: 'type',
    description: '检查值是否为数字',
    placeholder: '123 或 "hello"',
    example: `import is from 'is-check'\n\nis.number(123) // true\nis.number("hello") // false`,
    func: (value) => is.number(value)
  },
  {
    name: 'isObject',
    category: 'type',
    description: '检查值是否为对象',
    placeholder: '{"a": 1} 或 [1, 2, 3]',
    example: `import is from 'is-check'\n\nis.object({a: 1}) // true\nis.object([1, 2, 3]) // false`,
    func: (value) => {
      try {
        const parsed = JSON.parse(value)
        return is.object(parsed)
      } catch {
        return is.object(value)
      }
    }
  },
  {
    name: 'isFunction',
    category: 'type',
    description: '检查值是否为函数',
    placeholder: 'function() {}',
    example: `import is from 'is-check'\n\nis.function(function() {}) // true\nis.function("hello") // false`,
    func: (value) => is.function(value)
  },
  {
    name: 'isBoolean',
    category: 'type',
    description: '检查值是否为布尔值',
    placeholder: 'true 或 false',
    example: `import is from 'is-check'\n\nis.boolean(true) // true\nis.boolean("true") // false`,
    func: (value) => is.boolean(value)
  },
  {
    name: 'isArguments',
    category: 'type',
    description: '检查值是否为arguments对象',
    placeholder: '[1, 2, 3] 或 "hello"',
    example: `import is from 'is-check'\n\nis.arguments(arguments) // true`,
    func: (value) => is.arguments(value)
  },
  {
    name: 'isArrayLike',
    category: 'type',
    description: '检查值是否为类数组',
    placeholder: '[1, 2, 3] 或 "hello"',
    example: `import is from 'is-check'\n\nis.arrayLike([1, 2, 3]) // true`,
    func: (value) => is.arrayLike(value)
  },
  {
    name: 'isArraybuffer',
    category: 'type',
    description: '检查值是否为ArrayBuffer',
    placeholder: 'new ArrayBuffer(8)',
    example: `import is from 'is-check'\n\nis.arraybuffer(new ArrayBuffer(8)) // true`,
    func: (value) => is.arraybuffer(value)
  },
  {
    name: 'isBigint',
    category: 'type',
    description: '检查值是否为BigInt',
    placeholder: '123n',
    example: `import is from 'is-check'\n\nis.bigint(123n) // true`,
    func: (value) => is.bigint(value)
  },
  {
    name: 'isDate',
    category: 'type',
    description: '检查值是否为Date对象',
    placeholder: 'new Date()',
    example: `import is from 'is-check'\n\nis.date(new Date()) // true`,
    func: (value) => is.date(value)
  },
  {
    name: 'isElement',
    category: 'type',
    description: '检查值是否为DOM元素',
    placeholder: 'document.body',
    example: `import is from 'is-check'\n\nis.element(document.body) // true`,
    func: (value) => is.element(value)
  },
  {
    name: 'isEmpty',
    category: 'type',
    description: '检查值是否为空',
    placeholder: '{} 或 []',
    example: `import is from 'is-check'\n\nis.empty({}) // true`,
    func: (value) => is.empty(value)
  },
  {
    name: 'isJSON',
    category: 'type',
    description: '检查值是否为JSON对象',
    placeholder: '{"a": 1}',
    example: `import is from 'is-check'\n\nis.json({"a": 1}) // true`,
    func: (value) => is.json(value)
  },
  {
    name: 'isNaN',
    category: 'type',
    description: '检查值是否为NaN',
    placeholder: 'NaN',
    example: `import is from 'is-check'\n\nis.NaN(NaN) // true`,
    func: (value) => is.NaN(value)
  },
  {
    name: 'isNull',
    category: 'type',
    description: '检查值是否为null',
    placeholder: 'null',
    example: `import is from 'is-check'\n\nis.null(null) // true`,
    func: (value) => is.null(value)
  },
  {
    name: 'isRegexp',
    category: 'type',
    description: '检查值是否为RegExp对象',
    placeholder: '/abc/',
    example: `import is from 'is-check'\n\nis.regexp(/abc/) // true`,
    func: (value) => is.regexp(value)
  },
  {
    name: 'isSymbol',
    category: 'type',
    description: '检查值是否为Symbol',
    placeholder: 'Symbol("id")',
    example: `import is from 'is-check'\n\nis.symbol(Symbol("id")) // true`,
    func: (value) => is.symbol(value)
  },
  {
    name: 'isUndefined',
    category: 'type',
    description: '检查值是否为undefined',
    placeholder: 'undefined',
    example: `import is from 'is-check'\n\nis.undefined(undefined) // true`,
    func: (value) => is.undefined(value)
  },
  {
    name: 'isMap',
    category: 'type',
    description: '检查值是否为Map对象',
    placeholder: 'new Map()',
    example: `import is from 'is-check'\n\nis.map(new Map()) // true`,
    func: (value) => is.map(value)
  },
  {
    name: 'isSet',
    category: 'type',
    description: '检查值是否为Set对象',
    placeholder: 'new Set()',
    example: `import is from 'is-check'\n\nis.set(new Set()) // true`,
    func: (value) => is.set(value)
  },
  {
    name: 'isPromise',
    category: 'type',
    description: '检查值是否为Promise对象',
    placeholder: 'Promise.resolve()',
    example: `import is from 'is-check'\n\nis.promise(Promise.resolve()) // true`,
    func: (value) => is.promise(value)
  },
  {
    name: 'isGenerator',
    category: 'type',
    description: '检查值是否为Generator函数',
    placeholder: 'function* gen() {}',
    example: `import is from 'is-check'\n\nis.generator(function* gen() {}) // true`,
    func: (value) => is.generator(value)
  },
  {
    name: 'isAsyncFunction',
    category: 'type',
    description: '检查值是否为异步函数',
    placeholder: 'async function fn() {}',
    example: `import is from 'is-check'\n\nis.asyncFunction(async function fn() {}) // true`,
    func: (value) => is.asyncFunction(value)
  },
  {
    name: 'isTypedArray',
    category: 'type',
    description: '检查值是否为TypedArray',
    placeholder: 'new Int8Array()',
    example: `import is from 'is-check'\n\nis.typedArray(new Int8Array()) // true`,
    func: (value) => is.typedArray(value)
  },
  {
    name: 'isError',
    category: 'type',
    description: '检查值是否为Error对象',
    placeholder: 'new Error()',
    example: `import is from 'is-check'\n\nis.error(new Error()) // true`,
    func: (value) => is.error(value)
  },
  {
    name: 'isFile',
    category: 'type',
    description: '检查值是否为File对象',
    placeholder: 'new File()',
    example: `import is from 'is-check'\n\nis.file(new File()) // true`,
    func: (value) => is.file(value)
  },
  {
    name: 'isBlob',
    category: 'type',
    description: '检查值是否为Blob对象',
    placeholder: 'new Blob()',
    example: `import is from 'is-check'\n\nis.blob(new Blob()) // true`,
    func: (value) => is.blob(value)
  },
  {
    name: 'isFormData',
    category: 'type',
    description: '检查值是否为FormData对象',
    placeholder: 'new FormData()',
    example: `import is from 'is-check'\n\nis.formData(new FormData()) // true`,
    func: (value) => is.formData(value)
  },
  
  // 数字检查
  {
    name: 'isEven',
    category: 'number',
    description: '检查数字是否为偶数',
    placeholder: '2 或 3',
    example: `import is from 'is-check'\n\nis.even(2) // true\nis.even(3) // false`,
    func: (value) => is.even(Number(value))
  },
  {
    name: 'isOdd',
    category: 'number',
    description: '检查数字是否为奇数',
    placeholder: '3 或 2',
    example: `import is from 'is-check'\n\nis.odd(3) // true\nis.odd(2) // false`,
    func: (value) => is.odd(Number(value))
  },
  {
    name: 'isPositive',
    category: 'number',
    description: '检查数字是否为正数',
    placeholder: '1 或 -1',
    example: `import is from 'is-check'\n\nis.positive(1) // true\nis.positive(-1) // false`,
    func: (value) => is.positive(Number(value))
  },
  {
    name: 'isNegative',
    category: 'number',
    description: '检查数字是否为负数',
    placeholder: '-1 或 1',
    example: `import is from 'is-check'\n\nis.negative(-1) // true\nis.negative(1) // false`,
    func: (value) => is.negative(Number(value))
  },
  {
    name: 'isInteger',
    category: 'number',
    description: '检查值是否为整数',
    placeholder: '1 或 1.5',
    example: `import is from 'is-check'\n\nis.integer(1) // true\nis.integer(1.5) // false`,
    func: (value) => is.integer(Number(value))
  },
  {
    name: 'isDecimal',
    category: 'number',
    description: '检查值是否为小数',
    placeholder: '1.5 或 1',
    example: `import is from 'is-check'\n\nis.decimal(1.5) // true\nis.decimal(1) // false`,
    func: (value) => is.decimal(Number(value))
  },
  {
    name: 'isFinite',
    category: 'number',
    description: '检查值是否为有限数',
    placeholder: '1.5',
    example: `import is from 'is-check'\n\nis.finite(1.5) // true`,
    func: (value) => is.finite(Number(value))
  },
  {
    name: 'isInfinite',
    category: 'number',
    description: '检查值是否为无穷大',
    placeholder: 'Infinity',
    example: `import is from 'is-check'\n\nis.infinite(Infinity) // true`,
    func: (value) => is.infinite(Number(value))
  },
  {
    name: 'isNatural',
    category: 'number',
    description: '检查值是否为自然数',
    placeholder: '1',
    example: `import is from 'is-check'\n\nis.natural(1) // true`,
    func: (value) => is.natural(Number(value))
  },
  {
    name: 'isNegativeDecimal',
    category: 'number',
    description: '检查值是否为负小数',
    placeholder: '-1.5',
    example: `import is from 'is-check'\n\nis.negativeDecimal(-1.5) // true`,
    func: (value) => is.negativeDecimal(Number(value))
  },
  {
    name: 'isNegativeInteger',
    category: 'number',
    description: '检查值是否为负整数',
    placeholder: '-1',
    example: `import is from 'is-check'\n\nis.negativeInteger(-1) // true`,
    func: (value) => is.negativeInteger(Number(value))
  },
  {
    name: 'isPositiveDecimal',
    category: 'number',
    description: '检查值是否为正小数',
    placeholder: '1.5',
    example: `import is from 'is-check'\n\nis.positiveDecimal(1.5) // true`,
    func: (value) => is.positiveDecimal(Number(value))
  },
  {
    name: 'isPositiveInteger',
    category: 'number',
    description: '检查值是否为正整数',
    placeholder: '1',
    example: `import is from 'is-check'\n\nis.positiveInteger(1) // true`,
    func: (value) => is.positiveInteger(Number(value))
  },
  {
    name: 'isPrime',
    category: 'number',
    description: '检查值是否为质数',
    placeholder: '7',
    example: `import is from 'is-check'\n\nis.prime(7) // true`,
    func: (value) => is.prime(Number(value))
  },
  
  // 正则检查
  {
    name: 'isEmail',
    category: 'regexp',
    description: '检查字符串是否为有效邮箱',
    placeholder: 'user@example.com',
    example: `import is from 'is-check'\n\nis.email("user@example.com") // true\nis.email("invalid") // false`,
    func: (value) => is.email(value)
  },
  {
    name: 'isUrl',
    category: 'regexp',
    description: '检查字符串是否为有效URL',
    placeholder: 'https://example.com',
    example: `import is from 'is-check'\n\nis.url("https://example.com") // true\nis.url("invalid") // false`,
    func: (value) => is.url(value)
  },
  {
    name: 'isPhoneNumber',
    category: 'regexp',
    description: '检查字符串是否为有效手机号',
    placeholder: '13800138000',
    example: `import is from 'is-check'\n\nis.phoneNumber("13800138000") // true\nis.phoneNumber("invalid") // false`,
    func: (value) => is.phoneNumber(value)
  },
  {
    name: 'isUUID',
    category: 'regexp',
    description: '检查字符串是否为有效UUID',
    placeholder: '550e8400-e29b-41d4-a716-446655440000',
    example: `import is from 'is-check'\n\nis.uuid("550e8400-e29b-41d4-a716-446655440000") // true`,
    func: (value) => is.uuid(value)
  },
  {
    name: 'isCamelCase',
    category: 'regexp',
    description: '检查字符串是否为驼峰命名',
    placeholder: 'camelCase',
    example: `import is from 'is-check'\n\nis.camelCase("camelCase") // true`,
    func: (value) => is.camelCase(value)
  },
  {
    name: 'isChinese',
    category: 'regexp',
    description: '检查字符串是否为中文',
    placeholder: '你好',
    example: `import is from 'is-check'\n\nis.chinese("你好") // true`,
    func: (value) => is.chinese(value)
  },
  {
    name: 'isEnglish',
    category: 'regexp',
    description: '检查字符串是否为英文',
    placeholder: 'hello',
    example: `import is from 'is-check'\n\nis.english("hello") // true`,
    func: (value) => is.english(value)
  },
  {
    name: 'isHexColor',
    category: 'regexp',
    description: '检查字符串是否为十六进制颜色',
    placeholder: '#ff0000',
    example: `import is from 'is-check'\n\nis.hexColor("#ff0000") // true`,
    func: (value) => is.hexColor(value)
  },
  {
    name: 'isHtml',
    category: 'regexp',
    description: '检查字符串是否为HTML',
    placeholder: '<div>hello</div>',
    example: `import is from 'is-check'\n\nis.html("<div>hello</div>") // true`,
    func: (value) => is.html(value)
  },
  {
    name: 'isJWT',
    category: 'regexp',
    description: '检查字符串是否为JWT',
    placeholder: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    example: `import is from 'is-check'\n\nis.jwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...") // true`,
    func: (value) => is.jwt(value)
  },
  {
    name: 'isLowercase',
    category: 'regexp',
    description: '检查字符串是否为小写',
    placeholder: 'hello',
    example: `import is from 'is-check'\n\nis.lowercase("hello") // true`,
    func: (value) => is.lowercase(value)
  },
  {
    name: 'isMD5',
    category: 'regexp',
    description: '检查字符串是否为MD5',
    placeholder: '5d41402abc4b2a76b9719d911017c592',
    example: `import is from 'is-check'\n\nis.md5("5d41402abc4b2a76b9719d911017c592") // true`,
    func: (value) => is.md5(value)
  },
  {
    name: 'isPascalCase',
    category: 'regexp',
    description: '检查字符串是否为帕斯卡命名',
    placeholder: 'PascalCase',
    example: `import is from 'is-check'\n\nis.pascalCase("PascalCase") // true`,
    func: (value) => is.pascalCase(value)
  },
  {
    name: 'isProvince',
    category: 'regexp',
    description: '检查字符串是否为省份',
    placeholder: '北京市',
    example: `import is from 'is-check'\n\nis.province("北京市") // true`,
    func: (value) => is.province(value)
  },
  {
    name: 'isSHA256',
    category: 'regexp',
    description: '检查字符串是否为SHA256',
    placeholder: 'a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e',
    example: `import is from 'is-check'\n\nis.sha256("a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e") // true`,
    func: (value) => is.sha256(value)
  },
  {
    name: 'isSnakeCase',
    category: 'regexp',
    description: '检查字符串是否为蛇形命名',
    placeholder: 'snake_case',
    example: `import is from 'is-check'\n\nis.snakeCase("snake_case") // true`,
    func: (value) => is.snakeCase(value)
  },
  {
    name: 'isUppercase',
    category: 'regexp',
    description: '检查字符串是否为大写',
    placeholder: 'HELLO',
    example: `import is from 'is-check'\n\nis.uppercase("HELLO") // true`,
    func: (value) => is.uppercase(value)
  },
  {
    name: 'isIP',
    category: 'regexp',
    description: '检查字符串是否为IP地址',
    placeholder: '192.168.1.1',
    example: `import is from 'is-check'\n\nis.ip("192.168.1.1") // true`,
    func: (value) => is.ip(value)
  },
  {
    name: 'isIPv4',
    category: 'regexp',
    description: '检查字符串是否为IPv4地址',
    placeholder: '192.168.1.1',
    example: `import is from 'is-check'\n\nis.ipv4("192.168.1.1") // true`,
    func: (value) => is.ipv4(value)
  },
  {
    name: 'isIPv6',
    category: 'regexp',
    description: '检查字符串是否为IPv6地址',
    placeholder: '2001:0db8:85a3:0000:0000:8a2e:0370:7334',
    example: `import is from 'is-check'\n\nis.ipv6("2001:0db8:85a3:0000:0000:8a2e:0370:7334") // true`,
    func: (value) => is.ipv6(value)
  },
  {
    name: 'isCreditCard',
    category: 'regexp',
    description: '检查字符串是否为信用卡号',
    placeholder: '4111111111111111',
    example: `import is from 'is-check'\n\nis.creditCard("4111111111111111") // true`,
    func: (value) => is.creditCard(value)
  },
  {
    name: 'isPostalCode',
    category: 'regexp',
    description: '检查字符串是否为邮政编码',
    placeholder: '100000',
    example: `import is from 'is-check'\n\nis.postalCode("100000") // true`,
    func: (value) => is.postalCode(value)
  },
  {
    name: 'isMACAddress',
    category: 'regexp',
    description: '检查字符串是否为MAC地址',
    placeholder: '00:00:00:00:00:00',
    example: `import is from 'is-check'\n\nis.macAddress("00:00:00:00:00:00") // true`,
    func: (value) => is.macAddress(value)
  },
  {
    name: 'isMagnetURI',
    category: 'regexp',
    description: '检查字符串是否为磁力链接',
    placeholder: 'magnet:?xt=urn:btih:...',
    example: `import is from 'is-check'\n\nis.magnetURI("magnet:?xt=urn:btih:...") // true`,
    func: (value) => is.magnetURI(value)
  },
  {
    name: 'isMimeType',
    category: 'regexp',
    description: '检查字符串是否为MIME类型',
    placeholder: 'text/html',
    example: `import is from 'is-check'\n\nis.mimeType("text/html") // true`,
    func: (value) => is.mimeType(value)
  },
  {
    name: 'isBase64',
    category: 'regexp',
    description: '检查字符串是否为Base64编码',
    placeholder: 'aGVsbG8=',
    example: `import is from 'is-check'\n\nis.base64("aGVsbG8=") // true`,
    func: (value) => is.base64(value)
  },
  {
    name: 'isJSONString',
    category: 'regexp',
    description: '检查字符串是否为JSON字符串',
    placeholder: '{"a": 1}',
    example: `import is from 'is-check'\n\nis.jsonString("{\"a\": 1}") // true`,
    func: (value) => is.jsonString(value)
  },
  {
    name: 'isAscii',
    category: 'regexp',
    description: '检查字符串是否为ASCII字符',
    placeholder: 'hello',
    example: `import is from 'is-check'\n\nis.ascii("hello") // true`,
    func: (value) => is.ascii(value)
  },
  {
    name: 'isMultibyte',
    category: 'regexp',
    description: '检查字符串是否为多字节字符',
    placeholder: '你好',
    example: `import is from 'is-check'\n\nis.multibyte("你好") // true`,
    func: (value) => is.multibyte(value)
  },
  {
    name: 'isHalfWidth',
    category: 'regexp',
    description: '检查字符串是否为半角字符',
    placeholder: 'hello',
    example: `import is from 'is-check'\n\nis.halfWidth("hello") // true`,
    func: (value) => is.halfWidth(value)
  },
  {
    name: 'isFullWidth',
    category: 'regexp',
    description: '检查字符串是否为全角字符',
    placeholder: 'ｈｅｌｌｏ',
    example: `import is from 'is-check'\n\nis.fullWidth("ｈｅｌｌｏ") // true`,
    func: (value) => is.fullWidth(value)
  },
  {
    name: 'isSurrogatePair',
    category: 'regexp',
    description: '检查字符串是否为代理对字符',
    placeholder: '𠮷',
    example: `import is from 'is-check'\n\nis.surrogatePair("𠮷") // true`,
    func: (value) => is.surrogatePair(value)
  },
  
  // 环境检查
  {
    name: 'isBrowser',
    category: 'env',
    description: '检查是否在浏览器环境',
    placeholder: '无需输入',
    example: `import is from 'is-check'\n\nis.browser() // true (在浏览器中)`,
    func: () => is.browser()
  },
  {
    name: 'isNode',
    category: 'env',
    description: '检查是否在Node.js环境',
    placeholder: '无需输入',
    example: `import is from 'is-check'\n\nis.node() // true (在Node.js中)`,
    func: () => is.node()
  },
  {
    name: 'isMobile',
    category: 'env',
    description: '检查是否在移动设备上',
    placeholder: '无需输入',
    example: `import is from 'is-check'\n\nis.mobile() // true (在移动设备上)`,
    func: () => is.mobile()
  },
  {
    name: 'isAndroid',
    category: 'env',
    description: '检查是否在Android设备上',
    placeholder: '无需输入',
    example: `import is from 'is-check'\n\nis.android() // true (在Android设备上)`,
    func: () => is.android()
  },
  {
    name: 'isAndroidPhone',
    category: 'env',
    description: '检查是否在Android手机上',
    placeholder: '无需输入',
    example: `import is from 'is-check'\n\nis.androidPhone() // true (在Android手机上)`,
    func: () => is.androidPhone()
  },
  {
    name: 'isAndroidTablet',
    category: 'env',
    description: '检查是否在Android平板上',
    placeholder: '无需输入',
    example: `import is from 'is-check'\n\nis.androidTablet() // true (在Android平板上)`,
    func: () => is.androidTablet()
  },
  {
    name: 'isBlackberry',
    category: 'env',
    description: '检查是否在Blackberry设备上',
    placeholder: '无需输入',
    example: `import is from 'is-check'\n\nis.blackberry() // true (在Blackberry设备上)`,
    func: () => is.blackberry()
  },
  {
    name: 'isBlackberryPhone',
    category: 'env',
    description: '检查是否在Blackberry手机上',
    placeholder: '无需输入',
    example: `import is from 'is-check'\n\nis.blackberryPhone() // true (在Blackberry手机上)`,
    func: () => is.blackberryPhone()
  },
  {
    name: 'isBlackberryTablet',
    category: 'env',
    description: '检查是否在Blackberry平板上',
    placeholder: '无需输入',
    example: `import is from 'is-check'\n\nis.blackberryTablet() // true (在Blackberry平板上)`,
    func: () => is.blackberryTablet()
  },
  {
    name: 'isChrome',
    category: 'env',
    description: '检查是否在Chrome浏览器中',
    placeholder: '无需输入',
    example: `import is from 'is-check'\n\nis.chrome() // true (在Chrome浏览器中)`,
    func: () => is.chrome()
  },
  {
    name: 'isDesktop',
    category: 'env',
    description: '检查是否在桌面设备上',
    placeholder: '无需输入',
    example: `import is from 'is-check'\n\nis.desktop() // true (在桌面设备上)`,
    func: () => is.desktop()
  },
  {
    name: 'isEdge',
    category: 'env',
    description: '检查是否在Edge浏览器中',
    placeholder: '无需输入',
    example: `import is from 'is-check'\n\nis.edge() // true (在Edge浏览器中)`,
    func: () => is.edge()
  },
  {
    name: 'isFirefox',
    category: 'env',
    description: '检查是否在Firefox浏览器中',
    placeholder: '无需输入',
    example: `import is from 'is-check'\n\nis.firefox() // true (在Firefox浏览器中)`,
    func: () => is.firefox()
  },
  {
    name: 'isIE',
    category: 'env',
    description: '检查是否在IE浏览器中',
    placeholder: '无需输入',
    example: `import is from 'is-check'\n\nis.ie() // true (在IE浏览器中)`,
    func: () => is.ie()
  },
  {
    name: 'isIos',
    category: 'env',
    description: '检查是否在iOS设备上',
    placeholder: '无需输入',
    example: `import is from 'is-check'\n\nis.ios() // true (在iOS设备上)`,
    func: () => is.ios()
  },
  {
    name: 'isIpad',
    category: 'env',
    description: '检查是否在iPad上',
    placeholder: '无需输入',
    example: `import is from 'is-check'\n\nis.ipad() // true (在iPad上)`,
    func: () => is.ipad()
  },
  {
    name: 'isIphone',
    category: 'env',
    description: '检查是否在iPhone上',
    placeholder: '无需输入',
    example: `import is from 'is-check'\n\nis.iphone() // true (在iPhone上)`,
    func: () => is.iphone()
  },
  {
    name: 'isIpod',
    category: 'env',
    description: '检查是否在iPod上',
    placeholder: '无需输入',
    example: `import is from 'is-check'\n\nis.ipod() // true (在iPod上)`,
    func: () => is.ipod()
  },
  {
    name: 'isLinux',
    category: 'env',
    description: '检查是否在Linux系统上',
    placeholder: '无需输入',
    example: `import is from 'is-check'\n\nis.linux() // true (在Linux系统上)`,
    func: () => is.linux()
  },
  {
    name: 'isMac',
    category: 'env',
    description: '检查是否在Mac系统上',
    placeholder: '无需输入',
    example: `import is from 'is-check'\n\nis.mac() // true (在Mac系统上)`,
    func: () => is.mac()
  },
  {
    name: 'isMeego',
    category: 'env',
    description: '检查是否在Meego系统上',
    placeholder: '无需输入',
    example: `import is from 'is-check'\n\nis.meego() // true (在Meego系统上)`,
    func: () => is.meego()
  },
  {
    name: 'isOffline',
    category: 'env',
    description: '检查是否离线',
    placeholder: '无需输入',
    example: `import is from 'is-check'\n\nis.offline() // true (离线状态)`,
    func: () => is.offline()
  },
  {
    name: 'isOnline',
    category: 'env',
    description: '检查是否在线',
    placeholder: '无需输入',
    example: `import is from 'is-check'\n\nis.online() // true (在线状态)`,
    func: () => is.online()
  },
  {
    name: 'isOpera',
    category: 'env',
    description: '检查是否在Opera浏览器中',
    placeholder: '无需输入',
    example: `import is from 'is-check'\n\nis.opera() // true (在Opera浏览器中)`,
    func: () => is.opera()
  },
  {
    name: 'isSafari',
    category: 'env',
    description: '检查是否在Safari浏览器中',
    placeholder: '无需输入',
    example: `import is from 'is-check'\n\nis.safari() // true (在Safari浏览器中)`,
    func: () => is.safari()
  },
  {
    name: 'isTablet',
    category: 'env',
    description: '检查是否在平板设备上',
    placeholder: '无需输入',
    example: `import is from 'is-check'\n\nis.tablet() // true (在平板设备上)`,
    func: () => is.tablet()
  },
  {
    name: 'isWechat',
    category: 'env',
    description: '检查是否在微信中',
    placeholder: '无需输入',
    example: `import is from 'is-check'\n\nis.wechat() // true (在微信中)`,
    func: () => is.wechat()
  },
  {
    name: 'isWindows',
    category: 'env',
    description: '检查是否在Windows系统上',
    placeholder: '无需输入',
    example: `import is from 'is-check'\n\nis.windows() // true (在Windows系统上)`,
    func: () => is.windows()
  },
  {
    name: 'isWindowsPhone',
    category: 'env',
    description: '检查是否在Windows手机上',
    placeholder: '无需输入',
    example: `import is from 'is-check'\n\nis.windowsPhone() // true (在Windows手机上)`,
    func: () => is.windowsPhone()
  },
  {
    name: 'isWindowsTablet',
    category: 'env',
    description: '检查是否在Windows平板上',
    placeholder: '无需输入',
    example: `import is from 'is-check'\n\nis.windowsTablet() // true (在Windows平板上)`,
    func: () => is.windowsTablet()
  },
  
  // 日期检查
  {
    name: 'isToday',
    category: 'date',
    description: '检查日期是否为今天',
    placeholder: '2023-12-01',
    example: `import is from 'is-check'\n\nis.today(new Date()) // true`,
    func: (value) => {
      try {
        const date = new Date(value)
        return is.today(date)
      } catch {
        return false
      }
    }
  },
  {
    name: 'isWeekend',
    category: 'date',
    description: '检查日期是否为周末',
    placeholder: '2023-12-02',
    example: `import is from 'is-check'\n\nis.weekend(new Date()) // true (如果是周末)`,
    func: (value) => {
      try {
        const date = new Date(value)
        return is.weekend(date)
      } catch {
        return false
      }
    }
  },
  {
    name: 'isLeapYear',
    category: 'date',
    description: '检查年份是否为闰年',
    placeholder: '2024',
    example: `import is from 'is-check'\n\nis.leapYear(2024) // true`,
    func: (value) => is.leapYear(Number(value))
  },
  {
    name: 'isFeature',
    category: 'date',
    description: '检查日期是否为将来',
    placeholder: '2025-12-01',
    example: `import is from 'is-check'\n\nis.feature(new Date()) // true (如果是将来日期)`,
    func: (value) => {
      try {
        const date = new Date(value)
        return is.feature(date)
      } catch {
        return false
      }
    }
  },
  {
    name: 'isLastMonth',
    category: 'date',
    description: '检查日期是否为上个月',
    placeholder: '2023-11-01',
    example: `import is from 'is-check'\n\nis.lastMonth(new Date()) // true (如果是上个月)`,
    func: (value) => {
      try {
        const date = new Date(value)
        return is.lastMonth(date)
      } catch {
        return false
      }
    }
  },
  {
    name: 'isLastWeek',
    category: 'date',
    description: '检查日期是否为上周',
    placeholder: '2023-11-25',
    example: `import is from 'is-check'\n\nis.lastWeek(new Date()) // true (如果是上周)`,
    func: (value) => {
      try {
        const date = new Date(value)
        return is.lastWeek(date)
      } catch {
        return false
      }
    }
  },
  {
    name: 'isLastYear',
    category: 'date',
    description: '检查日期是否为去年',
    placeholder: '2022-12-01',
    example: `import is from 'is-check'\n\nis.lastYear(new Date()) // true (如果是去年)`,
    func: (value) => {
      try {
        const date = new Date(value)
        return is.lastYear(date)
      } catch {
        return false
      }
    }
  },
  {
    name: 'isNextMonth',
    category: 'date',
    description: '检查日期是否为下个月',
    placeholder: '2024-01-01',
    example: `import is from 'is-check'\n\nis.nextMonth(new Date()) // true (如果是下个月)`,
    func: (value) => {
      try {
        const date = new Date(value)
        return is.nextMonth(date)
      } catch {
        return false
      }
    }
  },
  {
    name: 'isNextWeek',
    category: 'date',
    description: '检查日期是否为下周',
    placeholder: '2023-12-08',
    example: `import is from 'is-check'\n\nis.nextWeek(new Date()) // true (如果是下周)`,
    func: (value) => {
      try {
        const date = new Date(value)
        return is.nextWeek(date)
      } catch {
        return false
      }
    }
  },
  {
    name: 'isNextYear',
    category: 'date',
    description: '检查日期是否为明年',
    placeholder: '2024-12-01',
    example: `import is from 'is-check'\n\nis.nextYear(new Date()) // true (如果是明年)`,
    func: (value) => {
      try {
        const date = new Date(value)
        return is.nextYear(date)
      } catch {
        return false
      }
    }
  },
  {
    name: 'isPast',
    category: 'date',
    description: '检查日期是否为过去',
    placeholder: '2022-12-01',
    example: `import is from 'is-check'\n\nis.past(new Date()) // true (如果是过去日期)`,
    func: (value) => {
      try {
        const date = new Date(value)
        return is.past(date)
      } catch {
        return false
      }
    }
  },
  {
    name: 'isThisMonth',
    category: 'date',
    description: '检查日期是否为本月',
    placeholder: '2023-12-01',
    example: `import is from 'is-check'\n\nis.thisMonth(new Date()) // true (如果是本月)`,
    func: (value) => {
      try {
        const date = new Date(value)
        return is.thisMonth(date)
      } catch {
        return false
      }
    }
  },
  {
    name: 'isThisWeek',
    category: 'date',
    description: '检查日期是否为本周',
    placeholder: '2023-12-01',
    example: `import is from 'is-check'\n\nis.thisWeek(new Date()) // true (如果是本周)`,
    func: (value) => {
      try {
        const date = new Date(value)
        return is.thisWeek(date)
      } catch {
        return false
      }
    }
  },
  {
    name: 'isThisYear',
    category: 'date',
    description: '检查日期是否为今年',
    placeholder: '2023-12-01',
    example: `import is from 'is-check'\n\nis.thisYear(new Date()) // true (如果是今年)`,
    func: (value) => {
      try {
        const date = new Date(value)
        return is.thisYear(date)
      } catch {
        return false
      }
    }
  },
  {
    name: 'isTime',
    category: 'date',
    description: '检查字符串是否为时间格式',
    placeholder: '12:00:00',
    example: `import is from 'is-check'\n\nis.time("12:00:00") // true`,
    func: (value) => is.time(value)
  },
  {
    name: 'isTime12',
    category: 'date',
    description: '检查字符串是否为12小时制时间格式',
    placeholder: '12:00:00 AM',
    example: `import is from 'is-check'\n\nis.time12("12:00:00 AM") // true`,
    func: (value) => is.time12(value)
  },
  {
    name: 'isTime24',
    category: 'date',
    description: '检查字符串是否为24小时制时间格式',
    placeholder: '12:00:00',
    example: `import is from 'is-check'\n\nis.time24("12:00:00") // true`,
    func: (value) => is.time24(value)
  },
  {
    name: 'isTimestamp',
    category: 'date',
    description: '检查值是否为时间戳',
    placeholder: '1692630684039',
    example: `import is from 'is-check'\n\nis.timestamp(1692630684039) // true`,
    func: (value) => is.timestamp(Number(value))
  },
  {
    name: 'isTomorrow',
    category: 'date',
    description: '检查日期是否为明天',
    placeholder: '2023-12-02',
    example: `import is from 'is-check'\n\nis.tomorrow(new Date()) // true (如果是明天)`,
    func: (value) => {
      try {
        const date = new Date(value)
        return is.tomorrow(date)
      } catch {
        return false
      }
    }
  },
  {
    name: 'isWeekday',
    category: 'date',
    description: '检查日期是否为工作日',
    placeholder: '2023-12-01',
    example: `import is from 'is-check'\n\nis.weekday(new Date()) // true (如果是工作日)`,
    func: (value) => {
      try {
        const date = new Date(value)
        return is.weekday(date)
      } catch {
        return false
      }
    }
  },
  {
    name: 'isYesterday',
    category: 'date',
    description: '检查日期是否为昨天',
    placeholder: '2023-11-30',
    example: `import is from 'is-check'\n\nis.yesterday(new Date()) // true (如果是昨天)`,
    func: (value) => {
      try {
        const date = new Date(value)
        return is.yesterday(date)
      } catch {
        return false
      }
    }
  }
])

const activeFunction = ref(null)
const inputValue = ref('')
const specialInputs = reactive({})
const lastResult = ref(null)
const resultCode = ref('')
const resultDetails = ref(null)

// 过滤函数列表
const filteredFunctions = computed(() => {
  return functions.value.filter(func => func.category === activeCategory.value)
})

// 选择函数
const selectFunction = (func) => {
  activeFunction.value = func
  inputValue.value = ''
  resultCode.value = ''
  resultDetails.value = null
  lastResult.value = null
}

// 运行演示
const runDemo = () => {
  if (!activeFunction.value) return
  
  try {
    const result = activeFunction.value.func(inputValue.value)
    lastResult.value = result
    
    // 生成结果代码
    resultCode.value = `${activeFunction.value.name}(${JSON.stringify(inputValue.value)}) // ${result}`
    
    // 生成详细信息
    resultDetails.value = {
      输入值: inputValue.value,
      输入类型: typeof inputValue.value,
      结果: result,
      结果类型: typeof result
    }
  } catch (error) {
    lastResult.value = false
    resultCode.value = `${activeFunction.value.name}(${JSON.stringify(inputValue.value)}) // Error: ${error.message}`
    resultDetails.value = {
      错误: error.message
    }
  }
}

// 清除输入
const clearInput = () => {
  inputValue.value = ''
  resultCode.value = ''
  resultDetails.value = null
  lastResult.value = null
}

// 获取分类名称
const getCategoryName = (categoryId) => {
  const category = categories.value.find(cat => cat.id === categoryId)
  return category ? category.name : categoryId
}

// 获取结果文本
const getResultText = () => {
  if (lastResult.value === null) return '等待执行'
  return lastResult.value ? '✅ True' : '❌ False'
}

// 监听输入值变化
watch(inputValue, () => {
  if (activeFunction.value) {
    runDemo()
  }
})
</script>

<style scoped>
.demo-module {
  background: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: var(--vp-shadow-2);
}

.demo-header {
  margin-bottom: 2rem;
  text-align: center;
}

.demo-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;
}

.demo-subtitle {
  font-size: 1.1rem;
  color: var(--vp-c-text-2);
}

/* 函数分类菜单 */
.function-categories {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.category-btn {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.category-btn:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.category-btn.active {
  background: var(--vp-c-brand-1);
  color: white;
  border-color: var(--vp-c-brand-1);
}

/* 函数列表 */
.function-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
  max-height: 300px;
  overflow-y: auto;
  padding: 0.5rem;
}

.function-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: var(--vp-c-bg);
}

.function-item:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-2px);
  box-shadow: var(--vp-shadow-1);
}

.function-item.active {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
}

.function-info {
  flex: 1;
}

.function-name {
  display: block;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 0.25rem;
}

.function-desc {
  display: block;
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}

.function-tag {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
}

.function-tag.type { background: rgba(66, 184, 131, 0.1); color: #42b883; }
.function-tag.number { background: rgba(255, 193, 7, 0.1); color: #ffc107; }
.function-tag.regexp { background: rgba(156, 39, 176, 0.1); color: #9c27b0; }
.function-tag.env { background: rgba(33, 150, 243, 0.1); color: #2196f3; }
.function-tag.date { background: rgba(255, 152, 0, 0.1); color: #ff9800; }

/* 演示区域 */
.demo-area {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.5rem;
}

.demo-input-section {
  margin-bottom: 1.5rem;
}

.input-label {
  display: block;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;
}

.input-container {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.demo-input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  font-size: 1rem;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
}

.demo-input:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 2px var(--vp-c-brand-soft);
}

.clear-btn {
  padding: 0.75rem 1rem;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--vp-c-text-2);
}

.clear-btn:hover {
  background: var(--vp-c-bg-elv);
  color: var(--vp-c-text-1);
}

/* 结果展示 */
.demo-result {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
}

.result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.result-label {
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.result-status {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.result-status.success {
  background: rgba(40, 167, 69, 0.1);
  color: #28a745;
}

.result-status.error {
  background: rgba(220, 53, 69, 0.1);
  color: #dc3545;
}

.result-content {
  font-family: var(--vp-font-family-mono);
}

.result-code {
  background: var(--vp-c-bg-soft);
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.result-details {
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 1rem;
}

.result-details h4 {
  margin: 0 0 0.5rem 0;
  color: var(--vp-c-text-1);
  font-size: 1rem;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0;
  font-size: 0.9rem;
}

.detail-key {
  color: var(--vp-c-text-2);
}

.detail-value {
  color: var(--vp-c-text-1);
  font-weight: 500;
}

/* 使用示例 */
.usage-example {
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 1rem;
}

.usage-example h4 {
  margin: 0 0 0.5rem 0;
  color: var(--vp-c-text-1);
  font-size: 1rem;
}

.example-code {
  background: var(--vp-c-bg);
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  font-size: 0.9rem;
  margin: 0;
}

/* 默认提示 */
.demo-placeholder {
  text-align: center;
  padding: 3rem;
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
}

.placeholder-content {
  color: var(--vp-c-text-2);
}

.placeholder-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .demo-module {
    padding: 1rem;
  }
  
  .function-list {
    grid-template-columns: 1fr;
    max-height: 250px;
  }
  
  .input-container {
    flex-direction: column;
  }
}
</style>