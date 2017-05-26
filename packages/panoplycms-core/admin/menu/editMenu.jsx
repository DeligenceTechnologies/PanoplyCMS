import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import Heading from '../common/heading.jsx';
// import AlertMessage from '../common/alertMessage.jsx';
// import AlertMessageOfError from '../common/alertMessageOfError.jsx';
import LoadingSpinner from '../common/loadingSpinner.jsx';
import { AlertMessage } from '../common/alertMessage.jsx';

import { editMenu } from '../actions/menu_action.js';

class EditMenu extends Component {
  constructor(props) {
    super(props);
 
    /*this.state = {
      msg: false,
      errorMsg: false
    };*/
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
    Meteor.call("updateMenu", this.props._id, menuData, (err,data) => {
      if(err){
        AlertMessage('ERROR', err.reason, 'error');
        // console.log(err);
      }else{
        AlertMessage('SUCCESS', 'Successfully! updated menu.', 'success');
        // $('#title').val('')
        // $('#desc').val('')
      }
    });
    return dispatch => {
      dispatch(editMenu(this.props._id, menuData))
    }
  }
  /*resetSuccessMsg(){
    this.setState({'msg':false})
    this.setState({'errorMsg':false})
  }*/
  render(){
    /*let msg = '';
    if(this.state.msg){
      msg = <AlertMessage data={'updated menu.'} func={this.resetSuccessMsg.bind(this)} />
    }else if(this.state.errorMsg){
      msg = <AlertMessageOfError data={this.state.errorMsg} func={this.resetSuccessMsg.bind(this)} />
    }else{
      msg = '';
    }*/

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