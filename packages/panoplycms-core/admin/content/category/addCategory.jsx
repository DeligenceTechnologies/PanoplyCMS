import React, { Component } from 'react';
import { render } from 'react-dom';

import Heading from '../../common/heading.jsx';
// import { AlertMessage } from '../../common/alertMessage.jsx';

import store from '../../store/store.js';
import { insertCategory } from '../../actions/category_action.js';

let addCategoryHandler = function() {
  let onClick = function(obj) {
    store.dispatch(insertCategory(obj))
  };
  return {
    onClick
  };
};

export default class AddCategory extends Component {
  constructor(props) {
    super(props);

    this.handler = addCategoryHandler();
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
    /*Meteor.call('add_category', categoryObj, (err,data)=>{
      if(err){
        AlertMessage('ERROR', 'Internal server error or duplicate categories can not insert.', 'error');
      }else{
        AlertMessage('SUCCESS', 'Successfully! added category.', 'success');
        $('#title').val('')
      }
    });*/
    this.handler.onClick(categoryObj);
    $('#title').val('');
    $('#number').val('');
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
        <Heading data={i18n('ADMIN_COTNENTS_CATEGORY_ADDCATEGORY')} url={url}/>
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
               <label className="col-sm-2 control-label">{i18n('ADMIN_COTNENTS_CATEGORY_ADDCATEGORY_FORM_CATEGORYNAME')}</label>
                <div className="col-sm-7">
                 <input type = "text" id="title" className="form-control" placeholder = "Enter title" required />
                </div>
             </div>
              <div className="form-group">
               <label className="col-sm-2 control-label">{i18n('ADMIN_COTNENTS_CATEGORY_ADDCATEGORY_FORM_ARTICLE_NUMBER')}</label>
                <div className="col-sm-7">
                 <input type = "number" id="number" min={1} max={12} className="form-control" placeholder = "Enter number" required />
                </div>
             </div>
          </div>
        </form>
      </div>
    )
  }
}