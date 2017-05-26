import React, { Component } from 'react';
import { render } from 'react-dom';

import { restoreMenuItem } from '../../actions/menuItem_action.js';

let restoreMenuItemHandler = function() {
  let onClick = function(id) {
    store.dispatch(restoreMenuItem(id))
  };
  return {
    onClick
  };
};

export default class RestoreModal extends Component {
  constructor(props) {
    super(props);

    this.handler = restoreMenuItemHandler();
  }
  restoreMenuItem(){
    /*Meteor.call('restoreMenuItem', this.props.data._id, (err,data) => {
      if(err){}
      else{}
    });*/
    this.handler.onClick(this.props.data._id);
  }
  render(){
    return(
      <div id={this.props.data._id+'restoreArticle'} className="modal fade add-popup" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header centered">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Do you really want to restore ?</h4>
            </div>
            <div className="modal-footer centered">
              <button type="button" className="btn custom-default-btn" onClick={this.restoreMenuItem.bind(this)} data-dismiss="modal">YES</button>
              <button type="button" className="btn custom-default-btn" data-dismiss="modal">NO</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}