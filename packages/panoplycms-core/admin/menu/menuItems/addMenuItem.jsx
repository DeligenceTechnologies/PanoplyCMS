AddMenuItem=React.createClass({
  mixins:[ReactMeteorData],  
  getMeteorData: function() {
    var menu = Meteor.subscribe('menus')
    var handle = Meteor.subscribe('articlesFind')
    var handle1 = Meteor.subscribe('Categories')
    var handle2 = Meteor.subscribe('menuItemsByMainParentId')
    return {
      pageLoading: ! handle.ready(),
      pageLoading: ! handle1.ready(), 
      categoryData: PanoplyCMSCollections.Categories.find({trash:false}).fetch(),
      articleData: PanoplyCMSCollections.Articles.find({trash:false}).fetch(),
      MenuItemData: PanoplyCMSCollections.MenuItems.find({trash:false}).fetch(),
      Menu1:PanoplyCMSCollections.Menus.find({trash:false}).fetch()
    };
  },
  getInitialState(){
    return {
      language:i18n.getLanguage(),
      msg:false,
      valid:'',
      errorMsg:false,
      itemType:'',
      MenuItemTypeValue:'',
      MenuValue:this.props._id
    }
  },
  selectMenuItemType(event){
    event.preventDefault();
    this.setState({itemType : ReactDOM.findDOMNode(this.refs.selectMenuItemType).value.trim()})
  },
  getMenuItemTypeValue(val){
    this.setState({MenuItemTypeValue :val})
  },
  getMenuValue(val){
    this.setState({MenuValue :ReactDOM.findDOMNode(this.refs.selectMenu).value.trim()})
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
    event.preventDefault();
    var insert = {
      "title":ReactDOM.findDOMNode(this.refs.title).value.trim(),
      "desc":ReactDOM.findDOMNode(this.refs.desc).value.trim(),
      "mainParentId":ReactDOM.findDOMNode(this.refs.selectMenu).value.trim(),//FlowRouter.getParam("_id"),
      "MenuItemType":this.state.itemType,
      "MenuItemTypeId":/*ReactDOM.findDOMNode(that.refs.url).value?'':*/ReactDOM.findDOMNode(that.refs.select).value.trim(),
      /*"externalUrl":ReactDOM.findDOMNode(that.refs.url).value?ReactDOM.findDOMNode(that.refs.url).value.trim():'#',*/
      "parentId":ReactDOM.findDOMNode(this.refs.selectParent).value.trim(),
      "homepage":false
    }
    Meteor.call("insertMenuItem", insert,function(err,data){
      if(err){
        that.setState({errorMsg : err})
        console.log(err);
      }else{
        that.setState({msg : true})
        that.setState({itemType :''});
        ReactDOM.findDOMNode(that.refs.title).value="";
        ReactDOM.findDOMNode(that.refs.desc).value="";
        ReactDOM.findDOMNode(that.refs.selectParent).value="";
        ReactDOM.findDOMNode(that.refs.selectMenu).value=that.props._id;
        ReactDOM.findDOMNode(that.refs.selectMenuItemType).value="";
      }
    });
  },
  resetSuccessMsg(){
    this.setState({'msg':false})
    this.setState({'errorMsg':false})
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
    that=this;
   
    var elements = this.data.MenuItemData;
    var menu = new Array();

    function getElements(parent_id){
      if(parent_id){
        return getChild(parent_id);
      } else {
        var element = new Array();
        elements.forEach(function (elem1) {
          if(that.state.MenuValue==elem1.mainParentId){
            var child = getChild(elem1._id);
            if(elem1.parentId==''){
              element.push({ _id: elem1._id, title: elem1.title, alias: elem1.alias, child: child });
            }
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
    that=this
    var msg='';
    if(this.state.msg){
      msg=<AlertMessage data={'added menu item.'} func={this.resetSuccessMsg}/>
    }else if(this.state.errorMsg){
      msg=<AlertMessageOfError data={this.state.errorMsg} func={this.resetSuccessMsg}/>
    }else{
      msg='';
    }
     if (this.data.pageLoading) {
      return <LoadingSpinner />;
    }

    var a={__html: '<option value="">Root</option>'+this.getDropDown()};
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
              <div className = "col-sm-10"  > 
                <input type="text" ref="desc" className="form-control" id="desc" />
              </div>
            </div>
            <div className = "form-group">
              <label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_MENU_MENU')}</label>
              <div className = "col-sm-10"  > 
                <select id="mainMenu" ref="selectMenu" className = "form-control" onChange={this.getMenuValue} defaultValue={that.props._id}>
                  <option className="form-control" value="">Select </option>
                  {
                    this.data.Menu1.map(function(result) {
                      return <option value={result._id} key={result._id}>{result.title} </option>;
                    })
                  } 
                </select>
              </div>
            </div>
            <div className = "form-group">
              <label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM_FORM_MENUITEMTYPE')}</label>
              <div className = "col-sm-10"  > 
                <select className = "form-control" ref="selectMenuItemType" onChange={that.selectMenuItemType} required> 
                  <option className="form-control" value="" >Select </option>
                  <option className="form-control" value="category"  >Category</option>
                  <option className="form-control" value="article" >Article</option>
                  {/*<option className="form-control" value="url" >External Url</option>*/}
                </select>
              </div>
            </div>
            <div className = "form-group">
              <label htmlFor = "lastname" className = "col-sm-2 control-label">{this.state.itemType.charAt(0).toUpperCase() + this.state.itemType.slice(1)}</label>
              <div className = "col-sm-10" id="token" > 
                  {
                    this.state.itemType=='category'?
                      <select id="mainMenu" ref="select" className = "form-control" required >
                        <option className="form-control" value="" >Select </option>
                        {
                          this.data.categoryData.map(function(result) {
                            return <option key={result._id} value={result._id}  >{result.title} </option>;
                          })
                        } 
                      </select>
                    :this.state.itemType=='article'?
                      <select id="mainMenu" ref="select" className = "form-control" required >
                        <option className="form-control" value="" >Select </option>
                          {
                            this.data.articleData.map(function(result) {
                              return <option key={result._id} value={result._id} >{result.title} </option>;
                            })
                          }
                      </select>
                    :/*this.state.itemType=='url'?<input type="text" ref="url" name="url" className="form-control"  />:*/''
                  }  
              </div>  
            </div>
            <div className = "form-group">
              <label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM_FORM_PARENT')}</label>
              <div className = "col-sm-10" id="token" > 
                <select className="form-control" ref="selectParent"  dangerouslySetInnerHTML={a} ></select>
              </div>
            </div>         
            <div className="form-group">
              <div className = "col-sm-offset-2 col-sm-10">
                <button className="btn btn-primary " >SAVE</button>
                &nbsp;&nbsp;
                <a className="btn btn-danger " href={FlowRouter.path('listMenuItems',{_id:FlowRouter.getParam("_id")})}>CANCEL</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
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
        {
          this.data.dataList.map(function(result) {
            return <option key={result._id} value={result._id} > {result.title} </option>;
          })
        }
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
  render: function() {
    return (
      <select className = "col-sm-10" ref="select" onChange={this.setValue}> 
        {
          this.data.dataList.map(function(result) {
           return <option key={result._id} value={result._id}> {result.title} </option>;
          })
        }
      </select>
    )
  }
});