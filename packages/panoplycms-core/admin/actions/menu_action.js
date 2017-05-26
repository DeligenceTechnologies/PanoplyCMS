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
	return () => {
		Meteor.call('deleteMenus', id);
	};
};

export const removeMenuParamanent = id => {
	return () => {
		Meteor.call('deleteMenuParmanent', id);
	};
};

export const restoreMenu = id => {
	return () => {
		Meteor.call('restoreMenus', id);
	};
};