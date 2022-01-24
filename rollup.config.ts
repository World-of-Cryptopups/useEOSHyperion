import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import url from '@rollup/plugin-url'
import analyze from 'rollup-plugin-analyzer'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import sourceMaps from 'rollup-plugin-sourcemaps'
import typescript from 'rollup-plugin-typescript2'
import packageJson from './package.json'

export default {
  input: 'src/index.ts',
  output: [
    {
      exports: 'named',
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      exports: 'named',
      file: packageJson.module,
      format: 'esm',
      sourcemap: true
    },
    {
      name: 'ReactLibraryStarter',
      file: packageJson.unpkg,
      format: 'umd',
      globals: {
        react: 'React'
      }
    }
  ],
  watch: {
    include: 'src/**/*'
  },
  plugins: [
    json(),
    peerDepsExternal(),
    url(),
    resolve(),
    commonjs(),
    typescript({
      useTsconfigDeclarationDir: true,
      rollupCommonJSResolveHack: false,
      clean: true,
      tsconfigOverride: {
        exclude: ['src/__tests__']
      }
    }),
    analyze(),
    sourceMaps()
  ],
  external: ['react']
}
