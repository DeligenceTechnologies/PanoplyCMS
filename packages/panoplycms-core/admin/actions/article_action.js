export const insertArticle = params => {
	return dispatch => {
		Meteor.call('addArticles', params, (error) => {
			if(!error) return;
			dispatch({
				type: 'ADD_ERROR',
				error,
			});
		});
	};
};

export const updateArticle = (id, params) => {
	return dispatch => {
		Meteor.call('editArticle', id, params, (error) => {
			if(!error) return;
			dispatch({
				type: 'ADD_ERROR',
				error,
			});
		});
	}
}

export const removeArticleParamanent = id => {
	return () => {
		Meteor.call('deleteArticleParma', id);
	};
};

export const removeArticle = id => {
	return () => {
		Meteor.call('deleteArticle', id);
	}
}

export const restoreArticle = id => {
	return () => {
		Meteor.call('restoreArticles', id);
	}
}