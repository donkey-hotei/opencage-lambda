var path = require('path');

/*
 * Custom configuration file, intended here to use
 * a babel to transform the ES6 javascript into something
 * vanilla that AWS Lambda's NodeJS runtime understands,
 * as well as use Flow's static type checking, and loading
 * JSON files.
 */
module.exports = {
    output: {
        path: path.join(__dirname, 'dist'),
        library: '[name]',
        libraryTarget: 'commonjs2',
        filename: '[name].js'
    },
    target: 'node',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    preset: ['es2015'],
                    plugins: ['syntax-flow', 'transform-flow-strip-types']
                }
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    }
};
