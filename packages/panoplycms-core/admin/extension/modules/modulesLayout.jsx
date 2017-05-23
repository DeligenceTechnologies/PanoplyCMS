import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
// import BootstrapPaginator from 'react-bootstrap-pagination';
import { ReactiveVar } from 'meteor/reactive-var';

import Heading from '../../common/heading.jsx';
import LoadingSpinner from '../../common/loadingSpinner.jsx';
import NotFoundComp from '../../common/notFoundComp.jsx';
// import Pagination from '../../pagination/pagination.jsx';

import { trashModule } from '../../actions/module_action.js';
import { removeModule } from '../../actions/module_action.js';
import { restoreModule } from '../../actions/module_action.js';


class ModulesLayout extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showTrashList: false,
			id: ''
		};
		if(Meteor.settings.public && Meteor.settings.public.limit)
			this.props.dict.set('limit', Meteor.settings.public.limit)
		else
			this.props.dict.set('limit',20)
		// this.props.dict.set('currentPage', 1)
	}
	showModules(){
		if($('#display').val()=='trash'){
			this.setState({ showTrashList:true })
		}else{
			this.setState({ showTrashList:false })
		}
		this.props.dict.set('limit', Meteor.settings.public.limit)
	}
	addModules(){
		$('#add.modal').modal()
	}
	addModuleAction(type){
		let moduleArray = _.findWhere(this.props.modulesList, {name: type}) || []
		moduleArray = _.findWhere(moduleArray.routes, {role: 'add'}) || []
		FlowRouter.go(moduleArray.name)
	}
	editModuleAction(type, id){
		let moduleArray = _.findWhere(this.props.modulesList, {name: type}) || []
		moduleArray = _.findWhere(moduleArray.routes, {role: 'edit'}) || []
		FlowRouter.go(moduleArray.name,{_id:id})
	}
	trashModule(id) {
		Meteor.call('trashModule', id, (err, res) => {
			this.setState({ id: '' })
		})
		return dispatch => {
			dispatch(trashModule(id))
		}
	}
	deleteModule(id) {
		Meteor.call('deleteModule', id, (err, res) => {
			this.setState({ id:'' })
		})
		return dispatch => {
			dispatch(removeModule(id))
		}
	}
	restoreModule(id) {
		Meteor.call('restoreModule', id, (err, res) => {
			this.setState({ id:'' })
		})
		return dispatch => {
			dispatch(restoreModule(id))
		}
	}
	handelClick(e){
		switch(e.action){
			case 'edit':
				this.editModuleAction(e.type, e.id)
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
				break;
		}
	}
	loadMore(event){
		event.preventDefault();
		this.props.dict.set('limit', this.props.dict.get('limit')+10)
	}
	render() {
		let nodata='';
		if(this.props.results.length == 0  && this.state.showTrashList == false){
			nodata = <NotFoundComp />
		}else if(this.props.resultOfTrash.length == 0 && this.state.showTrashList == true){
			nodata = <NotFoundComp />
		}else{
			nodata = '';
		}
		let url=[{
	      title:"Dashboard",
	      url:"/admin/dashboard",
	      active:false
	    },{
	      title:i18n('ADMIN_EXTENSION_MODULES_MANAGER'),
	      url:"/admin/modules",
	      active:true
	    }];
		return (
			<div className="">
				<Heading key={this.props.isReady} data={i18n('ADMIN_EXTENSION_MODULES_MANAGER')} url={url} />
				<div className="custom-table">
				   	<div className="row">
				      	<div className="col-sm-12">
                			<div className="controls-header form-inline ">
               					<a className="btn custom-default-btn" onClick={this.addModules.bind(this)}>
									<i className="fa fa-plus-circle fa-lg"></i> {i18n('ADMIN_EXTENSION_MODULES_ADDMODULE')}
								</a>
								<div className="dataTables_length dataTables_wrapper pull-right">
								  	<label> Display

										<select id="display" className="form-control input-sm" onChange={this.showModules.bind(this)}>
											<option value="active">Active</option>
											<option value="trash">Trash</option>
										</select>
									</label>
								</div> 
                			</div>
				     	 </div>
				   </div>
            		<div className="panel panel-default panel-table">
					    <div className="panel-body ">
							<div className="table-responsive" id="non-editable">
								{
									nodata == '' ?
										<table className="table table-striped table-bordered table-list table-hover">
											<thead>
												<tr>
													<th className="">{i18n('ADMIN_EXTENSION_MODULES_ADDMODULE_FORM_TITLE')}</th>
													<th className="">{i18n('ADMIN_EXTENSION_MODULES_ADDMODULE_FORM_TYPE')}</th>
													<th className="">{i18n('ADMIN_EXTENSION_MODULES_ADDMODULE_FORM_POSITION')}</th>
													<th className="">{i18n('ADMIN_EXTENSION_MODULES_ADDMODULE_FORM_ACTIONS')}</th>
												</tr>
											</thead>
											<tbody>
												{
													this.state.showTrashList ?
														this.props.resultOfTrash.map(result => {
															return <ModuleList key={result._id} {...result} onClick={this.handelClick.bind(this)} stateVal={this.state.showTrashList} />;
														})
													:
														this.props.results.map(result => {
															return <ModuleList key={result._id} {...result} onClick={this.handelClick.bind(this)} stateVal={this.state.showTrashList} />;
														})
												}
											</tbody>
										</table>
									: ''
								}
								{ nodata }
							</div>
							<div className="col-md-3 col-md-offset-5">
								{
									!nodata ?
										!this.state.showTrashList ?
											this.props.dict.get('limit') < this.props.modulesCount ?
												<button className="btn custom-default-btn" id="load-more" onClick={this.loadMore.bind(this)}>Load more</button>
											: ''
										:this.props.dict.get('limit') < this.props.modulesCountTrash ?
											<button className="btn custom-default-btn" id="load-more" onClick={this.loadMore.bind(this)}>Load more</button>
										: ''
									: ''
								}
							</div>
					    </div>
					</div>
         		</div>
				<AddModulesPopup list={this.props.modulesList} onClick={this.addModuleAction.bind(this)} />
				<TrashModulesPopup id={this.state.id} onClick={this.trashModule.bind(this)} />
				<RemoveModulesPopup id={this.state.id} onClick={this.deleteModule.bind(this)} />
				<RestoreModulesPopup id={this.state.id} onClick={this.restoreModule.bind(this)} />
			</div>
		);
	}
}

export default createContainer((props) => {
	// let modules_Sub = Meteor.subscribe('modules', props.dict.get('currentPage'), props.dict.get('limit'))
	Tracker.autorun(()=> {
		let modules_Sub = Meteor.subscribe('modules', props.dict.get('limit'))
		ready = modules_Sub.ready();
	});

	// console.log("totalRecord >>>>>>", PanoplyCMSCollections.Modules.find({trash:false},{skip: (props.dict.get('currentPage') - 1)/props.dict.get('limit'), limit: props.dict.get('limit') },{_id:1, name: 1, type: 1, position: 1}).count())
	let query = PanoplyCMSCollections.Modules.find({trash:false},{limit: props.dict.get('limit')},{_id:1, name: 1, type: 1, position: 1}).fetch()
	return {
		isReady: ready,
		results: query,
		modulesCount: PanoplyCMSCollections.Modules.find({trash:false}).count(),
		modulesCountTrash: PanoplyCMSCollections.Modules.find({trash:true}).count(),
		resultOfTrash: PanoplyCMSCollections.Modules.find({trash:true},{limit: props.dict.get('limit')},{_id:1, title: 1, type: 1, position: 1}).fetch(),
		modulesList: PanoplyCMSCollections.RegisteredPackages.find({type: "module"}).fetch()
	};
}, ModulesLayout)

ModuleList = module => {
	style = { display: 'inline-block' };
	return (
		<tr>
			<td>{module.name ? module.name : ''}</td>
			<td>{module.type ? module.type : ''}</td>
			<td>{module.position ? module.position : ''}</td>
			<td>
				{
					! module.stateVal ?
						<div>
						  <div style={style} className="btn btn-default" onClick={() => {module.onClick({id: module._id, action:'edit', type:module.type})}} data-toggle="tooltip" title="Edit"  >
						  	<i  className="fa fa-pencil-square-o" ></i>
						  </div>  
						    &nbsp;&nbsp;
							<div style={style} className="btn btn-danger" onClick={() => {module.onClick({id: module._id, action:'trash'})}} title="Trash" data-toggle="tooltip" >
								<i  className="fa fa-trash-o" ></i>

							</div> 
						</div> :
					<div> 
						<div style={style} className="btn btn-danger" onClick={() => {module.onClick({id: module._id, action:'delete'})}} data-toggle="tooltip"  title="Delete">
							<i   className="fa fa-times"> </i>
						</div>
						&nbsp;&nbsp;
						<div style={style} className="btn btn-default" onClick={() => {module.onClick({id: module._id, action:'restore'})}} data-toggle="tooltip" title="Restore">
							<i  className="fa fa-undo" ></i>
						</div>
					</div>
				}
			</td>
		</tr>
	);
}

AddModulesPopup = (modules) => {
	return (
		<div id="add" className="modal fade add-popup" role="dialog">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header centered">
						<button type="button" className="close" data-dismiss="modal">&times;</button>
						<h4 className="modal-title">Please select a module you want to add</h4>
					</div>
					<div className="modal-body">
						<ul className="listModules">
							{
								modules.list.map(l => {
									return <li data-dismiss="modal" key={l._id} onClick={() => { modules.onClick(l.name) }}>{l.label?_.capitalize(l.label):_.capitalize(l.name)}</li>
								})
							}
						</ul>
					</div>
					<div className="modal-footer centered">
					<button type="button" className="btn custom-default-btn" data-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>
	);
}

TrashModulesPopup = (m) => {
	
	return (
		<div id="trash" className="modal fade add-popup" role="dialog">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header centered">
						<button type="button" className="close" data-dismiss="modal">&times;</button>
						<h4 className="modal-title">Do you really want to remove ?</h4>
					</div>
					<div className="modal-footer centered">
						<button type="button" className="btn custom-default-btn" data-dismiss="modal" onClick={()=>{m.onClick(m.id)}}>Yes</button>
						<button type="button" className="btn custom-default-btn" data-dismiss="modal">Cancel</button>
					</div>
				</div>
			</div>
		</div>
	);
}

RemoveModulesPopup = (m) => {
	return (
		<div id="remove" className="modal fade add-popup" role="dialog">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header centered">
						<button type="button" className="close" data-dismiss="modal">&times;</button>
						<h4 className="modal-title">Do you really want to parmanently delete ?</h4>
					</div>
					<div className="modal-footer centered">
						<button type="button" className="btn custom-default-btn" data-dismiss="modal" onClick={()=>{m.onClick(m.id)}}>Yes</button>
						<button type="button" className="btn custom-default-btn" data-dismiss="modal">Cancel</button>
					</div>
				</div>
			</div>
		</div>
	);
}

RestoreModulesPopup = (m) => {
	return (
		<div id="restore" className="modal fade add-popup" role="dialog">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header centered">
						<button type="button" className="close" data-dismiss="modal">&times;</button>
						<h4 className="modal-title">Do you really want to restore ?</h4>
					</div>
					<div className="modal-footer centered">
						<button type="button" className="btn custom-default-btn" data-dismiss="modal" onClick={()=>{m.onClick(m.id)}}>Yes</button>
						<button type="button" className="btn custom-default-btn" data-dismiss="modal">Cancel</button>
					</div>
				</div>
			</div>
		</div>
	);
}