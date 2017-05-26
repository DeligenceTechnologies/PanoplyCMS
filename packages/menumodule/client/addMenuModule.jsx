import React, { Component } from 'react';
import { render } from 'react-dom';

import Positionn from './positionn.jsx'
import MenuItemTypes from './menuItemTypes.jsx'

var createReactClass = require('create-react-class');

AddMenuModule = createReactClass({
	getInitialState(){
		return {
			valid: '',
			gridLength:0,
			checkAllPage:null
		}
	},
	mixins:[ReactMeteorData],
	getMeteorData() {
		return {
			menuResults: PanoplyCMSCollections.Menus.find({trash:false}).fetch(),
			templateRegister: PanoplyCMSCollections.RegisteredPackages.findOne({name:'template'})
		};
	},
	checkAllPage(){
		this.setState({
			checkAllPage:$("#allpage").is(':checked')
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
			let title=ReactDOM.findDOMNode(this.refs.title).value.trim();
			let position=$('#position').val()
			let menu=ReactDOM.findDOMNode(this.refs.selectMenu).value.trim()
			let showTitle=$('input[name="options"]:checked').val() == 0?false:true;
			let allPage=$('#allpage').is(':checked');

			obj = {
				name: title,
				type:'menumodule',
				position:position,
				showTitle:showTitle,
				menuItems:menuItems,
				moduleClass: $("#module-Class").val(),
				allPages:allPage,
				moduleData:{
					gridLength:$("#gridSize").val() && $("#gridSize").val() != 0?$("#gridSize").val():12,
					menuItem:menu
				}
			}
			Meteor.call('addModule', obj, (error,data)=>{
				if(error){
					AlertMessage('ERROR', error.reason, 'error');
				}else{
					AlertMessage('SUCCESS', 'Successfully! added menu module.', 'success');
					ReactDOM.findDOMNode(this.refs.title).value=''
					ReactDOM.findDOMNode(this.refs.selectMenu).value=''
					$("input").prop("checked", false);
					$('#position').val('')
				}
			})
			return dispatch => {
				dispatch(insertModule(obj))
			}
		}
	},
	componentDidMount(){
		let validObj = $("#menuModule").validate({
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
	},
	/*resetSuccessMsg(){
		this.setState({'successMsg':false})
		this.setState({'errorMsg':false})
	},*/
	render(){
		let c = 0;

		/*let msg = '';
		if(this.state.successMsg){
			msg = <AlertMessageSuccess data={'added menu module.'} func={this.resetSuccessMsg}/>
		}else if(this.state.errorMsg){
			msg = <AlertMessageError data={this.state.errorMsg} func={this.resetSuccessMsg}/>
		}else{
			msg = '';
		}*/
		return (
			<div className="">
				<div className="page-header">
					<h3 className="sub-header">Add Menu Module</h3>
				</div>
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
											<label htmlFor = "firstname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_TITLE')}</label>
											<div className = "col-sm-10">
												<input type = "text" name="title" ref="title"  className="form-control" placeholder="Enter title" required/>
											</div>
										</div>
										<Positionn key={this.data.templateRegister._id} data={this.data.templateRegister} />
										<div className="form-group">
											<label htmlFor="lastname" className="col-sm-2 control-label">Select Menu</label>
											<div className="col-sm-10">
												<select defaultValue='select' name="selectMenu" ref="selectMenu" className="selectpicker form-control" data-style="btn-primary">
													<option value="">--select--</option>
													{
														this.data.menuResults.map(function(result){
															return  <option key={result._id} value={result._id}>{result.title}</option>
														})
													}
												</select>
											</div>
										</div>
										<div className="form-group switch-btn">
											<label className="col-sm-2 control-label">Show Title</label>
											<div className="col-sm-10">
												<div className="btn-group switch-btn" data-toggle="buttons">
													<label className='active option btn btn-primary' ref="option">
														<input type="radio" className="rad" name="options" ref="options" id="option2"  value={1}/>{i18n('ADMIN_SETTINGS_SITE_OFFLINE_YES')}
													</label>
													<label className='option btn btn-primary' ref="option" >
														<input type="radio" className="rad" ref="options" name="options" id="option3" value={0} /> {i18n('ADMIN_SETTINGS_SITE_OFFLINE_NO')}
													</label>
												</div>
											</div>
										</div>
									</div>
								{/* =======> MODULE END<======= */}


								{/* =======> MENU ASSIGNMENT START<======= */}
									<div id="module-menu-assign" className="tab-pane">
										<div className="form-group">
											<label htmlFor="lastname" className="col-sm-2 control-label">All Page</label>
											<div className="col-sm-10">
												<input onChange={this.checkAllPage} type="checkbox" id="allpage" className="allpage" ref="allpage" name="allPage" />
											</div>
										</div>
										{ 
											!this.state.checkAllPage?
												<MenuItemTypes value={[]} />
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

													<input type = "text" name="moduleClass" ref="moduleClass" id="module-Class" className = "form-control" placeholder = "Enter Module Suffix class" required />
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

export default AddMenuModule;

MenuModuleFront = createReactClass({
	mixins: [ReactMeteorData],
	getMeteorData: function(){
		return { items: PanoplyCMSCollections.MenuItems.find({mainParentId: this.props.menuItem, trash:false}).fetch() }
	},
	getMenuItems: function(){
		var elements = this.data.items;
		var menu = new Array();

		function getElements(parent_id){
			if(parent_id){
				return getChild(parent_id);
			} else {
				var element = new Array();
				elements.forEach(function (elem1) {
					var child = getChild(elem1._id);
					if(elem1.parentId==''){
						let obj = { 
							_id: elem1._id, 
							title: elem1.title,
							target: elem1.target,
							alias: elem1.alias,
							desc:elem1.desc, 
							child: child 
						}
						// console.log(elem1.title," ===> ",elem1.MenuItemType)
						if(elem1.MenuItemType == 'link') obj.url = elem1.link
						element.push(obj);
					}
				});
				return element;
			}
		}

		function getChild(parent_id){
			var child = new Array();
			elements.forEach(function (elem2) {
				if(elem2.parentId){
					if(parent_id == elem2.parentId){
						let obj = { 
							_id: elem2._id, 
							title: elem2.title, 
							mainParentId:elem2.mainParentId, 
							parentId:elem2.parentId,
							alias: elem2.alias, 
							desc:elem2.desc
						}
						obj.child = getElements(elem2._id)
						if(elem2.MenuItemType == 'url') obj.url = elem2.externalUrl
						child.push(obj);
					}
				}
			});
			return child;
		}
		return getElements();
	},
	render(){
		console.log(this.props)
		showTitle = '';
		if(this.props.module_title) showTitle = <h3>{this.props.module_title}</h3>;
		return (
			<div className={this.props.moduleClass}>
				{showTitle}
				{this.printMenu(this.getMenuItems())}
			</div>
		)
	},
	printMenu: function(items){
		// console.log(items," =====> ",items[0])
		return (
			<ul className={items[0] && items[0].parentId?'dropdown':''}>
				{
					items.map(item => {
						if(item.url && !/^(f|ht)tps?:\/\//i.test(item.url)) item.url = '/'+item.url;
						// console.log(" ===> ",item)
						return (
							<li key={item._id}>
								{
									item.url?<a target={item.target && item.target != 0?'_blank':''} href={item.url}>{item.title}</a> : <a target={item.target && item.target != 0?'_blank':''} onClick={()=>{ PanoplyRouter.go('/'+ item.alias) }}>{item.title}</a>
								}
								{item.child.length?<span><i className="fa fa-chevron-down"></i></span>:''}
								{item.child.length?this.printMenu(item.child):''}

							</li>
						)
					})
				}
			</ul>
		)
	}
})

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