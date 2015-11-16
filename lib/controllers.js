mainRoutingController = RouteController.extend({
    
    currentId : '',
    title : '',
    menu : '',

    waitOn: function(){
        var urlParameters = this.params.path.split('/');
        var nonMenu = new Array();
        var _root = this;
        var found = false;
        /**
         * @param  {index}
         * @param  {parent}
         * @return {boolean}
         * Returns true for url formed by other parameters is true. If not return false
         */
        function urlCheck(index, parent){
            for(var i = index-1; i>=0; i-- ){
                var menu = menus.find({alias: urlParameters[i]}).fetch()[0];
                if(menu._id == parent){
                    if(i == 0)
                        return true;
                    parent = menu.parent.id;
                } else {
                    return false;
                }
            }
        }

        for(var i = urlParameters.length-1; i>=0; i-- ){
            var menu = menus.find({alias: urlParameters[i]}).fetch()[0];            
            if(menu){
                found = (i != 0)?urlCheck(i, menu.parent.id):true;
                break;
            } else {
                nonMenu.push(urlParameters[i]);
            }
        }

        if(menu){
            this.menu = menu.alias;
            this.title = menu.title;
        }

        if(found && nonMenu.length){
            var item = nonMenu[0];
            if(menu.menuItem.type.toLowerCase()=='categories'){
                Meteor.subscribe('listOfArticles')
                var article = _.findWhere(listOfArticles(),{alias: item});
                if(article){
                    menu.menuItem.type = 'articles';
                    menu.menuItem.id = article._id;
                }
                else menu.menuItem.type = '404';
            } else {
                menu.menuItem.type = '404';
            }
        } else {
            if(!(found && !nonMenu.length)){
                menu.menuItem.type = '404';
                console.log('Else 404');
            }
        }

        if(menu){
            _root.currentId = menu.menuItem.id;
        }

        switch (menu.menuItem.type.toLowerCase()){
            case 'articles':
                Router.setTemplateNameConverter(function () { return 'articlePage'; });
                return Meteor.subscribe('menuArticle', menu.menuItem.id);
                break;
            case 'categories':
                Router.setTemplateNameConverter(function () { return 'categoryPage'; });
                return Meteor.subscribe('menuCategory', menu.menuItem.id);
                break;
            case 'categoryArticle':
                Router.setTemplateNameConverter(function () { return 'articlePage'; });
                return Meteor.subscribe('article', menu.menuItem.id, menu.menuItem.alias);
                break;
            case '404':
                Router.setTemplateNameConverter(function () { return 'notFound'; });
                return null;
                break;
        }
    },

    onBeforeAction: function(){
        // var htmlBlocks = htmlblocks.find({status: 1, trash: 0}).fetch();
        var htmlBlocks = htmlblocks.find({menu: { $in: [this.menu] } , status: 1, trash: 0}).fetch();
        var block = new Array();
        var index = 0;
        for(var i = 0; i < htmlBlocks.length; i++){
            block.push(htmlBlocks[i]);
            this.render('htmlblock', {
                to: htmlBlocks[i].position,
                data: htmlBlocks[i]
            });
        }
        this.next();
    },
    
    action: function() {
        if (this.ready()) {
            this.render();
        } else {
            this.render('loading');
            pause();
        }
    }
});