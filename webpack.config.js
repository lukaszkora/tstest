const path = require('path');
const nodeExternals = require('webpack-node-externals');


module.exports = {
    mode: "none",   // "production" | "development" | "none"
    // Chosen mode tells webpack to use its built-in optimizations accordingly.

    entry: './src/app.ts', // string | object | array
    // defaults to ./src
    // Here the application starts executing and webpack starts bundling

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        // configuration of modules
        rules: [
            // ts-loader: convert typescript (ES2015) to javascript (ES2015). Set with tsconfig.json file.
            // babel-loader: converts javascript (ES2015) to javascript acceptable by browsers having > 5% share in the market. Set with .babelrc file.
            {
                'test': /\.tsx?$/,
                'loaders': ['babel-loader','ts-loader'],
                'exclude': [/node_modules/]
            },
            // // babel-loader for pure javascript (es6) => javascript (es5)
            // {
            //     'test': /\.(jsx?)$/,
            //     'loaders': ['babel-loader'],
            //     'exclude': [/node_modules/]
            // }
        ]
    },

    resolve: {
        alias: {
            "@root": path.resolve(__dirname, './src'),
            "@aaa": path.resolve(__dirname, './src/person'),
            "@bbb": path.resolve(__dirname, './src/testbbb'),
            "@routes": path.resolve(__dirname, './src/routes')
        },
        extensions: [ '.tsx', '.ts', '.js' ]
    },

    devtool: "source-map", // enum
    // enhance debugging by adding meta info for the browser devtools
    // source-map most detailed at the expense of build speed.

    target: "node", // enum
    // the environment in which the bundle should run
    // changes chunk loading behavior and available modules

    externals: [nodeExternals()]    // Don't follow/bundle these modules, but request them at runtime from the environment
};