import {Heading,AlertMessageOfError,AlertMessage} from 'meteor/deligencetechnologies:panoplycms-core';

AddHtmlblock = React.createClass({
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
			let name=ReactDOM.findDOMNode(this.refs.name).value.trim();
			let position=$('#position').val()
			// let article=tinyMCE.get(ReactDOM.findDOMNode(this.refs.editor1).id).getContent().trim();
			let article = $('#article').summernote('code');
			let showTitle=$('input[name="options"]:checked').val()
			let allPage=$('.allPage').is(':checked')
			showTitle = showTitle=='yes'?true:typeof showTitle=='undefined'?true:false
			obj = {
				name: name,
				type:'htmlblock',
				position:position,
				showTitle:showTitle,
				menuItems:menuItems,
				allPages:allPage,
				moduleData:{
					html:article
				}
			}
			Meteor.call('addModule', obj, (error,data) => {
				if(error){
					this.setState({errorMsg:error.reason})
				}else{
					this.setState({successMsg:true});
					ReactDOM.findDOMNode(this.refs.name).value=''
					// tinyMCE.get(ReactDOM.findDOMNode(this.refs.editor1).id).setContent('')
					$("#article").summernote("code", "");
					$("input").prop("checked", false);
					$('#position').val('')
				}
			})
		}
	},
	componentDidMount(){
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
		/*tinymce.remove();
		tinymce.init({
			selector: 'textarea',
			skin_url: '/packages/teamon_tinymce/skins/lightgray',
		});*/
	},
	componentWillUnmount: function() {
		// tinymce.remove();
		$('#article').summernote('destroy');
	},
	resetSuccessMsg(){
		this.setState({'successMsg':false})
		this.setState({'errorMsg':false})
	},
	render(){
		c=0;
		if(this.state.successMsg){
			msg=<AlertMessage data={'added htmlblock.'} func={this.resetSuccessMsg}/>
		}else if(this.state.errorMsg){
			msg=<AlertMessageOfError data={this.state.errorMsg} func={this.resetSuccessMsg}/>
		}else{
			msg='';
		}
		return (
			<div className="col-md-10 content" onClick={this.resetSuccessMsg}>
				<Heading data={'Add Htmlblock'} />
				{msg}
				<div className="panel-body">
					<div id="notification"></div>
					<form id="menuModule" className = "form-horizontal" role = "form" onSubmit={this.submitData}>
						<div className = "form-group">
							<label htmlFor = "firstname" className = "col-sm-2 control-label">Name</label>
							<div className = "col-sm-10">
								<input type = "text" name="name" ref="name" className = "form-control" placeholder = "Enter title" required/>
							</div>
						</div>
						<Position key={this.data.templateRegister._id} data={this.data.templateRegister} />
						<div className = "form-group">
							<label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_ARTICLE')}</label>
							<div className = "col-sm-10">
								<div className="summernote">
									<textarea id="article" className="form-control"></textarea>
								</div>
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

MenuList = React.createClass({
	propTypes:{
		menu: React.PropTypes.object.isRequired,
	},
	render(){
		return (
			<option value={this.props.menu._id}>{this.props.menu.title}</option>
		);
	}
});

HTMLBlock = data => {
	showTitle = '';
	if(data.module_title) showTitle = <h4>{data.module_title}</h4>;
	return (
		<div>
			{showTitle}
			{data.html?<div dangerouslySetInnerHTML={{__html: data.html}} />:'Nothing Here'}
		</div>
	);
}

export default AddHtmlblock;