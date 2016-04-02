
 AddCategory=React.createClass({
  handleChange: function(event) {
    this.props.onUpdate(event.target.id,event.target.value);
  },
  submitData(event){
    event.preventDefault();    
      var title = this.refs.title.value.trim();
      var alias = generateAlias(title);
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
         <Heading  data={i18n('ADMIN_COTNENTS_CATEGORY_ADDCATEGORY')}/>
          <form className = "form-horizontal" role = "form" onSubmit={this.submitData}>
            <div className="form-group">
              <label className="col-sm-2 control-label">{i18n('ADMIN_COTNENTS_CATEGORY_ADDCATEGORY_FORM_CATEGORYNAME')}</label>
                  <div className="col-sm-10">
                    <input type = "text" ref="title" id="title"  className="form-control"   placeholder = "Enter title" required />
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
})