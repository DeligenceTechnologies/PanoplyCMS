EditCategory = React.createClass({
  mixins:[ReactMeteorData],  
  getMeteorData: function() {
    var handle = Meteor.subscribe('Categories',this.props._id)
    return {
      pageLoading: ! handle.ready(), 
      categoryData: Categories.findOne({_id:this.props._id})
    };
  },
  submitData(event){
    event.preventDefault();
    var title=ReactDOM.findDOMNode(this.refs.title).value.trim();
    var alias=ReactDOM.findDOMNode(this.refs.alias).value.trim();
    Meteor.call('update_category',this.props._id,title,alias,function(err,data){
        if(err)
          console.log(err);
        else{
          console.log(data);
          FlowRouter.go('listCategories');      
        }
      });
  },

  render:function () {

    if (this.data.pageLoading) {
      return <LoadingSpinner />;
    }

    return (
       <div className="col-md-10 content">
       <Heading  data= {i18n('ADMIN_COTNENTS_CATEGORY_EDITCATEGORY')} />
            <form className = "form-horizontal" role = "form" onSubmit={this.submitData}>
                <div className="form-group">
                  <label className="col-sm-2 control-label">{i18n('ADMIN_COTNENTS_CATEGORY_ADDCATEGORY_FORM_CATEGORYNAME')}</label>
                  <div className="col-sm-10">
                    <input type = "text" ref="title" id="title"  onChange={this.handleChange} className="form-control" defaultValue={this.data.categoryData.title}  placeholder = "Enter title" required />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <input type = "submit" className="btn btn-success" value={i18n('ADMIN_COTNENTS_CATEGORY_ADDCATEGORY_FORM_SAVE')} />
                    &nbsp;&nbsp;
                    <a href={FlowRouter.path('listCategories')} className="btn btn-danger">{i18n('ADMIN_COTNENTS_CATEGORY_ADDCATEGORY_FORM_CANCEL')}</a>
                  </div>
                </div>
            </form>
        </div>
    )
  }
});

LoadingSpinner=React.createClass({
  render:function(){
    return <div>Loading....</div>
  }
})