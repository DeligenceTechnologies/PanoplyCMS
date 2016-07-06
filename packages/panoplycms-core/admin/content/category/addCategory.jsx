
 AddCategory=React.createClass({
  handleChange: function(event) {
    this.props.onUpdate(event.target.id,event.target.value);
  },
  submitData(event){
    event.preventDefault();    
      var title = this.refs.title.value.trim();
      var alias = generateAlias(title);
      Meteor.call('add_category',title,alias,(err,data)=>{
        if(err){
          this.setState({errorMsg:err})
        }
        else{
          this.setState({successMsg:true})     
        }
      });
  },
  getInitialState(){
    return{
      errorMsg:false,
      successMsg:false
    }
  },
  resetSuccessMsg(){
    this.setState({successMsg:false});
    this.setState({errorMsg:false})
  },
render:function(){
  if(this.state.successMsg){
      msg=<AlertMessage data={' Added Category.'} func={this.resetSuccessMsg}/>
    }else if(this.state.errorMsg){
      msg=<AlertMessageOfError data={this.state.errorMsg} func={this.resetSuccessMsg}/>
    }else{
      msg=''
    }
return(
      <div className="col-md-10 content">
         <Heading  data={i18n('ADMIN_COTNENTS_CATEGORY_ADDCATEGORY')}/>
         {msg}
          <form className = "form-horizontal" role = "form" onSubmit={this.submitData}>
            <div className="form-group">
              <label className="col-sm-2 control-label">{i18n('ADMIN_COTNENTS_CATEGORY_ADDCATEGORY_FORM_CATEGORYNAME')}</label>
                  <div className="col-sm-10">
                    <input type = "text" ref="title" id="title"  className="form-control"   placeholder = "Enter title" required />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <input type = "submit" className="btn btn-primary" value='SAVE' />
                    &nbsp;&nbsp;
                    <a href={FlowRouter.path('listCategories')} className="btn btn-danger">CANCEL</a>
                  </div>
                </div>
          </form>
      </div>
  )

}
})