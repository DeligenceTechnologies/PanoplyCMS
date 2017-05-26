
import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import Heading from '../../common/heading.jsx';
// import AlertMessage from '../../common/alertMessage.jsx';
// import AlertMessageOfError from '../../common/alertMessageOfError.jsx';
import LoadingSpinner from '../../common/loadingSpinner.jsx';
import SelectMenu from './menuSelect.jsx';
import SelectArticle from './articleSelect.jsx';
import SelectCategory from './categorySelect.jsx';
import { AlertMessage } from '../../common/alertMessage.jsx';

import { editMenuItem } from '../../actions/menuItem_action.js';

class EditMenuItem extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      itemType:'',
      MenuItemTypeValue:'',
      language:i18n.getLanguage(),
      valid:'',
    };
  }
  selectMenuItemType(event){
    event.preventDefault();
    this.setState({ itemType: $('#select-menu-item-type').val() })
  }
  getMenuItemTypeValue(val){
    this.setState({ MenuItemTypeValue: val })    
  }
  getDropDown(){
    let menus = this.listOfMenu();
    level = 1;
    that=this;
    function getElem(submenu, alias){
      let list = '';
      let ar = [];
      let menuArr = [];

      if(submenu && alias){
        menuArr = submenu;
      } else {
        menuArr = menus;
      }

      menuArr.forEach(function(menu) {
        if(that.props.menuItemData._id != menu._id)  {
        list += '<option value="' + menu._id + '"'; 
         if(that.props.menuItemData.parentId == menu._id) list += 'selected';
        list += '>';
        if(submenu){
          level++;
        }
        for(let i=0; i<level;i++){
          list += '- ';
        }
        list += menu.title + '</option>';
        if(menu.child){
          list += getElem(menu.child, menu.alias);
        }
        if(!submenu) level=1;
        else level--;     
        }  
      });
      return list;
    }
     
    let list = getElem();
    return list;
  }
  listOfMenu(){    
    that=this
    let elements = this.props.MenuItemsData;
    
    let menu = new Array();

    function getElements(parent_id){
      if(parent_id){
        return getChild(parent_id);
      } else {
        let element = new Array();
        elements.forEach(function (elem1) {
          if(that.state.MenuValue==elem1.mainParentId){
            let child = getChild(elem1._id);
            if(elem1.parentId==''){
              element.push({ _id: elem1._id, title: elem1.title, alias: elem1.alias, child: child });
            }
          }
        });
        return element;
      }   
    }

    function getChild(parent_id){
      let child = new Array();
      elements.forEach(function (elem2) {
        if(elem2.parentId){
          if(parent_id== elem2.parentId){
            child.push({ _id: elem2._id, title: elem2.title, alias: elem2.alias, child: getElements(elem2._id) });
          }
        }
      });
      return child;
    }
    return getElements();
  }
  componentDidMount(){
    this.setState({ MenuValue: this.props.MenuValue1 })
    document.title = "Edit Menu"
  }
  getMenuValue(val){
    this.setState({ MenuValue: val })
  }
  submitData(event){
    event.preventDefault();
    let regex = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/
    let check = false;
    if(this.state.itemType){
      if(this.state.itemType == 'link'){
        check = true;
      }else{
        check = false;
      }
    }else if(this.props.menuItemData.MenuItemType == 'link'){
      check = true;
    }else{
      check = false;
    }
    if (check && !regex.test($('#link').val())) {
      AlertMessage('ERROR', 'Error in External Link', 'warning');
    }else{
      let menuItemObj = {
        "title": $('#title').val(),
        "desc": $('#desc').val(),
        "target":$('#selectTragetWindow').val(),
        "MenuItemType": $('#select-menu-item-type').val(),
        "mainParentId": this.state.MenuValue,
        "MenuItemTypeId": this.state.MenuItemTypeValue,
        "link": check?$('#link').val():'',
        "parentId": $('#selectParentMenu').val()
      }
      let paramId = this.props.menuItemData.mainParentId;
      Meteor.call("updateMenuItem", this.props._id, menuItemObj, (err,data)=>{
        if(err){
          AlertMessage('ERROR', err.reason, 'error');
          // console.log(err)
        }else{
          AlertMessage('SUCCESS', 'Successfully! updated menu item.', 'success');
        }
      });
      return dispatch => {
        dispatch(editMenuItem(this.props._id, menuItemObj))
      }
    }
  }
  /*resetSuccessMsg(){
    this.setState({'msg': false})
    this.setState({'errorMsg': false})
    Session.set("msg", false)
    Session.set("errorMsg", false)
  }*/
  render(){
    /*let msg = '';
    if(this.state.msg){
      msg = <AlertMessage data={'updated menu item.'} func={this.resetSuccessMsg.bind(this)} />
    }else if(this.state.errorMsg){
      msg = <AlertMessageOfError data={this.state.errorMsg} func={this.resetSuccessMsg.bind(this)} />
    }else{
      msg = '';
    }*/
    let menuId = '';
    if (this.props.pageLoading) {
      return <LoadingSpinner />;
    }else{
      if(this.props.menuItemData && this.props.menuItemData.mainParentId){
        menuId = this.props.menuItemData.mainParentId;
      }
    }
    let a={__html: '<option value="">Root</option>'+this.getDropDown()};
    if(this.state.itemType){
      itemType = this.state.itemType
    }else{
      itemType = this.props.menuItemData.MenuItemType
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
      title:"Menu Items",
      url:"/admin/menus/"+menuId+"/MenuItems",
      active:false
    },{
      title:i18n('ADMIN_MENU_MENUITEMS_EDITMENUITEM'),
      url:"/admin/menus/editMenuItem"+this.props._id,
      active:true
    }];
    return (
      <div className="">
        <Heading key={this.props.pageLoading} data={i18n('ADMIN_MENU_MENUITEMS_EDITMENUITEM')} url={url}/>
        <form id="non-editable" className = "form-horizontal" role = "form" onSubmit={this.submitData.bind(this)}>
          <div className="controls-header">
            <div className="form-group">
              <div className ="col-sm-12">
                <button className="btn custom-default-btn">UPDATE</button>
                
                 <a className="btn custom-default-btn" href={FlowRouter.path('listMenuItems',{_id:this.props.menuItemData.mainParentId})}>CANCEL</a>
              </div>
            </div> 
          </div> 
          <div className="panel-body custom-panel">
            <div id="notification"></div>
            <div className = "form-group">
              <label htmlFor = "firstname" className = "col-sm-2 control-label">{i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM_FORM_TITLE')}</label>
              <div className = "col-sm-10">
                <input type = "text" name="title" id="title" className = "form-control" defaultValue={this.props.menuItemData.title} required/>
              </div>
            </div>
            <div className = "form-group">
              <label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM_FORM_DESCRIPTION')}</label>
              <div className = "col-sm-10" id="token" > 
                <textarea id="desc" className="form-control" defaultValue={this.props.menuItemData.desc} id="desc"></textarea>
              </div>
            </div>
            <div className = "form-group">
              <label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM_FORM_TARGETWINDOW')}</label>
              <div className = "col-sm-10"> 
                <select className = "form-control" defaultValue={this.props.menuItemData.target?this.props.menuItemData.target:0} id="selectTragetWindow" required> 
                  <option className="form-control" value={0}>Parent</option>
                  <option className="form-control" value={1}>New Tab</option>
                </select>
              </div>
            </div>
            <div className = "form-group">
              <label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_MENU_MENU')}</label>
              <SelectMenu func={this.getMenuValue.bind(this)} nameId={this.props.menuItemData.mainParentId} />    
            </div>
            <div className = "form-group">
              <label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM_FORM_MENUITEMTYPE')}</label>
              <div className = "col-sm-10">
                <select className = "form-control" defaultValue={this.props.menuItemData.MenuItemType} id="select-menu-item-type" onChange={this.selectMenuItemType.bind(this)}> 
                  <option className="form-control" value="">Select </option>
                  <option className="form-control" value="category">Category</option>
                  <option className="form-control" value="article">Article</option>
                  <option className="form-control" value="module">Module</option>
                  <option className="form-control" value="link">External Link</option>
                </select>
              </div>
            </div>
            <div className = "form-group">
              <label htmlFor = "lastname" className = "col-sm-2 control-label">
                {
                  (
                    !this.state.itemType == 'module' || this.state.itemType == 'article' || this.state.itemType == 'category' ?
                      this.state.itemType.charAt(0).toUpperCase() + this.state.itemType.slice(1)
                    :
                      this.state.itemType == 'link'?
                        'External Link'
                      :
                        !this.props.menuItemData.MenuItemType.charAt(0).toUpperCase() + this.props.menuItemData.MenuItemType.slice(1) == 'Module' || this.props.menuItemData.MenuItemType.charAt(0).toUpperCase() + this.props.menuItemData.MenuItemType.slice(1) == 'Article' || this.props.menuItemData.MenuItemType.charAt(0).toUpperCase() + this.props.menuItemData.MenuItemType.slice(1) == 'Category' ?
                          this.props.menuItemData.MenuItemType.charAt(0).toUpperCase() + this.props.menuItemData.MenuItemType.slice(1)
                        :
                          this.props.menuItemData.MenuItemType == 'link'?
                            'External Link'
                          :
                            ''
                  )
                }
              </label>
              <div className = "col-sm-10" id="token"> 
              {
                itemType == 'category'?
                  <SelectCategory typeId={this.props.menuItemData.MenuItemTypeId} func={this.getMenuItemTypeValue.bind(this)} />
                :
                  itemType == 'article'?
                    <SelectArticle typeId={this.props.menuItemData.MenuItemTypeId} func={this.getMenuItemTypeValue.bind(this)} />
                  :
                    itemType=='link'?
                      <input type = "text" name="link" id="link" className = "form-control"  placeholder = "Enter link" defaultValue={this.props.menuItemData.link != ''?this.props.menuItemData.link:''} required />
                    :
                      ''
              }
              </div>
            </div>
            <div className = "form-group">
              <label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM_FORM_PARENT')}</label>
              <div className = "col-sm-10"  >
                <select className="form-control" id="selectParentMenu" dangerouslySetInnerHTML={a}></select>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default createContainer((data) => {
  let handle = Meteor.subscribe('findMenuItem', data._id);
  let handle2 = Meteor.subscribe('menuItems', data._id);
  let menu = Meteor.subscribe('findMenu', data._id);
  return {
    pageLoading: ! handle.ready() && ! handle2.ready() && ! menu.ready(), 
    menuItemData: PanoplyCMSCollections.MenuItems.findOne({_id:data._id}),
    MenuId: Session.get('MenuId'),
    MenuItemsData: PanoplyCMSCollections.MenuItems.find().fetch(),
    MenuValue1: PanoplyCMSCollections.MenuItems.findOne({_id:data._id}).mainParentId
  };
}, EditMenuItem)