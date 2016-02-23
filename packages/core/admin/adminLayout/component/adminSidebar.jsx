AdminSidebar = React.createClass({
mixins:[ReactMeteorData],
  getMeteorData(){
    return {
      results: AdminSidebarMenu.find().fetch()
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
               return <LiItem key={result._id} data={result}/>;
            })}                  
  				</ul>
  			</div>
  		</nav>    
    </div>
    );
  }
});


var LiItem = React.createClass({
  render: function() {
  	var c=0;
    return (
    <li className="panel panel-default" id="dropdown">
			<a  data-toggle="collapse" href={'#'+this.props.data.title} >
				<span className={this.props.data.icon}></span> {this.props.data.title} 
				<span className="caret"></span>
			</a>
			<div id={this.props.data.title}  className="panel-collapse collapse">
  			<div className="panel-body">			
         	<ul className="nav-children" style={style}>
         		{this.props.data.param.map(function(p){
         			return	 <li key={c++}><a href={FlowRouter.path(p.routeName)}>{p.label}</a></li>
         		}) }    
          </ul>
  			</div>
			</div>
    </li>
    )
    
  }
});
