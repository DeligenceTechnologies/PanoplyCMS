import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import NotFoundComp from '../../common/notFoundComp.jsx';
import Heading from '../../common/heading.jsx';
import MenuItemsDataList from './menuItemsDataList.jsx';
import LoadingSpinner from '../../common/loadingSpinner.jsx';

class ListMenuItems extends Component {
  constructor(props) {
    super(props);

    // Session.setDefault("trashListShow", false)
 
    this.state = {
      trashListShow: false,
    };
    this.props.dict.set('limit', Meteor.settings.public.limit);
    this.props.dict.set('trashListShow', false);
  }
  listOfMenu() {
    let elements = this.props.MenuItemsData;
    let trashListShow = this.props.dict.get('trashListShow')
    let menu = new Array();
    let element = new Array();
    let level=0;
    elements.forEach(function(elem1) {
      if(elem1.parentId=='' || elem1.trash==true){
        element.push({ _id: elem1._id, title: elem1.title, alias: elem1.alias, desc:elem1.desc, level:level });
        let child = getChild(elem1._id,level+1);
      }else if(elem1.parentId==''){
        element.push({ _id: elem1._id, title: elem1.title, alias: elem1.alias, desc:elem1.desc, level:level });
        let child = getChild(elem1._id,level+1);
      }
    });
    function getChild(parent_id, level){
      elements.forEach(function (elem2) {
        if(elem2.parentId){
          if(parent_id== elem2.parentId){
            if(elem2.trash==true){
              element.push({ _id: elem2._id, title: elem2.title, alias: elem2.alias, desc:elem2.desc, child: getChild(elem2._id,level+1), level:level });
            }else {
              element.push({ _id: elem2._id, title: elem2.title, alias: elem2.alias, desc:elem2.desc, level:level });
              getChild(elem2._id,level+1)
            }
          }
        }
      });
      if(trashListShow){
        return element;
      }else{
        return _.sortBy(element,'level');
      }
    }
    return element;
  }
  showArticles(){
    if($('#display').val() == 'trash'){
      // Session.set("trashListShow", true);
      this.props.dict.set('trashListShow', true)
      this.setState({trashListShow: true})
    }else{
      // Session.set("trashListShow", false);
      this.props.dict.set('trashListShow', false)
      this.setState({trashListShow: false})
    }
    this.props.dict.set('limit', Meteor.settings.public.limit)
  }
  showMenu(){
    this.props.dict.set('limit', Meteor.settings.public.limit);
    Session.set('MenuId',$('#mainMenu').val());
    FlowRouter.go('listMenuItems',{_id: $('#mainMenu').val()})
  }
  storeMenuid(event){
    event.preventDefault();
    FlowRouter.go(''+'\addMenuItem',{_id: FlowRouter.getParam("_id")})
  }
  loadMore(event){
    event.preventDefault();
    this.props.dict.set('limit', this.props.dict.get('limit')+10)
  }
  render() {
    let m = this.listOfMenu();
    let nodata = '';
    if(m.length == 0  && this.state.trashListShow == false){
      nodata = <NotFoundComp />;
    }else if(m.length == 0 && this.state.trashListShow == true){
      nodata = <NotFoundComp />;
    }else{
      nodata = '';
    }

    if (this.props.pageLoading) {
      <LoadingSpinner />
    }
    let url=[{
        title:"Dashboard",
        url:"/admin/dashboard",
        active:false
      },{
        title: 'Menus',
        url: "/admin/menus",
        active:false
      },{
        title:i18n('ADMIN_MENU_MENUITEMS'),
        url:"/admin/menus/"+FlowRouter.getParam('_id')+"/MenuItems",
        active:true
      }];
    return (
      <div>
        <Heading key={this.props.pageLoading} data={i18n('ADMIN_MENU_MENUITEMS')} url={url} />
        <div className="custom-table">
          <div className="row">
            <div className="col-sm-12">
              <div className="controls-header form-inline"> 
                <div className="row">                  
                  <a className="btn custom-default-btn" onClick={this.storeMenuid.bind(this)}><i className="fa fa-plus-circle fa-lg"></i>&nbsp;
                    {i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM')}
                  </a>                
                  <div className="dataTables_length dataTables_wrapper pull-right">
                    <label>
                      Menus
                      <select id="mainMenu" className="form-control input-sm" onChange={this.showMenu.bind(this)} defaultValue={FlowRouter.getParam("_id")}>
                        {
                          this.props.Menus.map((result) => {
                            return <option key={result._id} value={result._id}>{result.title}</option>;
                          })
                        }
                      </select>
                    </label>
                    <label> Display
                      <select id="display" className="form-control input-sm" onChange={this.showArticles.bind(this)}>
                        <option value="all">Active</option>
                        <option value="trash">Trash</option>
                      </select>
                    </label>
                  </div>                 
                </div>
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
                          <th>{i18n('ADMIN_MENU_ADDMENU_FORM_TITLE')}</th>
                          <th>{i18n('ADMIN_MENU_ADDMENU_FORM_DESCRIPTION')}</th>
                          <th>{/*i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM_DEFAULT')*/}</th>
                          <th>{i18n('ADMIN_MENU_ADDMENU_FORM_ACTION')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          m.map((menu) => {
                            return <MenuItemsDataList key={menu._id} dict={this.props.dict} data={menu} homepage={this.props.defaultMenuItem? this.props.defaultMenuItem._id: ""} />
                          })
                        }
                      </tbody>
                    </table>
                  : ''
                }
                { nodata }
              </div>
                <div className="panel-footer">
                  <div className="row">
                    <div className="col col-xs-4">
                    </div>
                    <div className="col col-xs-8">
                      {
                        this.props.dict.get('limit') < this.props.menuItemsCount ?
                          <button className="btn custom-default-btn" id="load-more" onClick={this.loadMore.bind(this)}>Load more</button>
                        : ''
                      }
                    </div>
                  </div>
                </div>
              
            </div>
          </div>
        </div>
        <DefaultItemParentPopup />
      </div>
    );
  }
}

export default createContainer((props) => {
  Tracker.autorun(()=> {
    let handle1 = Meteor.subscribe('menuItems', FlowRouter.getParam("_id"), props.dict.get("trashListShow"), props.dict.get('limit'));
    let handle2 = Meteor.subscribe('menus');
    ready = handle1.ready() && handle2.ready();
  });
  //let DefaultItem=Meteor.subscribe('defaultMenuItem');
  return {
    pageLoading: ! ready,
    MenuItemsData: PanoplyCMSCollections.MenuItems.find({ mainParentId: FlowRouter.getParam("_id"), trash: props.dict.get("trashListShow")},{limit:props.dict.get('limit')}).fetch(),
    menuItemsCount: PanoplyCMSCollections.MenuItems.find({ mainParentId: FlowRouter.getParam("_id"), trash: props.dict.get("trashListShow")}).count(),
    results: PanoplyCMSCollections.MenuItems.find().fetch(),
    Menus: PanoplyCMSCollections.Menus.find({ trash:false }).fetch(),
    defaultMenuItem: PanoplyCMSCollections.MenuItems.findOne({ homepage:true }),
  }
}, ListMenuItems)


DefaultItemParentPopup = (m) => {
  return(
    <div id="defaultItemParentPopup" className="modal fade" role="dialog">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body">
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            <h4 className="modal-title">You can not delete default menu Items parent. Please change the default menu Item first after you can delete this menu Item.</h4>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-dismiss="modal">Ok</button>
          </div>
        </div>
      </div>
    </div>
  )
}