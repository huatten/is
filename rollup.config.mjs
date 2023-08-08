import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import babel from 'rollup-plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import filesize from 'rollup-plugin-filesize'
import { terser } from 'rollup-plugin-terser'

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
    runtimeHelpers: true,
  }),
  /**
   * typescript编译
   * @see https://github.com/rollup/plugins/tree/master/packages/typescript
   */
  typescript({
    tsconfig: resolve('./tsconfig.json'),
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
    input: resolve('src/index.ts'),
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
    input: resolve('src/type/index.ts'),
    output: [
      {
        name: 'type',
        file: 'dist/type/min.umd.js',
        format: 'umd',
        exports: 'named',
      },
      {
        file: 'dist/type/min.esm.js',
        format: 'es',
        exports: 'named',
      },
      {
        file: 'dist/type/min.cjs.js',
        format: 'cjs',
        exports: 'named',
      },
    ],
    plugins: plugins,
  },

  // regexp module
  {
    input: resolve('src/regexp/index.ts'),
    output: [
      {
        name: 'regexp',
        file: 'dist/regexp/min.umd.js',
        format: 'umd',
        exports: 'named',
      },
      {
        file: 'dist/regexp/min.esm.js',
        format: 'es',
        exports: 'named',
      },
      {
        file: 'dist/regexp/min.cjs.js',
        format: 'cjs',
        exports: 'named',
      },
    ],
    plugins: plugins,
  },

  // env module
  {
    input: resolve('src/env/index.ts'),
    output: [
      {
        name: 'env',
        file: 'dist/env/min.umd.js',
        format: 'umd',
        exports: 'named',
      },
      {
        file: 'dist/env/min.esm.js',
        format: 'es',
        exports: 'named',
      },
      {
        file: 'dist/env/min.cjs.js',
        format: 'cjs',
        exports: 'named',
      },
    ],
    plugins: plugins,
  },
]
