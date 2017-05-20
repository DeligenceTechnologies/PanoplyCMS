import React, { Component } from 'react';
import { render } from 'react-dom';

import { removeArticleParamanent } from '../../actions/article_action.js';
import { removeArticle } from '../../actions/article_action.js';


export default class ModalOfArticles extends Component {
	deleteArticle(event){
		event.preventDefault();
		if(this.props.stateVal){
			Meteor.call('deleteArticleParma', this.props.data._id, function(err,data){
			});
			return dispatch => {
				dispatch(removeArticleParamanent(this.props.data._id))
			}
		}else{
			Meteor.call('deleteArticle',this.props.data._id,function(err,data){
			});
			return dispatch => {
				dispatch(removeArticle(this.props.data._id))
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
							<button type="button" className="btn custom-default-btn" onClick={this.deleteArticle.bind(this)} data-dismiss="modal">YES</button>
							<button type="button" className="btn custom-default-btn" data-dismiss="modal">NO</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}