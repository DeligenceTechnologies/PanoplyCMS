export const addMenu = params => {
	return dispatch => {
		Meteor.call("insertMenu", params, (error) => {
      if(!error) return;
      dispatch({
				type: 'ADD_ERROR',
				error,
			});
    });
	};
};

export const editMenu = (id, params) => {
	return dispatch => {
		Meteor.call("updateMenu", id, params, (error) => {
      if(!error) return;
      dispatch({
				type: 'ADD_ERROR',
				error,
			});
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
		Meteor.call('deleteMenuParmanent', this.props.data._id);
	};
};

export const restoreMenu = id => {
	return () => {
		Meteor.call('restoreMenus', id);
	};
};