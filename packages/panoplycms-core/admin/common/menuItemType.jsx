MenuItemType=React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData() {
		return {
			templateRegister:PanoplyCMSCollections.RegisteredPackages.findOne({name:'template'}),
			results : PanoplyCMSCollections.MenuItems.find().fetch(),
			menus:PanoplyCMSCollections.Menus.find({}).fetch()
		};
	},
	getInitialState(){
		let menu = {}
		_.each(this.props.value, v => {
			menu[v] = true
		})
		return { menu }
	},
	listOfMenu(){
		var elements = this.data.results;
		var menu = new Array();

		function getElements(parent_id){
			if(parent_id){
				return getChild(parent_id);
			} else {
				var element = new Array();
				elements.forEach(function (elem1) {
					var child = getChild(elem1._id);
					if(elem1.parentId==''){
						element.push({ _id: elem1._id, title: elem1.title, mainParentId:elem1.mainParentId, alias: elem1.alias, desc:elem1.desc, child: child });
					}
				});
				return element;
			}
		}

		function getChild(parent_id){
			var child = new Array();
			elements.forEach(function (elem2) {
				if(elem2.parentId){
					if(parent_id== elem2.parentId){
						child.push({ _id: elem2._id, title: elem2.title, mainParentId:elem2.mainParentId, alias: elem2.alias, desc:elem2.desc, child: getElements(elem2._id) });
					}
				}
			});
			return child;
		}
		// console.log(getElements(),'getElements()')
		return getElements();
	},
	render:function(){
		return (
			<div className="form-group">
				<label htmlFor="lastname" className="col-md-2 control-label">Menu Items</label>
				<div className="col-md-10">{this.renderMenuList(this.listOfMenu())}</div>
			</div>
		)
	},
	renderMenuList: function(menulist){
		let menus = _.groupBy(menulist, function(m){ return m.mainParentId; })
		let menuKeys = _.keys(menus);
		return menuKeys.map(m => {
			let k = Math.random();
			mainmenu = _.find(this.data.menus, (mm) => { return mm._id == m })
			return (
				<div key={k} className="col-sm-4">
					<div className="well">
						<h3 style={{marginTop: 0, marginBottom: 10}}>{mainmenu && mainmenu.title ? mainmenu.title :''}</h3>
						{this.printList(menus[m], 0)}
					</div>
				</div>
			)
		})
	},
	handleClick(id){
		obj = this.state.menu
		obj[id] = obj[id]?false:true;
		this.setState({ menu: obj})
	},
	printList(items, padding){
		if(padding > 20) padding = 20;
		return <ul style={{listStyle:"none", paddingLeft: padding}}>
			{
				items.map(i => {
					return (
						<li key={i._id}>
							<input type="checkbox" value={i._id} defaultChecked={this.state.menu[i._id]} onClick={()=>{this.handleClick(i._id)}} name="menucheck" className="allPage" /> {i.title}
							{i.child.length?this.printList(i.child, padding+20):''}
						</li>
					)
				})
			}
		</ul>
	}
})

export default MenuItemType;