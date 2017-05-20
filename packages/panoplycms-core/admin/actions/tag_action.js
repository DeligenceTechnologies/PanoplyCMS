export const insertTag = params => {
  return dispatch => {
    Meteor.call('addTag', params, (error)=>{
      if(!error) return;
      dispatch({
        type: 'ADD_ERROR',
        error,
      });
    });
  };
};

export const updateTag = (id, params) => {
  return dispatch => {
    Meteor.call('editTag', id, params, (error)=>{
      if(!error) return;
      dispatch({
        type: 'ADD_ERROR',
        error,
      });
    });
  }
}

export const removeTag = id => {
  return () => {
    Meteor.call('deleteTag', id);
  };
};