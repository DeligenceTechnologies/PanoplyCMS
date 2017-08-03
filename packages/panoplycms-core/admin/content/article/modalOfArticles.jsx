/*==========================================
	its use to show popup of remove article
==========================================*/


import('react').then(({Component})=>{
	import { AlertMessage } from '../../common/alertMessage.jsx';
	class ModalOfArticles extends Component {
		constructor(props) {
	    super(props);
	  }
		deleteArticle(event){
			event.preventDefault();
			if(this.props.stateVal){
				Meteor.call('deleteArticleParma', this.props.data._id, function(err,data){
					if(err){
						AlertMessage('ERROR', i18n('ADMIN_CONTENTS_ARTICLES_REMOVE_PARMA_ERROR_MESSAGE'), 'error');
					}else{
						AlertMessage('SUCCESS', i18n('ADMIN_CONTENTS_ARTICLES_REMOVE_PARMA_SUCCESS_MESSAGE'), 'success');
					}
				});
			}else{
				Meteor.call('deleteArticle',this.props.data._id,function(err,data){
					if(err){
						AlertMessage('ERROR', i18n('ADMIN_CONTENTS_ARTICLES_REMOVE_PARMA_ERROR_MESSAGE'), 'error');
					}else{
						AlertMessage('SUCCESS', i18n('ADMIN_CONTENTS_ARTICLES_REMOVE_PARMA_SUCCESS_MESSAGE'), 'success');
					}
				});
			}
		}
		render(){
			return(
				<div id={this.props.data._id} className="modal fade add-popup" role="dialog">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header centered">
								<button type="button" className="close" data-dismiss="modal">&times;</button>
								<h4 className="modal-title">
									{
										this.props.stateVal ?
											i18n('ADMIN_CONTENTS_ARTICLES_MODAL_DELETE_PARMANENTLY')
										: 
											i18n('ADMIN_CONTENTS_ARTICLES_MODAL_DELETE')
									}
								</h4>
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
	export default ModalOfArticles;
});