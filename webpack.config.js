const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/js/main.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devtool: 'inline-source-map',
    module: {
        rules: [{ test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/}, {test: /\.s[ac]ss$i/, use: ['style-loader', 'css-loader', 'sass-loader']}],
    },
    watch: true,
    watchOptions: {
      poll: 1000,
      ignored: /node_modules/,
      aggregateTimeout: 300,
    },
};