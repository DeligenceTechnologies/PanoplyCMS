MenuItemType=React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    
    return {
      menuResults:PanoplyCMSCollections.Menus.find({trash:false}).fetch(),
      templateRegister:PanoplyCMSCollections.RegisteredPackages.findOne({name:'template'}),
      results : PanoplyCMSCollections.MenuItems.find().fetch(),
     Menus:PanoplyCMSCollections.Menus.find({trash:false}).fetch()
    };
  },
  getListOfMenuItems(){
    that=this;
    var menus=this.listOfMenu();
    level = 1;
    function getElem(submenu, alias){
      list='';
      let checked='';


      if(submenu && alias){
        menuArr = submenu;
      } else {
        menuArr = menus;
        if(!menuArr.length)
          list = '<div><strong>Warning !</strong> Menu Not Found!</div>';
      }

      menuArr.forEach(function (menu) {
        if(submenu){
          level++;
        }
        vvv = _.find(that.props.value,function(id){ 
          return id == menu._id
        });
        if(vvv)
          checked='checked'
        else
          checked='';

        list += ' <input class="ch"  '+checked+' type="checkbox" value="'+menu._id+'" name="menucheck" />&nbsp;&nbsp;'
        for(let i=1; i<level;i++){
          if(submenu){list += '|'; } 
          list += '--';
        }
        list += '<large>' + menu.title + '</large></br>';
        if(menu.child){
          list += getElem(menu.child, menu.alias);
        }
        if(submenu) level--;
        else level=1; 
      });
      return list;
    }
       
    var list = getElem();
    return list;
  },
  listOfMenu(){  
    var elements = this.data.results;
    var menu = new Array();

    function getElements(parent_id){
     // console.log("--====>",elements)
      if(parent_id){
        return getChild(parent_id);
      } else {
        var element = new Array();
        elements.forEach(function (elem1) {
         var child = getChild(elem1._id);
          if(elem1.parentId==''){
            element.push({ _id: elem1._id, title: elem1.title, alias: elem1.alias, desc:elem1.desc, child: child });
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
            child.push({ _id: elem2._id, title: elem2.title, mainParentId:elem2.mainParentId, alias: elem2.alias, desc:elem2.desc, child: getElements(elem2._id) });
          }
        }
      });
      return child;
    }
   // console.log(getElements(),'getElements()')
    return getElements();
  },
  render:function(){
    c=0;
    var a={__html: this.getListOfMenuItems()};
    return(
          <div className = "form-group">
            <label htmlFor = "lastname" className = "col-sm-2 control-label">Menu Items</label>
            <div className = "col-sm-2">
              <div className="well" dangerouslySetInnerHTML={a} />
            </div>
          </div>
    )     
  }
})

export default MenuItemType;