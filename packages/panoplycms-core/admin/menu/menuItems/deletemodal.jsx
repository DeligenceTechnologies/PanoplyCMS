import React, { Component } from 'react';
import { render } from 'react-dom';

import { removeMenuItem } from '../../actions/menuItem_action.js';
import { removeMItem } from '../../actions/menuItem_action.js';

let removeMenuItemHandler = function() {
  let onRemoveMenuItem = function(id, homepage) {
    store.dispatch(removeMenuItem(id, homepage))
  };
  return {
    onRemoveMenuItem
  };
};

let removeMenuItemPermanentHandler = function() {
  let onRemoveMenuItemPermanent = function(id) {
    store.dispatch(removeMItem(id))
  };
  return {
    onRemoveMenuItemPermanent
  };
};

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.removeMenuItemDataHandler = removeMenuItemHandler();
    this.removeMenuItemDataPermanentHandler = removeMenuItemPermanentHandler();
  }
  deleteMenuItem(){
    if(this.props.dict.get("trashListShow")){
      /*Meteor.call('deleteMenu', this.props.data._id, (err,data) => {
      });*/
      this.removeMenuItemDataPermanentHandler.onRemoveMenuItemPermanent(this.props.data._id);
    }else{
      /*Meteor.call('deleteMenuItem', this.props.data._id, this.props.homepage, (err,data) => {
        if(data){
          if(data == "Its the parent of default")
            $('#defaultItemParentPopup.modal').modal()
        }else{}
      });*/
      this.removeMenuItemDataHandler.onRemoveMenuItem(this.props.data._id, this.props.homepage);
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
                    <h4 className="modal-title">Do you really want to {this.props.dict.get("trashListShow") ? 'permanantly delete' :'remove'} ?</h4>
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