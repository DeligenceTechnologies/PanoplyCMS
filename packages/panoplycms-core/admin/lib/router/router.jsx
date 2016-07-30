PanoplyRouter = FlowRouter;
PanoplyRouter.wait();

_.extend(PanoplyRouter, {
  init: () => {
    Tracker.autorun( (c) => {
      if(PanoplyCMSCollections.packageRoutes.ready() && PanoplyCMSCollections.menuItemRoutes.ready() && PanoplyCMSCollections.roles.ready()){
        packages = PanoplyCMSCollections.RegisteredPackages.find().fetch()

        // Get List of available Templates
        let tmplArray = _.findWhere(packages, {name: "template"}) || []

        let site = PanoplyCMSCollections.Sites.findOne({})

        // Get Default Template Parameters 
        var defaultTemplate = _.find(tmplArray.templates, function(t){
          if(t.active)
            return t
        })

        if(site.siteOffline && !Roles.userIsInRole(Meteor.userId(), ['admin'])){
          let offline = defaultTemplate.offline || 'CoreOfflineComponent'
          PanoplyRouter.route('/', {
            action: (p, q) => {
              ReactLayout.render(eval(offline))
            }
          })
        } else {
          /* Front End Routing Starts */
          menuItems = PanoplyCMSCollections.MenuItems.find({trash:false}).fetch()

          // Get List of available Modules
          let moduleTypes = _.filter(packages, p => { return p.type == "module" }) || [];

          let mod = _.pluck(moduleTypes, 'name') || [];
          let positions = defaultTemplate.positions || [];

          var defaultModules = {};
          var modules = {}

          if(!menuItems.length){
            let modulesList = PanoplyCMSCollections.Modules.find({type: {$in: mod}, trash: false, position: {$in: positions}, $or: [{allPages: true}]}).fetch();
            let allModules = getModulesList(positions, modulesList, moduleTypes)
            defaultModules = allModules.defaultModules
          }

          /* Get List of modules on position */
          function getModulesList(positions, modulesList, moduleTypes){
            var modules = {}, defaultModules = {}
            _.each(positions, p => {
              let mod = [], defaultMod = []
              _.each(modulesList, m => {
                if(m.position == p){
                  _.each(moduleTypes, t => {
                    if(t.name == m.type){
                      m.moduleData?m.moduleData['key']=Math.random():m['moduleData'] = { key: Math.random() }
                      if(m.showTitle) m.moduleData['module_title'] = m.name
                      mod.push(React.createElement(eval(t.component), m.moduleData))
                      if(m.allPages) defaultMod.push(React.createElement(eval(t.component), m.moduleData))
                    }
                  })
                }
              })
              modules[p] = mod;
              defaultModules[p] = defaultMod;
            })
            return { modules, defaultModules }
          }

          _.each(menuItems, (i) => {
            if(i.MenuItemType == 'url') return;

            let modulesList = PanoplyCMSCollections.Modules.find({type: {$in: mod}, trash: false, position: {$in: positions}, $or: [{allPages: true}, {menuItems: i._id}]}).fetch();

            let allModules = getModulesList(positions, modulesList, moduleTypes)

            modules = allModules.modules
            defaultModules = allModules.defaultModules

            let content;
            switch(i.MenuItemType){
              case 'category':
                content = defaultTemplate.categoryView;
                break;
              case 'article':
                content = defaultTemplate.articleView;
                break;
            }

            let route = {
              action: (params, queryParams) => {
                params = { id: i.MenuItemTypeId };
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
                    ReactLayout.render(eval(defaultTemplate.layout), { content: React.createElement(eval(defaultTemplate.articleView), { id: a._id }),
                      ...modules
                    })
                  }
                }
                PanoplyRouter.route('/'+i.alias+'/'+a.alias, route)
              })
            }
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
                      if(Roles.userIsInRole(Meteor.userId(), ['admin'])){
                        console.log('Already Loggedin')
                        redirect('/');
                      }
                    }]
                  }
                  PanoplyRouter.route(r.path, route)
                }
              })
            }
          })
        // }

        /* Render React Layout */
        function renderLayout(layout, component, params, queryParams){
          ReactLayout.render(eval(layout), { content: React.createElement(eval(component), params)})
        }

        /* Page Not Found Route */
        let notFound = defaultTemplate.notFound || 'CoreComponentNotFound'
        PanoplyRouter.notFound = {
          action: function(a, b) {
            let cp = PanoplyRouter.current().path;
            if(cp.split('/')[1] == 'admin')
              ReactLayout.render(AdminLayout, { 
                content: React.createElement(eval('CoreComponentNotFound'))
              })
            else 
              ReactLayout.render(eval(defaultTemplate.layout), {
                content: React.createElement(eval(notFound)),
                ...defaultModules
              })
          }
        };
        
        console.log('---------------------')
        console.log(PanoplyRouter)
        try{
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