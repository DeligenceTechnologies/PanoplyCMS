import AdminLayout from '../../../admin/adminLayout/adminLayout.jsx'
import Dashboard from '../../../admin/dashboard/dashboard.jsx'

import AddArticle from '../../../admin/content/article/addArticle.jsx'
import EditArticle from '../../../admin/content/article/editArticle.jsx'
import ListArticles from '../../../admin/content/article/listArticles.jsx'

import ListMenus from '../../../admin/menu/listMenus.jsx'
import AddMenu from '../../../admin/menu/addMenu.jsx'
import EditMenu from '../../../admin/menu/editMenu.jsx'

import ListMenuItems from '../../../admin/menu/menuItems/listMenuItems.jsx'
import AddMenuItem from '../../../admin/menu/menuItems/addMenuItem.jsx'
import EditMenuItem from '../../../admin/menu/menuItems/editMenuItem.jsx'

import ListCategories from '../../../admin/content/category/listCategories.jsx'
import AddCategory from '../../../admin/content/category/addCategory.jsx'
import EditCategory from '../../../admin/content/category/editCategory.jsx'

import UserList from '../../../admin/users/myProfile.jsx'
import EditUser from '../../../admin/users/edit.jsx'
import ChangePassword from '../../../admin/users/changePassword.jsx'

import Login from '../../../admin/login/login.jsx'
import TemplateManger from '../../../admin/extension/template/templateManager.jsx'
import SystemLayout from '../../../admin/settings/settings.jsx'
import ModulesLayout from '../../../admin/extension/modules/modulesLayout.jsx'

PanoplyRouter = FlowRouter;
PanoplyRouter.wait();


_.extend(PanoplyRouter, {
	init: () => {
		Tracker.autorun((c) => {
			if(PanoplyCMSCollections.packageRoutes.ready() && PanoplyCMSCollections.menuItemRoutes.ready() && PanoplyCMSCollections.roles.ready()){

				/*Get list of all registered packages*/
				let packages = PanoplyCMSCollections.RegisteredPackages.find().fetch()

				/*Get List of available Templates*/
				let tmplArray = _.findWhere(packages, {name: "template"}) || []

				let site = PanoplyCMSCollections.Sites.findOne({})

				/*Get Default Template Parameters*/
				let defaultTemplate = _.find(tmplArray.templates, function(t){
					if(t.active)
						return t
				})
				let defaultModules = {};
				/* Render offline component */
				// if(site.siteOffline && !Roles.userIsInRole(Meteor.userId(), ['admin'])){     Site offline not showing after set offline
				if(site.siteOffline ){
					let offline = defaultTemplate.views.offline || 'CoreOfflineComponent';
					PanoplyRouter.route('/', {
						action: (p, q) => {
							ReactLayout.render(eval(offline))
						}
					})
				} else {
					/* Front End Routing Starts */

					/* Get all available menuItems Data */
					menuItems = PanoplyCMSCollections.MenuItems.find({ trash:false }).fetch()

					/* Get List of available Modules */
					let moduleTypes = _.filter(packages, p => { return p.type == "module" }) || [];
					// console.log("moduleTypes :: router.jsx ==>", moduleTypes)

					/* Get available module names */
					let mod = _.pluck(moduleTypes, 'name') || [];
					// console.log("module name :: router.jsx ==>", mod)

					/* Get positions defined in template */
					let positions = defaultTemplate.positions || [];
					// console.log("positions :: router.jsx ==>", positions)

					
					let modules = {};

					/* Modules show on all pages (No menuItem id assigned) */
					if(!menuItems.length){
						// console.log("-------- No menuItem id assigned --------")
						let modulesList = PanoplyCMSCollections.Modules.find({type: {$in: mod}, trash: false, position: {$in: positions}, $or: [{allPages: true}]}).fetch();
						// console.log("---------", modulesList)

						let allModules = getModulesList(positions, modulesList, moduleTypes)
						let defaultModules = allModules.defaultModules
					}

					/* Get List of modules on position */
					function getModulesList(positions, modulesList, moduleTypes){
						let modules = {}, defaultModules = {};
						_.each(positions, position => {
							let mod = [], defaultMod = [];
							_.each(modulesList, modules => {
								if(modules.position == position){
									_.each(moduleTypes, moduleType => {
										if(moduleType.name == modules.type){
											modules.moduleClass ? modules.moduleData['moduleClass']=modules.moduleClass:modules.moduleData['moduleClass']=''
											modules.moduleData ? modules.moduleData['key']=Math.random() : modules['moduleData'] = { key: Math.random() }
											if(modules.showTitle) modules.moduleData['module_title'] = modules.name
											mod.push(React.createElement(eval(moduleType.component), modules.moduleData))
											if(modules.allPages) defaultMod.push(React.createElement(eval(moduleType.component), modules.moduleData))
										}
									})
								}
							})
							modules[position] = mod;
							defaultModules[position] = defaultMod;
						})
						return { modules, defaultModules }
					}

					/* Modules show on only specified menuItem */

					_.each(menuItems, (i) => {
						// console.log("========== Menu Item Id assigned ==========",i.MenuItemType," ===> ",i)
						if(i.MenuItemType == 'url') return;
						
						/* Get Modules List with specified menuItem id */
						// debugger;
						// Reactive Value
						let modulesList = PanoplyCMSCollections.Modules.find({type: {$in: mod}, trash: false, position: {$in: positions}, $or: [{allPages: true}, {menuItems: i._id}]}).fetch();
						// console.log("==========", modulesList)
						// debugger;
						let allModules = getModulesList(positions, modulesList, moduleTypes)
						// console.log("allModules =======", allModules)
						let modules = allModules.modules
						let defaultModules = allModules.defaultModules
						
						
						//	Set default notFound view if Menu view not found
						let content = defaultTemplate.views[i.MenuItemType];
						if(content === undefined)
							content = defaultTemplate.views.notFound;
						
						// switch(i.MenuItemType){
						// 	case 'category':
						// 		content = defaultTemplate.categoryView;
						// 		break;
						// 	case 'article':
						// 		content = defaultTemplate.articleView;
						// 		break;
						// 	case 'module':
						// 		content = defaultTemplate.noArticleView;
						// 		break;
						// }

						if( i.MenuItemType == "module")
							delete modules.sidebar;

						// console.log("modules >>>>>>>---", modules)

						// React.createElement(type, props, children);


						let route = {
							action: (params, queryParams) => {
								params = { id: i.MenuItemTypeId };
								// , modules: modules
								ReactLayout.render(eval(defaultTemplate.layout), {
									content: React.createElement(eval(content), params),
									...modules
								})
							}
						}

						if(i.MenuItemType == 'category'){
							let articles = PanoplyCMSCollections.Articles.find({category: i.MenuItemTypeId, trash:false},{_id:1, alias: 1}).fetch()

							_.each(articles, a => {
								let route = {
									action: (params, queryParams) => {
										ReactLayout.render(eval(defaultTemplate.layout), { content: React.createElement(eval(defaultTemplate.views.article), { id: a._id }),
											...modules
										})
									}
								}
								PanoplyRouter.route('/'+i.alias+'/'+a.alias, route)
							})
						}
						// console.log(" ==> ",i)
						if(i.homepage) PanoplyRouter.route('/', route)
						PanoplyRouter.route('/'+i.alias, route)
					});

					/* Front End Routing Ends */
				}

				/* Old Route Code with menu only */
				/*menuItems.forEach( (i) => {
					let route = {
						action: (params, queryParams) => {
							// renderLayout(defaultTemplate.layout, null, params, queryParams)
							renderLayout(null, null, params, queryParams)
						}
					}
					PanoplyRouter.route('/'+i.alias, route)
					console.log(PanoplyRouter, "<--- Its router")
				});*/

				// if(Roles.userIsInRole(Meteor.userId(), ['admin'])){
					admin = PanoplyRouter.group({
						name: "admin",
						prefix: '/admin',
						triggersEnter: [ (context, redirect) => {
							if(!Roles.userIsInRole(Meteor.userId(), ['admin'])){
								redirect('login');
							}
						}]
					});
					admin.route('/', {
						action: (params) => {
							PanoplyRouter.go('admin/dashboard');
						}, 
						triggersEnter: [(context, redirect) => {
							redirect('dashboard')
						}]
					});

				/*} else {
					admin = PanoplyRouter.group({
						name: "admin",
						prefix: '/admin',
						triggersEnter: [ ]
					});
				}*/

				// if(Roles.userIsInRole(Meteor.userId(), ['admin'])){
					/* Create Admin Route Group */
					packages.forEach( (p) => {
						if(p.routes){
							p.routes.forEach( (r) => {
								let route = {
									name: r.name,
									layout : r.layout,
									template : r.component,
									action: (params, queryParams) => {
										renderLayout(r.layout, r.component, params, queryParams)
									}
								}
								if(r.provides == 'dashboard'){
									if(Roles.userIsInRole(Meteor.userId(), ['admin'])) admin.route(r.path, route)
								} else {
									if(route.name == 'login'){
										route.triggersEnter = [ (context, redirect) => {
											// if(Roles.userIsInRole(Meteor.userId(), ['admin'])){
											// 	redirect('/admin/dashboard');
											// }
										}]
										PanoplyRouter.route(r.path, route)
									}
									
								}
							})
						}
					})
				// }

				/* Render React Layout */
				function renderLayout(layout, component, params, queryParams){
					// console.log("params ===> ",layout, component)
					if(Meteor.userId() || component == "Login")
						ReactLayout.render(eval(layout), { content: React.createElement(eval(component), params)})
					else
						PanoplyRouter.go("/")
				}

				/* Page Not Found Route */
				let notFound = defaultTemplate.views.notFound || 'CoreComponentNotFound'
				PanoplyRouter.notFound = {
					action: function(a, b) {
						let cp = PanoplyRouter.current().path;
						if(cp.split('/')[1] == 'admin'){
							if(Meteor.userId())
								ReactLayout.render(AdminLayout, { 
									content: React.createElement(eval('CoreComponentNotFound'))
								})
							else{
								PanoplyRouter.go('/')
							}
						}
						else 
							ReactLayout.render(eval(defaultTemplate.layout), {
								content: React.createElement(eval(notFound)),
								...defaultModules
							})
					}
				};

				try {
					PanoplyRouter.initialize();
				} catch(err) {
					PanoplyRouter.reload();
				}
			}
		});
	},
});

if(Meteor.isClient){
	Meteor.startup(() => {
		PanoplyRouter.init();
	})
}