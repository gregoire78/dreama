module.exports = {
    context: __dirname + "/src",
    entry: "./router",
    output: {
        path: __dirname + "/www",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel' // 'babel-loader' is also a legal name to reference
            }
        ]
    }
};