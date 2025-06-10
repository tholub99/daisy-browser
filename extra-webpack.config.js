const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'postcss-loader'
                ],
            },
        ],
    },
};
