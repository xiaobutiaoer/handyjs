import { module, main } from './package.json'
import typescript from '@rollup/plugin-typescript'
import json from '@rollup/plugin-json'
import babel from '@rollup/plugin-babel'
import { terser } from "rollup-plugin-terser";

export default {
  input: './src/index.ts',
  output: [
    { file: module, format: 'es', sourcemap: false },
    { file: main, format: 'umd', name: 'handyjs', sourcemap: false }
  ],
  plugins: [
    typescript(),
    json(),
    babel({ babelHelpers: 'bundled' }),
    terser()
  ]
}