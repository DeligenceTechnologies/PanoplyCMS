import React, { Component } from 'react';
import { render } from 'react-dom';

import { removeCategory } from '../../actions/category_action.js';
import { removeCategoryParamanent } from '../../actions/category_action.js';

export default class ModalOfCat extends Component {
  deleteCategory(){
    if(this.props.stateVal){
      Meteor.call('delete_category_parma',this.props.data._id,(err,data)=>{
        // console.log(err,'data')
      });
      return dispatch => {
        dispatch(removeCategoryParamanent(this.props.data._id))
      }
    }else{
      let isExistArticle = _.findWhere(this.props.resultOfArticles, {category: this.props.data._id}) || []
      isExistArticle=_.isEmpty(isExistArticle);
      if(isExistArticle){
        Meteor.call('delete_category', this.props.data._id,(err,data)=>{
          // console.log(err,data)
        });
        return dispatch => {
          dispatch(removeCategory(this.props.data._id))
        }
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
              <h4 className="modal-title">Do you really want to remove ?</h4>
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