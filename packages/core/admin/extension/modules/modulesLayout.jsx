ModulesLayout = React.createClass({

  // This mixin makes the getMeteorData method work
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      mod: Modules.find({trash:false},{sort:{createdAt:-1}}).fetch(),
    };
  },
  componentDidMount: function(){
    document.title = "Module Manager";
  },
  insertSidebar() {},
  renderModules() {
    return this.data.mod.map((module) => {
      return <ModuleListing key={module._id} module={module} />;
    });
  },
  render() {
      return (
        <div className="col-md-10" id="container">
        <a href={FlowRouter.path("AddModules")} className="btn btn-success">Add Module</a>
        <table className="table table-striped" >
          <thead>
            <tr>
              <th className="">Title</th>
              <th className="">Position</th>
              <th className="">Type</th>
              <th className="">ID</th>
        			<th className="">Update</th>
        			<th className="">Remove</th>
            </tr>
          </thead>
          <tbody>{this.renderModules()}</tbody>
        </table>
        </div>
      );
  }
});

ModuleListing = React.createClass({
  propTypes: {
    module: React.PropTypes.object.isRequired,
  },
  trashThisModule(){
    Meteor.call("removeModule", this.props.module._id)
  },
  renderAModule(){
    FlowRouter.go('EditModule',{_id:this.props.module._id});
  },
  render(){
    return(
      <tr className="" >
      <td className=" hidden-phone">{this.props.module.title}</td>
			<td className=" hidden-phone">
			   <span className="label label-info">{this.props.module.position}</span>
			</td>
			<td className="small hidden-phone">{this.props.module.modDesc.type}</td>
			<td className="small hidden-phone">{this.props.module._id}</td>
			<td className="small hidden-phone">
        <button type="button" onClick={this.renderAModule} className="btn-edit-module btn btn-primary btn-xs">
          <span className="glyphicon glyphicon-edit" aria-hidden="true"></span>
        </button>
      </td>
			<td className="small hidden-phone">
        <button type="button" onClick={this.trashThisModule} className="btn-remove-module btn-danger btn btn-xs">
          <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
        </button>
      </td>
		</tr>
    );
  }

});

FlowRouter.route('/admin/modules', {
  name: 'modulesManager',
  subscriptions: function(params){
    this.register('AdminSidebarMenu',Meteor.subscribe('sidebar')) ,
    this.register('Sites',Meteor.subscribe('siteName')),
    this.register('ShowModules',Meteor.subscribe('moduleList'))
  },
  action: function(params) {
    ReactLayout.render(AdminLayout, {content:<ModulesLayout />});
  },
  triggersEnter: [function(context, redirect){
    console.log('..007..');
  }]
});
