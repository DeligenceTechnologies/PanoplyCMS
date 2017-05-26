import React, { Component } from 'react';
import { render } from 'react-dom';

// import { AlertMessage } from '../common/alertMessage.jsx';
var createReactClass = require('create-react-class');

import store from '../store/store.js';
import { insertTag } from '../actions/tag_action.js';

let addTagHandler = function() {
  let onClick = function(obj) {
    store.dispatch(insertTag(obj))
  };
  return {
    onClick
  };
};


AddTag = createReactClass({
  /*handleChange(event) {
    this.props.onUpdate(event.target.id, event.target.value);
  },*/  
  componentDidMount(){
    this.handler = addTagHandler();
  },
  getInitialState(){
   return {
      language:i18n.getLanguage(),
      valid:'',
    }
  },
  submitData(event){
    event.preventDefault();
    let tagObj = {
      title: ReactDOM.findDOMNode(this.refs.title).value.trim(),
      desc: ReactDOM.findDOMNode(this.refs.desc).value.trim(),
      metaKeyword: ReactDOM.findDOMNode(this.refs.metaKeyword).value.trim(),
      metaDesc: ReactDOM.findDOMNode(this.refs.metaDesc).value.trim()
    }
    /*Meteor.call('addTag', tagObj, (err,data)=>{
      if(err){
        AlertMessage('ERROR', 'Internal server error or duplicatie tag can not insert.', 'error');
      }else{
        AlertMessage('SUCCESS', 'Successfully! added tag.', 'success');
        ReactDOM.findDOMNode(this.refs.title).value='';
        ReactDOM.findDOMNode(this.refs.desc).value='';
        ReactDOM.findDOMNode(this.refs.metaKeyword).value='';
        ReactDOM.findDOMNode(this.refs.metaDesc).value='';
      }
    });*/
    this.handler.onClick(tagObj);
    this.refs.title.value='';
    this.refs.desc.value='';
    this.refs.metaKeyword.value='';
    this.refs.metaDesc.value='';
  },
  render:function(){
    return(
      <div>
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