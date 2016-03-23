EditModule = React.createClass({
	insertSidebar() {},
	componentDidMount: function(){
		document.title = "Edit Module";
	},
	componentDidUpdate: function(){
		// console.log(this.data.aModule[0].modDesc.value.menuId,'The menu ID')
		tinymce.init({
			selector: '#editor1',
			resize: 'both',
			min_height: 250
		});
	},
	mixins: [ReactMeteorData],
	getMeteorData() {
		var handle = Meteor.subscribe('moduleList');
		return {
			ready : handle.ready(),
			menuReady : Meteor.subscribe('menuList').ready(),
			aModule: Modules.find({_id:this.props._id}).fetch(),
			menus: Menus.find({"trash" : false}).fetch()
		};
	},
	handleSubmit(event) {
		event.preventDefault();
		// console.log(this.refs,'form refs');			
		if (this.data.aModule[0].modDesc.type == 'HtmlBlock') {
			var modValue = tinyMCE.get(ReactDOM.findDOMNode(this.refs.htmlValue).id).getContent().trim();
		}
		else if(this.data.aModule[0].modDesc.type == 'MenuModule'){
			if (this.data.menuReady) {
				console.log($('#select_menu').val(),'<- when submitting',$(ReactDOM.findDOMNode(this.refs.menulevel)).val(),'<--level');
				var modValue = {
					"menuId": $('#select_menu').val(),
					"level": $(ReactDOM.findDOMNode(this.refs.menulevel)).val()
				};
				console.log(this.data.aModule[0].modDesc.type,'Aloha!!');
			}
		}

		var update = {
			title : ReactDOM.findDOMNode(this.refs.titleRaw).value.trim(),
			"showTitle": $('input:radio[name=showTitle]:checked').val(),
			"modDesc":{				
				"type": this.data.aModule[0].modDesc.type,
				"value": modValue
			},
			"position": $(ReactDOM.findDOMNode(this.refs.position)).val(),
			"menu": $(ReactDOM.findDOMNode(this.refs.menus)).val(),
			"status": $(ReactDOM.findDOMNode(this.refs.publish)).val()
		}

		// console.log(update.modDesc.type,'update.modDesc.type')

		Meteor.call("editModule", {"_id": this.props._id}, update, {upsert:1});

		FlowRouter.go('modulesManager');
	},
	renderMenuList(){
		console.log("order three");
		// console.log(this.data.menus,'Voila!')
		return this.data.menus.map((menu) => {
			return <MenuList key={menu._id} menu={menu} />;
			// console.log(this.data.menus,'!!!!!!!!Voila!!!!!!!')
		});
	},
	renderHBform(){
		if (this.data.aModule[0].modDesc.type == 'HtmlBlock') {
			return(
				<div className="form-group">
					<label htmlFor="html" className="col-sm-1 control-label">HTML</label>
					<div className="col-sm-11">
						<textarea defaultValue={this.data.aModule[0].modDesc.value} id="editor1" ref="htmlValue" name="editor1" width="800px"></textarea>
					</div>
				</div>
			);
		}
		else if (this.data.aModule[0].modDesc.type == 'MenuModule') {
			console.log("order two");
			// debugger;
			return(
				<div className="form-group">
					<label htmlFor="html" className="col-sm-1 control-label">Select Menu</label>
					<div className="col-sm-5">
						<select id="select_menu" defaultValue={this.data.aModule[0].modDesc.value.menuId} name="menu" ref="menu" className="form-control" >
							<option value="">-- None --</option>
							{this.data.menuReady?this.renderMenuList():'Loading Menu List'}
						</select>
					</div>
					<label htmlFor="lastname" className="col-sm-1 control-label">Show levels upto</label>
					<div className="col-sm-5">
						<input type="text" name="menulevel" defaultValue={this.data.aModule[0].modDesc.value.level} ref="menulevel" id="menulevel" className="form-control" />
					</div>
				</div>
			);
		}		
	},
	cancelSubmit(){
		FlowRouter.go('modulesManager');
	},
	trashThisModule(){
		Meteor.call("removeModule", this.props._id);
		FlowRouter.go('modulesManager');
	},
	render() {
		console.log("order one");
		if (this.data.ready) {
			// console.log(this.data.aModule[0]);
			return (
				<div className="col-md-10 sidebar">
					<span className=""> Add HTML Blocks </span>
					<form id="non-editable" className="form-horizontal" role="form">
							<div className="form-group">
									<label htmlFor="title" className="col-sm-1 control-label">Title</label>
									<div className="col-sm-5">
											<input type="text" name="title" ref="titleRaw" id="title" className="col-sm-6 form-control" defaultValue={this.data.aModule[0].title} required/>
									</div>
									<label htmlFor="lastname" className="col-sm-1 control-label">Show Title</label>
									<div className="col-sm-5">
											<div className="btn-group" data-toggle="buttons">
													<label className={this.data.aModule[0].showTitle=='true' ? 'active option btn btn-primary': 'option btn btn-primary'} ref="showTitleToggle">
															<input type="radio" className="form-control" name="showTitle" ref="showTitle" id="show" value="true" />Yes
													</label>
													<label className={this.data.aModule[0].showTitle=="false" ? 'active option btn btn-primary': 'option btn btn-primary'} ref="showTitleToggle">
															<input type="radio" className="form-control" name="showTitle" ref="showTitle" id="hide" value="false" />No
													</label>
											</div>
									</div>
							</div>
							{this.renderHBform()}
							<div className="form-group">
									<label htmlFor="position" className="col-sm-1 control-label">Position</label>
									<div className="col-sm-6">
											<select id="select_position" defaultValue={this.data.aModule[0].position} ref="position" name="position" className="form-control">
													<option value="">-- Select --</option>
								<option value="nav-bar-menu">Nav Bar Menu</option>
													<option value="home-block-1">Home Block 1</option>
													<option value="home-block-2">Home Block 2</option>
													<option value="copyright">Copyright</option>
													<option value="footer-1">Footer 1</option>
													<option value="footer-2">Footer 2</option>
													<option value="footer-3">Footer 3</option>
											</select>
									</div>
							</div>
							<div className="form-group">
									<label htmlFor="menu" className="col-sm-1 control-label" ref="menu">Menu</label>
									<div className="col-sm-6">
											<select id="select_menus" defaultValue={this.data.aModule[0].menu} name="menus" ref="menus" className="form-control" multiple>
													<option value="main-menu">Home</option>
													<option value="left-side">Left</option>
													<option value="right-side">Right</option>
													<option value="footer-menu">Bottom</option>
											</select>
									</div>
							</div>
							<div className="form-group">
									<label htmlFor="" className="col-sm-1 control-label">Status</label>
									<div className="col-sm-6">
											<select id="select_publish" defaultValue={this.data.aModule[0].status} ref="publish" className="form-control">
													<option value="">-- Select --</option>
													<option value="true">Published</option>
													<option value="false">Unpublished</option>
											</select>
									</div>
							</div>
							<div className="btn-toolbar">
									<button className="btn btn-success" onClick={this.handleSubmit}>Save & Close</button>
									{/*
									<button className="btn btn-warning" onClick={this.trashThisModule}>Trash</button>*/}
									<button className="btn btn-danger" onClick={this.cancelSubmit}>Cancel</button>
							</div>
					</form>
			</div>
			);
		}else {
			return(
				<div className="alert alert-danger col-sm-3" role="alert">Please wait while the page is loading...</div>
			);
		}
	}
});
