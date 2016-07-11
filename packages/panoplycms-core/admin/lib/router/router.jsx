/*import 'meteor/deligence1:panoplycms-component';
import {ListTags} from 'meteor/deligence1:panoplycms-component';*/
PanoplyRouter = FlowRouter;
PanoplyRouter.wait();

_.extend(PanoplyRouter, {
  init: () => {
    Tracker.autorun( (c) => {
      if(PanoplyCMSCollections.packageRoutes.ready() && PanoplyCMSCollections.menuItemRoutes.ready() && PanoplyCMSCollections.roles.ready()){
        packages = PanoplyCMSCollections.RegisteredPackages.find().fetch()

        /* Front End Routing Starts */
        menuItems = PanoplyCMSCollections.MenuItems.find({trash:false}).fetch()

        // Get List of available Templates
        let tmplArray = _.findWhere(packages, {name: "template"}) || []

        // Get List of available Modules
        let moduleTypes = _.filter(packages, p => { return p.type == "module" });

        // Get Default Template Parameters 
        var defaultTemplate = _.find(tmplArray.templates, function(t){
          if(t.active)
            return t
        })

        let mod = _.pluck(moduleTypes, 'name');
        let positions = defaultTemplate.positions;

        menuItems.forEach( (i) => {

          let modulesList = PanoplyCMSCollections.Modules.find({type: {$in: mod}, position: {$in: positions}, $or: [{allPages: true}, {menuItems: i._id}]}).fetch();

          var modules = {}

          _.each(positions, p => {
            let mod = []
            _.each(modulesList, m => {
              if(m.position == p){
                _.each(moduleTypes, t => {
                  if(t.name == m.type){
                    m.moduleData?m.moduleData['key']=Math.random():m['moduleData'] = { key: Math.random() }
                    // mod.push({ component: t.component, data: m.moduleData })
                    if(m.showTitle) m.moduleData['module_title'] = m.title
                    mod.push(React.createElement(eval(t.component), m.moduleData))
                  }
                })
              }
            })
            modules[p] = mod;
          })

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
            console.log(i.MenuItemTypeId, articles)
            _.each(articles, a => {
              let route = {
                action: (params, queryParams) => {
                  ReactLayout.render(eval(defaultTemplate.layout), { content: React.createElement(eval(defaultTemplate.articleView), { id: a._id }),
                    ...modules
                  })
                }
              }
              PanoplyRouter.route('/'+i.alias+'/'+a.alias, route)
              console.log('/'+i.alias+'/'+a.alias, route)
            })
          }

          PanoplyRouter.route('/'+i.alias, route)
        });

        /* Front End Routing Ends */

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
                console.log(context, "<---- context")
                redirect('login');
              }
            }]
          });
          admin.route('/', {
            action: (params) => {
              PanoplyRouter.go('dashboard');
            }
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

HTMLBlock = data => {
  showTitle = '';
  if(data.module_title) showTitle = <h4>{data.module_title}</h4>;
  return <div>
    {showTitle}
    {data.html?<div dangerouslySetInnerHTML={{__html: data.html}} />:'Nothing Here'}
  </div>
}