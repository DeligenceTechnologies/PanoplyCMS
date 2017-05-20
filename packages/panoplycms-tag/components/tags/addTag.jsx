import React, { Component } from 'react';
import { render } from 'react-dom';

// import { insertTag } from '../../actions/tag_action.js';

var createReactClass = require('create-react-class');

AddTag = createReactClass({
  handleChange(event) {
    this.props.onUpdate(event.target.id, event.target.value);
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
  submitData(event){
    event.preventDefault();
    let tagObj = {
      title: ReactDOM.findDOMNode(this.refs.title).value.trim(),
      desc: ReactDOM.findDOMNode(this.refs.desc).value.trim(),
      metaKeyword: ReactDOM.findDOMNode(this.refs.metaKeyword).value.trim(),
      metaDesc: ReactDOM.findDOMNode(this.refs.metaDesc).value.trim()
    }
    Meteor.call('addTag', tagObj, (err,data)=>{
      if(err){
        AlertMessage('ERROR', 'Internal server error or duplicatie tag can not insert.', 'error');
      }else{
        AlertMessage('SUCCESS', 'Successfully! added tag.', 'success');
        ReactDOM.findDOMNode(this.refs.title).value='';
        ReactDOM.findDOMNode(this.refs.desc).value='';
        ReactDOM.findDOMNode(this.refs.metaKeyword).value='';
        ReactDOM.findDOMNode(this.refs.metaDesc).value='';
      }
    });
    return dispatch => {
      dispatch(insertTag(tagObj))
    }
  },
  render:function(){
    /*let msg = '';
    if(this.state.msg){
      msg = <AlertMessageSuccess data={'added tag.'} func={this.resetSuccessMsg} />
    }else if(this.state.errorMsg){
      msg = <AlertMessageError data={this.state.errorMsg} func={this.resetSuccessMsg} />
    }else{
      msg = '';
    }*/
    return(
      <div className="">
        <div className="page-header">
          <h3 className="sub-header">{i18n('ADMIN_COMPONENTS_TAGS_ADDTAGS')}</h3>
        </div>
        <form className = "form-horizontal" role = "form" onSubmit={this.submitData}>
           <div className="controls-header">
               <div className="form-group">
                  <div className="col-sm-12">
                    <input type = "submit" className="btn custom-default-btn" value='SAVE' />
                    
                     <a href={FlowRouter.path('tags')} className="btn custom-default-btn">CANCEL</a>
                   </div>
               </div>
           </div>
            <div className="panel-body custom-panel">
               <div className="form-group">
                    <label className="col-sm-2 control-label">{i18n('ADMIN_COMPONENTS_TAGS_ADDTAGS_FORM_TAGNAME')}</label>
                    <div className="col-sm-7">
                      <input type = "text" ref="title" id="title" className="form-control" placeholder = "Enter title" maxLength="25" required />
                    </div>
               </div>
               <div className="form-group">
              <label className="col-sm-2 control-label">{i18n('ADMIN_COMPONENTS_TAGS_ADDTAGS_FORM_DESCRIPTION')}</label>
              <div className="col-sm-7">
                <textarea ref="desc" id="desc" className="form-control"></textarea>
              </div>
               </div>
               <div className="form-group">
              <label className="col-sm-2 control-label">{i18n('ADMIN_COMPONENTS_TAGS_ADDTAGS_FORM_METAKEYWORD')}</label>
              <div className="col-sm-7">
                <input type = "text" ref="metaKeyword" id="metaKeyword" className="form-control"   placeholder = "Enter title" />
              </div>
               </div>
               <div className="form-group">
              <label className="col-sm-2 control-label">{i18n('ADMIN_COMPONENTS_TAGS_ADDTAGS_FORM_METADESCRIPTION')}</label>
              <div className="col-sm-7">
                <textarea ref="metaDesc" id="metaDesc" className="form-control"></textarea>
              </div>
               </div>
            </div>
        </form>
        <div className="panel-body">
          <div id="notification"></div>
        </div>
      </div>
    )
  }
})

export default AddTag;

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