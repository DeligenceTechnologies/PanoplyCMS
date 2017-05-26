import { AlertMessage } from '../common/alertMessage.jsx';

export const updateWebsiteSettings = (id, params) => {
	return dispatch => {
		Meteor.call('updateSiteName', id, params, (error, data) => {
			if(!error){
				dispatch({
					type: 'SUCCESS',
					data,
				});
				AlertMessage('SUCCESS', 'Successfully! updated website settings.', 'success');
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