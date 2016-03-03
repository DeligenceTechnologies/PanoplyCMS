EditMenu=React.createClass({
   mixins:[ReactMeteorData],  
  getMeteorData: function() {
    var handle = Meteor.subscribe('findMenu',this.props._id)
    return {
      pageLoading: ! handle.ready(), 
      menuData: Menus.findOne({_id:this.props._id})
    };
  },
  componentDidMount: function(){
    document.title = "Edit Menu"
  },
  componentWillUnmount: function() {
    
  },
  componentDidUpdate: function() {
    
  },
  submitData(event){
    event.preventDefault();
    var insert = {
      "title":ReactDOM.findDOMNode(this.refs.title).value.trim(),
      "desc":ReactDOM.findDOMNode(this.refs.desc).value.trim()
    
    }
    Meteor.call("updateMenu",this.props._id,insert,function(err,data){
        if(err)
          console.log(err);
          else
            FlowRouter.go('manageMenu')
    });
     
  },
  render(){
    if (this.data.pageLoading) {
      return <LoadingSpinner />;
    }
    return (
       <div className="col-md-10 content">
    <div className="panel-heading"><span className="lead"> Edit Menu </span></div>
    <div className="panel-body">
    <div id="notification"></div>
      <form id="non-editable" className = "form-horizontal" role = "form" onSubmit={this.submitData} >
        <div className = "form-group">
          <label htmlFor = "firstname" className = "col-sm-2 control-label">Name</label>
          <div className = "col-sm-10">
            <input type = "text" name="title" ref="title"  className = "form-control"  defaultValue={this.data.menuData.title} required/>
          </div>
        </div>
        <div className = "form-group">
          <label htmlFor = "lastname" className = "col-sm-2 control-label">Description</label>
          <div className = "col-sm-10" id="token" > 
            <input type="text" ref="desc" className="form-control" defaultValue={this.data.menuData.title} id="desc" />
          </div>
       </div>
      <div className="form-group">
        <div className = "col-sm-offset-2 col-sm-10">
          <button className="btn btn-primary btn-lg" >Update</button>
        </div>
      </div> 
      <div className="form-group">
        <div className = "col-sm-offset-2 col-sm-10">
          <a className="btn btn-success btn-lg"  href={FlowRouter.path('manageMenu')}>Cancel</a>
        </div>
      </div>   
    </form>
  </div>
</div>
    )
  }

})

LoadingSpinner=React.createClass({
  render:function(){
    return <div>Loading....</div>
  }
})