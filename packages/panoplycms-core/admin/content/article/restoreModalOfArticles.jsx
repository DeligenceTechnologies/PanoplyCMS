/*==========================================
		its use to restore article
==========================================*/

import('react').then(({Component})=>{
	import { AlertMessage } from '../../common/alertMessage.jsx';
	class RestoreModalOfArticles extends Component {
		constructor(props) {
	    super(props);
	  }
		restoreArticle(){
			Meteor.call('restoreArticles', this.props.data._id, (err,data) => {
				if(err){
					AlertMessage('ERROR', i18n('ADMIN_CONTENTS_ARTICLES_RESTORE_ERROR_MESSAGE'), 'error');
				}else{
					AlertMessage('SUCCESS', i18n('ADMIN_CONTENTS_ARTICLES_RESTORE_SUCCESS_MESSAGE'), 'success');
				}
			});
		}
		render(){
			return(
				<div id={this.props.data._id+'restoreArticle'} className="modal fade add-popup" role="dialog">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header centered">
								<button type="button" className="close" data-dismiss="modal">&times;</button>
								<h4 className="modal-title">{i18n('ADMIN_CONTENTS_ARTICLES_MODAL_RESTORE')}</h4>
							</div>
							<div className="modal-footer centered">
								<button type="button" className="btn custom-default-btn" onClick={this.restoreArticle.bind(this)} data-dismiss="modal">YES</button>
								<button type="button" className="btn custom-default-btn" data-dismiss="modal">NO</button>
							</div>
						</div>
					</div>
				</div>
			)
		}
	}
	export default RestoreModalOfArticles;
});