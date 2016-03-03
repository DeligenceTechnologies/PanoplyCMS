
 AddCategory=React.createClass({
  handleChange: function(event) {
    this.props.onUpdate(event.target.id,event.target.value);
  },
  submitData(event){
    event.preventDefault();    
      var title=ReactDOM.findDOMNode(this.refs.title).value.trim();
      var alias=ReactDOM.findDOMNode(this.refs.alias).value.trim();
      Meteor.call('add_category',title,alias,function(err,data){
        if(err)
          console.log(err);
        else{
         
          FlowRouter.go('listCategories');      
        }
      });
  },
render:function(){
return(
      <div className="col-md-10 content">
        <div className="panel-heading">
          <span className="lead"> 
          Add Category
          </span>
          <form className = "form-horizontal" role = "form" onSubmit={this.submitData}>
            <div className="form-group">
              <label className="col-sm-2 control-label">Category name</label>
                  <div className="col-sm-10">
                    <input type = "text" ref="title" id="title"  className="form-control"   placeholder = "Enter title" required />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">Alias</label>
                  <div className="col-sm-10">
                    <input type = "text" ref="alias" id="alias"  className="form-control"   placeholder = "Enter alias" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <input type = "submit" className="btn btn-success" value="Save" />
                    {' '}
                    <a href={FlowRouter.path('listCategories')} className="btn btn-danger">Cancel</a>
                  </div>
                </div>
          </form>
        </div>
        <div className="panel-body">
          <div id="notification"></div>
          
        </div>
    </div>
  )

}
})