export const editUser = params => {
	return dispatch => {
		Meteor.call('updateUser', params, (error)=>{
			if(!error) return;
			dispatch({
				type: 'ADD_ERROR',
				error,
			});
		})
	}
}