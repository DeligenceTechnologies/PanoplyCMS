import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import Heading from '../common/heading.jsx';
import MenuItemType from './menuItemTypes.jsx';
import Positions from './positions.jsx';

var createReactClass = require('create-react-class');

import store from '../store/store.js';
import { insertHtmlModule } from '../actions/htmlblock_action.js';

let addHtmlHandler = function() {
  let onClick = function(obj) {
    store.dispatch(insertHtmlModule(obj))
  };
  return {
    onClick
  };
};

AddHtmlblock = createReactClass({
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
			templateRegister: PanoplyCMSCollections.RegisteredPackages.findOne({name:'template'})
		};
	},
	componentDidMount(){
		this.handler = addHtmlHandler();
		/*let validObj = $("#menuModule").validate({
			rules: {
				name: {
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
		this.setState({ valid:validObj })*/
		$('.options').toggleClass('active');
		$('.option').button();

		$('#article').summernote({ height: 200 });
	},
	checkAllPage(){
		this.setState({
			checkAllPage:$("#checkAllPage").is(':checked')
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
		let menuItems = [];
		$.each($("input[name='menucheck']:checked"), function(){
			menuItems.push($(this).val());
		});
		// if(this.state.valid.form()){
			let name = ReactDOM.findDOMNode(this.refs.name).value.trim();
			let position = $('#position').val();
			let article = $('#article').summernote('code');
			let showTitle = $('input[name="options"]:checked').val() == 0?false:true;
			let allPage = $('#checkAllPage').is(':checked');
			let htmlObj = {
				name: name,
				type: 'htmlblock',
				position: position,
				showTitle: showTitle,
				menuItems: menuItems,
				moduleClass: $("#module-class").val(),
				allPages: allPage,
				moduleData:{
					gridLength:$("#gridSize").val() && $("#gridSize").val() != 0?$("#gridSize").val():12,
					html: article
				}
			}
			/*Meteor.call('addModule', htmlObj, (error,data) => {
				if(error){
					AlertMessage('ERROR', error.reason, 'error');
				}else{
					AlertMessage('SUCCESS', 'Successfully! added htmlblock.', 'success');
					ReactDOM.findDOMNode(this.refs.name).value=''
					$("#article").summernote("code", "");
					$("input").prop("checked", false);
					$('#position').val('')
				}
			})*/
			this.handler.onClick(htmlObj);
			this.refs.name.value = '';
			$("#article").summernote("code", "");
			$("input").prop("checked", false);
			$('#position').val('');
			$('#module-class').val('');
		// }
	},
	componentWillUnmount: function() {
		$('#article').summernote('destroy');
	},
	render(){
		let url=[{
      title: 'Dashboard',
      url:"/admin/dashboard",
      active: false
    },{
      title: 'Module Manager',
      url:"/admin/modules",
      active: false
    },{
      title: 'Add Htmlblock',
      url:"/admin/modules/htmlblock/add",
      active: true
    }];
		return (
			<div>
				{/*<div className="page-header">
					<h3 className="sub-header">Add Htmlblock</h3>
				</div>*/}
				<Heading data='Add Htmlblock' url={url}/>
				<form id="menuModule" className = "form-horizontal" role = "form" onSubmit={this.submitData}>
					<div className="controls-header">
						<div className="form-group">
							<div className = "col-sm-12">
								<button className="btn custom-default-btn">SAVE</button>
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
											<label htmlFor = "firstname" className = "col-sm-2 control-label">Title</label>
											<div className = "col-sm-10">
												<input type = "text" name="name" ref="name" className = "form-control" placeholder = "Enter title" required/>
											</div>
										</div>
										<div className="form-group switch-btn">
											<label className="col-sm-2 control-label">Show Title</label>
											<div className="col-sm-10">
												<div className="btn-group switch-btn" data-toggle="buttons">
													<label className='active option btn btn-primary' ref="option">
														<input type="radio" className="rad" name="options" ref="options" id="option2" value={1}/>{i18n('ADMIN_SETTINGS_SITE_OFFLINE_YES')}
													</label>
													<label className='option btn btn-primary' ref="option" >
														<input type="radio" className="rad" ref="options" name="options" id="option3" value={0} /> {i18n('ADMIN_SETTINGS_SITE_OFFLINE_NO')}
													</label>
												</div>
											</div>
										</div>

										<Positions key={this.data.templateRegister._id} changePostion={this.changePostion} data={this.data.templateRegister} value={this.data.templateRegister} />

										<div className = "form-group">
											<label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_ARTICLE')}</label>
											<div className = "col-sm-10">
												<div className="summernote">
													<textarea id="article" className="form-control"></textarea>
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
												<input type="checkbox" onChange={this.checkAllPage} id="checkAllPage" className="allPage" ref="desc" name="allPage" />
											</div>
										</div>
										{ 
											!this.state.checkAllPage ?
												<MenuItemType value={[]} />
											:
												''
										}
									</div>
								{/* =======> MENU ASSIGNMENT END<======= */}


								{/* =======> ADVANCED SETTING START<======= */}
									<div id="module-advanced" className="tab-pane">
										<div className="advance-htmlBlock">
											<div className = "form-group">
												<label htmlFor = "firstname" className = "col-sm-2 control-label">Module Suffix Class</label>
												<div className = "col-sm-10">
													<input type = "text" name="moduleClass" ref="moduleClass" id="module-class" className = "form-control" placeholder = "Enter Module Suffix class" />
												</div>
											</div>
											<div className = "form-group">
												<label htmlFor = "gridSize" className = "col-sm-2 control-label">Bootstrap Grid Size</label>
												<div className = "col-sm-10">
													<input type="number" className="gridSize form-control" ref="gridSize" id="gridSize" defaultValue={0} min={0} max={12-this.state.gridLength} name="gridSize" />
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

/*MenuList = createReactClass({
	render(){
		return (
			<option value={this.props.menu._id}>{this.props.menu.title}</option>
		);
	}
});*/

HTMLBlock = data => {
	showTitle = '';
	if(data.module_title) showTitle = <h3>{data.module_title}</h3>;
	return (
		<div className={data.moduleClass}>
			{showTitle}
			{data.html?<div dangerouslySetInnerHTML={{__html: data.html}} />:'Nothing Here'}
		</div>
	);
}

export default AddHtmlblock;