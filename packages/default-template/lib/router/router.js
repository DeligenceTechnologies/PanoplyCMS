Meteor.startup(() => {
  generateRoutes({name:'Default Template'})  
})

function generateRoutes(template) {
  Tracker.autorun( (c) => {
    if(PanoplyCMSCollections.RegisteredPackages.find({name:"template"}).count()){

      let tmplArray = PanoplyCMSCollections.RegisteredPackages.findOne({name:"template"})

      var defaultTemplate = _.find(tmplArray.templates, function(t){
        if(t.active)
          return t
      })

      if(defaultTemplate.name == template.name){        
        menuItems = PanoplyCMSCollections.MenuItems.find({trash:false}).fetch()
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
              ReactLayout.render(eval(defaultTemplate.layout), { content: React.createElement(eval(defaultTemplate.component), params)})
            }
          }
          PanoplyRouter.route('/'+i.alias, route)
          console.log(PanoplyRouter, "<--- Its router")
        });
      }
    }
  })
}