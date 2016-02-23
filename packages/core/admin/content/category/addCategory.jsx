AddCategory=React.createClass({
mixins:[ReactMeteorData],
  getMeteorData(){

    console.log(this.props,'------------>')
    if(this.props._id){
      return {
        //console.log(Tasks.findOne({_id:this.props._id}));
        formData: Category.findOne({_id:this.props._id})
      }
    } else {
      return {
        //console.log(Tasks.findOne({_id:this.props._id}));
        formData: []
      }
    }
  },


  getInitialState: function() {
    return {
      category:{'_id':'aks123456','title':'Edit Category','alias':'editCategory'}
    }
   
    
  },
  onUpdate: function(target,val) {
     var retObj = { };
     retObj["category"] = this.props.category;
     retObj["category"][target] = val;//event.target.value;
    //this.props.category[event.target.id] = event.target.value;
    this.setState(retObj);    
    //console.log(this.state.category);
  },
  
	render(){
    
		return (
			 <div className="col-md-10 content">
           <div className="panel-heading">
            <span className="lead"> 
              Add Category
            </span>
            <CategoryForm category={this.state.category} onUpdate={this.onUpdate} />
           </div>
            <div className="panel-body">
              <div id="notification"></div>
              
            </div>
        </div>
		)
	}

});

var CategoryForm=React.createClass({
  handleChange: function(event) {
    this.props.onUpdate(event.target.id,event.target.value);
    //  var retObj = { };
    //  retObj["category"] = this.props.category;
    //  retObj["category"][event.target.id] = val;//event.target.value;
    // //this.props.category[event.target.id] = event.target.value;
    // this.setState(retObj);    
    //console.log(this.state.category);
  },
  submitData(event){
    event.preventDefault();    
      var title=ReactDOM.findDOMNode(this.refs.title).value.trim();
      var alias=ReactDOM.findDOMNode(this.refs.alias).value.trim();
      //console.log(title,alias)
      Meteor.call('add_category',title,alias,function(err,data){
        if(err)
          console.log(err);
        else
          FlowRouter.go('listCategories');      
      });
  },
render:function(){
return(
  <form className = "form-horizontal" role = "form" onSubmit={this.submitData}>
                <div className="form-group">
                  <label className="col-sm-2 control-label">Category name</label>
                  <div className="col-sm-10">
                    <input type = "text" ref="title" id="title"  onChange={this.handleChange} className="form-control" value={this.props.category.title}  placeholder = "Enter title" required />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">Alias</label>
                  <div className="col-sm-10">
                    <input type = "text" ref="alias" id="alias" onChange={this.handleChange} className="form-control"  value={this.props.category.alias} placeholder = "Enter alias" />
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
  )

}
})