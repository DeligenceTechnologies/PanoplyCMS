Package.describe({
  name: 'deligencetechnologies:panoplycms-core',

  version: '0.1.11',
  // Brief, one-line summary of the package.
  summary: 'Core component for PanoplyCMS',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/DeligenceTechnologies/Panoplycms',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "meteor-node-stubs": "0.2.3",
  "react": "15.2.0",
  "react-addons-create-fragment": "15.0.1",
  "react-addons-css-transition-group": "15.0.1",
  "react-addons-linked-state-mixin": "15.0.1",
  "react-addons-perf": "15.0.1",
  "react-addons-pure-render-mixin": "15.1.0",
  "react-addons-test-utils": "15.0.1",
  "react-addons-transition-group": "15.1.0",
  "react-addons-update": "15.0.1",
  "react-bootstrap": "0.29.5",
  "react-dom": "15.1.0",
  "react-mixin": "3.0.4",
  "react-mounter": "1.2.0",
  "react-paginate": "2.0.1"
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.3.1');
  api.use('ecmascript');
  api.use('modules');
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
  api.use("check");
  api.use('react@0.14.6');
  api.use('insecure');
  api.use('underscore');
  api.use('accounts-password');
  api.use('alanning:roles@1.2.14');
  api.use("http");
  api.use('kadira:flow-router@2.12.1');
  api.use('kadira:react-layout@1.5.3');
  api.use('summernote:summernote@0.8.1');
  api.use('cfs:standard-packages@0.5.9');
  api.use('cfs:gridfs@0.0.33');
  api.use('cfs:filesystem@0.1.2');
  api.use('cfs:s3@0.1.3');
  api.use('mizzao:jquery-ui@1.11.4');
  api.use('mizzao:autocomplete@0.5.1');
  api.use('ajduke:bootstrap-tokenfield@0.5.0');
  api.use('anti:i18n@0.4.3');
  api.use('themeteorchef:jquery-validation@1.0.0');
  api.use('arillo:flow-router-helpers@0.4.7');
  api.use('richsilv:owl-carousel@0.1.0');
  api.use('themeteorchef:bert@2.1.2');
  api.use('kadira:dochead@1.5.0');
  api.use('reactive-dict@1.1.8');


  api.use('deligencetechnologies:panoplycms-collections@0.0.1');

  /*--------------------------------Server------------------------------------- */

  api.addFiles([
    'admin/server/startup.js',
    'admin/server/articles.js',
    'admin/server/settings.js',
    'admin/server/sidebar.js',
    'admin/server/module.js',
    'admin/server/category.js',
    'admin/server/users.js',
    'admin/server/menu.js',
    'admin/server/tags.js'
    ],['server'])

  /*--------------------------------Client Server---------------------------------*/

  api.addFiles([
    
    'admin/lib/method/collection.js',
    'admin/lib/method/articles.js',
    'admin/lib/method/settings.js',
    'admin/lib/router/router.jsx',
    'admin/lib/common.js',
    'admin/lib/startup.js',
    'admin/lib/method/user.js',
    'admin/lib/method/module.js',
    'admin/lib/method/categories.js',
    'admin/lib/method/menu.js',
    'admin/lib/method/tags.js',
    'admin/lib/method/search.js',
    'admin/lib/method/template.js'
    ],['client','server'])
  
  /*--------------------------------Client------------------------------------- */
  api.addFiles('admin/common/alertMessage.jsx',['client'])
  api.addFiles('admin/common/alertMessageOfError.jsx',['client'])
  api.addFiles('admin/common/notFoundComp.jsx',['client'])
  api.addFiles('admin/common/modal.jsx',['client'])
  api.addFiles('admin/adminLayout/adminLayout.jsx',['client'])
  api.addFiles('admin/common/heading.jsx',['client'])
  api.addFiles('admin/common/alertMessage.jsx',['client'])
  api.addFiles('admin/common/loadingSpinner.jsx',['client'])
  api.addFiles('admin/common/position.jsx',['client'])
  api.addFiles('admin/common/menuItemType.jsx',['client'])

  api.addFiles('admin/adminLayout/component/adminFooter.jsx',['client'])
  api.addFiles('admin/adminLayout/component/adminHeader.jsx',['client'])
  api.addFiles('admin/adminLayout/component/adminSidebar.jsx',['client'])
  api.addFiles('admin/adminLayout/component/language.js',['client'])
  api.addFiles('admin/settings/settings.jsx',['client'])
  api.addFiles('admin/settings/language.js',['client'])
  api.addFiles('imports/styles/admin.css',['client'])
  api.addFiles('admin/content/article/addArticle.jsx',['client'])
  api.addFiles('admin/content/article/editArticle.jsx',['client'])
  api.addFiles('admin/content/article/listArticles.jsx',['client'])
  api.addFiles('admin/content/article/language.js',['client'])
  api.addFiles('admin/login/login.jsx',['client'])

  api.addFiles('admin/extension/modules/language.js',['client'])
  api.addFiles('admin/extension/modules/modulesLayout.jsx',['client'])  
  api.addFiles('admin/extension/language/language.jsx',['client'])
  api.addFiles('admin/extension/template/templateManager.jsx',['client'])

  api.addFiles('admin/dashboard/dashboard.jsx',['client'])
  
  api.addFiles('admin/content/category/addCategory.jsx',['client'])
  api.addFiles('admin/content/category/editCategory.jsx',['client'])
  api.addFiles('admin/content/category/listCategories.jsx',['client'])
  api.addFiles('admin/content/category/language.js',['client'])
  api.addFiles('admin/users/changePassword.jsx',['client']),
  api.addFiles('admin/users/edit.jsx',['client'])
  api.addFiles('admin/users/myProfile.jsx',['client'])
  api.addFiles('admin/users/language.js',['client'])
  api.addFiles('admin/menu/addMenu.jsx',['client'])
  api.addFiles('admin/menu/editMenu.jsx',['client'])
  api.addFiles('admin/menu/listMenus.jsx',['client'])
  api.addFiles('admin/menu/language.js',['client'])
  api.addFiles('admin/menu/menuItems/addMenuItem.jsx',['client'])
  api.addFiles('admin/menu/menuItems/editMenuItem.jsx',['client'])
  api.addFiles('admin/menu/menuItems/listMenuItems.jsx',['client'])
  api.addFiles('admin/menu/menuItems/language.js',['client'])
 /* api.addFiles('admin/components/tags/addTag.jsx',['client'])
  api.addFiles('admin/components/tags/editTag.jsx',['client'])
  api.addFiles('admin/components/tags/listTags.jsx',['client'])
  api.addFiles('admin/components/tags/language.js',['client'])*/


  
  api.export('PanoplyCMSRegisterPackage')
  api.export('PanoplyRouter')
  api.export("Heading");
  api.export("NotFoundComp");
  api.export('AlertMessage');
  api.export('AlertMessageOfError');
  api.export('LodingSpinner');
  api.export('Position');
  api.export('MenuItemType');
  api.export('Images');

});


