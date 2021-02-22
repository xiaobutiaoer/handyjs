import { module, main } from './package.json'
import json from '@rollup/plugin-json'
import babel from '@rollup/plugin-babel'

export default {
  input: './src/index.js',
  output: [
    { file: module, format: 'es', sourcemap: false },
    { file: main, format: 'umd', name: 'handyjs', sourcemap: false }
  ],
  plugins: [
    json(),
    babel({ babelHelpers: 'bundled' })
  ]
}