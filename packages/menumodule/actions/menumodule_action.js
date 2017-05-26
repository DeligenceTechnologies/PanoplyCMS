import { AlertMessage } from '../common/alertMessage.jsx';

export const insertMenuModule = params => {
  return dispatch => {
    Meteor.call('addModule', params, (error, data)=>{
      if(!error){
        dispatch({
          type: 'SUCCESS',
          data,
        });
        AlertMessage('SUCCESS', 'Successfully! added menu module.', 'success');
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

export const updateMenuModule = (id, params) => {
  return dispatch => {
    Meteor.call('editModule', id, params, (error, data)=>{
      if(!error){
        dispatch({
          type: 'SUCCESS',
          data,
        });
        AlertMessage('SUCCESS', 'Successfully! updated menu module.', 'success');
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