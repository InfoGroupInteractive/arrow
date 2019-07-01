import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import scss from 'rollup-plugin-scss';

const NODE_ENV = process.env.NODE_ENV || "development";

export default {
    input: 'index.js',
    output: {
        file: 'bundle.js',
        format: 'cjs'
    },
    plugins: [
        replace({
            "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
        }),
        babel({
            runtimeHelpers: true,
            exclude: "node_modules/**"
        }),
        resolve({
            preferBuiltins: true
        }),
        commonjs(),
        scss(),
    ],
    external: id => /^react|react-dom|react-redux|redux|grommet|grommet-icons|color|@babel|crypto/.test(id)
}