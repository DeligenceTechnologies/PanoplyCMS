/*==========================================================
  this component is used for add category
==========================================================*/


import('react').then(({Component})=>{
  import Heading from '../../common/heading.jsx';
  import { AlertMessage } from '../../common/alertMessage.jsx';
  class AddCategory extends Component {
    constructor(props) {
      super(props);

    }
    /*handleChange(event) {
      this.props.onUpdate(event.target.id,event.target.value);
    }*/
    submitData(event){
      event.preventDefault();
      let titleData = $('#title').val()
      let aliasData = generateAlias(titleData)
      let categoryObj = {
        title: titleData,
        alias: aliasData,
        column: $('#number').val()
      }
      Meteor.call('add_category', categoryObj, (err,data)=>{
        if(err){
          AlertMessage('ERROR', i18n('ADMIN_CONTENTS_CATEGORY_ERROR_MESSAGE'), 'error');
        }else{
          AlertMessage('SUCCESS', i18n('ADMIN_CONTENTS_CATEGORY_SUCCESS_MESSAGE'), 'success');
          $('#title').val('')
        }
      });
      $('#title, #number').val('');
    }
    render(){
      let url=[{
        title:"Dashboard",
        url:"/admin/dashboard",
        active:false
      },{
        title:"Categories",
        url:"/admin/categories",
        active:false
      },{
        title:"Add Category",
        url:"/admin/categories/add",
        active:true
      }];
      return(
        <div>
          <Heading data={i18n('ADMIN_CONTENTS_CATEGORY_ADDCATEGORY')} url={url}/>
          <form className = "form-horizontal" role = "form" onSubmit={this.submitData.bind(this)}>
            <div className="controls-header">
              <div className="form-group">
              <div className="col-sm-12">
                <input type = "submit" className="btn custom-default-btn" value='SAVE' />
                &nbsp;&nbsp;
                <a href={FlowRouter.path('listCategories')} className="btn custom-default-btn">CANCEL</a>
              </div>
               </div>
            </div>
            <div className="panel-body custom-panel">
              <div className="form-group">
                 <label className="col-sm-2 control-label">{i18n('ADMIN_CONTENTS_CATEGORY_ADDCATEGORY_FORM_CATEGORYNAME')}</label>
                  <div className="col-sm-7">
                   <input type = "text" id="title" className="form-control" placeholder = {i18n('ADMIN_CONTENTS_CATEGORY_PLACEHOLDER_EDIT_TITLE')} required />
                  </div>
               </div>
                <div className="form-group">
                 <label className="col-sm-2 control-label">{i18n('ADMIN_CONTENTS_CATEGORY_ADDCATEGORY_FORM_ARTICLE_NUMBER')}</label>
                  <div className="col-sm-7">
                   <input type = "number" id="number" min={1} max={12} className="form-control" placeholder = {i18n('ADMIN_CONTENTS_CATEGORY_PLACEHOLDER_EDIT_NUMBER')} required />
                  </div>
               </div>
            </div>
          </form>
        </div>
      )
    }
  }
  export default  AddCategory;
});