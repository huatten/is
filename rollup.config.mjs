import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import babel from 'rollup-plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import filesize from 'rollup-plugin-filesize'
import { terser } from 'rollup-plugin-terser'

const resolve = (p) => path.resolve(dirname(fileURLToPath(import.meta.url)), p)

export default {
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
  plugins: [
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
  ],
}
