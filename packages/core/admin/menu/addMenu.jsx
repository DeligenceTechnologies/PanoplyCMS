AddMenu=React.createClass({
  componentDidMount: function(){
    document.title = "Add Menu"
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
    Meteor.call("insertMenu", insert,function(err,data){
        if(err)
          console.log(err);
          else{
           FlowRouter.go('manageMenu')
          }
          
    });
     
  },
  render(){
    return (
       <div className="col-md-10 content">
    <div className="panel-heading"><span className="lead"> Add Menu </span></div>
    <div className="panel-body">
    <div id="notification"></div>
      <form id="non-editable" className = "form-horizontal" role = "form" onSubmit={this.submitData} >
        <div className = "form-group">
          <label htmlFor = "firstname" className = "col-sm-2 control-label">Name</label>
          <div className = "col-sm-10">
            <input type = "text" name="title" ref="title"  className = "form-control"  placeholder = "Enter title" required/>
          </div>
        </div>
        <div className = "form-group">
          <label htmlFor = "lastname" className = "col-sm-2 control-label">Description</label>
          <div className = "col-sm-10" id="token" > 
            <input type="text" ref="desc" className="form-control" id="desc" />
          </div>
       </div>
      <div className="form-group">
        <div className = "col-sm-offset-2 col-sm-10">
          <button className="btn btn-primary btn-lg" >Save</button>
        </div>
      </div> 
      <div className="form-group">
        <div className = "col-sm-offset-2 col-sm-10">
         <a className="btn btn-success btn-lg" href={FlowRouter.path('manageMenu')}>Cancel</a>
        </div>
      </div>   
    </form>
  </div>
</div>
    )
  }

})