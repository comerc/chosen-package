Package.describe({
  name: 'comerc:chosen',
  version: '1.5.1',
  summary: 'Chosen is a library for making long, unwieldy select boxes more friendly.',
  git: 'https://github.com/eskan/chosen-package',
  documentation: 'README.md'
});

Package.on_use(function (api, where) {
  api.use('jquery@1.4.0');

  api.add_files('chosen.jquery.js', 'client');
  api.add_files('chosen.css', 'client');
  api.add_files('chosen-sprite.png', 'client');
  api.add_files('chosen-sprite@2x.png', 'client');
});
