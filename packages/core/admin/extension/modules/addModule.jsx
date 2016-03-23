AddModule = React.createClass({
	
	propTypes: {
		type: React.PropTypes.string
	},
	componentWillUpdate(){
	},
	insertSidebar() { },
	componentDidMount: function(){
		document.title = "Add Module";

		var $error = $('#error-dialog');
		$.validate({
			validateOnBlur: false,
			errorMessagePosition: $error, // 'top',
			scrollToTopOnError: false,
			modules: 'date, security',
			validateHiddenInputs: true
		});
	},
	handleSubmit(event) {
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
		console.log($('input:radio[name=showTitle]:checked').val());

		Meteor.call("addModule", insert, function(err,res){
			// console.log(err,res)
		// });
		// FlowRouter.go('modulesManager');
	},
	cancelSubmit(){
		FlowRouter.go('modulesManager');
	},
	render() {
		return (
			<div className="col-md-12 sidebar">
				<span className="form-error alert alert-danger" role="alert" id="error-dialog">Errors in adding {this.props.type}</span>
					<form id="non-editable" className="form-horizontal" role="form" >
						<div className="form-group">
							<label htmlFor="title" className="col-sm-1 control-label">Title</label>
							<div className="col-sm-5">
								<input type="text" name="title" ref="titleRaw" id="title" className="form-control" data-validation="length" data-validation-length="min20" data-validation-error-msg="You did not enter a valid title" />
							</div>
							<label htmlFor="show-title" className="col-sm-1 control-label">Show Title</label>
							<div className="col-sm-5">
								<div className="btn-group" data-toggle="buttons">
									<label className='active option btn btn-primary' ref="showTitleToggle" >
										<input type="radio" className="form-control" name="showTitle" ref="showTitle" id="show" value="true" defaultChecked/>Yes
									</label>
									<label className='option btn btn-primary' ref="showTitleToggle" >
										<input type="radio" className="form-control" name="showTitle" ref="showTitle" id="hide" value="false" />No
									</label>
								</div>
							</div>
						</div>
						{/*this.renderHBform()*/}
						{this.props.type == 'MenuModule'?<MenuModule ref="whichmenu"/>:<HtmlBlock ref="htmlvalue" />}
						<div className="form-group">
							<label htmlFor="position" className="col-sm-1 control-label">Position</label>
							<div className="col-sm-11">
								<select id="select_position" ref="position" name="position" className="form-control" data-validation-error-msg="Please select from dropdown">
									<option value="">-- Select --</option>
									<option value="nav-bar-menu">		Nav Bar Menu 		</option>
									<option value="home-block-1">		Home Block 1		</option>
									<option value="home-block-2">		Home Block 2		</option>
									<option value="copyright">			Copyright Block	</option>
									<option value="footer-1">				Footer Block1		</option>
									<option value="footer-2">				Footer Block2		</option>
									<option value="footer-3">				Footer Block3		</option>
								</select>
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="menu" className="col-sm-1 control-label" >Menu</label>
							<div className="col-sm-11">
								<select id="select_menus"	ref="menus" name="menus" className="form-control" multiple>
									<option value="main-menu">  Home  </option>
									<option value="left-side">  Left  </option>
									<option value="right-side"> Right </option>
									<option value="footer-menu">Bottom</option>
								</select>
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="" className="col-sm-1 control-label">Status</label>
							<div className="col-sm-11">
								<select id="select_publish" ref="publish" name="publish" defaultValue="true" className="form-control" >
									<option value="true" > Published   </option>
									<option value="false"> Unpublished </option>
								</select>
							</div>
						</div>
						<div className="btn-toolbar">
							<button className="btn btn-success" onClick={this.handleSubmit}>Save & Close</button>
							<button className="btn btn-danger" onClick={this.cancelSubmit}>Close</button>
						</div>
					</form>
				<div>
					<script src="//cdnjs.cloudflare.com/ajax/libs/jquery-form-validator/2.2.8/jquery.form-validator.min.js"/>
				</div>
			</div>
		);
	}
});
