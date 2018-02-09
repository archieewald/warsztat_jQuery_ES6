module.exports = {
  entry: ['./js/app.js', './js/BinaryCalculator.js', './js/DecCalculator.js', './js/Calculator.js'],
  output: {
      filename: './js/out.js'
  },
    devtool: 'source-map',
    module: {
    loaders:[
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        },
         {
            test: /\.scss$/,
            loader: ['style-loader', 'css-loader',
                'sass-loader'
            ]
         }
    ]
  }
};