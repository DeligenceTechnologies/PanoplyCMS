import React, { Component } from 'react';
import { render } from 'react-dom';

import { removeMenu } from '../actions/menu_action.js';
import { removeMenuParamanent } from '../actions/menu_action.js';

export default class ModalMenu extends Component {
  deleteMenu(){
    if(this.props.stateVal){
      Meteor.call('deleteMenuParmanent', this.props.data._id,(err,data)=>{
      });
      return dispatch => {
        dispatch(removeMenuParamanent(this.props.data._id))
      }
    }else{
      Meteor.call('deleteMenus', this.props.data._id,(err,data)=>{
        // console.log(err,"response",data)
      });
      return dispatch => {
        dispatch(removeMenu(this.props.data._id))
      }
    }
  }
  render(){
    return(
      <div id={this.props.data._id} className="modal fade add-popup" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header centered">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Do you really want to remove ?</h4>
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