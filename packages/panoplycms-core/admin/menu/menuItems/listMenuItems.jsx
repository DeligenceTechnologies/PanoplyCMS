  ListMenuItems = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
    that=this
    var handle2 = Meteor.subscribe('menuItems',FlowRouter.getParam("_id"),that.state.trashListShow);
    var Menus = Meteor.subscribe('menus')
   return {
     MenuItemsData : PanoplyCMSCollections.MenuItems.find({mainParentId:FlowRouter.getParam("_id"),trash:that.state.trashListShow}).fetch(),
     results : PanoplyCMSCollections.MenuItems.find().fetch(),
     Menus:PanoplyCMSCollections.Menus.find({trash:false}).fetch()
      } 
    },
   getInitialState(){
    return{
      trashListShow:false
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
    var elements = this.data.MenuItemsData;
    var menu = new Array();

    function getElements(parent_id){
      if(parent_id){
        return getChild(parent_id);
      } else {
        var element = new Array();
        elements.forEach(function (elem1) {
         var child = getChild(elem1._id);
          if(elem1.parentId=='' || elem1.trash==true){
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
   // console.log(getElements(),'getElements()')
    return getElements();
  },
  showArticles(){
    if($('#display').val()=='trash'){
      Session.set("trashListShow",true);
      this.setState({trashListShow:true})
    }else{
      Session.set("trashListShow",false);
      this.setState({trashListShow:false})
    }
    
   },
   showMenu(){
     Session.set('MenuId',$('#mainMenu').val());
      FlowRouter.go('listMenuItems',{_id:$('#mainMenu').val()})
  },
   storeMenuid(event){
      event.preventDefault();
     console.log(FlowRouter.getParam("_id"),"routes")
      FlowRouter.go(''+'\addMenuItem',{_id:FlowRouter.getParam("_id")})
  },

  render() {
    that=this;
    var m =this.listOfMenu();
    return (
      <div className="col-md-10 content">
        <Heading  data={i18n('ADMIN_MENU_MENUITEMS')} />
        <div className="panel-heading"><span className="lead"></span></div>
        <div className="panel-heading"> <a  className="btn btn-success btn-ico" onClick={this.storeMenuid} >{i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM')}</a>
           <div className="row">   
               <div className="pull-right col-md-3" >
            Menus:  
            <select id="mainMenu" ref="mainMenu" onChange={this.showMenu} defaultValue={FlowRouter.getParam("_id")}>
              {this.data.Menus.map(function(result) {
                  return <option key={result._id} value={result._id} >{result.title}</option>;
                 
                })} 
            </select>
          </div>  
               <div className="pull-right col-md-3 col-md-offset-1">
                  Display: 
                  <select id="display" onChange={this.showArticles} >
                    <option value="all">All</option>
                    <option value="trash">Trash</option>
                  </select>
               </div>  
            </div>
        </div>
          <div className="table-responsive" id="non-editable">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>
                  <div>
                   <span className="col-md-4">{i18n('ADMIN_MENU_ADDMENU_FORM_TITLE')}</span>
                   <span className="col-md-5">{i18n('ADMIN_MENU_ADDMENU_FORM_DESCRIPTION')}</span>
                   <span className="col-md-2">{i18n('ADMIN_MENU_ADDMENU_FORM_ACTION')}</span>
                   </div></th>
                </tr>
              </thead>
              <tbody>
                 <Trvalue key={1} level={0} menus={m} trashListShow={that.state.trashListShow} />
             </tbody>
            </table>
          </div>
           {this.data.MenuItemsData.map(function(result) {
          return  <Modal key={result._id} data={result} stateVal={that.state.trashListShow} />         
            })} 
        </div>    
     );
  }
});

var Trvalue = React.createClass({
  restoreMenuItem(){
           Meteor.call('restoreMenuItem',this.props._id,function(err,data){
          console.log(err,data);
         });
      
     },
  deleteMenuItem(){
     if(Session.get("trashListShow")){
                     Meteor.call('deleteMenu',this.props._id,function(err,data){
                  console.log(err,data);
                });
      }
    else {
              event.preventDefault();
                Meteor.call('deleteMenuItem',this.props._id,function(err,data){
                  console.log(err,data);
                });
          } 
    },
  render: function() {    
    that=this;
    var divStyle = {
      paddingTop: "5px",
        };
    var menus = "";
    var list='|-';
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
            <div className="modal fade" id={this.props._id} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                   <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Do you really want to remove ?</h4>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" onClick={this.deleteMenuItem} data-dismiss="modal">YES</button>
                  <button type="button" className="btn btn-danger" data-dismiss="modal">NO</button>
                </div>
              </div>
            </div>
           </div>
            <div className="modal fade" id={this.props._id+'restoreMenuItem'} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                   <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Do you really want to restore menu items ?</h4>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" onClick={this.restoreMenuItem} data-dismiss="modal">YES</button>
                  <button type="button" className="btn btn-danger" data-dismiss="modal">NO</button>
                </div>
              </div>
            </div>
           </div>
          <span className="col-md-4">{this.props.list+this.props.title}<small> (<span>{'Alias:'+this.props.alias}</span>) </small></span>
          <span className="col-md-5">{this.props.desc}</span>
          <div  id="delete_article" className="delete_btn" data-toggle="modal" data-target={"#"+this.props._id} style={{display:'inline-block'}}>
             {
                Session.get("trashListShow") ? <i style={{color:'red'}} title="Delete" className="fa fa-times" aria-hidden="true"></i> : <i className="fa fa-trash-o"  title="Trash" ></i> 
              }
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {
              Session.get("trashListShow")? <i data-toggle="modal" data-target={'#'+this.props._id+'restoreMenuItem'} className="fa fa-archive" aria-hidden="true" title="Restore" ></i> : <a href={FlowRouter.path('editMenuItem',{_id:this.props._id})}> <i className="fa fa-pencil-square-o" data-toggle="tooltip" title="Edit" ></i> </a> 
            }
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
