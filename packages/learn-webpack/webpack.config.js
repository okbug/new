const path = require("path")

const resolve = (...args) => path.resolve(__dirname, ...args)

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'source-map',
    output: {
        path: resolve('dist'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: resolve("my-loaders", "my-babel"),
                    // options: {
                    //     presets: [
                    //         "@babel/preset-env"
                    //     ]
                    // }
                }],
            }
        ]
    }
}
