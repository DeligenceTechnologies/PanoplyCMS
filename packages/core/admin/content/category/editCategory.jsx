EditCategory = React.createClass({
  mixins:[ReactMeteorData],  
  getMeteorData: function() {
    var handle = Meteor.subscribe('Categories',this.props._id)
    return {
      pageLoading: ! handle.ready(), 
      categoryData: Categories.findOne({_id:this.props._id})
    };
  },

  render:function () {

    if (this.data.pageLoading) {
      return <LoadingSpinner />;
    }

    return (
       <div className="col-md-10 content">
           <div className="panel-heading">
            <span className="lead"> 
              Edit Category
            </span>
            <form className = "form-horizontal" role = "form" onSubmit={this.submitData}>
                <div className="form-group">
                  <label className="col-sm-2 control-label">Category name</label>
                  <div className="col-sm-10">
                    <input type = "text" ref="title" id="title"  onChange={this.handleChange} className="form-control" defaultValue={this.data.categoryData.name}  placeholder = "Enter title" required />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">Alias</label>
                  <div className="col-sm-10">
                    <input type = "text" ref="alias" id="alias" onChange={this.handleChange} className="form-control"  defaultValue={this.data.categoryData.alias} placeholder = "Enter alias" />
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
});

LoadingSpinner=React.createClass({
  render:function(){
    return <div>Loading....</div>
  }
})