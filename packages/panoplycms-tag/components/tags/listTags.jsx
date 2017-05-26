import React, { Component } from 'react';
import { render } from 'react-dom';

import NotFound from '../common/notFound.jsx';

// import store from '../store/store.js';
import { removeTag } from '../actions/tag_action.js';

var createReactClass = require('create-react-class');

let removeTagHandler = function() {
  let onClick = function(id) {
    store.dispatch(removeTag(id))
  };
  return {
    onClick
  };
};

ListTags = createReactClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
    Tracker.autorun(()=> {
      Meteor.subscribe('tagsLimit', this.props.dict.get('limit'))
    });
    return{
      tagsData: PanoplyCMSCollections.Tags.find({}, {limit: this.props.dict.get('limit')}).fetch(),
      tagCount: PanoplyCMSCollections.Tags.find({}).count()
    }
  },
  componentDidMount(){
    this.props.dict.set('limit', Meteor.settings.public.limit)
  },
  loadMore(event){
    event.preventDefault();
    this.props.dict.set('limit', this.props.dict.get('limit')+10)
  },
  render() {
    let nodata = '';
    if(this.data.tagsData.length == 0 ){
      nodata = <NotFound />
    }else{
      nodata = '';
    }
    return (
      <div>
        <div className="page-header">
          <h3 className="sub-header">Tags</h3>
        </div>
        <div className="custom-table">
          <div className="row">
            <div className="col-sm-12">
              <div className="controls-header form-inline">
                <a href={FlowRouter.path('addTag')} className="btn custom-default-btn">
                  <i className="fa fa-plus-circle fa-lg"></i>&nbsp;Add Tag
                </a>
              </div>
            </div>
          </div>
          <div className="panel panel-default panel-table">
            <div className="panel-body">
              <div className="table-responsive" id="non-editable">
                {
                  nodata == '' ?
                    <table className="table table-striped table-bordered table-list table-hover">
                      <thead>
                        <tr>
                          <th>{i18n('ADMIN_COMPONENTS_TAGS_ADDTAGS_FORM_TAGNAME')}</th>
                          <th>{i18n('ADMIN_COMPONENTS_TAGS_ADDTAGS_FORM_DESCRIPTION')}</th>
                          <th>{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_ACTIONS')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.data.tagsData.map((tag)=>{
                            return <TagsItem key={tag._id} data={tag} />
                          })
                        }
                      </tbody>
                    </table>
                  : ''
                }
              </div>
              { nodata }
              <div className="col-md-3 col-md-offset-5">
                {
                  this.props.dict.get('limit') < this.data.tagCount ?
                    <button className="btn custom-default-btn" id="load-more" onClick={this.loadMore}>Load more</button>
                  : ''
                }
              </div>
            </div>
          </div>
          {
            this.data.tagsData.map((tag)=>{
              return <TagsModal key={tag._id} data={tag} />
            })
          }
        </div>
      </div>
    );
  }
});

var TagsItem = React.createClass({
  /*editTag(){
    Meteor.call('editTag', this.props.data._id,(err,data)=>{
      // console.log(err,data)
    });
  },*/
  render(){
    return(
      <tr>
        <td>
          <large>{this.props.data.title}</large>
          <small>(<em>Alias:&nbsp;{this.props.data.alias}</em>)</small>
        </td>
        <td>{this.props.data.desc.length > 50?this.props.data.desc.substring(0,40)+'...':this.props.data.desc}</td>
        <td>
          <a className="btn btn-default" href={FlowRouter.path('editTag',{_id:this.props.data._id})}>
            <i className="fa fa-pencil-square-o" data-toggle="tooltip" title="Edit"></i>
          </a>&nbsp;&nbsp;
          <div onClick={this.deleteTag} className="btn btn-danger" data-toggle="modal" data-target={"#"+this.props.data._id}>
            <i className="fa fa-trash-o" data-toggle="tooltip" title="Delete"></i> 
          </div>
        </td>
      </tr>    
    )
  }
})
 
TagsModal=React.createClass({
  componentDidMount(){
    this.handler = removeTagHandler();
  },
  deleteTag(){
    /*Meteor.call('deleteTag',this.props.data._id,(err,data)=>{
      // console.log(err,data)
    });*/
    this.handler.onClick(this.props.data._id);
  },
  render:function(){
    return(
      <div id={this.props.data._id} className="modal fade add-popup" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header centered">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Do you really want to delete ?</h4>
            </div>
            <div className="modal-footer centered">
              <button type="button" className="btn custom-default-btn" onClick={this.deleteTag}data-dismiss="modal">YES</button>
              <button type="button" className="btn custom-default-btn" data-dismiss="modal">NO</button>
            </div>
          </div>
        </div>
      </div>
    )     
  }
})

export default ListTags;