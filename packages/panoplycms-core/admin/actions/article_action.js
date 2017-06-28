import { AlertMessage } from '../common/alertMessage.jsx';

export const insertArticle = params => {
	return dispatch => {
		Meteor.call('addArticles', params, (error, data) => {
			if(!error){
				dispatch({
					type: 'SUCCESS',
					data,
				});
				AlertMessage('SUCCESS', 'Successfully! added article.', 'success');
			}else{
				dispatch({
					type: 'ERROR',
					error,
				});
				AlertMessage('ERROR', 'Internal server error or duplicate article can not insert.', 'error');
			}
		});
	};
};

export const updateArticle = (id, params) => {
	return dispatch => {
		Meteor.call('editArticle', id, params, (error, data) => {
			if(!error) {
				dispatch({
					type: 'SUCCESS',
					data,
				});
				AlertMessage('SUCCESS', 'Successfully! updated article.', 'success');
			}else{
				dispatch({
					type: 'ERROR',
					error,
				});
				AlertMessage('ERROR', error.reason, 'error');
			}
		});
	}
}

export const removeArticleParamanent = id => {
	return (dispatch) => {
		Meteor.call('deleteArticleParma', id, (error, data) => {
			if(!error) {
				dispatch({
					type: 'SUCCESS',
					data,
				});
				AlertMessage('SUCCESS', 'Successfully! Deleted Article Parmanently.', 'success');
			}else{
				dispatch({
					type: 'ERROR',
					error,
				});
				AlertMessage('ERROR', error.reason, 'error');
			}
		});
	};
};

export const removeArticle = id => {
	return (dispatch) => {
		Meteor.call('deleteArticle', id, (error, data) => {
			if(!error) {
				dispatch({
					type: 'SUCCESS',
					data,
				});
				AlertMessage('SUCCESS', 'Successfully! delete article.', 'success');
			}else{
				dispatch({
					type: 'ERROR',
					error,
				});
				AlertMessage('ERROR', error.reason, 'error');
			}
		});
	}
}

export const restoreArticle = id => {
	return (dispatch) => {
		Meteor.call('restoreArticles', id, (error, data) => {
			if(!error) {
				dispatch({
					type: 'SUCCESS',
					data,
				});
				AlertMessage('SUCCESS', 'Successfully! restore article.', 'success');
			}else{
				dispatch({
					type: 'ERROR',
					error,
				});
				AlertMessage('ERROR', error.reason, 'error');
			}
		});
	}
}