import React, { Component } from 'react';
import { render } from 'react-dom';

import Positionn from './positionn.jsx'
import MenuItemTypes from './menuItemTypes.jsx'

var createReactClass = require('create-react-class');

// import store from '../store/store.js';
import { updateMenuModule } from '../actions/menumodule_action.js';

var createReactClass = require('create-react-class');

let editMenuModuleHandler = function() {
  let onClick = function(id, obj) {
    store.dispatch(updateMenuModule(id, obj))
  };
  return {
    onClick
  };
};

EditMenuModule = createReactClass({
	getInitialState(){
		return {
			valid:'',
			gridLength:0,
			checkAllPage:null
		}
	},
	mixins: [ReactMeteorData],
	getMeteorData() {
		return {
			menuResults: PanoplyCMSCollections.Menus.find({trash:false}).fetch(),
			templateRegister: PanoplyCMSCollections.RegisteredPackages.findOne({name:'template'}),
			menuModuleModuleData: PanoplyCMSCollections.Modules.findOne({_id:this.props._id})
		};
	},
	componentDidMount(){
		let validObj=$("#menuModule").validate({
			rules: {
				title: {
					required: true
				},
				position: {
					required: true
				},
				selectMenu: { 
					required: true
				}
			},
			submitHandler: function (form) { // for demo
				return false;
			},
			errorElement : 'div',
			errorPlacement: function(error, element) {
				var placement = $(element).data('error');
				if (placement) {
					$(placement).append(error)
				} else {
					error.insertAfter(element);
				}
			}
		});
		this.setState({valid:validObj})  
		$('.options').toggleClass('active');
		$('.option').button();

		this.handler = editMenuModuleHandler();
	},
	checkAllPage(){
		this.setState({
			checkAllPage:$("#allPages").is(':checked')?"true":"false"
		});
	},
	changePostion(val){
		let modules = PanoplyCMSCollections.Modules.find({position:val}).fetch();
		let gridLength = 0;
		if(modules.length && modules.gridLength){
			for(let i in modules){
				gridLength += modules.gridLength;
			}
		}
		this.setState({
			gridLength:val
		});
	},
	submitData(event){
		event.preventDefault()
		var menuItems = [];
		$.each($("input[name='menucheck']:checked"), function(){            
			menuItems.push($(this).val());
		});

		if(this.state.valid.form()){
			let title=ReactDOM.findDOMNode(this.refs.title).value.trim()
			let position=$('#position').val()
			let menu=ReactDOM.findDOMNode(this.refs.selectMenu).value.trim()

			let allPage=$('#allPages').is(':checked')
			let showTitle=true;
			if($('input[name="options"]:checked').val()){
				if($('input[name="options"]:checked').val() == 1){
					showTitle = true
				}else{
					showTitle = false
				}
			}else if(this.data.menuModuleModuleData.showTitle){
				showTitle = this.data.menuModuleModuleData.showTitle
			}else{
				showTitle = false
			}

			let menuModuleObj = {
				name: title,
				type:'menumodule',
				position:position,
				showTitle:showTitle,
				menuItems:menuItems,
				moduleClass: $("#ModuleClass").val(),
				allPages:allPage,
				moduleData:{
					gridLength:$("#editGridSize").val() && $("#editGridSize").val()!=0?$("#editGridSize").val():12,
					menuItem:menu
				}
			}
			let select={
				_id:this.props._id
			}

			/*Meteor.call('editModule', select, menuModuleObj,(error,data)=>{
				if(error){
					AlertMessage('ERROR', error.reason, 'error');
				}else if(data){
					AlertMessage('SUCCESS', 'Successfully! updated menu module.', 'success');
				}
			})*/
			this.handler.onClick(select, menuModuleObj);
		}
	},
	render(){
		let c = 0;

		return (
			<div>
				<div className="page-header">
					<h3 className="sub-header">Edit Menu Module</h3>
				</div>
				<form id="menuModule" className = "form-horizontal" role = "form" onSubmit={this.submitData}>
					<div className="controls-header">
						<div className="form-group">
							<div className = "col-sm-12">
								<button className="btn custom-default-btn">UPDATE</button>
								&nbsp;&nbsp;
								<a className="btn custom-default-btn" href={FlowRouter.path('modulesManager')}>CANCEL</a>
							</div>
						</div>
					</div>
					<div className="panel-body custom-panel">

						<div id="notification"></div>
						<div className="custom-tab">
							<ul className="nav nav-tabs">
							    <li className="active"><a data-toggle="tab" href="#module-home">Module</a></li>
							    <li><a data-toggle="tab" href="#module-menu-assign">Menu Assignment</a></li>
							    <li><a data-toggle="tab" href="#module-advanced">Advanced</a></li>
							</ul>
							<div className="tab-content">
								{/* =======> MODULE START<======= */}
		    					<div id="module-home" className="tab-pane active">
										<div className = "form-group">
											<label htmlFor = "firstname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_TITLE')}</label>
											<div className = "col-sm-10">
												<input type = "text" name="title" ref="title" className = "form-control"  placeholder = "Enter title" defaultValue={this.data.menuModuleModuleData?this.data.menuModuleModuleData.name:''} required />
											</div>
										</div>
										<Positionn key={this.data.templateRegister._id} data={this.data.templateRegister} value={this.data.menuModuleModuleData?this.data.menuModuleModuleData.position:''} />
										<div className = "form-group">
											<label htmlFor = "lastname" className = "col-sm-2 control-label">Select Menu</label>
											<div className = "col-sm-10">
												<select defaultValue='select' defaultValue={this.data.menuModuleModuleData?this.data.menuModuleModuleData.moduleData.menuItem:''} name="selectMenu" ref="selectMenu" className="selectpicker form-control " data-style="btn-primary" >
													<option value="">--select--</option>
													{
														this.data.menuResults.map(function(result){
															return <option key={result._id} value={result._id}>{result.title}</option>
														})
													}
												</select>
											</div>
										</div>
										<div className="form-group switch-btn">
											<label className="col-sm-2 control-label">Show Title</label>
											<div className="col-sm-10">
												<div className="btn-group switch-btn" data-toggle="buttons">
													<label className={this.data.menuModuleModuleData.showTitle?'active option btn btn-primary':'option btn btn-primary'} ref="option" >
														<input type="radio" className="rad" name="options" ref="options" id="option2" value={1}/>{i18n('ADMIN_SETTINGS_SITE_OFFLINE_YES')}
													</label>
													<label className={this.data.menuModuleModuleData.showTitle?'option btn btn-primary':'active option btn btn-primary'} ref="option" >
														<input type="radio" className="rad" ref="options" name="options" id="option3" value={0} /> {i18n('ADMIN_SETTINGS_SITE_OFFLINE_NO')}
													</label>
												</div>
											</div>
										</div>
									</div>
								{/* =======> MODULE END<======= */}


								{/* =======> MENU ASSIGNMENT START<======= */}
									<div id="module-menu-assign" className="tab-pane">
										<div className = "form-group">
											<label htmlFor = "lastname" className = "col-sm-2 control-label">All Page</label>
											<div className = "col-sm-10">
												<input onChange={this.checkAllPage} type="checkbox" defaultChecked={this.data.menuModuleModuleData.allPages} className="allPage" ref="desc" id="allPages" name="allPage" />
											</div>
										</div>
										{ 
											this.state.checkAllPage?
												this.state.checkAllPage == "false"?
													<MenuItemTypes value={this.data.menuModuleModuleData.menuItems?this.data.menuModuleModuleData.menuItems:[]}/>
												:
													''
											:
												!this.data.menuModuleModuleData.allPages?
													<MenuItemTypes value={this.data.menuModuleModuleData.menuItems?this.data.menuModuleModuleData.menuItems:[]}/>
												:
													''
										}
									</div>
								{/* =======> MENU ASSIGNMENT END<======= */}


								{/* =======> ADVANCED SETTING START<======= */}
									<div id="module-advanced" className="tab-pane">
										<div className = "form-group">
												<label htmlFor = "firstname" className = "col-sm-2 control-label">Module Suffix Class</label>
												<div className = "col-sm-10">

													<input type = "text" name="moduleClass" ref="moduleClass" id="ModuleClass" className = "form-control" defaultValue={this.data.menuModuleModuleData?this.data.menuModuleModuleData.moduleClass:''} required />
												</div>
											</div>
										<div className="advance-htmlBlock">
											<div className = "form-group">
												<label htmlFor = "editGridSize" className = "col-sm-2 control-label">Bootstrap Grid Size</label>
												<div className = "col-sm-10">
													<input type="number" className="gridSize form-control" ref="editGridSize" id="editGridSize" defaultValue={this.data.menuModuleModuleData.moduleData.gridLength?this.data.menuModuleModuleData.moduleData.gridLength:0} min={0} max={12-this.state.gridLength} name="editGridSize" />
												</div>
											</div>
											
										</div>
									</div>
								{/* =======> ADVANCED SETTING END<======= */}
							</div>
						</div>
					</div>
				</form>
			</div>
		)
	}
});

MenuList = createReactClass({
	render(){
		return (
			<option value={this.props.menu._id}>{this.props.menu.title}</option>
		);
	}
});

export default EditMenuModule;