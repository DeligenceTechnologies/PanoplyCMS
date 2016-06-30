PanoplyRouter = FlowRouter;
PanoplyRouter.wait();

_.extend(PanoplyRouter, {
  init: () => {
    Tracker.autorun( (c) => {
      if(PanoplyCMSCollections.packageRoutes.ready() && PanoplyCMSCollections.menuItemRoutes.ready() && PanoplyCMSCollections.roles.ready()){
        packages = PanoplyCMSCollections.RegisteredPackages.find().fetch()

        menuItems = PanoplyCMSCollections.MenuItems.find({trash:false}).fetch()

        menuItems.forEach( (i) => {
          let route = {
            action: (params, queryParams) => {
              renderLayout(null,null,params, queryParams)
            }
          }
          PanoplyRouter.route('/'+i.alias, route)
        });

        let admin = PanoplyRouter.group({
          name: "admin",
          prefix: '/admin',
          triggersEnter: [ (context, redirect) => {
            if(!Roles.userIsInRole(Meteor.userId(), ['admin'])){
              console.log('Access Denied')
              redirect('login');
            }
          }]
        });

        admin.route('/', {
          action: (params) => {
            FlowRouter.go('dashboard');
          }
        });

        // if(Roles.userIsInRole(Meteor.userId(), ['admin'])){
          /* Create Admin Route Group */
          packages.forEach( (p) => {
            p.routes.forEach( (r) => {
              let route = {
                name: r.name,
                layout : r.layout,
                template : r.component,
                action: (params, queryParams) => {
                  renderLayout(r.layout, r.component, params, queryParams)
                }
              }
              if(Roles.userIsInRole(Meteor.userId(), ['admin']) && r.provides == 'dashboard'){
                admin.route(r.path, route)
              } else {
                PanoplyRouter.route(r.path, route)
              }
            })
          })
        // }

        function renderLayout(layout, component, params, queryParams){
          ReactLayout.render(eval(layout), { content: React.createElement(eval(component), params)})
        }
        
        console.log('---------------------123')
        console.log(PanoplyRouter)
        try{
          PanoplyRouter.initialize();
        } catch(err) {
          console.error('Caught error', err)
        }
      }
    });
  }
});

if(Meteor.isClient){
  Meteor.startup(() => {
    PanoplyRouter.init();
  })
}

