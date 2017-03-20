SystemLayout = React.createClass({
  handleChange: function(event) {
    this.setState({name: event.target.value});
  },
  getInitialState(){
    return{
      successMsg:false,
      errorMsg:false,
    }
  },
  mixins:[ReactMeteorData],
    getMeteorData(){
    return {
      results: PanoplyCMSCollections.Sites.findOne(),
      image:Images.find().fetch()
    };
  },
  componentDidUpdate(){
    
  },
  componentDidMount(){
    $('.options').toggleClass('active');
    $('.option').button();
  },
  submitForm(event){
  	event.preventDefault();
    that=this;
    var files = this.refs.logoId.files[0];
    var name=ReactDOM.findDOMNode(this.refs.sitename).value.trim();
    // var siteOffline = $('input[name="options"]:checked').val() == "Yes" ? true : $('input[name="options"]:checked').val()
    var siteOffline = $('input[name="options"]:checked').val() == "Yes" ? true : false;
    var siteMetaKeyword=ReactDOM.findDOMNode(this.refs.siteMetaKeyword).value.trim();
    var siteMetaDesc=ReactDOM.findDOMNode(this.refs.siteMetaDesc).value.trim()
    var id=ReactDOM.findDOMNode(this.refs.sitename).name.trim();
    let settingObj={
      name:name,
      siteMetaKeyword:siteMetaKeyword,
      siteMetaDesc:siteMetaDesc,
      siteOffline:siteOffline,
      logoId:this.data.results.logoId
    }
    if(files){
      Images.insert(files,(err, fileObj) => {
      	if(fileObj){
        	settingObj.logoId=fileObj._id;
	        Meteor.call('updateSiteName',id,settingObj,function(err,data){
		        if(err){
		          that.setState({'errorMsg':err})
		        }else{
		          that.setState({'successMsg':true})
		        } 
	      	});
       	}
      });
    }else{
      Meteor.call('updateSiteName',id,settingObj,function(err,data){
        if(err){
          that.setState({'errorMsg':err})
        }
        else{
          that.setState({'successMsg':true})
        }
      });
    } 
  },
  resetSuccessMsg(){
    this.setState({'successMsg':false})
    this.setState({'errorMsg':false})
  },
  restrictLength(event){
    if (event.currentTarget.value.length > 250){
			event.currentTarget.value = event.currentTarget.value.substring(0,250);
    }
  },
  render() {
    // console.log("-----", this.data.results)
    let imgUrl=Images.findOne({_id:this.data.results.logoId})
    //console.log(imgUrl,'imgUrl====',imgUrl.url())
    if (this.state.successMsg) {
      msg= <AlertMessage data={'updated website settings.'} func={this.resetSuccessMsg}/>;
    }else if(this.state.errorMsg){
      msg=<AlertMessageOfError data={this.state.errorMsg} func={this.resetSuccessMsg}/>
    }else{
      msg=''
    }
    return (
      <div>
        <Heading data={i18n('ADMIN_SETTINGS_GLOBALCONFIGURATION')} />
        {msg}
        <div onClick={this.resetSuccessMsg}>
          <form className = "form-horizontal" onSubmit={this.submitForm} >
            <div className="form-group">
               <label className="col-sm-2 control-label">Site Name</label>
               <div className="col-sm-10">
                <input type="text" className="form-control" onChange={this.restrictLength} name={this.data.results._id} ref="sitename" defaultValue={this.data.results.name} required/>
               </div>
            </div> 
            <div className="form-group">
               <label className="col-sm-2 control-label"> {i18n('ADMIN_SETTINGS_SITE_META_KEYWORD')}</label>
               <div className="col-sm-10">
                <textarea className="form-control" ref="siteMetaKeyword" defaultValue={this.data.results.siteMetaKeyword}></textarea>
               </div>
            </div>
            <div className="form-group">
               <label className="col-sm-2 control-label"> {i18n('ADMIN_SETTINGS_SITE_META_DESCRIPTION')}</label>
               <div className="col-sm-10">
                <textarea className="form-control" ref="siteMetaDesc" defaultValue={this.data.results.siteMetaDesc}></textarea>
               </div>
            </div>
             <div className="form-group">
               <label className="col-sm-2 control-label">{i18n('ADMIN_SETTINGS_SITE_OFFLINE')}</label>
               <div className="col-sm-10">
                <div className="btn-group" data-toggle="buttons">
                 <label className={this.data.results.siteOffline?'active option btn btn-primary':'option btn btn-primary'} ref="option">
                    <input type="radio" className="rad" name="options" ref="options" id="option2"  value="Yes"/>{i18n('ADMIN_SETTINGS_SITE_OFFLINE_YES')}
                  </label>
                  <label className={!this.data.results.siteOffline?'active option btn btn-primary':'option btn btn-primary'} ref="option">
                    <input type="radio" className="rad" ref="options" name="options" id="option3" value="No" /> {i18n('ADMIN_SETTINGS_SITE_OFFLINE_NO')}
                  </label>
                </div>
               </div>
            </div>  
            <div className = "form-group">
              <label htmlFor = "firstname" className = "col-sm-2 control-label">Logo</label>
              <div className = "col-sm-10">
                <input id="logoId" ref="logoId" type="file" className="validate"/><br/>
                <div className="col-md-3">
                  <img src={imgUrl?imgUrl.url():''} className="img-rounded" style={{maxWidth: "100%"}} /> 
                </div>
              </div>
            </div> 
            <div className="form-group">
               <label className="col-sm-2 control-label"></label>
               <div className="col-sm-10">
                 <input type="submit" className="btn btn-primary" value='UPDATE'/>
                 &nbsp;&nbsp;
                 <a className="btn btn-danger" href={FlowRouter.path('dashboard')}>CANCEL</a>
               </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

LoadingSpinner=React.createClass({
  render:function(){
    return <div>Loading....</div>
  }
})

/*AlertMsg=React.createClass({

  render:function(){
    return <div className="successMsg alert alert-success " >
            <button type="button" onClick={this.props.func} className="close"  aria-label="Close">
              <span aria-hidden="true"  >&times;</span>
            </button>
            <strong>Successfully! </strong>
              Update the website settings.
          </div>
  }
})*/