import React, { Component } from 'react';
import { render } from 'react-dom';

import { removeMenuItem } from '../../actions/menuItem_action.js';
import { removeMItem } from '../../actions/menuItem_action.js';

export default class Modal extends Component {
  deleteMenuItem(){
    console.log("this.props.dict ===> ",this.props.dict.get("trashListShow"))
    if(this.props.dict.get("trashListShow")){
      console.log("==Session==> ",this.props.data)
      Meteor.call('deleteMenu', this.props.data._id, (err,data) => {
        // console.log(err,data);
      });
      return dispatch => {
        dispatch(removeMItem(this.props.data._id))
      }
    }else{
      console.log("==no Session==> ",this.props.data)
      Meteor.call('deleteMenuItem', this.props.data._id, this.props.homepage, (err,data) => {
        if(data){
          // console.log(data);
          if(data == "Its the parent of default")
            $('#defaultItemParentPopup.modal').modal()
        }else{
          console.log(err)
        }
      });
      return dispatch => {
        dispatch(removeMenuItem(this.props.data._id, this.props.homepage))
      }
    }
  }
  render(){
    return(
      <div id={this.props.data._id} className="modal fade add-popup" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            {
              this.props.data._id == this.props.homepage ?
                <div>
                  <div className="modal-header centered">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">Default Item can not be deleted</h4>
                  </div>
                  <div className="modal-footer centered">
                    <button type="button" className="btn custom-default-btn" data-dismiss="modal">Ok</button>
                  </div>
                </div> 
              :
                <div>
                  <div className="modal-header centered">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">Do you really want to remove ?</h4>
                  </div>
                  <div className="modal-footer centered">
                    <button type="button" className="btn custom-default-btn" onClick={this.deleteMenuItem.bind(this)} data-dismiss="modal">YES</button>
                    <button type="button" className="btn custom-default-btn" data-dismiss="modal">NO</button>
                  </div>
                </div>
            }
          </div>
        </div>
      </div>
    )
  }
}