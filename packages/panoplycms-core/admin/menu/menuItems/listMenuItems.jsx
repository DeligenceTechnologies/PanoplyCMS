ListMenuItems = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
    that=this
    var handle2 = Meteor.subscribe('menuItems',FlowRouter.getParam("_id"),that.state.trashListShow);
    var Menus = Meteor.subscribe('menus');
    //var DefaultItem=Meteor.subscribe('defaultMenuItem');
   return {
     MenuItemsData : PanoplyCMSCollections.MenuItems.find({mainParentId:FlowRouter.getParam("_id"),trash:that.state.trashListShow}).fetch(),
     results : PanoplyCMSCollections.MenuItems.find().fetch(),
     Menus:PanoplyCMSCollections.Menus.find({trash:false}).fetch(),
      defaultMenuItem : PanoplyCMSCollections.MenuItems.findOne({homepage:true}),
      } 
    },
   getInitialState(){
    return{
      trashListShow:false,
     }
    },
  
listOfMenu(){  
    var elements = this.data.MenuItemsData;
    var menu = new Array();
    var element = new Array();
    var level=0;
  elements.forEach(function (elem1) {
      
            if(elem1.parentId=='' || elem1.trash==true){
                element.push({ _id: elem1._id, title: elem1.title, alias: elem1.alias, desc:elem1.desc, level:level });
                var child= getChild(elem1._id,level+1);
              }
             else if(elem1.parentId=='')
              {
                element.push({ _id: elem1._id, title: elem1.title, alias: elem1.alias, desc:elem1.desc, level:level });
                var child= getChild(elem1._id,level+1);
              }
           
        });
    function getChild(parent_id,level){
      elements.forEach(function (elem2) {
        if(elem2.parentId){
           if(parent_id== elem2.parentId){
              if(elem2.trash==true){
             element.push({ _id: elem2._id, title: elem2.title, alias: elem2.alias, desc:elem2.desc, child: getChild(elem2._id,level+1), level:level });
               }
              else {
                element.push({ _id: elem2._id, title: elem2.title, alias: elem2.alias, desc:elem2.desc, level:level });
                getChild(elem2._id,level+1)
            }
          }
        }
       }); 
    if(Session.get("trashListShow")){
         return element;
    }
    else{
         return _.sortBy(element,'level');
    }
    }
  //  console.log(element,"----",'level')
     return element;
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
    // console.log(FlowRouter.getParam("_id"),"routes")
      FlowRouter.go(''+'\addMenuItem',{_id:FlowRouter.getParam("_id")})
  },

  render() {
    that=this;
    var m =this.listOfMenu();
    nodata='';
    if((m).length==0  && this.state.trashListShow==false){
            nodata=<NotFoundComp/>;
    }
    else if((m).length==0 && this.state.trashListShow==true){
      nodata=<NotFoundComp/>
    }else{
      nodata='';
    }
    return (
      <div className="col-md-10 content" onClick={this.resetSuccessMsg}>
        <Heading  data={i18n('ADMIN_MENU_MENUITEMS')} />
        <div className="panel-heading"> 
          <a  className="btn btn-success btn-ico" onClick={this.storeMenuid} ><i className="fa fa-plus-circle fa-lg "></i>&nbsp;
            {i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM')}
          </a>
           <div className="pull-right" >
            Menus:  
            <select id="mainMenu" ref="mainMenu" onChange={this.showMenu} defaultValue={FlowRouter.getParam("_id")}>
              {this.data.Menus.map(function(result) {
                  return <option key={result._id} value={result._id} >{result.title}</option>;
                 
                })} 
            </select>
            
          </div>  
            <div className="pull-right col-md-3 ">
                  Display: 
                  <select id="display" onChange={this.showArticles} >
                    <option value="all">Active</option>
                    <option value="trash">Trash</option>
                  </select>
               </div>  
            </div>
       
          <div className="table-responsive" id="non-editable">
         <table className="table table-bordered"  >
              <thead>
                <tr>
                  <th>{i18n('ADMIN_MENU_ADDMENU_FORM_TITLE')}</th>
                  <th>{i18n('ADMIN_MENU_ADDMENU_FORM_DESCRIPTION')}</th>
                  <th>{/*i18n('ADMIN_MENU_MENUITEMS_ADDMENUITEM_DEFAULT')*/}</th>
                  <th>{i18n('ADMIN_MENU_ADDMENU_FORM_ACTION')}</th>
                 </tr>
              </thead>
                <tbody>
                 {m.map(function (menu) {
                      return  <Trvalue key={menu._id} data={menu} homepage={that.data.defaultMenuItem? that.data.defaultMenuItem._id: ""} />         
                  })} 
                 </tbody>          
              </table>
              {nodata}
          </div>
          <DefaultItemParentPopup /> 
          </div>    
     );
  }
});

var Trvalue = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
    that=this
     Meteor.subscribe('menuParentItems',this.props.data._id,false);
  return {
           MenuItemData: PanoplyCMSCollections.MenuItems.find({trash:false}).fetch(),
           defaultMenuItem1 : PanoplyCMSCollections.MenuItems.findOne({homepage:true})
          } 
    },
 
  changeDefaultValue(){
       Meteor.call("updateDefaultMenuItem",this.props.data._id,this.props.homepage,function(err,data){
        if(err)
        {
                  console.log(err)
          }
        else{    
             console.log(data,"Response")
            }
            });
    },

  render: function() {
    if(this.props.data._id==this.props.homepage){
    style={color:'#2574ab',cursor:'pointer'}
    classname="fa fa-star fa-lg"
    }else{
      classname='fa fa-star-o fa-lg'
      style={cursor:'pointer'}
    }
     var iconStyle={
        display:"inline-block",
        fontSize:"1.8em",
        verticalAlign:"top",
      };
    var divStyle = {
        display: "inline-block",
      };
    var anchorStyle= {
      display:"block",
    }
    var list='|-';
    for(i=0;i<that.props.data.level;i++){
      list +='|-';
    }
//console.log(that.props.data.level,"====>",that.props.data.title)
    
    var c=0;
    return (
       <tr>
          <td id="edit_menuItem" style={{lineHeight: "1em",width:"20%"}}> <large style={iconStyle}>{list}</large><div style={divStyle}><a href="#" ><large style={anchorStyle}  > {this.props.data.title}</large> </a><small style={anchorStyle}> (<span>{'Alias:'+this.props.data.alias}</span>) </small></div></td>
          <td style={{width:"50%"}} >{this.props.data.desc}</td>
          <td style={{width:"10%"}}>
             <span   style={style} className={classname} onClick={this.changeDefaultValue}></span>
          </td>
          <td style={{width:"10%"}}>
          
          <div  id="delete_menuItem" className="delete_btn" data-toggle="modal" data-target={"#"+this.props.data._id} style={{display:'inline-block'}}>
              
              {
                Session.get("trashListShow") ? <i style={{color:'red'}} title="Delete" className="fa fa-times" aria-hidden="true"></i> : <i style={{color:"red"}} className="fa fa-trash-o"  title="Trash" ></i> 
              }
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {
              Session.get("trashListShow")? <i data-toggle="modal" data-target={'#'+this.props.data._id+'restoreArticle'} className="fa fa-undo" aria-hidden="true" onClick={this.restoreArticle} title="Restore" ></i> : <a href={FlowRouter.path('editMenuItem',{_id:this.props.data._id})}> <i style={{color:"#142849"}} className="fa fa-pencil-square-o" data-toggle="tooltip" title="Edit" ></i> </a> 
            }
            <Modal key={this.props.data._id} data={this.props.data} stateVal={Session.get("trashListShow")} homepage={this.data.defaultMenuItem1? this.data.defaultMenuItem1._id: ""} />
            <RestoreModal key={this.props.data._id+"restore"} data={this.props.data}/>
            </td>

            
       </tr>
      );
    
  }
});
Modal=React.createClass({
   deleteMenuItem(){
     if(Session.get("trashListShow")){
                     Meteor.call('deleteMenu',this.props.data._id,function(err,data){
                  
                      console.log(err,data);
                });
      }
      else {
                 Meteor.call('deleteMenuItem',this.props.data._id,this.props.homepage,function(err,data){
                    if(data){
                              // console.log(data);
                              if(data=="Its the parent of default")
                              $('#defaultItemParentPopup.modal').modal()
                    }
                    else{
                      console.log(err)
                    }
                  });
      } 
    },
  render:function(){
    return(
          <div id={this.props.data._id} className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                  
                  {(this.props.data._id==this.props.homepage)?
                  <div>
                   <div className="modal-body">
                      <button type="button" className="close" data-dismiss="modal">&times;</button>
                      <h4 className="modal-title">Default Item can not be deleted</h4>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Ok</button>
                   </div>
                   </div> 
                    :
                    <div>
                    <div className="modal-body">
                      <button type="button" className="close" data-dismiss="modal">&times;</button>
                      <h4 className="modal-title">Do you really want to remove ?</h4>
                    </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" onClick={this.deleteMenuItem} data-dismiss="modal">YES</button>
                  <button type="button" className="btn btn-danger" data-dismiss="modal">NO</button>
                </div>
                </div>
                  }
                  
                
              </div>
            </div>
          </div>
    )     
  }
})

RestoreModal=React.createClass({
   restoreMenuItem(){
        Meteor.call('restoreMenuItem',this.props.data._id,function(err,data){
           if(err){
        console.log(err)
      }else{
        // console.log(data)
      }
         });
      
     },

  render:function(){
    return(
          <div id={this.props.data._id+'restoreArticle'} className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Do you really want to restore ?</h4>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" onClick={this.restoreMenuItem} data-dismiss="modal">YES</button>
                  <button type="button" className="btn btn-danger" data-dismiss="modal">NO</button>
                </div>
              </div>
            </div>
          </div>
    )     
  }
})

DefaultItemParentPopup = (m) => {
    return(
          <div id="defaultItemParentPopup" className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">You can not delete default menu Items parent.Please change the default menu Item first after you can delete menu Item.</h4>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-dismiss="modal">Ok</button>
                </div>
              </div>
            </div>
          </div>
    )     
}
