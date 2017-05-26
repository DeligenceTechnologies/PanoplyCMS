import React, { Component } from 'react';
import { render } from 'react-dom';

import { removeCategory } from '../../actions/category_action.js';
import { removeCategoryParamanent } from '../../actions/category_action.js';

let removeCategoryHandler = function() {
  let onRemoveCategory = function(id, obj) {
    store.dispatch(removeCategory(id, obj))
  };
  return {
    onRemoveCategory
  };
};

let removeCategoryPermanentHandler = function() {
  let onRemoveCategoryPermanent = function(id) {
    store.dispatch(removeCategoryParamanent(id))
  };
  return {
    onRemoveCategoryPermanent
  };
};

export default class ModalOfCat extends Component {
  constructor(props) {
    super(props);

    this.removeCategoryDataHandler = removeCategoryHandler();
    this.removeCategoryDataPermanentHandler = removeCategoryPermanentHandler();
  }
  deleteCategory(){
    if(this.props.stateVal){
      /*Meteor.call('delete_category_parma',this.props.data._id,(err,data)=>{
      });*/
      this.removeCategoryDataPermanentHandler.onRemoveCategoryPermanent(this.props.data._id);
    }else{
      let isExistArticle = _.findWhere(this.props.resultOfArticles, {category: this.props.data._id}) || []
      isExistArticle=_.isEmpty(isExistArticle);
      if(isExistArticle){
        this.removeCategoryDataHandler.onRemoveCategory(this.props.data._id);
        /*Meteor.call('delete_category', this.props.data._id,(err,data)=>{
        });*/
      }else{
       $('#articlExist.modal').modal()
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
              <h4 className="modal-title">Do you really want to {this.props.stateVal ? 'permanantly delete' : 'remove'} ?</h4>
            </div>
            <div className="modal-footer centered">
              <button type="button" className="btn custom-default-btn" onClick={this.deleteCategory.bind(this)} data-dismiss="modal">YES</button>
              <button type="button" className="btn custom-default-btn" data-dismiss="modal">NO</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}