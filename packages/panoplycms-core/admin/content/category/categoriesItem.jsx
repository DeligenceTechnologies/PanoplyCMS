import React, { Component } from 'react';
import { render } from 'react-dom';

// import { editCategory } from '../../actions/category_action.js';
// import { removeCategory } from '../../actions/category_action.js';

export default class CategoriesItem extends Component {
  /*deleteCategory(){
    Meteor.call('delete_category',this.props.data._id,function(err,data){
      // console.log(err,data)
    });
  }
  editCategory(){
    Meteor.call('editCategory',this.props.data._id, (err,data)=>{
      // console.log(err,data)
    });
  }*/
  render(){
    return(
      <tr>
        <td>
          <a href={FlowRouter.path('editCategory',{_id:this.props.data._id})}>
            <large> 
              {this.props.data.title}
            </large>
          </a>
          <small> 
            &nbsp;(<em>Alias:&nbsp;{this.props.data.alias}</em>)
          </small> 
        </td>
        <td>
            {
              this.props.stateVal ? 
                <div className="btn btn-default" data-toggle="modal" data-target={'#'+this.props.data._id+'restoreCategory'} aria-hidden="true" onClick={this.restoreArticle} title="Restore">
                  <i  className="fa fa-undo" ></i>
                </div>
              : 
                <a href={FlowRouter.path('editCategory',{_id:this.props.data._id})} className="btn btn-default" data-toggle="tooltip" title="Edit">
                  <i className="fa fa-pencil-square-o"  ></i>
                </a> 
          }
             &nbsp;&nbsp;
          <div className="btn btn-danger" data-toggle="modal" data-target={"#"+this.props.data._id}>
            {
              this.props.stateVal ? 
                <i title="Delete" className="fa fa-times" aria-hidden="true"></i> 
              : 
                <i className="fa fa-trash-o" title="Trash"></i>
            }
          </div>
         
         
        </td>
      </tr>
    )
  }
}