import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import Heading from '../common/heading.jsx';
import LoadingSpinner from '../common/loadingSpinner.jsx';
// import { AlertMessage } from '../common/alertMessage.jsx';

import store from '../store/store.js';
import { editMenu } from '../actions/menu_action.js';

let editMenuHandler = function() {
  let onClick = function(id, obj) {
    store.dispatch(editMenu(id, obj))
  };
  return {
    onClick
  };
};

class EditMenu extends Component {
  constructor(props) {
    super(props);
 
    this.handler = editMenuHandler();
  }
  componentDidMount(){
    document.title = "Edit Menu"
  }
  submitData(event){
    event.preventDefault();
    let menuData = {
      "title": $('#title').val(),
      "desc": $('#desc').val()
    }
    /*Meteor.call("updateMenu", this.props._id, menuData, (err,data) => {
      if(err){
        AlertMessage('ERROR', err.reason, 'error');
      }else{
        AlertMessage('SUCCESS', 'Successfully! updated menu.', 'success');
      }
    });*/
    this.handler.onClick(this.props._id, menuData);
  }
  render(){
    if (this.props.pageLoading) {
      return <LoadingSpinner />;
    }
    let url=[{
        title:"Dashboard",
        url:"/admin/dashboard",
        active:false
      },{
        title: 'Menus',
        url: "/admin/menus",
        active:false
      },{
        title:i18n('ADMIN_MENU_EDITMENU'),
        url:"/admin/menus/edit/"+this.props._id,
        active:true
      }];
    return (
      <div className="">
        <Heading key={this.props.pageLoading} data={i18n('ADMIN_MENU_EDITMENU')} url={url}/>
         <form id="non-editable" className = "form-horizontal" role = "form" onSubmit={this.submitData.bind(this)}>
          <div className="controls-header">
               <div className="form-group">
              <div className = "col-sm-12">
                <button className="btn custom-default-btn">UPDATE</button>
                &nbsp;&nbsp;
                <a className="btn custom-default-btn" href={FlowRouter.path('manageMenu')}>CANCEL</a>
              </div>
            </div> 
          </div>
         <div className="panel-body custom-panel">
          <div id="notification"></div>
            <div className = "form-group">
              <label htmlFor = "firstname" className = "col-sm-2 control-label">{i18n('ADMIN_MENU_ADDMENU_FORM_TITLE')}</label>
              <div className = "col-sm-6">
                <input type = "text" name="title" id="title" className = "form-control" defaultValue={this.props.menuData.title} required />
              </div>
            </div>
            <div className = "form-group">
              <label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_MENU_ADDMENU_FORM_DESCRIPTION')}</label>
              <div className = "col-sm-6" id="token"> 
                <input type="text" className="form-control" defaultValue={this.props.menuData.desc} id="desc" />
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default createContainer((data) => {
  let handle = Meteor.subscribe('findMenu', data._id)
  return {
    pageLoading: ! handle.ready(),
    menuData: PanoplyCMSCollections.Menus.findOne({_id:data._id})
  };
}, EditMenu)