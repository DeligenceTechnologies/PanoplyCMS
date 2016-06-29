PanoplyRouter = FlowRouter;
PanoplyRouter.wait();

console.log('---------------------')
console.log(PanoplyRouter)
_.extend(PanoplyRouter, {
  init: function(){
    Tracker.autorun(function (c) {
      if(PanoplyCMSCollections.packageRoutes.ready()){
        packages = PanoplyCMSCollections.RegisteredPackages.find().fetch()
        console.log(packages)

        /* Create Admin Route Group */
        let admin = PanoplyRouter.group({
          name: "admin",
          prefix: '/admin',
          triggersEnter: [function(context, redirect){
            /*if(Meteor.userId()){
              if(!Roles.userIsInRole(Meteor.userId(), ['admin', 'owner'])){
                console.log('Access Denied')
              }
            } else {
              console.log('Got to Login')
            }*/
          }]
        });

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

            admin.route(r.path, route)
          })
        })

        function renderLayout(layout, component, params, queryParams){
          console.log(layout, component, params, '<--- Its here')
          // ReactLayout.render(AdminLayout, { content: React.createElement(component, params)})
          ReactLayout.render(AdminLayout, { content: React.createElement(SystemLayout, params)})
          // let Temp = window[component]
          // if(params)
          //   ReactLayout.render(window[layout], {content: React.createElement(Temp, params)})
          // else 
          //   ReactLayout.render(window[layout], {content: React.createElement(Temp)})
        }
        
        console.log('---------------------')
        console.log(PanoplyRouter)
        try{
          PanoplyRouter.initialize();
        } catch(err) {
          console.log('Caught error', err)
        }
      }
    });
  }
});



/*AdminLayout = React.createClass({
  render(){
    return (
      <div>
        <div>12345647987</div>
        <div>Check this Content Component: ---> {this.props.content}</div>
        <div>12345647987</div>
      </div>
    );
  }
})


SystemLayout = React.createClass({
  render(){
    return (
      <div>
        <h2>System Layout</h2>
      </div>
    );
  }
})*/