import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import Heading from '../common/heading.jsx';
import ModalMenu from './modalMenu.jsx';
import RestoreModalMenu from './restoreModalMenu.jsx';
import NotFoundComp from '../common/notFoundComp.jsx';


class ListMenus extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      trashListShow: false
    };
    this.props.dict.set('limit', Meteor.settings.public.limit)
  }
  showArticles(){
    if($('#display').val()=='trash'){
      this.setState({trashListShow:true})
    }else{
      this.setState({trashListShow:false})
    }
    if(Meteor.settings.public && Meteor.settings.public.limit)
      this.props.dict.set('limit', Meteor.settings.public.limit)
    else
      this.props.dict.set('limit',20)
  }
  loadMore(event){
    event.preventDefault();
    this.props.dict.set('limit', this.props.dict.get('limit')+10)
  }
  render() {
    let nodata = '';
    if(this.props.results.length == 0 && this.state.trashListShow == false){
      nodata = <NotFoundComp />;
    }else if(this.props.resultOfTrash.length == 0 && this.state.trashListShow == true){
      nodata = <NotFoundComp />
    }else{
      nodata = '';
    }
    let url=[{
      title:"Dashboard",
      url:"/admin/dashboard",
      active:false
    },{
      title:"Menus",
      url:"/admin/menus",
      active:true
    }]
    return (
      <div className="">
        <Heading data={i18n('ADMIN_MENU')} url={url}/>
        
        <div className="custom-table">
          <div className="row">
            <div className="col-sm-12">
              <div className="controls-header form-inline">
                <a className="btn custom-default-btn" href={FlowRouter.path('addMenu')} >
                  <i className="fa fa-plus-circle fa-lg"></i>&nbsp;{i18n('ADMIN_MENU_ADDMENU')}
                </a>
                <div className="dataTables_length dataTables_wrapper pull-right">
                  <label>
                    Display
                    <select id="display" className="form-control input-sm" onChange={this.showArticles.bind(this)}>
                      <option value="active">Active</option>
                      <option value="trash">Trash</option>
                    </select>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-default panel-table">
            <div className="panel-body">
              <div className="table-responsive" id="non-editable">
                {
                  nodata == '' ?
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>{i18n('ADMIN_MENU_ADDMENU_FORM_TITLE')}</th>
                          <th>{i18n('ADMIN_MENU_ADDMENU_FORM_DESCRIPTION')}</th>
                          <th>{i18n('ADMIN_MENU_ADDMENU_FORM_ACTION')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.state.trashListShow ?
                            this.props.resultOfTrash.map((result) => {
                              return <Trvalue key={result._id} data={result} stateVal={this.state.trashListShow} />;
                            })
                          :
                          this.props.results.map((result) => {
                            return <Trvalue key={result._id} data={result} stateVal={this.state.trashListShow} />;
                          })
                        }
                      </tbody>
                    </table>
                  : ''
                }
                { nodata }
              </div>
              <div className="col-md-3 col-md-offset-5">
                {
                  !this.state.trashListShow ?
                    this.props.dict.get('limit') < this.props.menuCount ?
                      <button className="btn custom-default-btn" id="load-more" onClick={this.loadMore.bind(this)}>Load more</button>
                    : ''
                  :this.props.dict.get('limit') < this.props.menuCountTrash ?
                    <button className="btn custom-default-btn" id="load-more" onClick={this.loadMore.bind(this)}>Load more</button>
                  : ''
                }
              </div>
            </div>
          </div>
          {
            this.props.results.map((result) => {
              return <ModalMenu key={result._id} data={result} stateVal={this.state.trashListShow} />
            })
          }
          {
            this.props.resultOfTrash.map((result) => {
              return <RestoreModalMenu key={result._id} data={result} />
            })
          }
          {
            this.props.resultOfTrash.map((result) => {
              return <ModalMenu key={result._id} data={result} stateVal={this.state.trashListShow} />
            })
          }
        </div>
      </div>
    );
  }
}

export default createContainer((props)=> {
  Tracker.autorun(()=> {
    Meteor.subscribe('menusLimit', props.dict.get('limit'));
    Meteor.subscribe('trashMenus', props.dict.get('limit'));
  });
  return {
    results: PanoplyCMSCollections.Menus.find({ trash:false }, {limit:props.dict.get('limit')}).fetch(),
    menuCount: PanoplyCMSCollections.Menus.find({ trash:false }).count(),
    menuCountTrash: PanoplyCMSCollections.Menus.find({ trash:true }).count(),
    resultOfTrash: PanoplyCMSCollections.Menus.find({ trash:true }, {limit:props.dict.get('limit')}).fetch()
  }
}, ListMenus)

class Trvalue extends Component {
  storeMenuid(event){
    event.preventDefault();
    Session.set('MenuId',this.props.data._id);
    FlowRouter.go('listMenuItems',{_id:this.props.data._id})
  }
  render() {
    let c = 0;
    return (
      <tr>
        <td id="edit_menu">
          <a onClick={this.storeMenuid.bind(this)}><large> {this.props.data.title} </large></a>
          <small> (<em>Alias:&nbsp;{this.props.data.alias}</em>) </small>
        </td>
        <td> {this.props.data.desc} </td>  
        <td>
          {
            this.props.stateVal ?
              <div className="btn btn-default" data-toggle="modal" data-target={'#'+this.props.data._id+'restoreArticle'} aria-hidden="true" onClick={this.restoreMenu} title="Restore">

                <i  className="fa fa-undo" ></i> 
              </div>
            : 
              <a href={FlowRouter.path('editMenu',{_id:this.props.data._id})} className="btn btn-default" data-toggle="tooltip" title="Edit">
                <i  className="fa fa-pencil-square-o"></i>
              </a> 
          }
          &nbsp;&nbsp;
          <div id="delete_article" className="btn btn-danger" data-toggle="modal" data-target={"#"+this.props.data._id} style={{display:'inline-block'}}>
           {
              this.props.stateVal ?
                <i title="Delete" className="fa fa-times" aria-hidden="true"></i> 
              : <i className="fa fa-trash-o" title="Trash"></i> 
            }
          </div>
        </td>
      </tr>
    )
  }
}