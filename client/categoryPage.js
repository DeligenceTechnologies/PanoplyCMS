Template.categoryPage.helpers({
	articles: function(){
		return menuCategory(Router.current().currentId);
	},
	currentUrl: function(){
		var url = Iron.Location.get().path
		if (url.substring(url.length-1) == "/")
	    	url = url.substring(0, url.length-1);
		return url;
	},
	categoryName: function(){
		return Router.current().title;
	}
});


UI.registerHelper('shortContent', function(content) {
	return $('<div>'+content+'</div>').text().substr(0,250);
});
