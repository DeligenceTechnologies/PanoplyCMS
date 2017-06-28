import { AlertMessage } from '../common/alertMessage.jsx';

export const addMenu = params => {
	return dispatch => {
		Meteor.call("insertMenu", params, (error, data) => {
      if(!error){
      	dispatch({
					type: 'SUCCESS',
					data,
				});
				AlertMessage('SUCCESS', 'Successfully! added menu.', 'success');
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

export const editMenu = (id, params) => {
	return dispatch => {
		Meteor.call("updateMenu", id, params, (error, data) => {
      if(!error){
      	dispatch({
					type: 'SUCCESS',
					data,
				});
				AlertMessage('SUCCESS', 'Successfully! updated menu.', 'success');
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

export const removeMenu = id => {
	return (dispatch) => {
		Meteor.call('deleteMenus', id, (error, data) => {
      if(!error){
      	dispatch({
					type: 'SUCCESS',
					data,
				});
				AlertMessage('SUCCESS', 'Successfully! remove menu.', 'success');
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

export const removeMenuParamanent = id => {
	return (dispatch) => {
		Meteor.call('deleteMenuParmanent', id, (error, data) => {
      if(!error){
      	dispatch({
					type: 'SUCCESS',
					data,
				});
				AlertMessage('SUCCESS', 'Successfully! remove menu parmanent.', 'success');
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

export const restoreMenu = id => {
	return (dispatch) => {
		Meteor.call('restoreMenus', id, (error, data) => {
      if(!error){
      	dispatch({
					type: 'SUCCESS',
					data,
				});
				AlertMessage('SUCCESS', 'Successfully! restore menu.', 'success');
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