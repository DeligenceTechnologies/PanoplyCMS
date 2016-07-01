PanoplyRouter = FlowRouter;
PanoplyRouter.wait();

_.extend(PanoplyRouter, {
  init: () => {
    Tracker.autorun( (c) => {
      console.log(c)
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
                if(route.name == 'login'){
                  route.triggersEnter = [ (context, redirect) => {
                    if(Roles.userIsInRole(Meteor.userId(), ['admin'])){
                      console.log('Already Loggedin')
                      redirect('/admin');
                    }
                  }]
                }
                PanoplyRouter.route(r.path, route)
              }
            })
          })
        // }

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
  }
});

if(Meteor.isClient){
  Meteor.startup(() => {
    PanoplyRouter.init();
  })
}

