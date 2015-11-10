articles 	= new Meteor.Collection('articles');
category 	= new Meteor.Collection('category');
menus 		= new Meteor.Collection('menus');
adminusers 	= new Mongo.Collection('adminusers');
htmlblocks 	= new Mongo.Collection('htmlblocks');
tags 		= new Mongo.Collection('tags');
settings   	= new Mongo.Collection('settings');

Meteor.methods({
	article: function(slug){
		console.log('slug');
	},
	checkUrlArray: function(item){
		var art = article.find({ alias: item, trash: 0, status: 1 }).fetch();
		if(art.length){
			art[0].type = 'article';
			return art;
		} else {
			var cat = category.find({ alias: item, trash: 0, status: 1 }).fetch();
			if(cat.length){
				cat[0].type = 'category';
			}
			return cat;
		}
	},
	checkCategory: function(item){
		return category.find({ alias: item, trash: 0, status: 1 }).fetch();
	},
	checkParentCategory: function(parent){
		return category.find({ _id: parent, trash: 0, status: 1 }).fetch();
	},

	add_category: function(categoryname,aliasname){ console.log('add_category',categoryname,aliasname);
	    return category.insert({
			name: categoryname,
			alias: aliasname,
			createdAt: new Date(),
			updateAt: '',
            status:1,
            trash:0,
			owner: Meteor.userId(),
	      	username: Meteor.user().username
		});
	},
	delete_category: function(id){
	    category.update({_id:id},{$set:{trash:1}});
	},
	update_category: function(id,categoryname,aliasname){
	    category.update({_id:id}, {
			$set: {
				name:categoryname,
				alias:aliasname,
				updateAt:new Date()
			}
		});
	},
	'find_category':function(){
	    category.find({status:1,trash:0});
	},
    'add_menu': function(name,aliasname,type,id,id_of_parent){
        var obj={
            title:name ,
            alias: aliasname,
            createdAt: new Date(),
            status:1,
            trash:0,
            menuItem: {
                type: type,
                id:id
            },
            status:1,
            trash:0
        }
        
        if(id_of_parent){
            obj.parent = {
	            id:id_of_parent,
	            order : 1   
            }
        }
        menus.insert(obj);
    },
    delete_menu: function(id){
        menus.update({_id:id},{$set:{trash:1}});
    },
    update_menu: function(id,categoryname,aliasname,type,id_of_menu_item_sub_type){
        menus.update({_id:id}, {
            $set: {
            	title:categoryname,
            	alias:aliasname,
            	menuItem: {
        			type: type,
        			id_of_menu_item_sub_type: id_of_menu_item_sub_type
            	},
            	updateAt: new Date()
            }
        });
    },
    fetch_menu_id: function(title){
        menus.find({
            title: title
        });
    },
    add_article: function(title,aliasname,catname,meta,desc,article,tag_obj){
        articles.insert({
            title: title,
            alias: aliasname,
            category:catname,
            metaKeyword:meta,
            metaDesc:desc,
            articleData:article,
            tags:tag_obj,
            status:1,
            trash:0,
            createdAt: new Date(),
            updateAt: '',
            owner: Meteor.userId(),
            username: Meteor.user().username
        });
    },
    'find_article':function(){
        articles.find({status:1,trash:0});
    },
    delete_article: function(id){
        articles.update({_id:id},{$set:{trash:1}});
    },
    update_article: function(id,title,aliasname,catname,meta,desc,article,tag_obj){
        articles.update({_id:id}, {
            $set: {title: title,alias: aliasname,category:catname,metaKeyword:meta,metaDesc:desc,articleData:article,tags:tag_obj,updateAt:new Date()}
            });

    },
    add_htmlblocks: function(htmlblock,position,menuname){
        htmlblocks.insert({
            html: htmlblock,
            position:position,
            menu:menuname ,
            status:1,
            trash:0,
            createdAt: new Date(),
            updateAt:new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username

        });
    },
    find_htmlblocks: function(){
        htmlblocks.find({status:1,trash:0});
    },
    delete_htmlblocks: function(id){
        htmlblocks.update({_id:id},{$set:{trash:1}});
    },
    update_htmlblocks:function(id,htmlblock,position,menuname){
    	htmlblocks.update({_id:id}, {
    		$set: {html: htmlblock,position:position,menu:menuname,updateAt:new Date()}
            });  
    },
    add_tags: function(tag,alias,desc,meta_keyword,meta_desc){
        return tags.insert({
            tag:tag,
            alias:alias,
            desc:desc,
            metaKeyword:meta_keyword,
            metaDesc:meta_desc,
            status:1,
            trash:0,
            createdAt: new Date(),
            updateAt:new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username

        });
    },
    'update_tags':function(id,tag,alias,desc,meta_keyword,meta_desc){
        tags.update({_id:id},{$set:{tag:tag,alias:alias,desc:desc,metaKeyword:meta_keyword,metaDesc:meta_desc,updateAt:new Date(),owner: Meteor.userId(),username: Meteor.user().username}
        });
    },
    'delete_tags':function(id){
        tags.update({_id:id},{$set:{trash:1}});
    },
    'find_tags':function(){
        return tags.find({status:1,trash:0});
    },
    'update_user':function(fullname,email){
        Meteor.users.update({_id:Meteor.userId()},{$set:{emails:{address:email},username:fullname}});
       
    },
    'update_project_name':function(name,id){
        settings.update({_id:id},{$set:{projectName:name}},{upsert:true});
    }
});
