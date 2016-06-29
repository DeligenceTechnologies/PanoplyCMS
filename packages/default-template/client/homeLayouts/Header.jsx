FrontHeader = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData() {
		var isReady = Meteor.subscribe('findMenuOnNavBar','nav-bar-menu').ready();
		// console.log('modules is',isReady , 'ready')
		console.log(Meteor.subscribe('findMenuOnNavBar','nav-bar-menu').ready())
		var theMenuId = PanoplyCMSCollections.Modules.findOne({$and: [{"modDesc.type" : "MenuModule"}, {trash:false}, {"status" : "true"}, {position:"nav-bar-menu"}]});
		return {
			navMenuitems : PanoplyCMSCollections.MenuItems.find({"mainParentId" : theMenuId}).fetch()
		}
	},
	renderNavMenu() {
		// console.log('Hello I am navMenuitems', this.data.navMenuitems)
		return this.data.navMenuitems.map((item) => {
			return <NavMenu key={item._id} item={item} />;
		});
	},
	render() {
		return(
			<div className="blog-masthead">
				<div className="container">
					<nav className="nav blog-nav">
						{this.renderNavMenu()}
					</nav>
				</div>
			</div>
		);
	}
});

NavMenu = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired
	},
	render(){
		console.log(this.props.item._id);
		return(
			<a className="nav-link" href={this.props.item.alias}>{this.props.item.title}</a>
		);
	}
});