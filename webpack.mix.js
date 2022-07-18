const mix = require('laravel-mix');
require('laravel-mix-nunjucks');

mix
  .njk('./src/views', 'public/', {
    manageEnv(nunjucks) {
      nunjucks.addFilter('version', (filename) => {
        return `${filename}?hash=${Date.now()}`;
      });
    },
  })
  .sass('src/styles/app.scss', '/')
  .js('src/scripts/app.js', '/')
  .options({
    processCssUrls: false,
    sassOptions: {
      outputStyle: 'nested',
    },
    autoprefixer: { remove: false },
    terser: {
      extractComments: false,
    },
  })
  .setPublicPath('public');

if (!mix.inProduction()) {
  mix
    .browserSync({
      notify: false,
      server: 'public',
      proxy: null,
      open: false,
      watch: true,
    })
    .disableSuccessNotifications()
    .sourceMaps()
    .webpackConfig({ devtool: 'inline-source-map' });
}
