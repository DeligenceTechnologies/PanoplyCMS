
/*=====================================================
SiderBarMenuItems is used to show each menu in side bar
its parent component is adminSideBar
=====================================================*/



import('react').then(({Component})=>{
	class SideBarMenuItem extends Component {
		constructor(props) {
			super(props);

			this.state = {
				showTrashList: false,
				id: ''
			};
			this.props.dict.set('menus', [])
			this.props.dict.set('components', [])
		}
		render(){
			let style={'display': 'block'};
			let c = 0;
			return(
				<li className="panel panel-default" id="dropdown">
					<a data-toggle="collapse" href={'#'+this.props.title}>
						<span className={this.props.icon}></span> {this.props.title}
						<span className="caret"></span>
					</a>
					<div id={this.props.title} className="panel-collapse collapse">
						<div className="panel-body" >
							<ul className="nav-children" style={style} id="accordion">
								{
									this.props.param.map(p => {
										let params = {}
										if(p.url){
											params = { href: p.url, target: "_blank" }
										} else {
											params['onClick'] = ()=>{ this.props.onClick(p.routeName) }
										}
										return <li key={c++}><a {...params}>{p.label}</a></li>
									})
								}
								{
									this.props.menus ?
										this.props.menus.map(m => {
											if(this.props.title == 'MENU'){
												return <li key={m._id}><a href={FlowRouter.path('listMenuItems', {_id: m._id})}>{ m.title }</a></li>
											}
										})
									: ''
								}
								{
									this.props.components ?
										this.props.components.map(m => {
											if(this.props.title == 'COMPONENTS'){
												return <li key={m._id}><a href={FlowRouter.path(m.name)}>{ m.label ? m.label : _(m.name).capitalize() }</a></li>
											}
										})
									: ''
								}
							</ul>
						</div>
					</div>
				</li>
			);
		}
	}

	import('meteor/react-meteor-data').then(({createContainer})=>{
		export default createContainer((data) => {	
			Tracker.autorun(() => {
				if(data.title == 'MENU'){
					let menus = PanoplyCMSCollections.Menus.find({trash: false}).fetch();
					data.dict.set('menus', menus)
				}
				if(data.title == 'COMPONENTS'){
					let components = PanoplyCMSCollections.RegisteredPackages.find({type: 'component'},{_id: 1, name: 1}).fetch()
					data.dict.set('components', components)
				}
			});
			return {
				menus: data.dict.get('menus'),
				components: data.dict.get('components')
			};
		}, SideBarMenuItem);
	});
});