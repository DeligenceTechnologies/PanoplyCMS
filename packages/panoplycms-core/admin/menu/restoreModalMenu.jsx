import React, { Component } from 'react';
import { render } from 'react-dom';

import { restoreMenu } from '../actions/menu_action.js';

export default class RestoreModalMenu extends Component {
  restoreMenu(){
    Meteor.call('restoreMenus', this.props.data._id,function(err,data){
      if(err){
        console.log(err)
      }else{
        // console.log(data)
      }
    });
    return dispatch => {
      dispatch(restoreMenu(this.props.data._id))
    }
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
              <button type="button" className="btn custom-default-btn" onClick={this.restoreMenu.bind(this)} data-dismiss="modal">YES</button>
              <button type="button" className="btn custom-default-btn" data-dismiss="modal">NO</button>
            </div>
          </div>
        </div>
      </div>
    )     
  }
}