import React, { Component } from 'react';
import { render } from 'react-dom';

import Heading from '../common/heading.jsx';
// import AlertMessage from '../common/alertMessage.jsx';
// import AlertMessageOfError from '../common/alertMessageOfError.jsx';
import { AlertMessage } from '../common/alertMessage.jsx';

import { addMenu } from '../actions/menu_action.js';

export default class AddMenu extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      language:i18n.getLanguage(),
      valid:'',
    };
  }
  componentDidMount(){
    document.title = "Add Menu"
  }
  submitData(event){
    event.preventDefault();    
    let menuData = {
      "title": $('#title').val(),
      "desc": $('#desc').val()
    }
    Meteor.call("insertMenu", menuData, (err, data) => {
      if(err){
        // console.log(err);
        AlertMessage('ERROR', err.reason, 'error');
      }else{
        AlertMessage('SUCCESS', 'Successfully! added menu.', 'success');
        $('#title').val('')
        $('#desc').val('')
      }
    });
    return dispatch => {
      dispatch(addMenu(menuData))
    }
  }
  /*resetSuccessMsg(){
    this.setState({'msg': false})
    this.setState({'errorMsg': ''})
  }*/
  render() {
    /*let msg = '';
    if(this.state.msg){
      msg = <AlertMessage data={'added menu.'} func={this.resetSuccessMsg.bind(this)} />
    }else if(this.state.errorMsg){
      msg = <AlertMessageOfError data={this.state.errorMsg} func={this.resetSuccessMsg.bind(this)} />
    }else{
      msg = '';
    }*/
    let url=[{
        title:"Dashboard",
        url:"/admin/dashboard",
        active:false
      },{
        title: 'Menus',
        url: "/admin/menus",
        active:false
      },{
        title:i18n('ADMIN_MENU_ADDMENU'),
        url:"/admin/menus/add",
        active:true
      }];
    return (
      <div className="">
        <Heading data={i18n('ADMIN_MENU_ADDMENU')} url={url}/>
        <form id="non-editable" className = "form-horizontal" role = "form" onSubmit={this.submitData.bind(this)}> 
          <div className="controls-header">
            <div className="form-group">
              <div className="col-sm-12">
                <button className="btn custom-default-btn" type="submit">SAVE</button>
             
                <a className="btn custom-default-btn" href={FlowRouter.path('manageMenu')}> CANCEL</a>
              </div>
            </div> 
          </div>
          <div className="panel-body custom-panel">
            <div id="notification"></div>
           
              <div className = "form-group">
                <label htmlFor = "firstname" className = "col-sm-2 control-label">{i18n('ADMIN_MENU_ADDMENU_FORM_TITLE')}</label>
                <div className = "col-sm-6">
                  <input type = "text" name="title" id="title" className = "form-control" placeholder = "Enter title" required />
                </div>
              </div>
              <div className = "form-group">
                <label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_MENU_ADDMENU_FORM_DESCRIPTION')}</label>
                <div className = "col-sm-6" id="token" > 
                  <input type="text" className="form-control" id="desc" />
                </div>
             </div>
           
          </div>
        </form>
      </div>
    )
  }
}