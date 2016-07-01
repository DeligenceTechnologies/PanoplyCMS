AddMenuItem=React.createClass({
    mixins:[ReactMeteorData],  
    getMeteorData: function() {
      var menu = Meteor.subscribe('menus')
      var handle = Meteor.subscribe('articlesFind')
      var handle1 = Meteor.subscribe('Categories')
      var handle2 = Meteor.subscribe('menuItemsByMainParentId',this.state.MenuValue)
      console.log(this.state.MenuValue,"test<=====")
      return {
        pageLoading: ! handle.ready(),
        pageLoading: ! handle1.ready(), 
        categoryData: PanoplyCMSCollections.Categories.find({trash:0}).fetch(),
        articleData: PanoplyCMSCollections.Articles.find({trash:false}).fetch(),
        MenuItemData: PanoplyCMSCollections.MenuItems.find({mainParentId:this.state.MenuValue,trash:false}).fetch(),
         Menu1:PanoplyCMSCollections.Menus.find({trash:false}).fetch()
      };
  },
   getInitialState(){
   return {
      language:i18n.getLanguage(),
      msg:false,
      valid:'',
      errorMsg:false
    }
    console.log(msg,"msg")
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
   
    // console.log(val,'val');
    this.setState({MenuItemTypeValue :val})
    
  },
 getMenuValue(val){
   
    console.log(val,'val');
    this.setState({MenuValue :val})
    
  },

  componentDidMount: function(){
    document.title = "Add Menu Item"

  },
  componentWillUnmount: function() {
    
  },
  componentDidUpdate: function() {
    
  },
  submitData(event){
    var that=this;
  // console.log("----",this.state.MenuValue,"---")
    event.preventDefault();
    var insert = {
      "title":ReactDOM.findDOMNode(this.refs.title).value.trim(),
      "desc":ReactDOM.findDOMNode(this.refs.desc).value.trim(),
      "mainParentId":this.state.MenuValue,//FlowRouter.getParam("_id"),
      "MenuItemType":this.state.itemType,
      "MenuItemTypeId":this.state.MenuItemTypeValue,
      "parentId":ReactDOM.findDOMNode(this.refs.selectParent).value.trim()
    }
   console.log(insert)
    Meteor.call("insertMenuItem", insert,function(err,data){
        if(err){
           that.setState({errorMsg : err})
          console.log(err);
                }
          else{
             that.setState({msg : true})
         //    console.log(FlowRouter.getParam("_id"),data);
             ReactDOM.findDOMNode(that.refs.title).value="";
             ReactDOM.findDOMNode(that.refs.desc).value="";
             ReactDOM.findDOMNode(that.refs.selectParent).value="";
           that.setState({itemType : ""});
           that.setState({MenuItemTypeValue : ""});
           that.setState({MenuValue : ""});

        //   FlowRouter.go('listMenuItems',{_id:FlowRouter.getParam("_id")})
          }
    });
     
  },
  resetSuccessMsg(){
    this.setState({'msg':false})
    this.setState({'errorMsg':false})
  },
  fecthCategoryArticles(event){
    event.preventDefault();
     
  },
  getchild(id){
    childData=[];
     _.each(this.data.MenuItemData,function(a){
      
        if(id==a.parentId){
          childData.push({_id:a._id,title:a.title});
        }
        
      });
      // console.log('childData','==',childData);
     return childData;

  },
  getDropDown(){
    var menus=this.listOfMenu();
    level = 1;
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
        //if(parent && (parent.id == menu._id)) list += 'selected';
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
    


// getMenuDropDown(){
//   event.preventDefault();
//     var menus1=this.data.Menu1;
//     console.log(this.data.Menu1,"menus1====")

//          menus1.forEach(function (menu1) {
//         list1 += '<option value="' + menu1._id + '"';
//         list1 += '>';
//          list1 += menu1.title + '</option>';
        
//       });
// return list1;

//   },




  listOfMenu(){    
    var elements = this.data.MenuItemData;
  //  console.log(this.data.MenuItemData,'elements');
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

  render(){
    var msg='';
    if(this.state.msg){
      msg=<AlertMessage data={'Successfully added article.'} func={this.resetSuccessMsg}/>
    }else if(this.state.errorMsg){
      msg=<AlertMessageOfError data={this.state.errorMsg} func={this.resetSuccessMsg}/>
    }else{
      msg='';
    }
     if (this.data.pageLoading) {
      return <LoadingSpinner />;
    }

    var a={__html: '<option value="">Root</option>'+this.getDropDown()};
  //  var b={__html: '<option value="">Select Menu</option>'+this.getMenuDropDown()};
   // console.log(this.data.MenuItemData);
    return (

    <div className="col-md-10 content" onClick={this.resetSuccessMsg}>
      <Heading  data={i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM')} />
      {msg}
      <div className="panel-body">
      <div id="notification"></div>
        <form id="non-editable" className = "form-horizontal" role = "form" onSubmit={this.submitData} >
          <div className = "form-group">
            <label htmlFor = "firstname" className = "col-sm-2 control-label">{i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM_FORM_TITLE')}</label>
            <div className = "col-sm-10">
              <input type = "text" name="title" ref="title"  className = "form-control"  placeholder = "Enter title" required/>
            </div>
          </div>
          <div className = "form-group">
            <label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM_FORM_DESCRIPTION')}</label>
            <div className = "col-sm-10" id="token" > 
              <input type="text" ref="desc" className="form-control" id="desc" />
            </div>
         </div>
      {/*   <div className = "form-group">
            <label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM_FORM_PARENT')}</label>
            <select className="col-sm-10" ref="selectMenu"   dangerouslySetInnerHTML={b}></select>
         </div> */}
          <div className = "form-group">
            <label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_MENU_MENU')}</label>
            <SelectMenu  func={this.getMenuValue} />    
         </div>
         <div className = "form-group">
            <label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM_FORM_MENUITEMTYPE')}</label>
            <select className = "col-sm-10" ref="select" onChange={this.selectMenuItemType}> 
              <option className="form-control" value="" >Select </option>
              <option className="form-control" value="category"  >Category</option>
              <option className="form-control" value="article" >Article</option>
            </select>
         </div>
         <div className = "form-group">
            <label htmlFor = "lastname" className = "col-sm-2 control-label">{this.state.itemType}</label>
            {this.state.itemType=='category'?<SelectCategory func={this.getMenuItemTypeValue} />:this.state.itemType=='article'?<SelectArticle func={this.getMenuItemTypeValue} />:''}    
         </div>

          <div className = "form-group">
            <label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM_FORM_PARENT')}</label>
            <select className="col-sm-10" ref="selectParent" onChange={this.selectMenuItemType} dangerouslySetInnerHTML={a}></select>
         </div>         
        <div className="form-group">
          <div className = "col-sm-offset-2 col-sm-10">
            <button className="btn btn-success " >{i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM_FORM_SAVE')}</button>
            &nbsp;&nbsp;
            <a className="btn btn-danger " href={FlowRouter.path('listMenuItems',{_id:FlowRouter.getParam("_id")})}>{i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM_FORM_CANCEL')}</a>
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
  setValue(event){
    event.preventDefault();
    this.props.func(this.refs.select.value.trim());
  },
  render: function() {
    var c=0;
   
    return (
          <select className = "col-sm-10" ref="select" onChange={this.setValue} > 
           {this.data.dataList.map(function(result) {
              return  <option key={result._id} value={result._id} > {result.title} </option>;
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
  // setValue(event){
  //   event.preventDefault();
  //   this.props.func(ReactDOM.findDOMNode(this.refs.select).value.trim());
  // },
  render: function() {
   
    return (
            <select className = "col-sm-10" ref="select" onChange={this.setValue}> 
                {this.data.dataList.map(function(result) {
                   return  <option key={result._id} value={result._id}> {result.title} </option>;
                })}
            </select>
    )
    
  }
});




SelectMenu = React.createClass({
  mixins:[ReactMeteorData],  
  getMeteorData: function() {
    var handle1 = Meteor.subscribe('menus')
    return {
      dataList: PanoplyCMSCollections.Menus.find({trash:false}).fetch()
    };
  },
  setValue(event){
    event.preventDefault();
    this.props.func(ReactDOM.findDOMNode(this.refs.selectMenu).value.trim());
  },
  render: function() {
   
    return (
            <select className = "col-sm-10" ref="selectMenu" onChange={this.setValue}> 
                <option className="form-control" value="" >Select </option>
                {this.data.dataList.map(function(result) {
                   return  <option key={result._id} value={result._id}> {result.title} </option>;
                })}
            </select>
    )
    
  }
});


