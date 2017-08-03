import React, { Component } from 'react';
import { render } from 'react-dom';

import('react').then(({Component})=>{
  class ModalOfRestoreCat extends Component {
    restoreCategory(){
      Meteor.call('restore_category', this.props.data._id,function(err,data){
        if(err){
            AlertMessage('ERROR', i18n('ADMIN_CONTENTS_CATEGORY_RESTORE_ERROR_MESSAGE'), 'error');
          }else{
            AlertMessage('SUCCESS', i18n('ADMIN_CONTENTS_CATEGORY_RESTORE_SUCCESS_MESSAGE'), 'success');
          }
      });
    }
    render(){
      return(
        <div id={this.props.data._id+'restoreCategory'} className="modal fade add-popup" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header centered">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">{i18n('ADMIN_CONTENTS_CATEGORY_MODAL_RESTORE')}</h4>
              </div>
              <div className="modal-footer centered">
                <button type="button" className="btn custom-default-btn" onClick={this.restoreCategory.bind(this)} data-dismiss="modal">YES</button>
                <button type="button" className="btn custom-default-btn" data-dismiss="modal">NO</button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  export default ModalOfRestoreCat;
});