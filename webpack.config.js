module.exports = {
    entry: './app/app.js',
    output: {
        filename: './dist/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },{
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" //Crea el estilo
                    },{
                        loader: "css-loader" //Traduce CSS en el js
                    },{
                        loader: "sass-loader" //compila SCSS como CSS
                    }
                ]
            }
        ]
    }
}