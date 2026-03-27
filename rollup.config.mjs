import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import terser from '@rollup/plugin-terser'
import visualizer from 'rollup-plugin-visualizer'

const resolve = (p) => path.resolve(dirname(fileURLToPath(import.meta.url)), p)
const isAnalyze = process.env.ANALYZE === 'true'

const basePlugins = [
  commonjs(),
  babel({
    exclude: ['node_modules/**'],
    babelHelpers: 'bundled',
  }),
  terser(),
  filesize(),
]

function createModuleConfig(moduleName, modulePath = moduleName) {
  // 为每个模块生成独立的分析报告，但不自动打开
  const analyzePlugins = isAnalyze
    ? [
      visualizer({
        filename: `analysis/stats-${moduleName}.html`,
        title: `${moduleName} - Bundle Analysis`,
        open: false, // ← 不自动打开
        gzipSize: true,
        brotliSize: true,
      }),
    ]
    : []

  const plugins = [...basePlugins, ...analyzePlugins]

  return {
    input: resolve(`src/${modulePath}/index.js`),
    output: [
      {
        name: moduleName,
        file: `dist/${moduleName}.umd.js`,
        format: 'umd',
        exports: 'named',
      },
      {
        file: `dist/${moduleName}.esm.js`,
        format: 'es',
        exports: 'named',
      },
      {
        file: `dist/${moduleName}.cjs.js`,
        format: 'cjs',
        exports: 'named',
      },
    ],
    plugins,
  }
}

export default [
  createModuleConfig('is', ''),
  createModuleConfig('type'),
  createModuleConfig('number'),
  createModuleConfig('regexp'),
  createModuleConfig('env'),
  createModuleConfig('date'),
]
