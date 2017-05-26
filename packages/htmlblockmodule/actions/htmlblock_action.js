import { AlertMessage } from '../common/alertMessage.jsx';

export const insertHtmlModule = params => {
  return dispatch => {
    Meteor.call('addModule', params, (error, data)=>{
      if(!error){
        dispatch({
          type: 'SUCCESS',
          data,
        });
        AlertMessage('SUCCESS', 'Successfully! added htmlblock.', 'success');
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

export const updateHtmlModule = (id, params) => {
  return dispatch => {
    Meteor.call('editModule', id, params, (error, data)=>{
      if(!error){
        dispatch({
          type: 'SUCCESS',
          data,
        });
        AlertMessage('SUCCESS', 'Successfully! updated htmlblock.', 'success');
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