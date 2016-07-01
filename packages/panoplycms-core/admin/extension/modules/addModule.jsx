AddModule = React.createClass({	
	propTypes: {
		type: React.PropTypes.string
	},
	componentDidUpdate(){
		tinymce.init({ selector: '#editor1' });
	},
	insertSidebar() { },
	componentDidMount: function(){
		document.title = "Add Module";

		var $error = $('#error-dialog');
		/*$.validate({
			validateOnBlur: false,
			errorMessagePosition: $error, // 'top',
			scrollToTopOnError: false,
			modules: 'date, security',
			validateHiddenInputs: true
		});*/
	},
	 getInitialState(){
    return{
      successMsg:false,
      errorMsg:false, 
   		 }
 	 },
	mixins: [ReactMeteorData],
	getMeteorData() {
		var handle=Meteor.subscribe('menus')
		return {
			pageLoading: ! handle.ready(),
			results: PanoplyCMSCollections.Menus.find({trash:false}).fetch()
		};
	},
	handleSubmit(event) {

    var that = this;
		event.preventDefault();
		// console.log(event.target.querySelector('[name="menu"]').value);

		$('#error-dialog').css("display", "block");
		
		var modValue = '';
		if (this.props.type == 'HtmlBlock') {
			modValue = this.refs.htmlvalue.getHTML();
		}
		else if (this.props.type == 'MenuModule') {
			// console.log(this.refs.whichmenu.getMenu(),"Buena Salud!!")
			modValue =  this.refs.whichmenu.getMenu();
		}

		var insert = {
			"title":ReactDOM.findDOMNode(this.refs.titleRaw).value.trim(),
			"showTitle": $('input:radio[name=showTitle]:checked').val(),
			"modDesc":{
				"type": this.props.type,
				"value": modValue
			},
			"position": $(ReactDOM.findDOMNode(this.refs.position)).val(),
			"menu": $(ReactDOM.findDOMNode(this.refs.menus)).val(),
			"status": $(ReactDOM.findDOMNode(this.refs.publish)).val(),
			"owner":'browser-user'
		}
		console.log(insert);

		Meteor.call("addModule", insert, function(err,res){
			console.log(res)
			 if(err){
        console.log(err,'err---------------');
        that.setState({'errorMsg':err})
      }
      else{
        that.setState({'successMsg':true})
        
      }
		});
		FlowRouter.go('modulesManager');
	},
	cancelSubmit(){
		FlowRouter.go('modulesManager');
	},
	 resetSuccessMsg(){
    this.setState({'successMsg':false})
    this.setState({'errorMsg':false})
  },
	 renderListItems() {
        var items = [];
        for (var i = 0; i < this.data.results.length; i++) {
            var item = this.data.results[i];
             
            items.push( 
            	<option value={item.title}>{item.title}</option>
            	);
         
        }
        return items;
    },
	render() {
		if (this.state.successMsg) {
      msg= <AlertMessage data={'Update the website settings.'} func={this.resetSuccessMsg}/>;
    }else if(this.state.errorMsg){
      msg=<AlertMessageOfError data={this.state.errorMsg} func={this.resetSuccessMsg}/>
    }else{
      msg=''
    }

		console.log(this.data.results,'sihksoihasasasjaj');
		if (this.data.pageLoading) {
			return <LoadingSpinner />;
		}
		return (
			<div className="col-md-12 sidebar">
				<span className=""> {i18n('ADMIN_EXTENSION_MODULES_ADDHTMLBLOCKS')} </span>
				{msg}
				{/*<span className="form-error alert alert-danger" role="alert" id="error-dialog">Errors in adding {this.props.type}</span>*/}
				<form id="non-editable" className="form-horizontal" role="form">
					<div className="form-group">
						<label htmlFor="title" className="col-sm-1 control-label">{i18n('ADMIN_EXTENSION_MODULES_ADDMODULE_FORM_TITLE')}</label>
						<div className="col-sm-5">
							<input type="text" name="title" ref="titleRaw" id="title" className="form-control" data-validation="length" data-validation-length="min20" data-validation-error-msg="You did not enter a valid title" />
						</div>
						<label htmlFor="show-title" className="col-sm-1 control-label">{i18n('ADMIN_EXTENSION_MODULES_ADDMODULE_SHOW_TITLE')}</label>
						<div className="col-sm-5">
							<div className="btn-group" data-toggle="buttons">
								<label className='active option btn btn-primary' ref="showTitleToggle">
									<input type="radio" className="form-control" name="showTitle" ref="showTitle" id="show" value="true" defaultChecked/>Yes
								</label>
								<label className='option btn btn-primary' ref="showTitleToggle">
									<input type="radio" className="form-control" name="showTitle" ref="showTitle" id="hide" value="false" />No
								</label>
							</div>
						</div>
					</div>
					{this.props.type == 'MenuModule'?<MenuModule ref="whichmenu" />:<HtmlBlock ref="htmlvalue" />}
					<div className="form-group">
						<label htmlFor="position" className="col-sm-1 control-label">{i18n('ADMIN_EXTENSION_MODULES_ADDMODULE_FORM_POSITION')}</label>
						<div className="col-sm-11">
							<select id="select_position" ref="position" name="position" className="form-control" data-validation-error-msg="Please select from dropdown">
								<option value="">-- Select --</option>
								<option value="nav-bar-menu"> Nav Bar Menu </option>
								<option value="home-block-1"> Home Block 1 </option>
								<option value="home-block-2"> Home Block 2 </option>
								<option value="copyright"> Copyright Block </option>
								<option value="footer-1"> Footer Block1 </option>
								<option value="footer-2"> Footer Block2 </option>
								<option value="footer-3"> Footer Block3 </option>
							</select>
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="menu" className="col-sm-1 control-label">{i18n('ADMIN_EXTENSION_MODULES_ADDMODULE_FORM_MENU')}</label>
						<div className="col-sm-11">
							<select id="select_menus" ref="menus" className="form-control">
								 {this.renderListItems()}
							</select>
						{/*	<select id="select_menus" ref="menus" className="form-control">
								{this.data.results.map(function(result){return
								<ChildValue key={result._id} data={result} /> })}
							</select>*/}
						</div>
					</div>
					<div className="form-group">
						<label htmlFor="" className="col-sm-1 control-label">{i18n('ADMIN_EXTENSION_MODULES_ADDMODULE_FORM_STATUS')}</label>
						<div className="col-sm-11">
							<select id="select_publish" ref="publish" name="publish" defaultValue="true" className="form-control">
								<option value="true"> Published </option>
								<option value="false"> Unpublished </option>
							</select>
						</div>
					</div>
					<div className="btn-toolbar">
						<button className="btn btn-success" onClick={this.handleSubmit}>{i18n('ADMIN_EXTENSION_MODULES_ADDMODULE_FORM_SAVE')}</button>
						<button className="btn btn-danger" onClick={this.cancelSubmit}>{i18n('ADMIN_EXTENSION_MODULES_ADDMODULE_FORM_CANCEL')}</button>
					</div>
				</form>
				<div>
					<script src="//cdnjs.cloudflare.com/ajax/libs/jquery-form-validator/2.2.8/jquery.form-validator.min.js" />
				</div>
			</div>
		);
	}
});

ChildValue=React.createClass({
 mixins: [ReactMeteorData],
	
	getMeteorData() {
		
		 var handle=Meteor.subscribe('menuItemsbyParentId',this.props.data._id)
		return {
			 pageLoading: ! handle.ready(),
			results: PanoplyCMSCollections.MenuItems.find({parentId:this.props.data._id,trash:false}).fetch()
		};
	},
	render() {
	 var options = [];

	 console.log(this.data.results,'this.data.results');
		if (this.data.pageLoading) {
			return <LoadingSpinner1  />;
		}

		options.push(<option key={this.props.data._id}  value={this.props.data._id} >{this.props.data.title}</option>);
		for (var i=0; i<this.data.results.length; i++) {
			options.push(<option key={i} value={this.data.results[i]._id} >{'--'+this.data.results[i].title}</option>);
		}
		return( <optgroup>{options}</optgroup>)
	}    
})


LoadingSpinner1=React.createClass({
	render:function(){
		return <option>Loading....</option>
	}
})

LoadingSpinner=React.createClass({
	render:function(){
		return <div>Loading....</div>
	}
})
