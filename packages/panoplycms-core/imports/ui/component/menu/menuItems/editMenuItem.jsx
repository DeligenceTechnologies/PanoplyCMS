EditMenuItem=React.createClass({
  mixins:[ReactMeteorData],  
  getMeteorData: function() {
    console.log(this.props._id);
    var handle = Meteor.subscribe('findMenuItem',this.props._id)
    var handle2 = Meteor.subscribe('menuItems')
    return {
      pageLoading: ! handle.ready(), 
      menuItemData: PanoplyCMSCollections.MenuItems.findOne({_id:this.props._id}),
      MenuId: Session.get('MenuId'),
      MenuItemsData: PanoplyCMSCollections.MenuItems.find().fetch()
    };
  },
   getInitialState: function() {
   
    return {
      itemType:'',
      MenuItemTypeValue:''
  
    }
  },
  selectMenuItemType(event){
    event.preventDefault();
    this.setState({itemType : ReactDOM.findDOMNode(this.refs.select).value.trim()})

  },
  getMenuItemTypeValue(val){
    this.setState({MenuItemTypeValue :val})    
  },
  getDropDown(){
    var menus=this.listOfMenu();
    level = 1;
    that=this;
    function getElem(submenu, alias){
      var list='';
      var ar=[];

      if(submenu && alias){
        var menuArr = submenu;
      } else {
        var menuArr = menus;
      }

      menuArr.forEach(function (menu) {
        list += '<option value="' + menu._id + '"';
        if(that.data.menuItemData.parentId == menu._id) list += 'selected';
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
     
    var list = getElem();
    return list;
  },
    
  listOfMenu(){    
    var elements = this.data.MenuItemsData;
    var menu = new Array();

    function getElements(parent_id){
      if(parent_id){
        return getChild(parent_id);
      } else {
        var element = new Array();
        elements.forEach(function (elem1) {
          var child = getChild(elem1._id);
          if(elem1.parentId==''){
            element.push({ _id: elem1._id, title: elem1.title, alias: elem1.alias, child: child });
          }
        });
        return element;
      }   
    }

    function getChild(parent_id){
      var child = new Array();
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
  },
  componentDidMount: function(){
    document.title = "Edit Menu"
  },
  componentWillUnmount: function() {
    
  },
  componentDidUpdate: function() {

  },
  submitData(event){
    event.preventDefault();
    var insert = {
      "title":ReactDOM.findDOMNode(this.refs.title).value.trim(),
      "desc":ReactDOM.findDOMNode(this.refs.desc).value.trim(),
      "MenuItemType":ReactDOM.findDOMNode(this.refs.select).value.trim(),
      "MenuItemTypeId":this.state.MenuItemTypeValue    
    }
    console.log(Session.get('MenuId'),'Session',this.data);
    let paramId=this.data.menuItemData.mainParentId;
    Meteor.call("updateMenuItem",this.props._id,insert,function(err,data){
        if(err)
          console.log(err);
          else{            
            FlowRouter.go('listMenuItems',{_id:paramId})
          }
    });
     
  },
  render(){

    if (this.data.pageLoading) {
      return <LoadingSpinner />;
    }
    var a={__html: '<option value="">Root</option>'+this.getDropDown()};
    if(this.state.itemType){
      itemType=this.state.itemType
    }else{
      itemType=this.data.menuItemData.MenuItemType
    }
    return (
    <div className="col-md-10 content">
      <Heading  data={i18n('ADMIN_MENU_MENUITEMS_EDITMENUITEM')} />
      <div className="panel-body">
      <div id="notification"></div>
        <form id="non-editable" className = "form-horizontal" role = "form" onSubmit={this.submitData} >
          <div className = "form-group">
            <label htmlFor = "firstname" className = "col-sm-2 control-label">{i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM_FORM_TITLE')}</label>
            <div className = "col-sm-10">
              <input type = "text" name="title" ref="title"  className = "form-control"  defaultValue={this.data.menuItemData.title} required/>
            </div>
          </div>
          <div className = "form-group">
            <label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM_FORM_DESCRIPTION')}</label>
            <div className = "col-sm-10" id="token" > 
              <input type="text" ref="desc" className="form-control" defaultValue={this.data.menuItemData.title} id="desc" />
            </div>
         </div>
         <div className = "form-group">
            <label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM_FORM_MENUITEMTYPE')}</label>
            <select className = "col-sm-10" defaultValue={this.data.menuItemData.MenuItemType} ref="select" onChange={this.selectMenuItemType}> 
              <option className="form-control" value="" >Select </option>
              <option className="form-control"  value="category"  >Category</option>
              <option className="form-control" value="article" >Article</option>
            </select>
         </div>
         <div className = "form-group">
            <label htmlFor = "lastname" className = "col-sm-2 control-label">{this.state.itemType}</label>
            {itemType=='category'?<SelectCategory typeId={this.data.menuItemData.MenuItemTypeId} func={this.getMenuItemTypeValue} />:itemType=='article'?<SelectArticle typeId={this.data.menuItemData.MenuItemTypeId} func={this.getMenuItemTypeValue} />:''}

           
            
         </div>
          <div className = "form-group">
            <label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM_FORM_PARENT')}</label>
            <select className="col-sm-10" ref="selectParentMenu"  dangerouslySetInnerHTML={a}></select>
         </div>
        <div className="form-group">
          <div className = "col-sm-offset-2 col-sm-10">
            <button className="btn btn-success " >{i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM_FORM_SAVE')}</button>
            &nbsp;&nbsp;
             <a className="btn btn-danger "  href={FlowRouter.path('listMenuItems',{_id:this.data.menuItemData.mainParentId
  })}>{i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM_FORM_CANCEL')}</a>
          </div>
        </div>  
      </form>
    </div>
</div>
    )
  }

})

LoadingSpinner=React.createClass({
  render:function(){
    return <div>Loading....</div>
  }
})

SelectCategory = React.createClass({
  mixins:[ReactMeteorData],  
  getMeteorData: function() {
    var handle1 = Meteor.subscribe('Categories')
    
    return {
      dataList: PanoplyCMSCollections.Categories.find({trash:false}).fetch()
     
    };
  },
  getInitialState: function() {
   
    return {
      selectValue:''
     
    }
  },
  componentDidMount: function() {

     this.setState({selectValue :this.props.typeId})
  },
  setValue(event){
    event.preventDefault();
     this.setState({selectValue : ReactDOM.findDOMNode(this.refs.select).value.trim()})
    this.props.func(this.refs.select.value.trim());
  },

  render: function() {
    
   
    return (
<select className = "col-sm-10" ref="select" value={this.state.selectValue} onChange={this.setValue} > 
           {this.data.dataList.map(function(result) {
                 return  <option key={result._id} value={result._id}> {result.title} </option>;
              })} 
         
          </select>
            )
    
  }
});
 SelectArticle = React.createClass({
  mixins:[ReactMeteorData],  
  getMeteorData: function() {
    var handle1 = Meteor.subscribe('articlesFind')
   
    return {
      dataList: PanoplyCMSCollections.Articles.find({trash:false}).fetch()
      
    };
  },
  getInitialState: function() {
   
    return {
      selectValue:''
     
    }
  },
  componentDidMount: function() {

     this.setState({selectValue :this.props.typeId})
  },

  setValue(event){
    event.preventDefault();
    this.setState({selectValue : ReactDOM.findDOMNode(this.refs.select).value.trim()})
    this.props.func(ReactDOM.findDOMNode(this.refs.select).value.trim());
  },
  render: function() {
    return (
<select className = "col-sm-10" ref="select" value={this.state.selectValue} onChange={this.setValue}> 
              {this.data.dataList.map(function(result) {
                 return  <option key={result._id} value={result._id}> {result.title} </option>;
              })}
          </select>
            )
    
  }
});

