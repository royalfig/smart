import { defineConfig } from 'rollup';
// A Rollup plugin which locates modules using the Node resolution algorithm
import { nodeResolve } from '@rollup/plugin-node-resolve';
// A Rollup plugin to convert CommonJS modules to ES6, so they can be included in a Rollup bundle
import commonjs from '@rollup/plugin-commonjs';
// Use the latest JS features in your Rollup bundle
import babel from '@rollup/plugin-babel';
// Minifies the bundle
import terser from '@rollup/plugin-terser';

// CSS
// Enable the PostCSS preprocessor
import postcss from 'rollup-plugin-postcss';
// Use @import to include other CSS files
import atImport from 'postcss-import';
// Use the latest CSS features in your Rollup bundle
import postcssPresetEnv from 'postcss-preset-env';

// Development: Enables a livereload server that watches for changes to CSS, JS, and Handlbars files
import { resolve } from 'path';
import livereload from 'rollup-plugin-livereload';

const output = {
  dir: 'assets/built/',
  sourcemap: true,
  format: 'es',
  plugins: [terser()],
};

const plugins = [
  commonjs(),
  nodeResolve(),
  babel({ babelHelpers: 'bundled' }),
  postcss({
    extract: true,
    sourceMap: true,
    plugins: [atImport(), postcssPresetEnv({})],
    minimize: true,
  }),
];

// Rollup configuration
export default defineConfig({
  input: [
    'assets/js/app/app.js',
    'assets/js/post/post.js',
    'assets/js/generateColorPalette.js',
    'assets/js/syntax-highlighting.js',
  ],
  output,
  plugins: [
    ...plugins,
    process.env.BUILD !== 'production' &&
      livereload({
        watch: resolve('.'),
        extraExts: ['hbs'],
        exclusions: [resolve('node_modules')],
      }),
  ],
});

// const postcssConfig = postcss({
//   include: 'assets/css/app/index.css',
//   extract: resolve('assets/built/app.css'),
//   sourceMap: true,
//   plugins: [
//     atImport,
//     postcssPresetEnv({
//       features: {
//         'custom-properties': false,
//         'logical-properties-and-values': false,
//       },
//     }),
//   ],
// });

// const postcssConfigSyntax = postcss({
//   include: 'assets/css/syntax-highlighting.css',
//   extract: resolve('assets/built/syntax-highlighting.css'),
//   sourceMap: true,
//   plugins: [
//     atImport,
//     postcssPresetEnv({
//       features: {
//         'custom-properties': false,
//         'logical-properties-and-values': false,
//       },
//     }),
//   ],
// });

// const postcssConfigGhost = postcss({
//   include: 'assets/css/ghost-cards.css',
//   extract: resolve('assets/built/ghost-cards.css'),
//   sourceMap: true,
//   plugins: [
//     atImport,
//     postcssPresetEnv({
//       features: {
//         'custom-properties': false,
//         'logical-properties-and-values': false,
//       },
//     }),
//   ],
// });

// const plugins = [
//   commonjs(),
//   nodeResolve(),
//   babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),
//   terser(),
// ];

// export default [
//   {
//     input: 'assets/js/app/app.js',
//     output: {
//       file: 'assets/built/app.js',
//       format: 'iife',
//       sourcemap: true,
//     },
//     plugins: [
//       ...plugins,
//       postcssConfig,
//       process.env.BUILD !== 'production' &&
//         livereload({
//           watch: resolve('.'),
//           extraExts: ['hbs'],
//           exclusions: [resolve('node_modules')],
//         }),
//     ],
//   },
//   {
//     input: 'assets/js/post/post.js',
//     output: {
//       file: 'assets/built/post.js',
//       format: 'iife',
//       sourcemap: true,
//     },
//     plugins,
//   },
//   {
//     input: 'assets/js/generateColorPalette.js',
//     output: {
//       file: 'assets/built/generateColorPalette.js',
//       format: 'iife',
//       sourcemap: true,
//     },
//     plugins,
//   },
//   {
//     input: 'assets/js/syntax-highlighting.js',
//     output: {
//       file: 'assets/built/syntax-highlighting.js',
//       format: 'iife',
//       sourcemap: true,
//     },
//     plugins: [...plugins, postcssConfigSyntax],
//   },
//   {
//     input: 'assets/js/cards.js',
//     output: {
//       file: 'assets/built/ghost-cards.css',
//       format: 'es',
//     },
//     plugins: postcssConfigGhost,
//   },
// ];
