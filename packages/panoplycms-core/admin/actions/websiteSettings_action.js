export const updateWebsiteSettings = (id, params) => {
	return dispatch => {
		Meteor.call('updateSiteName', id, params, (error) => {
			if(!error) return;
			dispatch({
				type: 'ADD_ERROR',
				error,
			});
		});
	};
};