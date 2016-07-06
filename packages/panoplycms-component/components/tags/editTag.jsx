import 'meteor/deligence1:panoplycms-core';
import  {Heading} from 'meteor/deligence1:panoplycms-core';
import {AlertMessageOfError} from 'meteor/deligence1:panoplycms-core';
import  {AlertMessage} from 'meteor/deligence1:panoplycms-core';

EditTag=React.createClass({
  mixins:[ReactMeteorData],  
  getMeteorData: function() {
    var handle = Meteor.subscribe('findTag',this.props._id)
    return {
      pageLoading: ! handle.ready(), 
      tagsData: PanoplyCMSCollections.Tags.findOne({_id:this.props._id})
    };
  },
  submitData(event){
    event.preventDefault();    
     var title=ReactDOM.findDOMNode(this.refs.title).value.trim();
      var desc=ReactDOM.findDOMNode(this.refs.desc).value.trim();
      var metaKeyword=ReactDOM.findDOMNode(this.refs.metaKeyword).value.trim();
      var metaDesc=ReactDOM.findDOMNode(this.refs.metaDesc).value.trim();
      //console.log(title,alias)
      Meteor.call('editTag',this.props._id,title,desc,metaKeyword,metaDesc,(err,data)=>{
        if(err){
          this.setState({errorMsg : err})
        }
        else{
          this.setState({msg : true});            
        }
      });
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
render:function(){
   /*if (this.data.pageLoading) {
      return <LoadingSpinner />;
    }*/
    var msg='';
    if(this.state.msg){
      msg=<AlertMessage data={'updated tag.'} func={this.resetSuccessMsg}/>
    }else if(this.state.errorMsg){
      msg=<AlertMessageOfError data={this.state.errorMsg} func={this.resetSuccessMsg}/>
    }else{
      msg='';
    }

return(
  <div className="col-md-10 content" onClick={this.resetSuccessMsg}>
    <Heading  data={i18n('ADMIN_COMPONENTS_TAGS_EDITTAG')} />
    {msg}
    <div className="panel-body">
      <form className = "form-horizontal" role = "form" onSubmit={this.submitData}>
          <div className="form-group">
            <label className="col-sm-2 control-label">{i18n('ADMIN_COMPONENTS_TAGS_ADDTAGS_FORM_TAGNAME')}</label>
            <div className="col-sm-10">
              <input type = "text" ref="title" id="title" defaultValue={this.data.tagsData.title} className="form-control"   placeholder = "Enter title" required />
            </div>
          </div>
           <div className="form-group">
            <label className="col-sm-2 control-label">{i18n('ADMIN_COMPONENTS_TAGS_ADDTAGS_FORM_DESCRIPTION')}</label>
            <div className="col-sm-10">
              <textarea ref="desc" id="desc"  defaultValue={this.data.tagsData.desc} className="form-control"    ></textarea>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">{i18n('ADMIN_COMPONENTS_TAGS_ADDTAGS_FORM_METAKEYWORD')}</label>
            <div className="col-sm-10">
              <input type = "text" ref="metaKeyword" id="metaKeyword" defaultValue={this.data.tagsData.metaKeyword} className="form-control"   placeholder = "Enter title"  />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">{i18n('ADMIN_COMPONENTS_TAGS_ADDTAGS_FORM_METADESCRIPTION')}</label>
            <div className="col-sm-10">
              <textarea ref="metaDesc" id="metaDesc"  defaultValue={this.data.tagsData.metaDescription} className="form-control"    required ></textarea>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <input type = "submit" className="btn btn-primary" value='UPDATE' />
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

LoadingSpinner=React.createClass({
  render:function(){
    return <div>Loading....</div>
  }
})

export default EditTag;