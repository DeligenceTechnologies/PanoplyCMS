/*=======================================================
  this component is used display modal for delete or 
  delete parmanenlty
========================================================*/

import('react').then(({Component})=>{
  import { AlertMessage } from '../../common/alertMessage.jsx';
  class ModalOfCat extends Component {
    deleteCategory(){
      if(this.props.stateVal){
        Meteor.call('delete_category_parma',this.props.data._id,(err,data)=>{
          if(err){
              AlertMessage('ERROR', i18n('ADMIN_CONTENTS_CATEGORY_REMOVE_PARMA_ERROR_MESSAGE'), 'error');
            }else{
              AlertMessage('SUCCESS', i18n('ADMIN_CONTENTS_CATEGORY_REMOVE_PARMA_SUCCESS_MESSAGE'), 'success');
            }
        });
      }else{
        let isExistArticle = _.findWhere(this.props.resultOfArticles, {category: this.props.data._id}) || []
        isExistArticle=_.isEmpty(isExistArticle);
        if(isExistArticle){
          Meteor.call('delete_category', this.props.data._id,(err,data)=>{
            if(err){
              AlertMessage('ERROR', i18n('ADMIN_CONTENTS_CATEGORY_REMOVE_PARMA_ERROR_MESSAGE'), 'error');
            }else{
              AlertMessage('SUCCESS', i18n('ADMIN_CONTENTS_CATEGORY_REMOVE_PARMA_SUCCESS_MESSAGE'), 'success');
            }
          });
        }else{
         $('#articlExist.modal').modal()
        }
      }
    }
    render(){
      return(
        <div id={this.props.data._id} className="modal fade add-popup" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header centered">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">
                {
                  this.props.stateVal ?
                    i18n('ADMIN_CONTENTS_CATEGORY_MODAL_DELETE_PARMANENTLY')
                  : 
                    i18n('ADMIN_CONTENTS_CATEGORY_MODAL_DELETE')
                }
                </h4>
              </div>
              <div className="modal-footer centered">
                <button type="button" className="btn custom-default-btn" onClick={this.deleteCategory.bind(this)} data-dismiss="modal">YES</button>
                <button type="button" className="btn custom-default-btn" data-dismiss="modal">NO</button>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
  export default  ModalOfCat;
});