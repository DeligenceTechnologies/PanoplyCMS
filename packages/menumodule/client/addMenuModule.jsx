import React from 'react';
import  {Heading, AlertMessageOfError, AlertMessage} from 'meteor/deligencetechnologies:panoplycms-core';
import  {PanoplyCMSCollections} from 'meteor/deligencetechnologies:panoplycms-collections';

AddMenuModule = React.createClass({
	componentWillUnmount(){
	},
	getInitialState(){
		return {
			valid:'',
			successMsg:false,
			errorMsg:false,
		}
	},
	mixins: [ReactMeteorData],
	getMeteorData() {
		return {
			menuResults:PanoplyCMSCollections.Menus.find({trash:false}).fetch(),
			templateRegister:PanoplyCMSCollections.RegisteredPackages.findOne({name:'template'})
		};
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
			let showTitle=$('input[name="options"]:checked').val()
			let allPage=$('.allPage').is(':checked')
			showTitle = showTitle=='yes'?true:typeof showTitle=='undefined'?true:false

			obj = {
				name: title,
				type:'menumodule',
				position:position,
				showTitle:showTitle,
				menuItems:menuItems,
				allPages:allPage,
				moduleData:{
					menuItem:menu
				}
			}
			// console.log(menuItems, "<=== Menu Items")
			// console.log(obj, " <=== OBJ")
			Meteor.call('addModule',obj,(error,data)=>{
				// console.log(error,data,'error,data')
				if(error){
					this.setState({errorMsg:error})
					console.log(error,'error')
				}else{
					this.setState({successMsg:true});
					ReactDOM.findDOMNode(this.refs.title).value=''
					//ReactDOM.findDOMNode(this.refs.position).value=''
					ReactDOM.findDOMNode(this.refs.selectMenu).value=''
					$("input").prop("checked", false);
					$('#position').val('')
					// console.log('added')
				}
			})
		}
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
	},
	resetSuccessMsg(){
		this.setState({'successMsg':false})
		this.setState({'errorMsg':false})
	},
	render(){
		c=0;
		if(this.state.successMsg){
			msg=<AlertMessage data={'added menu module.'} func={this.resetSuccessMsg}/>
		}else if(this.state.errorMsg){
			msg=<AlertMessageOfError data={this.state.errorMsg} func={this.resetSuccessMsg}/>
		}else{
			msg='';
		}
		return (
			<div className="col-md-10 content" onClick={this.resetSuccessMsg}>
				<Heading  data={'Add Menu Module'} />
				{msg}
				<div className="panel-body">
					<div id="notification"></div>
					<form id="menuModule" className = "form-horizontal" role = "form" onSubmit={this.submitData} >
						<div className = "form-group">
							<label htmlFor = "firstname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_TITLE')}</label>
							<div className = "col-sm-10">
								<input type = "text" name="title" ref="title"  className = "form-control"  placeholder = "Enter title" required/>
							</div>
						</div>
						<Position key={this.data.templateRegister._id} data={this.data.templateRegister} />
						<div className = "form-group">
							<label htmlFor = "lastname" className = "col-sm-2 control-label">Select Menu</label>
							<div className = "col-sm-10">
								<select defaultValue='select' name="selectMenu" ref="selectMenu" className="selectpicker form-control " data-style="btn-primary" >
									<option value="">--select--</option>
									{
										this.data.menuResults.map(function(result){
											return  <option key={result._id} value={result._id}>{result.title}</option>
										})
									}
								</select>
							</div>
						</div>
						<div className="form-group">
							<label className="col-sm-2 control-label">Show Title</label>
							<div className="col-sm-10">
								<div className="btn-group" data-toggle="buttons">
									<label className='active option btn btn-primary' ref="option">
										<input type="radio" className="rad" name="options" ref="options" id="option2"  value="yes"/>{i18n('ADMIN_SETTINGS_SITE_OFFLINE_YES')}
									</label>
									<label className='option btn btn-primary' ref="option" >
										<input type="radio" className="rad" ref="options" name="options" id="option3" value="no" /> {i18n('ADMIN_SETTINGS_SITE_OFFLINE_NO')}
									</label>
								</div>
							</div>
						</div>
						<div className = "form-group">
							<label htmlFor = "lastname" className = "col-sm-2 control-label">All Page</label>
							<div className = "col-sm-10">
								<input type="checkbox" className="allPage" ref="desc" name="allPage" />
							</div>
						</div>
						<MenuItemType value={[]} />
						<div className="form-group">
							<div className = "col-sm-offset-2 col-sm-10">
								<button className="btn btn-primary">SAVE</button>
								&nbsp;&nbsp;
								<a className="btn btn-danger" href={FlowRouter.path('modulesManager')}>CANCEL</a>
							</div>
						</div> 
					</form>
				</div>
			</div>
		)
	}
});

export default AddMenuModule;

MenuModuleFront = React.createClass({
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
						alias: elem1.alias,
						desc:elem1.desc, 
						child: child 
						}
						if(elem1.MenuItemType == 'url') obj.url = elem1.externalUrl
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
					if(parent_id== elem2.parentId){
						let obj = { 
							_id: elem2._id, 
							title: elem2.title, 
							mainParentId:elem2.mainParentId, 
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
		showTitle = '';
		if(this.props.module_title) showTitle = <h4>{this.props.module_title}</h4>;
		return (
			<div>
				{showTitle}
				{this.printMenu(this.getMenuItems())}
			</div>
		)
	},
	printMenu: function(items){
		return (
			<ul>
				{
					items.map(i => {
						if(i.url && !/^(f|ht)tps?:\/\//i.test(i.url)) i.url = '/'+i.url;
						return (
							<li key={i._id}>
								{
									i.url?<a href={i.url} >{i.title}</a> : <a onClick={()=>{ PanoplyRouter.go('/'+ i.alias) }}>{i.title}</a>
								}
								{i.child.length?this.printMenu(i.child):''}
							</li>
						)
					})
				}
			</ul>
		)
	}
})