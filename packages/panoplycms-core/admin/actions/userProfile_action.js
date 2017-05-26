import { AlertMessage } from '../common/alertMessage.jsx';

export const editUser = params => {
	return dispatch => {
		Meteor.call('updateUser', params, (error, data)=>{
			if(!error){
				dispatch({
					type: 'SUCCESS',
					data,
				});
				AlertMessage('SUCCESS', 'Successfully! updated user profile.', 'success');
			}else{
				dispatch({
					type: 'ERROR',
					error,
				});
				AlertMessage('ERROR', error.reason, 'error');
			}
		})
	}
}