import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import terser from '@rollup/plugin-terser'
const resolve = (p) => path.resolve(dirname(fileURLToPath(import.meta.url)), p)

const plugins = [
  /**
   * 将 commonjs模块转成es6
   * @see https://github.com/rollup/plugins/tree/master/packages/commonjs
   */
  commonjs(),
  /**
   * babel编译
   * @see https://github.com/rollup/plugins/tree/master/packages/babel
   */
  babel({
    exclude: ['node_modules/**'],
    babelHelpers: 'bundled',
  }),
  /**
   * 代码压缩
   * @see https://github.com/TrySound/rollup-plugin-terser
   */
  terser(),
  /**
   * 显示打包后文件的大小
   * @see https://github.com/ritz078/rollup-plugin-filesize
   */
  filesize(),
]

export default [
  // is module
  {
    input: resolve('src/index.js'),
    output: [
      {
        name: 'is',
        file: 'dist/is.umd.js',
        format: 'umd',
        exports: 'named',
      },
      {
        file: 'dist/is.esm.js',
        format: 'es',
        exports: 'named',
      },
      {
        file: 'dist/is.cjs.js',
        format: 'cjs',
        exports: 'named',
      },
    ],
    plugins: plugins,
  },
  // type module
  {
    input: resolve('src/type/index.js'),
    output: [
      {
        name: 'type',
        file: 'dist/type.umd.js',
        format: 'umd',
        exports: 'named',
      },
      {
        file: 'dist/type.esm.js',
        format: 'es',
        exports: 'named',
      },
      {
        file: 'dist/type.cjs.js',
        format: 'cjs',
        exports: 'named',
      },
    ],
    plugins: plugins,
  },

  // number module
  {
    input: resolve('src/number/index.js'),
    output: [
      {
        name: 'arithmetic',
        file: 'dist/number.umd.js',
        format: 'umd',
        exports: 'named',
      },
      {
        file: 'dist/number.esm.js',
        format: 'es',
        exports: 'named',
      },
      {
        file: 'dist/number.cjs.js',
        format: 'cjs',
        exports: 'named',
      },
    ],
    plugins: plugins,
  },

  // regexp module
  {
    input: resolve('src/regexp/index.js'),
    output: [
      {
        name: 'regexp',
        file: 'dist/regexp.umd.js',
        format: 'umd',
        exports: 'named',
      },
      {
        file: 'dist/regexp.esm.js',
        format: 'es',
        exports: 'named',
      },
      {
        file: 'dist/regexp.cjs.js',
        format: 'cjs',
        exports: 'named',
      },
    ],
    plugins: plugins,
  },

  // env module
  {
    input: resolve('src/env/index.js'),
    output: [
      {
        name: 'env',
        file: 'dist/env.umd.js',
        format: 'umd',
        exports: 'named',
      },
      {
        file: 'dist/env.esm.js',
        format: 'es',
        exports: 'named',
      },
      {
        file: 'dist/env.cjs.js',
        format: 'cjs',
        exports: 'named',
      },
    ],
    plugins: plugins,
  },

  // date module
  {
    input: resolve('src/date/index.js'),
    output: [
      {
        name: 'date',
        file: 'dist/date.umd.js',
        format: 'umd',
        exports: 'named',
      },
      {
        file: 'dist/date.esm.js',
        format: 'es',
        exports: 'named',
      },
      {
        file: 'dist/date.cjs.js',
        format: 'cjs',
        exports: 'named',
      },
    ],
    plugins: plugins,
  },
]
