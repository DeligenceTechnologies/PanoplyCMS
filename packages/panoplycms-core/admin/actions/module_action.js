export const insertModule = params => {
  return dispatch => {
    Meteor.call('addModule', params, (error, data)=>{
      if(!error){
        dispatch({
          type: 'SUCCESS',
          data,
        });
      }else{
        dispatch({
          type: 'ERROR',
          error,
        });
      }
    });
  };
};

export const updateModule = (id, params) => {
  return dispatch => {
    Meteor.call('editModule', id, params, (error, data)=>{
      if(!error){
        dispatch({
          type: 'SUCCESS',
          data,
        });
      }else{
        dispatch({
          type: 'ERROR',
          error,
        });
      }
    });
  }
}

export const deleteModule = id => {
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