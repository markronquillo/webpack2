https://www.youtube.com/watch?v=eWmkBNBTbMM


npm install --save-dev webpack@beta

Edit package.json, add `"build": "webpack index.js build.js"`

npm run build, to run the newly added 

### Live/Hot Reload

1. rebuild bundle.js
2. refresh browser
or 
2. refresh only bundle.js in browser

### Hot module replacement (HMR)
1. rebuild chunk
2. replace chunk in browser

`npm view webpack-dev-server versions`

create `dev-server.js`


file-loader


url-loader: small sized images will be served as data

["es2015", { "modules": false }] -- commonjs related


npm install css-loader style-loader --save-dev


css-loader is the one responsible for understanding the css syntax
style-loader is the one responsible for injecting the css file in your markup

### Gotchas
- in webpack.config.js, the test value should not be string.
- the style-loader should go first before the css-loader, ['style-loader', 'css-loader']


npm install extract-text-webpack-plugin@

npm install html-webpack-plugin

