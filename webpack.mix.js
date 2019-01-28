/*
* Require laravel mix for ease of working with webpack.
*/
const mix = require("laravel-mix");

/*
* Specify list of assets to compile, and how.
*/
mix.sass('sass/app.scss', 'dist/app.css');