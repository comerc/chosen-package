Package.describe({
  name: 'comerc:chosen',
  version: '1.5.1',
  summary: 'Chosen is a library for making long, unwieldy select boxes more friendly.',
  git: 'https://github.com/comerc/meteor-chosen',
  documentation: 'README.md'
});

Package.on_use(function (api, where) {
  api.use('jquery@1.4.0');
  api.addAssets([
    'chosen-sprite.png',
    'chosen-sprite@2x.png'
  ], 'client');
  api.addFiles([
    'chosen.jquery.js',
    'chosen.css'
  ], 'client');
});
