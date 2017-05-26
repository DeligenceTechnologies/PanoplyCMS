import { AlertMessage } from '../common/alertMessage.jsx';

export const addMenuItem = params => {
  return dispatch => {
    Meteor.call("insertMenuItem", params, (error, data)=>{
      if(!error){
        dispatch({
          type: 'SUCCESS',
          data,
        });
        AlertMessage('SUCCESS', 'Successfully! added menu item.', 'success');
      }else{
        dispatch({
          type: 'ERROR',
          error,
        });
        AlertMessage('ERROR', error.reason, 'error');
      }
    });
  };
};

export const editMenuItem = (id, params) => {
  return dispatch => {
    Meteor.call("updateMenuItem", id, params, (error, data)=>{
      if(!error){
        dispatch({
          type: 'SUCCESS',
          data,
        });
        AlertMessage('SUCCESS', 'Successfully! updated menu item.', 'success');
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

export const removeMenuItem = (id, homepage) => {
  return () => {
    Meteor.call('deleteMenuItem', id, homepage, (err, data)=>{
      if(data){
        if(data == "Its the parent of default")
          $('#defaultItemParentPopup.modal').modal()
      }else{}
    });
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