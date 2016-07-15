AdminSidebar = React.createClass({
mixins:[ReactMeteorData],
  getMeteorData(){
    return {
      results: PanoplyCMSCollections.AdminSidebarMenu.find().fetch()
    } 
  },
  route(route){
    PanoplyRouter.go(route)
  },
  render() {
    style={'display': 'block'};
    return (
      <div>
        <nav className="navbar navbar-default" role="navigation">
        <div className="side-menu-container">
          <ul className="nav navbar-nav">
            {this.data.results.map(result => {
               return <LiItem key={result._id} {...result} onClick={this.route} />;
            })}                  
          </ul>
        </div>
      </nav>    
    </div>
    );
  }
});


var LiItem = data => {
  menus = []
  components = []
  if(data.title == 'MENU')
    menus = PanoplyCMSCollections.Menus.find({trash: false}).fetch()
  if(data.title == 'COMPONENTS')
    components = PanoplyCMSCollections.RegisteredPackages.find({type: 'component'},{_id: 1, name: 1}).fetch()
  var c=0;
  return (
  <li className="panel panel-default" id="dropdown">
    <a  data-toggle="collapse" href={'#'+data.title} >
      <span className={data.icon}></span> {data.title} 
      <span className="caret"></span>
    </a>
    <div id={data.title}  className="panel-collapse collapse">
      <div className="panel-body">      
        <ul className="nav-children" style={style}>
          {data.param.map( p => {
            let params = {}
           
            if(p.url){
              params = { href: p.url, target: "_blank" }
            } else {
              params['onClick'] = ()=>{ data.onClick(p.routeName) }
            }
            return <li key={c++}><a {...params} >{p.label}</a></li>
          })}
          {menus.map(m => {
            return <li key={m._id}><a href={FlowRouter.path('listMenuItems', {_id: m._id})}>{m.title}</a></li>
          })}
          {components.map(m => {
            return <li key={m._id}><a href={FlowRouter.path(m.name)}>{m.label?m.label:_(m.name).capitalize()}</a></li>
          })}
        </ul>
      </div>
    </div>
  </li>
  )    
}