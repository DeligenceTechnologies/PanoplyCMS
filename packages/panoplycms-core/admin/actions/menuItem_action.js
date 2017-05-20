export const addMenuItem = params => {
  return dispatch => {
    Meteor.call("insertMenuItem", params, (error)=>{
      if(!error) return;
      dispatch({
        type: 'ADD_ERROR',
        error,
      });
    });
  };
};

export const editMenuItem = (id, params) => {
  return dispatch => {
    Meteor.call("updateMenuItem", id, params, (error)=>{
      if(!error) return;
      dispatch({
        type: 'ADD_ERROR',
        error,
      });
    });
  }
}

export const removeMenuItem = (id, homepage) => {
  return () => {
    Meteor.call('deleteMenuItem', id, homepage);
  };
};

export const removeMItem = (id) => {
  return () => {
    Meteor.call('deleteMenu', id);
  };
};

export const editDefaultMenuItem = (id, homepage) => {
  return () => {
    Meteor.call("updateDefaultMenuItem", id, homepage);
  };
};

export const restoreMenuItem = (id) => {
  return () => {
    Meteor.call('restoreMenuItem', id);
  };
};