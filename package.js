Package.describe({
  name: 'kurounin-pagination-enhanced',
  summary: 'Meteor pagination done right. Usable in ReactJS or Blaze templates.',
  version: '1.2.0',
  git: 'https://github.com/Kurounin/Pagination.git',
  documentation: 'README.md',
});

Package.onUse((api) => {
  api.versionsFrom('METEOR@1.2.1');
  api.use([
    'ecmascript',
    'meteor-base',
    'check',
    'underscore',
    'mongo',
  ]);

  api.mainModule('server/pagination.js', 'server');

  api.use([
    'tracker',
    'reactive-var',
    'reactive-dict',
  ], 'client');

  api.mainModule('client/pagination.js', 'client');
});
