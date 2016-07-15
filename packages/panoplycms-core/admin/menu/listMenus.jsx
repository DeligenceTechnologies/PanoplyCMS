ListMenus = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
    Meteor.subscribe('menus');
    Meteor.subscribe('trashMenus')
   
  return {
              results: PanoplyCMSCollections.Menus.find({trash:false}).fetch(),
              resultOfTrash: PanoplyCMSCollections.Menus.find({trash:true}).fetch()
            } 
  },
  showArticles(){
    if($('#display').val()=='trash'){
      this.setState({trashListShow:true})
    }else{
      this.setState({trashListShow:false})
    }
  },
  getInitialState(){
    return{
            trashListShow:false
          }
  },
  render() {
    nodata='';
   if((this.data.results).length==0  && this.state.trashListShow==false){
      nodata=<NotFoundComp/>;
    }
    else if((this.data.resultOfTrash).length==0 && this.state.trashListShow==true){
      nodata=<NotFoundComp/>
    }else{
      nodata='';
    }
    that=this;
    return (
      <div className="col-md-10 content">
        <Heading  data={i18n('ADMIN_MENU')} />
        <div className="panel-heading"> 
          <a  className="btn btn-success btn-ico" href={FlowRouter.path('addMenu')} >
            <i className="fa fa-plus-circle fa-lg "></i>&nbsp;
              {i18n('ADMIN_MENU_ADDMENU')}
          </a>
          <div className="pull-right">
            Display: 
            <select id="display" onChange={this.showArticles}>
              <option value="active">Active</option>
              <option value="trash">Trash</option>
            </select>
          </div>
        </div>
        <div className="panel-body">
          <div className="table-responsive" id="non-editable">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>{i18n('ADMIN_MENU_ADDMENU_FORM_TITLE')}</th>
                  <th>{i18n('ADMIN_MENU_ADDMENU_FORM_DESCRIPTION')}</th>
                  <th>{i18n('ADMIN_MENU_ADDMENU_FORM_ACTION')}</th>
                  </tr>
              </thead>
              <tbody>
                {this.state.trashListShow ? this.data.resultOfTrash.map(function(result) {
                   return <Trvalue key={result._id} data={result} stateVal={that.state.trashListShow}/>;
                }):
                this.data.results.map(function(result) {
                   return <Trvalue key={result._id} data={result} stateVal={that.state.trashListShow}/>;
                }) } 
              </tbody>
            </table>
            {nodata}
          </div>
        </div>   
              {this.data.results.map(function(result) {
                  return  <ModalMenu key={result._id} data={result} stateVal={that.state.trashListShow} />         
                })} 
              {this.data.resultOfTrash.map(function(result) {
                  return  <RestoreModalMenu key={result._id} data={result}/>         
              })} 
              {this.data.resultOfTrash.map(function(result) {
                  return  <ModalMenu key={result._id} data={result} stateVal={that.state.trashListShow} />         
              })}
      </div>
    );
  }
});
var Trvalue = React.createClass({
  storeMenuid(event){
      event.preventDefault();
      Session.set('MenuId',this.props.data._id);
      FlowRouter.go('listMenuItems',{_id:this.props.data._id})
  },
  render: function() {
    var c=0;
    return (
             <tr>
                <td id="edit_menu"  ><a onClick={this.storeMenuid} ><large> {this.props.data.title}</large><small> (<em>{this.props.data.alias}</em>) </small> </a></td>
                <td  >{this.props.data.desc}</td>  
                 <td >
                    <div  id="delete_article"  className="delete_btn" data-toggle="modal" data-target={"#"+this.props.data._id} style={{display:'inline-block'}}>
                      
                      {
                        this.props.stateVal ? 
                        <i style={{color:'red'}} title="Delete" className="fa fa-times" aria-hidden="true"></i> 
                        : <i style={{color:"red"}} className="fa fa-trash-o"  title="Trash" ></i> 
                      }
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {
                      this.props.stateVal? 
                      <i data-toggle="modal" data-target={'#'+this.props.data._id+'restoreArticle'} className="fa fa-undo" aria-hidden="true" onClick={this.restoreMenu} title="Restore" ></i> 
                      : <a href={FlowRouter.path('editMenu',{_id:this.props.data._id})}> <i style={{color:"#142849"}} className="fa fa-pencil-square-o" data-toggle="tooltip" title="Edit" ></i> </a> 
                    }
                  </td>
              </tr>
    )
  }
});

ModalMenu=React.createClass({
  deleteMenu(){
        if(this.props.stateVal){
            Meteor.call('deleteMenuParmanent',this.props.data._id,function(err,data){
          });
      }else{
            Meteor.call('deleteMenus',this.props.data._id,function(err,data){
            console.log(err,"response",data)
          });
        }
      },
  render:function(){
    return(
          <div id={this.props.data._id} className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Do you really want to remove ?</h4>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" onClick={this.deleteMenu} data-dismiss="modal">YES</button>
                  <button type="button" className="btn btn-danger" data-dismiss="modal">NO</button>
                </div>
              </div>
            </div>
          </div>
    )     
  }
})

RestoreModalMenu=React.createClass({
  restoreMenu(){
    Meteor.call('restoreMenus',this.props.data._id,function(err,data){
      if(err){
        console.log(err)
      }else{
        console.log(data)
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
                  <button type="button" className="btn btn-primary" onClick={this.restoreMenu} data-dismiss="modal">YES</button>
                  <button type="button" className="btn btn-danger" data-dismiss="modal">NO</button>
                </div>
              </div>
            </div>
          </div>
    )     
  }
})