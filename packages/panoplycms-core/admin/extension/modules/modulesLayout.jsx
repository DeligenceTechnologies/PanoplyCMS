import 'meteor/jquery';

ModulesLayout = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData() {
		const moduleList = Meteor.subscribe('moduleList');		
		return {
			results: PanoplyCMSCollections.Modules.find({trash:false},{_id:1, name: 1, type: 1, position: 1}).fetch(),
			resultOfTrash: PanoplyCMSCollections.Modules.find({trash:true},{_id:1, title: 1, type: 1, position: 1}).fetch(),
			modulesList: PanoplyCMSCollections.RegisteredPackages.find({type: "module"}).fetch()
		};
	},
	showModules(){
    if($('#display').val()=='trash'){
      this.setState({showTrashList:true})
    }else{
      this.setState({showTrashList:false})
    }    
  },
  getInitialState(){
    return{
      showTrashList:false,
      id: ''
    }
  },
  addModules: () => {
  	$('#add.modal').modal()
  },
  addModuleAction: function(type){
    let moduleArray = _.findWhere(this.data.modulesList, {name: type}) || []
    moduleArray = _.findWhere(moduleArray.routes, {role: 'add'}) || []
    console.log(moduleArray,'moduleArray-----')
    FlowRouter.go(moduleArray.name)
    //type=='menumodule'?FlowRouter.go('addMenuModule'):FlowRouter.go('addHtmlblock');
    
  	
  },
  editModuleAction(type,id){
    let moduleArray = _.findWhere(this.data.modulesList, {name: type}) || []
    moduleArray = _.findWhere(moduleArray.routes, {role: 'edit'}) || []
    FlowRouter.go(moduleArray.name,{_id:id})
    
  },
	trashModule: function(id) {
		that = this;
		Meteor.call('trashModule',id, function(err, res){ that.setState({id:''}) })
	},
	deleteModule: function(id) {
		that = this;
		Meteor.call('deleteModule',id, function(err, res){ that.setState({id:''}) })
	},
	restoreModule: function(id) {
		that = this;
		Meteor.call('restoreModule',id, function(err, res){ that.setState({id:''}) })
	},

	/* Handle Edit, Trash and Delete Actions*/
	handelClick: function(e){
		switch(e.action){
  		case 'edit':
  			/*e.type=='menumodule'?FlowRouter.go('editMenuModule',{_id:e.id}):FlowRouter.go('editHtmlblock',{_id:e.id});*/
        this.editModuleAction(e.type,e.id)
  			break;
  		case 'trash':
	  		this.setState({id: e.id})
	  		$('#trash.modal').modal() 
  			break;
  		case 'delete':
  			this.setState({id: e.id})
	  		$('#remove.modal').modal()
  			break;
  		case 'restore':
        this.setState({id: e.id})
        $('#restore.modal').modal()
  			//this.restoreModule(e.id)
  			break;
  	}  	
	},
	render() {
		nodata='';
    if((this.data.results).length==0  && this.state.showTrashList==false){
      nodata=<NotFoundComp/>
    }else if((this.data.resultOfTrash).length==0 && this.state.showTrashList==true){
      nodata=<NotFoundComp/>
    }else{
      nodata='';
    }
		return (
			<div className="col-md-10 content">
        <Heading  data={i18n('ADMIN_EXTENSION_MODULES_MANAGER')} />
        <div className="panel-heading"> 
        	<a className="btn btn-success btn-ico" onClick={this.addModules} >
        		<i className="fa fa-plus-circle fa-lg"></i> {i18n('ADMIN_EXTENSION_MODULES_ADDMODULE')}
        	</a>
          <div className="pull-right">
            Display: 
            <select id="display" onChange={this.showModules}>
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
                  <th className="">{i18n('ADMIN_EXTENSION_MODULES_ADDMODULE_FORM_TITLE')}</th>
		              <th className="">{i18n('ADMIN_EXTENSION_MODULES_ADDMODULE_FORM_TYPE')}</th>
		              <th className="">{i18n('ADMIN_EXTENSION_MODULES_ADDMODULE_FORM_POSITION')}</th>
		              <th className="">{i18n('ADMIN_EXTENSION_MODULES_ADDMODULE_FORM_ACTIONS')}</th>
                </tr>
              </thead>
              <tbody >
                {this.state.showTrashList?this.data.resultOfTrash.map(result => {
                   return <ModuleList key={result._id} {...result} onClick={this.handelClick} stateVal={this.state.showTrashList}/>;
                }):this.data.results.map(result => {
                   return <ModuleList key={result._id} {...result} onClick={this.handelClick} stateVal={this.state.showTrashList}/>;
                })} 
              </tbody>
            </table>
            {nodata}   
          </div>
        </div> 
        <AddModulesPopup list={this.data.modulesList} onClick={this.addModuleAction} />
        <TrashModulesPopup id={this.state.id} onClick={this.trashModule} />
        <RemoveModulesPopup id={this.state.id} onClick={this.deleteModule} />
        <RestoreModulesPopup id={this.state.id} onClick={this.restoreModule} />
      </div>

		);
	}
});

ModuleList = module => {
	style = { display: 'inline-block' };
	return <tr>
			<td>{module.name}</td>
			<td>{module.type}</td>
			<td>{module.position}</td>
			<td>
				{!module.stateVal ?
					<div> 
						<div style={style}><i  style={{color:"red"}} className="fa fa-trash-o" title="Trash" data-toggle="tooltip" onClick={() => {module.onClick({id: module._id, action:'trash'})}}></i></div> 
            &nbsp; &nbsp; &nbsp;  
            <div style={style}><i  style={{color:"#142849"}} className="fa fa-pencil-square-o" data-toggle="tooltip" title="Edit" onClick={() => {module.onClick({id: module._id, action:'edit', type:module.type})}} ></i></div>  
					</div> :
					<div> 
						<div style={style}><i title="Delete"  style={{color: "red"}}  className="fa fa-times" data-toggle="tooltip" onClick={() => {module.onClick({id: module._id, action:'delete'})}}></i></div>
            &nbsp; &nbsp; &nbsp;
            <div style={style}><i title="Restore" className="fa fa-undo" data-toggle="tooltip" onClick={() => {module.onClick({id: module._id, action:'restore'})}}></i></div>        
                
					</div>
				}
			</td>
		</tr>
}

AddModulesPopup = (modules) => {
	return <div id="add" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
	            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Please select a module you want to add</h4>
              </div>
              <div className="modal-body">
                <ul className="listModules">
                	{modules.list.map(l => {
	                	return <li data-dismiss="modal" key={l._id} onClick={() => {modules.onClick(l.name)}} >{l.label?_.capitalize(l.label):_.capitalize(l.name)}</li>
                	})}
                </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
}

TrashModulesPopup = (m) => {
	return <div id="trash" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Do you really want to delete?</h4>
              </div>
              <div className="modal-body"></div>
              <div className="modal-footer">
	              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={()=>{m.onClick(m.id)}} >Yes</button>
                <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
              </div>
            </div>
          </div>
        </div>
}

RemoveModulesPopup = (m) => {
	return <div id="remove" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
	            <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Do you want to parmanently delete?</h4>
              </div>
              <div className="modal-footer">
	              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={()=>{m.onClick(m.id)}} >Yes</button>
                <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
              </div>
            </div>
          </div>
        </div>
}

RestoreModulesPopup = (m) => {
  return <div id="restore" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Do you want to really restore?</h4>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={()=>{m.onClick(m.id)}} >Yes</button>
                <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
              </div>
            </div>
          </div>
        </div>
}