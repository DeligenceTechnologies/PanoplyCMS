Template.mainMenu.helpers({
	/**
	 * 
	 * @return {_id, title, alias, child}
	 * Function is used to arrange menus in hirarchical manner. Each child will be under parent only
	 * 
	 */
	menus: function(){
		var elements = menus.find({status: 1,trash: 0}).fetch();
		var menu = new Array();
		/**
		 * @param  {parent_id is to handle call from child for its childrens else no need to give it}
		 * @return {main element }
		 */
		function getElements(parent_id){
			if(parent_id){
				return getChild(parent_id);
			} else {
				var element = new Array();
				elements.forEach(function (elem1) {
					var child = getChild(elem1._id);
					if(! _.size(elem1.parent))
						element.push({ _id: elem1._id, title: elem1.title, alias: elem1.alias, child: child });
				});
				return element;
			}			
		}

		/**
		 * @param  {parent_id}
		 * @return {child elements of parent id}
		 */
		function getChild(parent_id){
			var child = new Array();
			elements.forEach(function (elem2) {
				if(elem2.parent){
					if(parent_id == elem2.parent.id){
						child.push({ _id: elem2._id, title: elem2.title, alias: elem2.alias, child: getElements(elem2._id) });
					}
				}
			});
			return child;
		}
		return getElements();
	},

	logoText: function(){		
		return settings.find().fetch()[0];
	}
});

/**
 * Handlebar helper to generate ul li sequence
 */
UI.registerHelper('listMenu', function(menus) {
	/**
	 * function getElem will return list of menu items and its submenu
	 */
	function getElem(submenu, alias){
		var list='';
		if(submenu && alias){
			var menuArr = submenu;
		} else {
			var menuArr = menus;
		}
		menuArr.forEach(function (menu) {
			list += '<li class="dropdown page-scroll">';
			if (alias) {
				menu.alias = alias + '/' + menu.alias;
			}
			list += '<a href="/' + menu.alias + '">' + menu.title + '</a>';
			if(menu.child.length){
				list += '<ul class="dropdown-menu">' + getElem(menu.child, menu.alias) + '</ul>' ;
			}
			list += '</li>';
		});
		return list;
	}
	
	var list = getElem();
	return Spacebars.SafeString(list);
});
