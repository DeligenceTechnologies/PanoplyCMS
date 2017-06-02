import React, { Component } from 'react';
import { render } from 'react-dom';

import MenuItemT from './menuItemTypes.jsx';
import Positions from './positions.jsx';
import Heading from '../common/heading.jsx';

var createReactClass = require('create-react-class');

// import store from '../store/store.js';
import { updateHtmlModule } from '../actions/htmlblock_action.js';

let editHtmlHandler = function() {
  let onClick = function(id, obj) {
    store.dispatch(updateHtmlModule(id, obj))
  };
  return {
    onClick
  };
};

EditHtmlblock = createReactClass({
	mixins: [ReactMeteorData],
	getMeteorData() {
		return {
			menuResults: PanoplyCMSCollections.Menus.find({trash:false}).fetch(),
			templateRegister: PanoplyCMSCollections.RegisteredPackages.findOne({name:'template'}),
			htmlblockModuleData: PanoplyCMSCollections.Modules.findOne({_id:this.props._id})
		};
	},
	getInitialState(){
		return {
			valid:'',
			gridLength:0,
			checkAllPage:null
		}
	},
	componentDidMount(){
		this.handler = editHtmlHandler();

		let validObj=$("#menuModule").validate({
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
		this.setState({valid:validObj})  
		$('.options').toggleClass('active');
		$('.option').button();
		$('#article').summernote({height: 200});
	},
	checkAllPage(){
		this.setState({
			checkAllPage:$("#all-page").is(':checked')?"true":"false"
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

		if(this.state.valid.form()){
			let name=ReactDOM.findDOMNode(this.refs.name).value.trim();
			let position=$('#position').val()
			let article=$('#article').summernote('code');

			let allPage=$('#all-page').is(':checked')
			let showTitle=true;
			if($('input[name="options"]:checked').val()){
				if($('input[name="options"]:checked').val() == 1){
					showTitle = true
				}else{
					showTitle = false
				}
			}else if(this.data.htmlblockModuleData.showTitle){
				showTitle = this.data.htmlblockModuleData.showTitle
			}else{
				showTitle = false
			}
			let htmlObj = {
				name: name,
				type:'htmlblock',
				position:position,
				showTitle:showTitle,
				menuItems:menuItems,
				moduleClass: $("#moduleClass").val(),
				allPages:allPage,
				moduleData:{
					gridLength:$("#editGridSize").val() && $("#editGridSize").val() != 0?$("#editGridSize").val():12,
					html:article
				}
			}
			select = {
				_id:this.props._id
			}

			/*Meteor.call('editModule', select, htmlObj,(error,data)=>{
				if(error){
					AlertMessage('ERROR', error.reason, 'error');
				}else{
					console.log("module edit success")
					AlertMessage('SUCCESS', 'Successfully! updated htmlblock.', 'success');
				}
			})*/
			this.handler.onClick(select, htmlObj);
		}
	},
	componentDidUpdate: function() {
		$('#article').summernote({height: 200});
	},
	componentWillUnmount: function() {
		$('#article').summernote('destroy');
	},
	render(){
		c = 0;

		let url=[{
      title: 'Dashboard',
      url:"/admin/dashboard",
      active: false
    },{
      title: 'Module Manager',
      url:"/admin/modules",
      active: false
    },{
      title: 'Edit Htmlblock',
      url:"admin/modules/htmlblock/"+FlowRouter.getParam("_id"),
      active: true
    }];
		return (
			<div>
				{/*<div className="page-header">
					<h3 className="sub-header">Edit Htmlblock</h3>
				</div>*/}

				<Heading data='Edit Htmlblock' url={url}/>

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
											<label htmlFor = "firstname" className = "col-sm-2 control-label">Title</label>
											<div className = "col-sm-10">
												<input type = "text" name="name" ref="name"  className = "form-control"  placeholder = "Enter title" defaultValue={this.data.htmlblockModuleData?this.data.htmlblockModuleData.name:''} required/>
											</div>
										</div>
										<div className="form-group switch-btn">
											<label className="col-sm-2 control-label">Show Title</label>
											<div className="col-sm-10">
												<div className="btn-group switch-btn" data-toggle="buttons">
													<label className={this.data.htmlblockModuleData.showTitle?'active option btn btn-primary':'option btn btn-primary'} ref="option" >
														<input type="radio" className="rad" name="options" ref="options" id="option2" value={1}/>{i18n('ADMIN_SETTINGS_SITE_OFFLINE_YES')}
													</label>
													<label className={this.data.htmlblockModuleData.showTitle?'option btn btn-primary':'active option btn btn-primary'} ref="option">
													<input type="radio" className="rad" ref="options" name="options" id="option3" value={0} /> {i18n('ADMIN_SETTINGS_SITE_OFFLINE_NO')}
													</label>
												</div>

											</div>
										</div>
										
										<Positions key={this.data.templateRegister._id} changePostion={this.changePostion} data={this.data.templateRegister} value={this.data.htmlblockModuleData?this.data.htmlblockModuleData.position:''}/>

										<div className = "form-group">
											<label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_ARTICLE')}</label>
											<div className = "col-sm-10">
												<div className="summernote">
													<textarea type="text" id="article" className="form-control" defaultValue={this.data.htmlblockModuleData?this.data.htmlblockModuleData.moduleData.html:''}></textarea>
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
												<input type="checkbox" onChange={this.checkAllPage} defaultChecked={this.data.htmlblockModuleData.allPages} className="allPage" id="all-page" ref="desc" name="allPage" />
											</div>
										</div>
										{ 
											this.state.checkAllPage?
												this.state.checkAllPage == "false" ?
													<MenuItemT value={this.data.htmlblockModuleData?this.data.htmlblockModuleData.menuItems:[]} />
													:
														''
												:
													!this.data.htmlblockModuleData.allPages?
														<MenuItemT value={this.data.htmlblockModuleData?this.data.htmlblockModuleData.menuItems:[]} />
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
													<input type = "text" name="moduleClass" ref="moduleClass" id="moduleClass" className = "form-control" defaultValue={this.data.htmlblockModuleData?this.data.htmlblockModuleData.moduleClass:''} />
												</div>
											</div>
											<div className = "form-group">
												<label htmlFor = "editGridSize" className = "col-sm-2 control-label">Bootstrap Grid Size</label>
												<div className = "col-sm-10">
													<input type="number" className="editGridSize form-control" ref="editGridSize" id="editGridSize" defaultValue={this.data.htmlblockModuleData.moduleData.gridLength?this.data.htmlblockModuleData.moduleData.gridLength:0} min={0} max={12-this.state.gridLength} name="gridSize" />
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

AlertMessage = (title, message, messageType) => {
  // TODO -> change icons (a/c to your need)
  let type = '', icon = '';
  if(messageType == 'warning'){
    type = 'warning-msg';
    icon =  'fa-exclamation-triangle';
  }else if(messageType == 'success'){
    type = 'success-msg';
    icon =  'fa-check';
  }else if(messageType == 'error'){
    type = 'error-msg';
    icon =  'fa-remove';
  }
  return (
    Bert.alert({
      title: title,
      message: message,
      type: type,
      style: 'growl-top-right',
      icon: icon
    })
  );
}

/*class AlertMessageError extends Component {
  render(){
    return (
      <div className="successMsg alert alert-danger">
        <button type="button" onClick={this.props.func} className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <strong>Error! </strong>
        {this.props.data}
      </div>
    )
  }
}*/


/*MenuList = createReactClass({
	propTypes:{
		menu: React.PropTypes.object.isRequired,
	},
	render(){
		return (
			<option value={this.props.menu._id}>{this.props.menu.title}</option>
		);
	}
});*/
export default EditHtmlblock;