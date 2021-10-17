import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import scss from 'rollup-plugin-scss';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/js/app/index.js',
    output: {
      file: 'assets/built/app.js',
      format: 'iife',
      sourcemap: process.env.NODE_ENV === 'production' ? false : 'inline',
    },
    plugins: [
      resolve(),
      babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),
      scss({
        output: 'assets/built/app.css',
        sourceMap: true,
        processor: () => postcss([autoprefixer()]),
        outputStyle:
          process.env.NODE_ENV === 'production' ? 'compressed' : 'expanded',
      }),
      process.env.NODE_ENV === 'production' && terser(),
    ],
  },
  {
    input: 'src/js/post/index.js',
    output: {
      file: 'assets/built/post.js',
      format: 'iife',
      sourcemap: process.env.NODE_ENV === 'production' ? false : 'inline',
    },
    plugins: [
      resolve(),
      babel({ babelHelpers: 'bundled' }),
      scss({
        output: 'assets/built/post.css',
        sourceMap: true,
        processor: () => postcss([autoprefixer()]),

        outputStyle:
          process.env.NODE_ENV === 'production' ? 'compressed' : 'expanded',
      }),
      process.env.NODE_ENV === 'production' && terser(),
    ],
  },
];
