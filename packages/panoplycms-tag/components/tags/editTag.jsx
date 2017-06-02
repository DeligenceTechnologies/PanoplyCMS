import React, { Component } from 'react';
import { render } from 'react-dom';

import Heading from '../common/heading.jsx';
import LoadingSpinner from '../common/loadingSpinner.jsx';

var createReactClass = require('create-react-class');

// import store from '../store/store.js';
import { updateTag } from '../actions/tag_action.js';

var createReactClass = require('create-react-class');

let editTagHandler = function() {
  let onClick = function(id, obj) {
    store.dispatch(updateTag(id, obj))
  };
  return {
    onClick
  };
};

EditTag = createReactClass({
  mixins:[ReactMeteorData],  
  getMeteorData: function() {
    var handle = Meteor.subscribe('findTag', this.props._id)
    return {
      pageLoading: ! handle.ready(), 
      tagsData: PanoplyCMSCollections.Tags.findOne({_id:this.props._id})
    };
  },
  getInitialState(){
    return {
      language:i18n.getLanguage(),
      valid:'',
    }
  },
  componentDidMount(){
    this.handler = editTagHandler();
  },
  submitData(event){
    event.preventDefault();
    let tagObj = {
      title: ReactDOM.findDOMNode(this.refs.title).value.trim(),
      desc: ReactDOM.findDOMNode(this.refs.desc).value.trim(),
      metaKeyword: ReactDOM.findDOMNode(this.refs.metaKeyword).value.trim(),
      metaDesc: ReactDOM.findDOMNode(this.refs.metaDesc).value.trim()
    }
    /*Meteor.call('editTag', this.props._id, tagObj, (err,data)=>{
      if(err){
        AlertMessage('ERROR', err.reason, 'error');
      }else{
        AlertMessage('SUCCESS', 'Successfully! updated tag.', 'success');
      }
    });*/
    this.handler.onClick(this.props._id, tagObj);
  },
  render:function(){
    let url=[{
      title: i18n('ADMIN_COMPONENTS_TAGS'),
      url:"/admin/tags",
      active: false
    },{
      title: i18n('ADMIN_COMPONENTS_TAGS_EDITTAG'),
      url:"/admin/tags/edit/"+FlowRouter.getParam("_id"),
      active: true
    }];

    if (this.data.pageLoading) {
      return <LoadingSpinner />;
    }

    return(
      <div>
        {/*<div className="page-header">
          <h3 className="sub-header">{i18n('ADMIN_COMPONENTS_TAGS_EDITTAG')}</h3>
        </div>*/}
        <Heading data={i18n('ADMIN_COMPONENTS_TAGS_EDITTAG')} url={url}/>
        
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