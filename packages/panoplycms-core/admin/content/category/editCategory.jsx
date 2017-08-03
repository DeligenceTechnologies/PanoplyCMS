/*==========================================================
  this component is used for edit category
==========================================================*/


import('react').then(({Component})=>{
  import Heading from '../../common/heading.jsx';
  import LoadingSpinner from '../../common/loadingSpinner.jsx';
  import { AlertMessage } from '../../common/alertMessage.jsx';
  class EditCategory extends Component {
    constructor(props) {
      super(props);
    }
    submitData(event){
      event.preventDefault();
      let title = $('#title').val();
      let alias = generateAlias(title);
      let categoryObj = {
        title: title,
        alias: alias,
        column: $('#number').val()
      }
      Meteor.call('update_category', this.props._id, categoryObj,(err,data)=>{
        if(err)
          AlertMessage('ERROR', i18n('ADMIN_CONTENTS_CATEGORY_ERROR_MESSAGE'), 'error');
        else{
          AlertMessage('SUCCESS', i18n('ADMIN_CONTENTS_CATEGORY_SUCCESSS_MESSAGE'), 'success');
        }
      });
    }
    render() {
      let url=[{
        title:"Dashboard",
        url:"/admin/dashboard",
        active:false
      },{
        title:"Categories",
        url:"/admin/categories",
        active:false
      },{
        title:"edit Category",
        url:"/admin/categories/edit/"+this.props._id,
        active:true
      }];
      return (
          <div>
            <Heading key={this.props.pageLoading} data= {i18n('ADMIN_CONTENTS_CATEGORY_EDITCATEGORY')} url={url}/>
            <form className = "form-horizontal" role = "form" onSubmit={this.submitData.bind(this)}>
             <div className="controls-header">
                <div className="form-group">
                  <div className="col-sm-12">
                    <input type = "submit" className="btn custom-default-btn" value='UPDATE' />
                    <a href={FlowRouter.path('listCategories')} className="btn custom-default-btn">CANCEL</a>
                  </div>
                 </div>
              </div>
             <div className="panel-body custom-panel">
               <div className="form-group">
                <label className="col-sm-2 control-label">{i18n('ADMIN_CONTENTS_CATEGORY_ADDCATEGORY_FORM_CATEGORYNAME')}</label>
                <div className="col-sm-7">
                  <input key={this.props.pageLoading} type = "text" id="title" className="form-control" defaultValue={this.props.categoryData && this.props.categoryData.title?this.props.categoryData.title:''} placeholder = "Enter title" required />
                </div>
                </div>
                <div className="form-group">
                 <label className="col-sm-2 control-label">{i18n('ADMIN_CONTENTS_CATEGORY_ADDCATEGORY_FORM_ARTICLE_NUMBER')}</label>
                  <div className="col-sm-7">
                   <input key={this.props.pageLoading} type = "number" id="number" min={1} max={12} className="form-control" placeholder = "Enter number" defaultValue={this.props.categoryData && this.props.categoryData.column?this.props.categoryData.column:1} required />
                  </div>
               </div>
              </div>

            </form>
          </div>
        )
      
    }
  }

  import('meteor/react-meteor-data').then(({createContainer})=>{
    export default createContainer((data)=>{
      let handle = Meteor.subscribe('Categories', data._id)
      return {
        pageLoading: !handle.ready(),
        categoryData: PanoplyCMSCollections.Categories.findOne({_id: data._id})
      };
    }, EditCategory);
  });
});