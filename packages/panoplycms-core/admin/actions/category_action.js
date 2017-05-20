export const insertCategory = params => {
	return dispatch => {
		Meteor.call('add_category', params, (error)=>{
      if(!error) return;
			dispatch({
				type: 'ADD_ERROR',
				error,
			});
    });
	};
};

export const editCategory = (id, params) => {
	return dispatch => {
		Meteor.call('update_category', id, params, (error)=>{
      if(!error) return;
			dispatch({
				type: 'ADD_ERROR',
				error,
			});
    });
	}
}

export const removeCategory = id => {
	return () => {
		Meteor.call('delete_category', id);
	};
};

export const removeCategoryParamanent = id => {
	return () => {
		Meteor.call('delete_category_parma', id);
	};
};

export const restoreCategory = id => {
	return () => {
		Meteor.call('restore_category', id);
	};
};