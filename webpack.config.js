const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');
var webpack = require('webpack');

//Creacion de multiples css
// const extractCSS = new ExtractTextPlugin('stylesheets/[name]-one.css');
// const extractSCSS = new ExtractTextPlugin('stylesheets/[name]-two.css');

module.exports = {
    context: path.resolve(__dirname, 'app'),
    entry: {
        app: './app.js',
        vendor: ['angular']
    }, //Se puede crear un objeto com distintas entradas dependiendo de si la aplicacion el multi o no, añadiriamos [name] en la salida para que no se montasen los bundles, y crear los distintos plugins por aplicacion
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, './dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/, //Transformacion de CSS
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader", //Si el plugin falla lanzara este loader
                    use: "css-loader"
                })
            },
            {
                test: /\.scss$/, //Transdormacion de SCSS
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })

            }
        ],
    },
    plugins: [
        new ExtractTextPlugin("/style.css"), //Fichero donde se creara el css con el plugin
        new HtmlWebpackPlugin({
            title: 'Tutorial WebPack',
            hash: true,
            //chunk: Sera necesario para hacer saber a la aplicacion por donde entra
            // template: //Añade nuestro propio template
        }), //Genera automaticamente un html con todas las despendencias referenciadas
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor'],
            filename: "vendor.js"
        }) //Sirve para crear un unico js cuando varias entradas compartan js
        // extractSCSS
        // extractCSS
    ]
}