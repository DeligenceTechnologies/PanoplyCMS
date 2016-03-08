Package.describe({
  name: 'deligence:panoplycore',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use("mongo");
  api.use("mobile-experience");
  api.use("meteor-base");
  api.use("jquery");
  api.use("session");
  api.use("tracker");
  api.use("logging");
  api.use("reload");
  api.use("random");
  api.use("ejson");
  api.use('react');
  api.use('insecure');
  api.use('underscore');
  api.use('accounts-password');
  api.use('alanning:roles@1.2.14');
  api.use("http");
  api.use('kadira:flow-router');
  api.use('kadira:react-layout');
  api.use('teamon:tinymce');
  api.use('cfs:standard-packages');
  api.use('cfs:gridfs');
  api.use('cfs:filesystem');
  api.use('cfs:s3');
  api.export("Sites");
  api.export("Modules");
  /*--------------------------------Client------------------------------------- */

  api.addFiles('admin/styles/admin.css',['client'])

  api.addFiles('admin/login/login.jsx',['client'])
  api.addFiles('admin/login/adminEdit.jsx',['client'])

  api.addFiles('admin/adminLayout/adminLayout.jsx',['client'])
  api.addFiles('admin/adminLayout/component/adminFooter.jsx',['client'])
  api.addFiles('admin/adminLayout/component/adminHeader.jsx',['client'])
  api.addFiles('admin/adminLayout/component/adminSidebar.jsx',['client'])

  api.addFiles('admin/settings/settings.jsx',['client'])
  
  api.addFiles('admin/content/article/addArticle.jsx',['client'])
  api.addFiles('admin/content/article/editArticle.jsx',['client'])
  api.addFiles('admin/content/article/listArticles.jsx',['client'])

  api.addFiles('admin/extension/modules/addModule.jsx',['client'])
  api.addFiles('admin/extension/modules/editModule.jsx',['client'])
  api.addFiles('admin/extension/modules/modulesLayout.jsx',['client'])
  api.addFiles('admin/extension/modules/Htmlblock.jsx',['client'])
  api.addFiles('admin/extension/modules/Menumodule.jsx',['client'])

  api.addFiles('admin/content/category/addCategory.jsx',['client'])
  api.addFiles('admin/content/category/editCategory.jsx',['client'])
  api.addFiles('admin/content/category/listCategories.jsx',['client'])

  /*--------------------------------Server------------------------------------- */

  api.addFiles([
    'admin/server/articles.js',
    'admin/server/settings.js',
    'admin/server/sidebar.js',
    'admin/server/startup.js',
    'admin/server/module.js',
    'admin/server/category.js',
    'admin/server/users.js'
    ],['server'])

  /*--------------------------------Client Server---------------------------------*/

  api.addFiles([
    'admin/lib/method/collection.js',
    'admin/lib/method/articles.js',
    'admin/lib/method/settings.js',
    'admin/lib/router/router.jsx',
    'admin/lib/common.js',
    'admin/lib/method/user.js',
    'admin/lib/method/module.js',
    'admin/lib/method/categories.js'],
    ['client','server'])  
});


