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
  return (dispatch) => {
    Meteor.call('deleteMenuItem', id, homepage, (err, data)=>{
      if(data){
        if(data == "Its the parent of default"){
          $('#defaultItemParentPopup.modal').modal()
        }
        else{
          dispatch({
            type: 'SUCCESS',
            data,
          });
          AlertMessage('SUCCESS', 'Successfully! remove menu item.', 'success');
        }
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

export const removeMItem = (id) => {
  return (dispatch) => {
    Meteor.call('deleteMenu', id, (error, data)=>{
      if(!error){
        dispatch({
          type: 'SUCCESS',
          data,
        });
        AlertMessage('SUCCESS', 'Successfully! remove menu item.', 'success');
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

export const editDefaultMenuItem = (id, homepage) => {
  return (dispatch) => {
    Meteor.call("updateDefaultMenuItem", id, homepage, (error, data)=>{
      if(!error){
        dispatch({
          type: 'SUCCESS',
          data,
        });
        AlertMessage('SUCCESS', 'Successfully! update menu item.', 'success');
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

export const restoreMenuItem = (id) => {
  return (dispatch) => {
    Meteor.call('restoreMenuItem', id, (error, data)=>{
      if(!error){
        dispatch({
          type: 'SUCCESS',
          data,
        });
        AlertMessage('SUCCESS', 'Successfully! restore menu item.', 'success');
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