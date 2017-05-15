### Here we can add all useful VueJS knowledge:

### Installation: 

```
npm install vue
npm install --global vue-cli
vue init webpack my-project
```
(or just webpack-simple for quick prototyping )
```
cd my-project
npm install
npm run dev
```
Sublime: Install Package Vue Syntax Highlight
host: localhost:8080 by default

## Structure:

main.js - like app.module in Angular. The core component were you import and rended "#app" to index.html.
App.vue - like app.component.ts in Angular. The main component were we will put the basic template structure. 

## Add LESS support (dont do this now, we use sass instead)

You need to install a few packages, run
```
npm install style-loader less-loader less --save-dev
```
### Then add this to webpack.config.js as it's own rule in the rules-array:
```
{
  test: /\.less$/,
  use: [{
      loader: "style-loader" // creates style nodes from JS strings
  }, {
      loader: "css-loader" // translates CSS into CommonJS
  }, {
      loader: "less-loader" // compiles Less to CSS
  }]
}
```
Then, in the main.js file you can just require a less file like this:
require('./less/main.less')

## Sublime 

Install Package Sass - for Syntax Highlight

SASS Guide: http://sass-lang.com/guide (by a glance is very simimlar to Less)