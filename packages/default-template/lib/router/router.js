Meteor.startup(() => {
  /*generateRoutes({name:'Default Template'}) 
  Meteor.subscribe('articlesFind')
  Meteor.subscribe('Categories');*/
})

/*function generateRoutes(template) {
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
              params = { id: i.MenuItemTypeId };
              ReactLayout.render(eval(defaultTemplate.layout), { content: React.createElement(eval(content), params)})
            }
          }
          PanoplyRouter.route('/'+i.alias, route)
          console.log(PanoplyRouter, "<--- Its router")

          if(i.MenuItemType == 'category'){
            let articles = PanoplyCMSCollections.Articles.find({category: i.MenuItemTypeId, trash:false},{_id:1, alias: 1}).fetch()
            _.each(articles, a => {
              let route = {
                action: (params, queryParams) => {
                  params = { id: a._id };
                  ReactLayout.render(eval(defaultTemplate.layout), { content: React.createElement(eval(defaultTemplate.articleView), params)})
                }
              }
              PanoplyRouter.route('/'+i.alias+'/'+a.alias, route)
            })
          }

        });
      }
    }
  })
}*/