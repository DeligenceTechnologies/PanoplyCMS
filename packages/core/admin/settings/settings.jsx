SystemLayout = React.createClass({
  insertSidebar(){

  },
  submitForm(event){
  	event.preventDefault();
    var name=React.findDOMNode(this.refs.sitename).value.trim();
    //console.log(name);
    //Sites.update({name:name});
  },
  render() {
  	this.insertSidebar();
    return (
    <div>
        <button>Global Configuration</button>
        <form onSubmit={this.submitForm} >
            <input type="text" name="sitename" ref="sitename" />
            <input type="submit" value="Change"/>
        </form>
    </div>
    );
  }
});

FlowRouter.route('/admin/settings', {
  name: 'systemConfig',
   subscriptions: function(params){
    this.register('AdminSidebarMenu',Meteor.subscribe('sidebar'))
  },
  action: function(params) {
    ReactLayout.render(AdminLayout,{content:<SystemLayout />});
  }
});
