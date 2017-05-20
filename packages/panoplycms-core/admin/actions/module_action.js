export const insertModule = params => {
  return dispatch => {
    Meteor.call('addModule', params, (error)=>{
      if(!error) return;
      dispatch({
        type: 'ADD_ERROR',
        error,
      });
    });
  };
};

export const updateModule = (id, params) => {
  return dispatch => {
    Meteor.call('editModule', id, params, (error)=>{
      if(!error) return;
      dispatch({
        type: 'ADD_ERROR',
        error,
      });
    });
  }
}

export const removeModule = id => {
  return () => {
    Meteor.call('deleteModule', id)
  };
};

export const trashModule = id => {
  return () => {
    Meteor.call('trashModule', id)
  };
};

export const restoreModule = id => {
  return () => {
    Meteor.call('restoreModule', id)
  };
};