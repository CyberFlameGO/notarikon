const browsers = [
  'last 2 versions',
  'ios_saf >= 8',
  'ie >= 10',
  'chrome >= 49',
  'firefox >= 49',
  '> 1%',
];

module.exports = {
    entry: [
        'babel-polyfill',
        "./main.js",
    ],
    output: {
        path: __dirname,
        filename: "dist/bundle.js"
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['env', {
                            targets: { browsers },
                            debug: false,
                            loose: true,
                            modules: false,
                            useBuiltIns: true,
                        }],
                    ],
                },
            },
        }],
    },
};