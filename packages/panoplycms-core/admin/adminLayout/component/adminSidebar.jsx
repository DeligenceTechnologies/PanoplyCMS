AdminSidebar = React.createClass({
mixins:[ReactMeteorData],
  getMeteorData(){
    return {
      results: PanoplyCMSCollections.AdminSidebarMenu.find().fetch()
    } 
  },
  render() {
    style={'display': 'block'};
    return (
      <div>
        <nav className="navbar navbar-default" role="navigation">
        <div className="side-menu-container">
          <ul className="nav navbar-nav">
            {this.data.results.map(function(result) {
               return <LiItem key={result._id} {...result} />;
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
  if(data.title == 'MENU')
    menus = PanoplyCMSCollections.Menus.find().fetch()
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
            return <li key={c++}><a href={FlowRouter.path(p.routeName)}>{p.label}</a></li>
          })}
          {menus.map(m => {
            return <li key={m._id}><a href={FlowRouter.path('listMenuItems', {_id: m._id})}>{m.title}</a></li>
          })}
        </ul>
      </div>
    </div>
  </li>
  )    
}