/*import 'meteor/deligence1:panoplycms-component';
import {ListTags} from 'meteor/deligence1:panoplycms-component';*/
PanoplyRouter = FlowRouter;
PanoplyRouter.wait();

_.extend(PanoplyRouter, {
  init: () => {
    Tracker.autorun( (c) => {
      console.log(c)
      if(PanoplyCMSCollections.packageRoutes.ready() && PanoplyCMSCollections.menuItemRoutes.ready() && PanoplyCMSCollections.roles.ready()){
        packages = PanoplyCMSCollections.RegisteredPackages.find().fetch()

        /* Front End Routing Starts */
        menuItems = PanoplyCMSCollections.MenuItems.find({trash:false}).fetch()

        let tmplArray = _.find(packages, function(p){
          if(p.name == "template")
            return p
        })

        // Get Default Template Parameters 
        var defaultTemplate = _.find(tmplArray.templates, function(t){
          if(t.active)
            return t
        })

        menuItems.forEach( (i) => {
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
              ReactLayout.render(eval(defaultTemplate.layout), { content: React.createElement(eval(content), params)})
            }
          }

          PanoplyRouter.route('/'+i.alias, route)
          
          if(i.MenuItemType == 'category'){
            let articles = PanoplyCMSCollections.Articles.find({category: i.MenuItemTypeId, trash:false},{_id:1, alias: 1}).fetch()
            _.each(articles, a => {
              let route = {
                action: (params, queryParams) => {
                  ReactLayout.render(eval(defaultTemplate.layout), { content: React.createElement(eval(defaultTemplate.articleView), { id: a._id })})
                }
              }
              PanoplyRouter.route('/'+i.alias+'/'+a.alias, route)
            })
          }
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
          console.log(component,'component')
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