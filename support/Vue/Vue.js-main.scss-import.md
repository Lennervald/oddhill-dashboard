### How to get a main.scss file to work in vue

## Edit file node_modules/css-loader/lib/loader.js
Go to line 20 and replace to this:
´´´
if(map && typeof map !== "string") {
    map = JSON.stringify(map);
}
´´´


## import main.scss
In main.js use import 'scss/main.scss';

## Make sure you have correct loaders in webpack.config
Under rules, add this:

´´´
{
  test: /\.scss$/,
  loader: 'style-loader!css-loader!sass-loader',
},
´´´