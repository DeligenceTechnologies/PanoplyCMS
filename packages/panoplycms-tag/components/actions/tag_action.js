import { AlertMessage } from '../common/alertMessage.jsx';

export const insertTag = params => {
  return dispatch => {
    Meteor.call('addTag', params, (error, data)=>{
      if(!error){
        dispatch({
          type: 'SUCCESS',
          data,
        });
        AlertMessage('SUCCESS', 'Successfully! added tag.', 'success');
      }else{
        dispatch({
          type: 'ERROR',
          error,
        });
        AlertMessage('ERROR', 'Internal server error or duplicatie tag can not insert.', 'error');
      }
    });
  };
};

export const updateTag = (id, params) => {
  return dispatch => {
    Meteor.call('editTag', id, params, (error, data)=>{
      if(!error){
        dispatch({
          type: 'SUCCESS',
          data,
        });
        AlertMessage('SUCCESS', 'Successfully! updated tag.', 'success');
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

export const removeTag = id => {
  return () => {
    Meteor.call('deleteTag', id);
  };
};