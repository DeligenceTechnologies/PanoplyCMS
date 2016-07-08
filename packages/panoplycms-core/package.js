Package.describe({
  name: 'deligence1:panoplycms-core',
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
  api.versionsFrom('1.3.3.1');
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
  api.use('mizzao:jquery-ui');
  api.use('mizzao:autocomplete');
  api.use('ajduke:bootstrap-tokenfield');
  api.use('anti:i18n');
  api.use('themeteorchef:jquery-validation');
  api.use('arillo:flow-router-helpers');
  //api.use('deligence1:panoplycms-router');
  //api.use("deligence1:panoplycms-component");
  
  api.use('deligence1:panoplycms-collections');
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
<<<<<<< HEAD
    'admin/lib/method/search.js'
    
=======
    'admin/lib/method/search.js',
    'admin/lib/method/template.js'
>>>>>>> 9ccc5bf7d9fbb660aa643c0274e739b1aa9e00b0
    ],['client','server'])
  
  /*--------------------------------Client------------------------------------- */
  api.addFiles('admin/common/alertMessage.jsx',['client'])
  api.addFiles('admin/common/modal.jsx',['client'])
  api.addFiles('admin/adminLayout/adminLayout.jsx',['client'])
  api.addFiles('admin/common/heading.jsx',['client'])
  api.addFiles('admin/common/alertMessage.jsx',['client'])
  api.addFiles('admin/common/loadingSpinner.jsx',['client'])

  api.addFiles('admin/adminLayout/component/adminFooter.jsx',['client'])
  api.addFiles('admin/adminLayout/component/adminHeader.jsx',['client'])
  api.addFiles('admin/adminLayout/component/adminSidebar.jsx',['client'])
  api.addFiles('admin/adminLayout/component/language.js',['client'])
  api.addFiles('admin/settings/settings.jsx',['client'])
  api.addFiles('admin/settings/language.js',['client'])
  api.addFiles('admin/styles/admin.css',['client'])
  api.addFiles('admin/content/article/addArticle.jsx',['client'])
  api.addFiles('admin/content/article/editArticle.jsx',['client'])
  api.addFiles('admin/content/article/listArticles.jsx',['client'])
  api.addFiles('admin/content/article/language.js',['client'])
  api.addFiles('admin/login/login.jsx',['client'])

  api.addFiles('admin/extension/modules/Htmlblock.jsx',['client'])
  api.addFiles('admin/extension/modules/Menumodule.jsx',['client'])
  api.addFiles('admin/extension/modules/addModule.jsx',['client'])
  api.addFiles('admin/extension/modules/editModule.jsx',['client'])
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
});


