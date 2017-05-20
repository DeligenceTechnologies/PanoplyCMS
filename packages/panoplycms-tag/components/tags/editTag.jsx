import React, { Component } from 'react';
import { render } from 'react-dom';

var createReactClass = require('create-react-class');

EditTag = createReactClass({
  mixins:[ReactMeteorData],  
  getMeteorData: function() {
    var handle = Meteor.subscribe('findTag', this.props._id)
    return {
      pageLoading: ! handle.ready(), 
      tagsData: PanoplyCMSCollections.Tags.findOne({_id:this.props._id})
    };
  },
  submitData(event){
    event.preventDefault();
    let tagObj = {
      title: ReactDOM.findDOMNode(this.refs.title).value.trim(),
      desc: ReactDOM.findDOMNode(this.refs.desc).value.trim(),
      metaKeyword: ReactDOM.findDOMNode(this.refs.metaKeyword).value.trim(),
      metaDesc: ReactDOM.findDOMNode(this.refs.metaDesc).value.trim()
    }
    Meteor.call('editTag', this.props._id, tagObj, (err,data)=>{
      if(err){
        AlertMessage('ERROR', err.reason, 'error');
      }else{
        AlertMessage('SUCCESS', 'Successfully! updated tag.', 'success');
      }
    });
    return dispatch => {
      dispatch(updateTag(this.props._id, tagObj))
    }
  },
  getInitialState(){
    return {
      language:i18n.getLanguage(),
      valid:'',
    }
  },
  /*resetSuccessMsg(){
    this.setState({'msg':false})
    this.setState({'errorMsg':false})
  },*/
  render:function(){
    if (this.data.pageLoading) {
      return <div>Loading...</div>;
    }
    
    /*let msg = '';
    if(this.state.msg){
      msg = <AlertMessageSucess data={'updated tag.'} func={this.resetSuccessMsg}/>
    }else if(this.state.errorMsg){
      msg = <AlertMessageError data={this.state.errorMsg} func={this.resetSuccessMsg}/>
    }else{
      msg = '';
    }*/

    return(
      <div className="">
        <div className="page-header">
          <h3 className="sub-header">{i18n('ADMIN_COMPONENTS_TAGS_EDITTAG')}</h3>
        </div>
        <form className = "form-horizontal" role = "form" onSubmit={this.submitData}>
           <div className="controls-header">
             <div className="form-group">
              <div className="col-sm-12">
                <input type = "submit" className="btn custom-default-btn" value='UPDATE' />
               
                <a href={FlowRouter.path('tags')} className="btn custom-default-btn">CANCEL</a>
               </div>
             </div>
           </div>
          <div className="panel-body custom-panel">
            <div className="form-group">
              <label className="col-sm-2 control-label">{i18n('ADMIN_COMPONENTS_TAGS_ADDTAGS_FORM_TAGNAME')}</label>
              <div className="col-sm-7">
                <input type = "text" ref="title" id="title" defaultValue={this.data.tagsData.title} className="form-control"   maxLength='25' placeholder = "Enter title" required />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">{i18n('ADMIN_COMPONENTS_TAGS_ADDTAGS_FORM_DESCRIPTION')}</label>
              <div className="col-sm-7">
                <textarea ref="desc" id="desc" defaultValue={this.data.tagsData.desc} className="form-control"></textarea>
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">{i18n('ADMIN_COMPONENTS_TAGS_ADDTAGS_FORM_METAKEYWORD')}</label>
              <div className="col-sm-7">
                <input type = "text" ref="metaKeyword" id="metaKeyword" defaultValue={this.data.tagsData.metaKeyword} className="form-control" placeholder = "Enter title"  />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label">{i18n('ADMIN_COMPONENTS_TAGS_ADDTAGS_FORM_METADESCRIPTION')}</label>
              <div className="col-sm-7">
                <textarea ref="metaDesc" id="metaDesc" defaultValue={this.data.tagsData.metaDescription} className="form-control"  ></textarea>
              </div>
            </div>
            
          </div>
        </form>
      </div>
    )
  }
})

export default EditTag;

AlertMessage = (title, message, messageType) => {
  // TODO -> change icons (a/c to your need)
  let type = '', icon = '';
  if(messageType == 'warning'){
    type = 'warning-msg';
    icon =  'fa-exclamation-triangle';
  }else if(messageType == 'success'){
    type = 'success-msg';
    icon =  'fa-check';
  }else if(messageType == 'error'){
    type = 'error-msg';
    icon =  'fa-remove';
  }
  return (
    Bert.alert({
      title: title,
      message: message,
      type: type,
      style: 'growl-top-right',
      icon: icon
    })
  );
}

/*class AlertMessageError extends Component {
  render(){
    return (
      <div className="successMsg alert alert-danger">
        <button type="button" onClick={this.props.func} className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <strong>Error! </strong>
        {this.props.data}
      </div>
    )
  }

}*/