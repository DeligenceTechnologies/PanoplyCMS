import { AlertMessage } from '../common/alertMessage.jsx';

export const insertSliderModule = params => {
  return dispatch => {
    Meteor.call('addModule', params, (error, data)=>{
      if(!error){
        dispatch({
          type: 'SUCCESS',
          data,
        });
        AlertMessage('SUCCESS', 'Successfully! added slider module.', 'success');
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

export const updateSliderModule = (id, params) => {
  return dispatch => {
    Meteor.call('editModule', id, params, (error, data)=>{
      if(!error){
        dispatch({
          type: 'SUCCESS',
          data,
        });
        AlertMessage('SUCCESS', 'Successfully! updated slider module.', 'success');
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