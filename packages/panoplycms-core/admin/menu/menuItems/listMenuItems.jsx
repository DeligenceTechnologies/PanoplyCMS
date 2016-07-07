  ListMenuItems = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
that=this
    //console.log(PanoplyCMSCollections.MenuItems.find({mainParentId:FlowRouter.getParam("_id"),trash:that.state.trashListShow}).fetch(),"---->")
       var handle2 = Meteor.subscribe('menuItems',FlowRouter.getParam("_id"),that.state.trashListShow);
    var Menus = Meteor.subscribe('menus')

   //  console.log(that.state.trashListShow,"trashListShow====>",FlowRouter.getParam("_id"),"====>",PanoplyCMSCollections.MenuItems.find({mainParentId:FlowRouter.getParam("_id"),trash:that.state.trashListShow}).fetch());
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
            child.push({ _id: elem2._id, title: elem2.title, alias: elem2.alias, desc:elem2.desc, child: getElements(elem2._id) });
          }
        }
      });
      return child;
    }
   // console.log(getElements(),'getElements()')
    return getElements();
  },
  deleteMenuItem(){
      //Meteor.call('deleteMenuItem',this.props.data._id,function(err,data){
          console.log('deleteMenuItem call')
    ///});
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
  //  alert($('#mainMenu').val())
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
    // console.log(that.data.Menus,"======")
    
    //var a={__html: this.getListOfMenuItems()};
  //  console.log(this.listOfMenu(),'listofmenu with parent');
      var m =this.listOfMenu();
    return (
      <div className="col-md-10 content">
        <Heading  data={i18n('ADMIN_MENU_MENUITEMS')} />
        <div className="panel-heading"><span className="lead"></span></div>
        <div className="panel-heading"> <a  className="btn btn-success btn-ico" onClick={this.storeMenuid} >{i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM')}</a>
           <div className="row">   
               <div className="pull-right col-md-3" >
            Menus:  
            <select id="mainMenu" ref="mainMenu" onChange={this.showMenu}>
              {this.data.Menus.map(function(result) {
                  if(FlowRouter.getParam("_id")==result._id)
                   return <option value={result._id} selected >{result.title}</option>;
                  else
                   return <option value={result._id} >{result.title}</option>;
                 
                })} 
            </select>
          </div>  
               <div className="pull-right col-md-3 col-md-offset-1">
                  Display: 
                  <select id="display" onChange={this.showArticles}>
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
                  <th><div>
                   <span className="col-md-4">{i18n('ADMIN_MENU_ADDMENU_FORM_TITLE')}</span>
                   <span className="col-md-5">{i18n('ADMIN_MENU_ADDMENU_FORM_DESCRIPTION')}</span>
                   <span className="col-md-2">{i18n('ADMIN_MENU_ADDMENU_FORM_ACTION')}</span>
                   </div></th>
                 {/* <th>{i18n('ADMIN_MENU_ADDMENU_FORM_EDIT')}</th>*/}
                </tr>
              </thead>
              <tbody>
                 <Trvalue key={1} level={0} menus={m} trashListShow={that.state.trashListShow} />
             </tbody>
            </table>
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
  restoreMenuItem(){
     if (confirm('Do you want to restore menu Item ?')) 
       {
         Meteor.call('restoreMenuItem',this.props._id,function(err,data){
          console.log(err,data);
         });
       }
     },

  deleteMenuItem(){
     if(Session.get("trashListShow")){
                 if (confirm('Do you want to delete menu Item permanantly ?')) 
                    {
                     Meteor.call('deleteMenu',this.props._id,function(err,data){
                  console.log(err,data);
                });
      } 
      }
    else {
            if (confirm('Do you want to trash menu Item ?')) 
            {
              event.preventDefault();
                Meteor.call('deleteMenuItem',this.props._id,function(err,data){
                  console.log(err,data);
                });
            } 
           }
         },

  render: function() {    
    that=this;
  //  console.log(Session.get("trashListShow"))
    var divStyle = {
      paddingTop: "5px",
        };
    var menus = "";
    var list='|-';

   // console.log(this.props.trashListShow,"rfdsvc=====>")
 //   console.log(this.props.menus,'this.props.menus');
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
          {Session.get("trashListShow")?          
            <div  id="delete_menu" onClick={this.deleteMenuItem} className="delete_btn"  style={{display:'inline-block',padding: "20px"}}>
                 {
                    this.props.stateVal ? 
                       <i style={{color:'red'}} title="Delete" className="fa fa-times" aria-hidden="true"></i>:
                       <i className="fa fa-trash-o"  title="Trash" ></i> 
                  }
            </div> :
           <span className="col-md-1" id={this.props._id}><a href={FlowRouter.path('editMenuItem',{_id:this.props._id})} ><i className="fa fa-pencil-square-o" data-toggle="tooltip" title="Edit"></i></a></span>
          }
         {Session.get("trashListShow")? 
           <div  id="restore_menu" onClick={this.restoreMenuItem} className="delete_btn" style={{display:'inline-block'}}>
                {
                   this.props.stateVal? <i data-toggle="modal" data-target={'#'+this.props.data._id+'restoreMenu'} className="fa fa-archive" aria-hidden="true" onClick={this.restoreMenuItem} title="Restore" ></i> :<i className="fa fa-archive" data-toggle="tooltip" title="Restore" ></i> 
                 }
            </div>:
            <div  id="delete_menu" onClick={this.deleteMenuItem} className="delete_btn"  style={{display:'inline-block'}}>
                 {
                    this.props.stateVal ? 
                       <i style={{color:'red'}} title="Delete" className="fa fa-times" aria-hidden="true"></i>:
                       <i className="fa fa-trash-o"  title="Trash" ></i> 
                  }
            </div>
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

// Modal=React.createClass({
  
//   render:function(){
//     return(
//           <div id={this.props.data._id} className="modal fade" role="dialog">
//             <div className="modal-dialog">
//               <div className="modal-content">
//                 <div className="modal-body">
//                   <button type="button" className="close" data-dismiss="modal">&times;</button>
//                   <h4 className="modal-title">Do you really want to remove ?</h4>
//                 </div>
//                 <div className="modal-footer">
//                   <button type="button" className="btn btn-primary"  data-dismiss="modal">YES</button>
//                   <button type="button" className="btn btn-danger" data-dismiss="modal">NO</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//     )     
//   }
// })

// RestoreModal=React.createClass({
//   restoreArticle(){
//     Meteor.call('restoreArticles',this.props.data._id,function(err,data){
//       if(err){
//         console.log(err)
//       }else{
//         console.log(data)
//       }
//     });
//   },
//   render:function(){
//     return(
//           <div id={this.props.data._id+'restoreArticle'} className="modal fade" role="dialog">
//             <div className="modal-dialog">
//               <div className="modal-content">
//                 <div className="modal-body">
//                   <button type="button" className="close" data-dismiss="modal">&times;</button>
//                   <h4 className="modal-title">Do you really want to restore ?</h4>
//                 </div>
//                 <div className="modal-footer">
//                   <button type="button" className="btn btn-primary" onClick={this.restoreArticle} data-dismiss="modal">YES</button>
//                   <button type="button" className="btn btn-danger" data-dismiss="modal">NO</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//     )     
//   }
// })