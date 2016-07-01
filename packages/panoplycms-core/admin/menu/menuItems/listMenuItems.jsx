ListMenuItems = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
    Meteor.subscribe('menuItems',FlowRouter.getParam("_id"))
    var handle2 = Meteor.subscribe('menuItems')
    return {
       MenuItemsData : PanoplyCMSCollections.MenuItems.find({mainParentId:FlowRouter.getParam("_id"),trash:false}).fetch(),
     results : PanoplyCMSCollections.MenuItems.find().fetch()

    } 
  },
 
  getListOfMenuItems(){
    that=this;
    var menus=this.listOfMenu();
    level = 1;
  function getElem(submenu, alias){
    list='';

    if(submenu && alias){
      menuArr = submenu;
    } else {
      menuArr = menus;
      if(!menuArr.length)
        list = '<tr><td colspan="4"><div class="alert alert-warning alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> <strong>Warning !</strong> Menu Not Found! </div></td></tr>';
    }

    menuArr.forEach(function (menu) {
      list += '<tr id="'+menu._id+'">';
      list += '<td>';
      if(submenu){
        level++;
      }
      for(let i=1; i<level;i++){
        if(submenu){list += '|';} 
        list += '-- ';
      }
      list += ' <large>' + menu.title + '</large> <small> (<em>Alias:' + menu.alias + '</em>) </small></td>';
      list += '<td>' + menu.desc + '</td>';
      list += '<td id="delete_menu"><div  id="' + menu._id + '" class="delete_btn "><i class="fa fa-trash-o" data-toggle="tooltip" title="Delete" ></i></div></td>';
      list += '<td id="edit_menu"><div class="edit_btn"  id="' + menu._id + '"> <i class="fa fa-pencil-square-o" data-toggle="tooltip" title="Edit"></i></div></td>';
      
      list += '</tr>';
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
    console.log('listofmenu called---');  
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
            child.push({ _id: elem2._id, title: elem2.title, alias: elem2.alias, desc:elem2.desc, child: getElements(elem2._id) });
          }
        }
      });
      return child;
    }
    console.log(getElements(),'getElements()')
    return getElements();
  },
  deleteMenuItem(){
    //Meteor.call('deleteMenuItem',this.props.data._id,function(err,data){
console.log('deleteMenuItem call')
    ///});
  },
  render() {
     
    
    var a={__html: this.getListOfMenuItems()};
    console.log(this.listOfMenu(),'listofmenu with parent');
      var m=this.listOfMenu();
    return (
      <div className="col-md-10 content">
        <Heading  data={i18n('ADMIN_MENU_MENUITEMS')} />
        <div className="panel-heading"><span className="lead"></span></div>
        <div className="panel-heading"> <a  className="btn btn-success" href={FlowRouter.path('addMenuItem',{_id:FlowRouter.getParam("_id")})} >{i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM')}</a></div>
        <div class="row">
            <Trvalue key={1} level={0} menus={m}/>
        </div>
        </div>    
      
    );
  }
});

/*var Trvalue = React.createClass({
  deleteMenuItem(){
    Meteor.call('deleteMenuItem',this.props.data._id,function(err,data){
console.log(err,data)
    });
  },
  editArticle(){

  },
  render: function() {
    var c=0;
    return (
       <tr>
          <td id="edit_article"><a href="#"><large> {this.props.data.title}</large> </a><small> (<span>{'Alias:'+this.props.data.alias}</span>) </small></td>
          <td  >{this.props.data.desc}</td>
          
          <td id="delete_article"><div  onClick={this.deleteMenuItem} className="delete_btn"><i className="fa fa-trash-o" data-toggle="tooltip" title="Delete" ></i> </div></td>
          <td id="edit_article"><div  className="edit_btn"  id=""><a href={FlowRouter.path('editMenuItem',{_id:this.props.data._id})}><i className="fa fa-pencil-square-o" data-toggle="tooltip" title="Edit"></i></a> </div></td>
        </tr>
    )
    
  }
});*/

var Trvalue = React.createClass({
  deleteMenuItem(){
        //event.preventDefault();
        Meteor.call('deleteMenuItem',this.props._id,function(err,data){
          console.log(err,data);
        });
    },
  render: function() {    
    var divStyle = {
     // background: "#eee",
   paddingTop: "5px",
  //borderBottom: 'solid',
 
};

    var menus = "";
    var list='|-';
    that=this;
    console.log(this.props.menus,'this.props.menus');
    for(i=0;i<that.props.level;i++){
      list +='-';
    }
    if(this.props.menus){
      
      menus = this.props.menus.map(function (menu) {
        
        return (
          <Trvalue key={menu._id} _id={menu._id} alias={menu.alias} list={list} desc={menu.desc} level={that.props.level+1} title={menu.title} menus={menu.child}></Trvalue>
        );
      });
    }
    
    if(this.props._id){
      
      
      return (
        
          <div>
          <div>
          <span className="col-md-4">{this.props.list+this.props.title}<small> (<span>{'Alias:'+this.props.alias}</span>) </small></span>
          <span className="col-md-5">{this.props.desc}</span>
          <span className="col-md-1" id={this.props._id}><a href={FlowRouter.path('editMenuItem',{_id:this.props._id})} ><i className="fa fa-pencil-square-o" data-toggle="tooltip" title="Edit"></i></a></span>
          <span className="col-md-1" id={this.props._id} onClick={this.deleteMenuItem} ><i className="fa fa-trash-o" data-toggle="tooltip" title="Delete" ></i></span>
          <br />
          { menus }
          </div>
          <div style={divStyle}>
          </div>
          </div>
         
        
      );
    } else{
      return <div className="replies">{ menus }</div>;
    }

  }
});