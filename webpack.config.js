var path = require('path');

const config = {
    entry: {
        reverse: path.join(__dirname, 'lambdas/reverse.js'),
        forward: path.join(__dirname, 'lambdas/forward.js')
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                                presets: ['flow']
                        }
                    }
                ],
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'commonjs2'
    }
};

module.exports = config;
