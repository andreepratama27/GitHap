const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    mix.sass('app.scss')
    mix.sass('github.scss')
       //.webpack('app.js')
       .webpack('app.js')
       .webpack('apps.js', 'public/js/apps.js')
       .webpack('githap.js', 'public/js/githap.js')
       .webpack('**.jsx')
    mix.copy('node_modules/font-awesome/fonts/', 'public/fonts')

    mix.browserSync({
        files: ['public/js/**/*.js', 'public/css/**/*.css'],
        proxy: {
          target: 'http://localhost:2000'
        },
        browser: 'google chrome'
    })
});
