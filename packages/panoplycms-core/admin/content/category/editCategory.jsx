EditCategory = React.createClass({
  mixins:[ReactMeteorData],  
  getMeteorData: function() {
    var handle = Meteor.subscribe('Categories',this.props._id)
    return {
      pageLoading: ! handle.ready(), 
      categoryData: PanoplyCMSCollections.Categories.findOne({_id:this.props._id})
    };
  },
  submitData(event){
    event.preventDefault();
    var title=ReactDOM.findDOMNode(this.refs.title).value.trim();
    var alias = generateAlias(title);
    Meteor.call('update_category',this.props._id,title,alias,(err,data)=>{
        if(err)
          this.setState({errorMsg:err})
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
  render:function () {

    if (this.data.pageLoading) {
      return <LoadingSpinner />;
    }
    if(this.state.successMsg){
      msg=<AlertMessage data={'Successfully updated Category.'} func={this.resetSuccessMsg}/>
    }else if(this.state.errorMsg){
      msg=<AlertMessageOfError data={this.state.errorMsg} func={this.resetSuccessMsg}/>
    }else{
      msg=''
    }

    return (
       <div className="col-md-10 content" onClick={this.resetSuccessMsg}>
       <Heading  data= {i18n('ADMIN_COTNENTS_CATEGORY_EDITCATEGORY')} />
       {msg}
        <form className = "form-horizontal" role = "form" onSubmit={this.submitData}>
            <div className="form-group">
              <label className="col-sm-2 control-label">{i18n('ADMIN_COTNENTS_CATEGORY_ADDCATEGORY_FORM_CATEGORYNAME')}</label>
              <div className="col-sm-10">
                <input type = "text" ref="title" id="title"  onChange={this.handleChange} className="form-control" defaultValue={this.data.categoryData.title}  placeholder = "Enter title" required />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <input type = "submit" className="btn btn-primary" value='UPDATE' />
                &nbsp;&nbsp;
                <a href={FlowRouter.path('listCategories')} className="btn btn-danger">CANCEL</a>
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