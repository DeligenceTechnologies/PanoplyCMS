import React, { Component } from 'react';
import { render } from 'react-dom';

import { removeMenu } from '../actions/menu_action.js';
import { removeMenuParamanent } from '../actions/menu_action.js';


let removeMenuHandler = function() {
  let onRemoveMenu = function(id) {
    store.dispatch(removeMenu(id))
  };
  return {
    onRemoveMenu
  };
};

let removeMenuPermanentHandler = function() {
  let onRemoveMenuPermanent = function(id) {
    store.dispatch(removeMenuParamanent(id))
  };
  return {
    onRemoveMenuPermanent
  };
};

export default class ModalMenu extends Component {
  constructor(props) {
    super(props);
    this.removeMenuDataHandler = removeMenuHandler();
    this.removeMenuDataPermanentHandler = removeMenuPermanentHandler();
  }
  deleteMenu(){
    if(this.props.stateVal){
      /*Meteor.call('deleteMenuParmanent', this.props.data._id,(err,data)=>{
      });*/
      this.removeMenuDataPermanentHandler.onRemoveMenuPermanent(this.props.data._id);
    }else{
      /*Meteor.call('deleteMenus', this.props.data._id,(err,data)=>{
      });*/
      this.removeMenuDataHandler.onRemoveMenu(this.props.data._id);
    }
  }
  render(){
    return(
      <div id={this.props.data._id} className="modal fade add-popup" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header centered">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Do you really want to {this.props.stateVal ? 'permanantely delete' : 'remove'} ?</h4>
            </div>
            <div className="modal-footer centered">
              <button type="button" className="btn custom-default-btn" onClick={this.deleteMenu.bind(this)} data-dismiss="modal">YES</button>
              <button type="button" className="btn custom-default-btn" data-dismiss="modal">NO</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}