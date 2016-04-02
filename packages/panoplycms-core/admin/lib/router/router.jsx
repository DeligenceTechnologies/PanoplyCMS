PanoplyRouter = FlowRouter;
PanoplyRouter.wait();

_.extend(PanoplyRouter, {
  init: function(){
    Tracker.autorun(function (c) {
      if(PanoplyCMSCollections.packageRoutes.ready() && PanoplyCMSCollections.menuItemRoutes.ready() && PanoplyCMSCollections.roles.ready()){
        packages = PanoplyCMSCollections.RegisteredPackages.find().fetch()

        menuItems = PanoplyCMSCollections.MenuItems.find({trash:false}).fetch()

        _.each(menuItems, function(i){
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
          triggersEnter: [function(context, redirect){
            if(!Roles.userIsInRole(Meteor.userId(), ['admin'])){
              console.log('Access Denied')
              redirect('login');
            }
          }]
        });
        admin.route('/', {
          action: function(params) {
            FlowRouter.go('dashboard');
          }
        });

        // if(Roles.userIsInRole(Meteor.userId(), ['admin'])){
          /* Create Admin Route Group */
          _.each(packages, function(p){
            _.each(p.routes, function(r){
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
        
        console.log('---------------------')
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
  Meteor.startup(function(){
    PanoplyRouter.init();
  })
}

