import { AlertMessage } from '../common/alertMessage.jsx';

export const insertCategory = params => {
	return dispatch => {
		Meteor.call('add_category', params, (error, data)=>{
      if(!error){
      	dispatch({
					type: 'SUCCESS',
					data,
				});
				AlertMessage('SUCCESS', 'Successfully! added category.', 'success');
      }else{
      	dispatch({
					type: 'ERROR',
					error,
				});
				AlertMessage('ERROR', 'Internal server error or duplicate categories can not insert.', 'error');
      }
    });
	};
};

export const editCategory = (id, params) => {
	return dispatch => {
		Meteor.call('update_category', id, params, (error, data)=>{
      if(!error){
      	dispatch({
					type: 'SUCCESS',
					data,
				});
				AlertMessage('SUCCESS', 'Successfully! updated category.', 'success');
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

export const removeCategory = id => {
	return (dispatch) => {
		Meteor.call('delete_category', id,  (error, data)=>{
      if(!error){
      	dispatch({
					type: 'SUCCESS',
					data,
				});
				AlertMessage('SUCCESS', 'Successfully! remove category.', 'success');
      }else{
      	dispatch({
					type: 'ERROR',
					error,
				});
				AlertMessage('ERROR', 'Internal server error or duplicate categories can not insert.', 'error');
      }
    });
	};
};

export const removeCategoryParamanent = id => {
	return (dispatch) => {
		Meteor.call('delete_category_parma', id,  (error, data)=>{
      if(!error){
      	dispatch({
					type: 'SUCCESS',
					data,
				});
				AlertMessage('SUCCESS', 'Successfully! remove category parmanent.', 'success');
      }else{
      	dispatch({
					type: 'ERROR',
					error,
				});
				AlertMessage('ERROR', 'Internal server error or duplicate categories can not insert.', 'error');
      }
    });
	};
};

export const restoreCategory = id => {
	return (dispatch) => {
		Meteor.call('restore_category', id,  (error, data)=>{
      if(!error){
      	dispatch({
					type: 'SUCCESS',
					data,
				});
				console.log("success")
				AlertMessage('SUCCESS', 'Successfully! restore category.', 'success');
      }else{
      	dispatch({
					type: 'ERROR',
					error,
				});
				AlertMessage('ERROR', 'Internal server error or duplicate categories can not insert.', 'error');
      }
    });
	};
};