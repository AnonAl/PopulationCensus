// webpack serve --open
import path from "path";
import HandlebarsPlugin from "handlebars-webpack-plugin";
// const path = require('path');
const __dirname = path.resolve();
const pack = {
    entry: __dirname + "/public/view/index.js",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    devServer: {
        historyApiFallback: true,
        // contentBase: path.resolve(__dirname, 'dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080
    },
    plugins: [
        new HandlebarsPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use:
                    ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    "file-loader"
                ]
            },
            { test: /\.handlebars$/, loader: "handlebars-loader" },
            {
                test: /\.hbs/,
                loader: "handlebars-loader",
                exclude: /(node_modules|bower_components)/,
                options: {
                    knownHelpersOnly: false,
                    // helperDirs: ['./src/js/helpers'],
                    partialDirs: [__dirname + "/public/view/partials"]
                }
            }
        ]
    }
};
export default pack;
