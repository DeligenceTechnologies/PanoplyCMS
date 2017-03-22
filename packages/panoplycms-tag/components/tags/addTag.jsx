import {Heading,AlertMessageOfError,AlertMessage} from 'meteor/deligencetechnologies:panoplycms-core';

AddTag=React.createClass({
  handleChange: function(event) {
    this.props.onUpdate(event.target.id,event.target.value);
    //  var retObj = { };
    //  retObj["category"] = this.props.category;
    //  retObj["category"][event.target.id] = val;//event.target.value;
    // //this.props.category[event.target.id] = event.target.value;
    // this.setState(retObj);    
    //console.log(this.state.category);
  },
  getInitialState(){
   return {
      language:i18n.getLanguage(),
      msg:false,
      valid:'',
      errorMsg:false
    }
  },
  resetSuccessMsg(){
    this.setState({'msg':false})
    this.setState({'errorMsg':false})
  },
  submitData(event){
    event.preventDefault();    
    var title=ReactDOM.findDOMNode(this.refs.title).value.trim();
    var desc=ReactDOM.findDOMNode(this.refs.desc).value.trim();
    var metaKeyword=ReactDOM.findDOMNode(this.refs.metaKeyword).value.trim();
    var metaDesc=ReactDOM.findDOMNode(this.refs.metaDesc).value.trim();
    //console.log(title,alias)
    Meteor.call('addTag',title,desc,metaKeyword,metaDesc,(err,data)=>{     
      if(err){
        this.setState({errorMsg :'Internal server error or duplicatie tag can not insert.'})
      }else{       
        this.setState({msg : true});
        ReactDOM.findDOMNode(this.refs.title).value='';
        ReactDOM.findDOMNode(this.refs.desc).value='';
        ReactDOM.findDOMNode(this.refs.metaKeyword).value='';
        ReactDOM.findDOMNode(this.refs.metaDesc).value='';              
      }
    });
  },
  render:function(){
    var msg='';
    if(this.state.msg){
      msg=<AlertMessage data={'added tag.'} func={this.resetSuccessMsg}/>
    }else if(this.state.errorMsg){
      msg=<AlertMessageOfError data={this.state.errorMsg} func={this.resetSuccessMsg}/>
    }else{
      msg='';
    }
    return(
      <div className="col-md-10 content" onClick={this.resetSuccessMsg}>
        <Heading  data={i18n('ADMIN_COMPONENTS_TAGS_ADDTAGS')} />
        {msg}
        <div className="panel-body">
          <form className = "form-horizontal" role = "form" onSubmit={this.submitData}>
            <div className="form-group">
              <label className="col-sm-2 control-label">{i18n('ADMIN_COMPONENTS_TAGS_ADDTAGS_FORM_TAGNAME')}</label>
              <div className="col-sm-10">
                <input type = "text" ref="title" id="title"  className="form-control"   placeholder = "Enter title" maxLength="25" required />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">{i18n('ADMIN_COMPONENTS_TAGS_ADDTAGS_FORM_DESCRIPTION')}</label>
              <div className="col-sm-10">
                <textarea ref="desc" id="desc"  className="form-control" ></textarea>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">{i18n('ADMIN_COMPONENTS_TAGS_ADDTAGS_FORM_METAKEYWORD')}</label>
              <div className="col-sm-10">
                <input type = "text" ref="metaKeyword" id="metaKeyword"  className="form-control"   placeholder = "Enter title"  />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">{i18n('ADMIN_COMPONENTS_TAGS_ADDTAGS_FORM_METADESCRIPTION')}</label>
              <div className="col-sm-10">
                <textarea ref="metaDesc" id="metaDesc"  className="form-control"  ></textarea>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <input type = "submit" className="btn btn-primary" value='SAVE' />
                &nbsp;&nbsp;
                <a href={FlowRouter.path('tags')} className="btn btn-danger">CANCEL</a>
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

export default AddTag;