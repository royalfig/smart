import { resolve } from 'path';

import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';

// CSS
import postcss from 'rollup-plugin-postcss';
import atImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';
import cssnano from 'cssnano';

const postcssConfig = postcss({
  include: 'src/css/app/index.css',
  extract: resolve('assets/built/app.css'),

  sourceMap: true,
  plugins: [
    atImport,
    postcssPresetEnv({
      features: {
        'custom-properties': false,
        'logical-properties-and-values': false,
      },
    }),
    process.env.NODE_ENV === 'production' && cssnano(),
  ],
});

const postcssConfigSyntax = postcss({
  include: 'src/css/syntax-highlighting.css',
  extract: resolve('assets/built/syntax-highlighting.css'),
  sourceMap: true,
  plugins: [
    atImport,
    postcssPresetEnv({
      features: {
        'custom-properties': false,
        'logical-properties-and-values': false,
      },
    }),
    process.env.NODE_ENV === 'production' && cssnano(),
  ],
});

const postcssConfigGhost = postcss({
  include: 'src/css/ghost-cards.css',
  extract: resolve('assets/built/ghost-cards.css'),
  sourceMap: true,
  plugins: [
    atImport,
    postcssPresetEnv({
      features: {
        'custom-properties': false,
        'logical-properties-and-values': false,
      },
    }),
    process.env.NODE_ENV === 'production' && cssnano(),
  ],
});

const plugins = [
  nodeResolve(),
  process.env.NODE_ENV === 'production' &&
    babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),
  process.env.NODE_ENV === 'production' && terser(),
  replace({
    ENV: JSON.stringify(process.env.NODE_ENV || 'production'),
    'process.env.NODE_ENV': JSON.stringify('production'),
    preventAssignment: true,
  }),
];

export default [
  {
    input: 'src/js/app/index.js',
    output: {
      file: 'assets/built/app.js',
      format: 'iife',
      sourcemap: true,
    },
    plugins: [...plugins, postcssConfig],
  },
  {
    input: 'src/js/post/index.js',
    output: {
      file: 'assets/built/post.js',
      format: 'iife',
      sourcemap: true,
    },
    plugins,
  },
  {
    input: 'src/js/generateColorPalette.js',
    output: {
      file: 'assets/built/generateColorPalette.js',
      format: 'iife',
      sourcemap: true,
    },
    plugins,
  },
  {
    input: 'src/js/syntax-highlighting.js',
    output: {
      file: 'assets/built/syntax-highlighting.js',
      format: 'iife',
      sourcemap: true,
    },
    plugins: [...plugins, postcssConfigSyntax],
  },
  {
    input: 'src/js/ghost-cards.js',
    output: {
      file: 'assets/built/ghost-cards.css',
      format: 'es',
    },
    plugins: postcssConfigGhost,
  },
];
