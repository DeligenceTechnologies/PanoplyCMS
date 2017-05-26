
import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import Heading from '../../common/heading.jsx';
// import AlertMessage from '../../common/alertMessage.jsx';
// import AlertMessageOfError from '../../common/alertMessageOfError.jsx';
import LoadingSpinner from '../../common/loadingSpinner.jsx';
import { AlertMessage } from '../../common/alertMessage.jsx';

import { addMenuItem } from '../../actions/menuItem_action.js';

class AddMenuItem extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      language: i18n.getLanguage(),
      valid: '',
      itemType: '',
      MenuItemTypeValue: '',
      MenuValue: this.props._id
    };
  }
  selectMenuItemType(event){
    event.preventDefault();
    this.setState({itemType: $('#selectMenuItemType').val()})
  }
  getMenuItemTypeValue(val){
    this.setState({ MenuItemTypeValue: val })
  }
  getMenuValue(val){
    this.setState({MenuValue: $('#selectMenu').val()})
  }
  componentDidMount(){
    document.title = "Add Menu Item"
  }
  errorMessageHide(event){
    event.preventDefault();
    $( "#alias-error-message" ).text('').css({
        "display":'none'
      });
  }
  submitData(event){
    event.preventDefault();
    let alias = $('#alias').val()?$('#alias').val():$('#title').val();
    alias = alias.toLowerCase().replace(/[^0-9a-zA-Z ]/g, "").replace(/\s+/g, '-');
    let menuItem = PanoplyCMSCollections.MenuItems.find({alias:alias}).fetch();
    console.log("====> ",menuItem.length)
    if(menuItem.length != 0){
      let menu = PanoplyCMSCollections.Menus.findOne({_id:menuItem[0].mainParentId});
      let html = "<div class=\"alert alert-danger alert-dismissible\" role=\"alert\" style={{\"display\":'none'}}>"+
              "<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>"+
              "<p> Save failed with the following error: The alias test is already being used by "+ menuItem[0].title +" menu item in the "+ menu.title +" menu (remember it may be a trashed item). </p>"+
            "</div>";
      $( "#alias-error-message" ).css({
        "display":'block'
      }).append(html);
    }else{
      let menuItemsData = {
        "title": $('#title').val(),
        "desc": $('#desc').val(),
        "target":$('#selectTragetWindow').val(),
        "mainParentId": $('#selectMenu').val(),//FlowRouter.getParam("_id"),
        "MenuItemType": this.state.itemType,
        "MenuItemTypeId": $('#mainMenu').val() ? $('#mainMenu').val() : '',
        "link": this.state.itemType == 'link'?$('#link').val():'',
        "parentId": $('#selectParent').val(),
        "alias":alias,
        "homepage": false
      }
      Meteor.call("insertMenuItem", menuItemsData, (err,data)=>{
        if(err){
          AlertMessage('ERROR', err.reason, 'error');
          // console.log(err);
        }else{
          AlertMessage('SUCCESS', 'Successfully! added menu item.', 'success');
          this.setState({ itemType :'' });
          $('#title').val('');
          $('#desc').val('');
          $('#selectParent').val('');
          $('#selectMenu').val(this.props._id);
          $('#selectMenuItemType').val('');
        }
      });
      return dispatch => {
        dispatch(addMenuItem(menuItemsData))
      }
    }
  }
  /*resetSuccessMsg(){
    this.setState({'msg':false})
    this.setState({'errorMsg':false})
  }*/
  fecthCategoryArticles(event){
    event.preventDefault();
  }
  getchild(id){
    childData=[];
    _.each(this.props.MenuItemData,function(a){
      if(id == a.parentId){
        childData.push({_id:a._id, title:a.title});
      }
    });
    return childData;
  }
  getDropDown(){
    let menus=this.listOfMenu();
    level = 1;
    let menuArr = [];
    function getElem(submenu, alias){
      let list='';
      let ar=[];

      if(submenu && alias){
        menuArr = submenu;
      } else {
        menuArr = menus;
      }

      menuArr.forEach(function (menu) {
        list += '<option value="' + menu._id + '"';
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
      });

      return list;
    }
     
    let list = getElem();
    return list;
  }
  listOfMenu(){ 
    that=this;
   
    let elements = this.props.MenuItemData;
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
  render(){
    /*let msg = '';
    if(this.state.msg){
      msg = <AlertMessage data={'added menu item.'} func={this.resetSuccessMsg.bind(this)}/>
    }else if(this.state.errorMsg){
      msg = <AlertMessageOfError data={this.state.errorMsg} func={this.resetSuccessMsg.bind(this)}/>
    }else{
      msg = '';
    }*/
    let menuId = '';
    if (this.props.pageLoading) {
      return <LoadingSpinner />;
    }else{
      if(this.props._id ){
        menuId = this.props._id;
      }
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
      title:i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM'),
      url:"/admin/menus/editMenuItem"+this.props._id,
      active:true
    }];
    let a = {__html: '<option value="">Root</option>'+this.getDropDown()};
    return (
      <div className="">
        <Heading key={this.props.pageLoading} data={i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM')} url={url} />
        <form id="non-editable" className = "form-horizontal" role = "form" onSubmit={this.submitData.bind(this)}>
           <div className="controls-header">
             <div className="form-group">
              <div className = "col-sm-12">
                <button className="btn custom-default-btn">SAVE</button>
               
                <a className="btn custom-default-btn" href={FlowRouter.path('listMenuItems',{_id:FlowRouter.getParam("_id")})}>CANCEL</a>
              </div>
             </div>
           </div>

         <div className="panel-body custom-panel">
            <div id="notification"></div>
          
            <div id="alias-error-message"></div>
            <div className = "form-group">
              <label htmlFor = "firstname" className = "col-sm-2 control-label">{i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM_FORM_TITLE')}</label>
              <div className = "col-sm-7">
                <input type = "text" name="title" id="title" className = "form-control"  placeholder = "Enter title" onChange={this.errorMessageHide.bind(this)} required />
              </div>
            </div>
            <div className = "form-group">
              <label htmlFor = "firstname" className = "col-sm-2 control-label">{i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM_FORM_ALIAS')}</label>
              <div className = "col-sm-7">
                <input type = "text" name="alias" id="alias" className = "form-control"  placeholder = "Auto-generate from title" onChange={this.errorMessageHide.bind(this)} />
              </div>
            </div>
            <div className = "form-group">
              <label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM_FORM_DESCRIPTION')}</label>
              <div className = "col-sm-7"> 
                <textarea className="form-control" id="desc"></textarea>
              </div>
            </div>
            
            <div className = "form-group">
              <label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM_FORM_TARGETWINDOW')}</label>
              <div className = "col-sm-7"> 
                <select className = "form-control" id="selectTragetWindow" required> 
                  <option className="form-control" value={0}>Parent</option>
                  <option className="form-control" value={1}>New Tab</option>
                </select>
              </div>
            </div>
            <div className = "form-group">
              <label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_MENU_MENU')}</label>
              <div className = "col-sm-7"> 
                <select id="selectMenu" className = "form-control" onChange={this.getMenuValue.bind(this)} defaultValue={this.props._id}>
                  <option className="form-control" value="">Select</option>
                  {
                    this.props.Menu1.map((result) => {
                      return <option value={result._id} key={result._id}>{result.title} </option>;
                    })
                  } 
                </select>
              </div>
            </div>
            <div className = "form-group">
              <label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM_FORM_MENUITEMTYPE')}</label>
              <div className = "col-sm-7"> 
                <select className = "form-control" id="selectMenuItemType" onChange={this.selectMenuItemType.bind(this)} required> 
                  <option className="form-control" value="">Select</option>
                  <option className="form-control" value="category">Category</option>
                  <option className="form-control" value="article">Article</option>
                  <option className="form-control" value="module">Module</option>
                  <option className="form-control" value="link">External Link</option>
                </select>
              </div>
            </div>
            {
              !this.state.itemType == 'module' || this.state.itemType == 'article' || this.state.itemType == 'category' || this.state.itemType == 'link'?
                <div className = "form-group">
                  <label htmlFor = "lastname" className = "col-sm-2 control-label">
                    {
                      !this.state.itemType == 'module' || this.state.itemType == 'article' || this.state.itemType == 'category' ?
                        this.state.itemType.charAt(0).toUpperCase() + this.state.itemType.slice(1)
                      : 
                        this.state.itemType == 'link'?
                          'External Link'
                        :
                          ''
                    }
                  </label>
                  <div className = "col-sm-7" id="token"> 
                    {
                      this.state.itemType=='category'?
                        <select id="mainMenu" className = "form-control" required>
                          <option className="form-control" value="">Select</option>
                          {
                            this.props.categoryData.map((result)=> {
                              return <option key={result._id} value={result._id}>{result.title}</option>;
                            })
                          } 
                        </select>
                      : 
                        this.state.itemType=='article' ?
                          <select id="mainMenu" className = "form-control" required>
                            <option className="form-control" value="">Select</option>
                              {
                                this.props.articleData.map((result)=> {
                                  return <option key={result._id} value={result._id}>{result.title}</option>;
                                })
                              }
                          </select>
                        :
                          this.state.itemType=='link'?
                            <input type = "text" name="link" id="link" className = "form-control"  placeholder = "Enter link" required />
                          :
                            ''
                    }
                  </div>
                </div>
              : ''
            }
            <div className = "form-group">
              <label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM_FORM_PARENT')}</label>
              <div className = "col-sm-7" id="token" > 
                <select className="form-control" id="selectParent" dangerouslySetInnerHTML={a} ></select>
              </div>
            </div>         
           
          </div>
        </form>
      </div>
    )
  }
}

export default createContainer(()=>{
  let menu = Meteor.subscribe('menus')
  let handle = Meteor.subscribe('articlesFind')
  let handle1 = Meteor.subscribe('Categories')
  let handle2 = Meteor.subscribe('menuItemsByMainParentId')
  return {
    pageLoading: ! handle.ready() && ! handle1.ready(),
    categoryData: PanoplyCMSCollections.Categories.find({trash:false}).fetch(),
    articleData: PanoplyCMSCollections.Articles.find({trash:false}).fetch(),
    MenuItemData: PanoplyCMSCollections.MenuItems.find({trash:false}).fetch(),
    Menu1:PanoplyCMSCollections.Menus.find({trash:false}).fetch()
  };
}, AddMenuItem)