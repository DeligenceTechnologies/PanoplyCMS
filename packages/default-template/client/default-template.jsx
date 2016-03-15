DefaultTemplate = React.createClass({
	mixins: [ReactMeteorData],
	componentDidMount: function() {
		document.title = 'PanoplyCMS';
	},
	getMeteorData() {
		// var handle = Meteor.subscribe('menuItems');
		var theMenuId = Modules.findOne({$and: [{"modDesc.type" : "MenuModule"}, {trash:false}, {"status" : "true"}, {position:"nav-bar-menu"}]}).modDesc.value.menuId;
		return {
			// isReady : handle.ready(),
			rightPosMods: Modules.find({$and: [{"modDesc.type" : "HtmlBlock"}, {trash:false}, {"status" : "true"}, {position:"home-block-2"}]}, {sort:{createdAt:1}}).fetch(),
			leftFooterPosMods: Modules.find({$and: [{"modDesc.type" : "HtmlBlock"}, {trash:false}, {"status" : "true"}, {position:"footer-1"}]}, {sort:{createdAt:1}}).fetch(),
			// leftFotrModCount: Modules.find({$and: [{"modDesc.type" : "HtmlBlock"}, {trash:false}, {"status" : "true"}, {position:"footer-1"}]}).count(),
			midFooterPosMods: Modules.find({$and: [{"modDesc.type" : "HtmlBlock"}, {trash:false}, {"status" : "true"}, {position:"footer-2"}]}, {sort:{createdAt:1}}).fetch(),
			// midFotrModCount: Modules.find({$and: [{"modDesc.type" : "HtmlBlock"}, {trash:false}, {"status" : "true"}, {position:"footer-2"}]}).count(),
			rightFooterPosMods: Modules.find({$and: [{"modDesc.type" : "HtmlBlock"}, {trash:false}, {"status" : "true"}, {position:"footer-3"}]}, {sort:{createdAt:1}}).fetch(),
			// rightFotrModCount: Modules.find({$and: [{"modDesc.type" : "HtmlBlock"}, {trash:false}, {"status" : "true"}, {position:"footer-3"}]}).count()
			navMenuitems : MenuItems.find({"mainParentId" : theMenuId}).fetch()
		};
	},
/*
	selectFooterTemplate(){
		var l = (this.data.leftFotrModCount?1:0);
		var m = (this.data.midFotrModCount?1:0);
		var r = (this.data.rightFotrModCount?1:0);

		var totalFooterBlocks = l + m + r;
		console.log(totalFooterBlocks,"totalFooterBlocks");
		if ( totalFooterBlocks == 0) {
			return {__html: "<p>no footer<p>"}
		}
		else if( totalFooterBlocks == 1){
			return {__html: this.data.rightFotrModCount + "<p>one footer<p>"}
		}
		else if(totalFooterBlocks == 2){
			return {__html: "<p>two footer<p>"}
		}
		else{
			return {__html: "<div class=\"left-footer col-md-4\">"+this.renderFooter1Mods()+"</div><div class=\"mid-footer col-md-4\">"+this.renderFooter2Mods()+"</div><div class=\"right-footer col-md-4\">"+this.renderFooter3Mods()+"</div>"}
		}
	},
*/	
	renderNavMenu() {
		// console.log('Hello I am navMenuitems', this.data.navMenuitems)
		return this.data.navMenuitems.map((item) => {
			return <NavMenu key={item._id} item={item} />;
		});
	},
	
	renderRightMods() {
		// console.log('Hello I am rightPosMods', this.data.rightPosMods)
		return this.data.rightPosMods.map((module) => {
			return <ModuleList key={module._id} module={module} />;
		});
	},

	renderFooter1Mods() {
		// console.log('Hello I am leftFooterPosMods', leftFooterPosMods)
		// console.log(this.data.leftFotrModCount, "Count of modules here");
		return this.data.leftFooterPosMods.map((module) => {
			// return <ModuleList key={module._id} module={module} />;
			return <App key='otherComponent'/>;
		});
	},

	renderFooter2Mods() {
		// console.log('Hello I am midFooterPosMods', this.data.midFooterPosMods)
		return this.data.midFooterPosMods.map((module) => {
			return <ModuleList key={module._id} module={module} />;
		});
	},

	renderFooter3Mods() {
		// console.log('Hello I am rightFooterPosMods', this.data.rightFooterPosMods)
		return this.data.rightFooterPosMods.map((module) => {
			return <ModuleList key={module._id} module={module} />;
		});
	},

	render() {
		return (
			<div>
				<div className="blog-masthead">
					<div className="container">
						<nav className="nav blog-nav">
							{this.renderNavMenu()}
							{/*
						 		<a className="nav-link active" href="#">Home</a>
								<a className="nav-link" href="#">New features</a>
								<a className="nav-link" href="#">Press</a>
								<a className="nav-link" href="#">New hires</a>
								<a className="nav-link" href="#">About</a>
							*/}
						</nav>
					</div>
				</div>
				<div className="blog-header">
					<div className="container">
						<Logo />
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-sm-8 blog-main">
							<div className="blog-post">
								<h2 className="blog-post-title">Sample blog post</h2>
								<p className="blog-post-meta">January 1, 2014 by <a href="#">Mark</a></p>
								<p>This blog post shows a few different types of content that's supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>
								<hr/>
								<p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
								<blockquote>
										<p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
								</blockquote>
								<p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
								<h2>Heading</h2>
								<p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
								<h3>Sub-heading</h3>
								<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
								<pre><code>Example code block</code></pre>
								<p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
								<h3>Sub-heading</h3>
								<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
								<ul>
										<li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
										<li>Donec id elit non mi porta gravida at eget metus.</li>
										<li>Nulla vitae elit libero, a pharetra augue.</li>
								</ul>
								<p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
								<ol>
										<li>Vestibulum id ligula porta felis euismod semper.</li>
										<li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
										<li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
								</ol>
								<p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>
							</div>
							<div className="blog-post">
								<h2 className="blog-post-title">Another blog post</h2>
								<p className="blog-post-meta">December 23, 2013 by <a href="#">Jacob</a></p>
								<p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
								<blockquote>
										<p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
								</blockquote>
								<p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
								<p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
							</div>
							{/*<!-- /.blog-post -->*/}
							<div className="blog-post">
								<h2 className="blog-post-title">New feature</h2>
								<p className="blog-post-meta">December 14, 2013 by <a href="#">Chris</a></p>
								<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
								<ul>
									<li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
									<li>Donec id elit non mi porta gravida at eget metus.</li>
									<li>Nulla vitae elit libero, a pharetra augue.</li>
								</ul>
								<p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
								<p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
							</div>
							{/*<!-- /.blog-post -->*/}
							<nav>
								<ul className="pager">
									<li><a href="#">Older</a></li>
									<li className="disabled"><a href="#">Newer</a></li>
								</ul>
							</nav>
						</div>
						{/*<!-- /.blog-main -->*/}
						<div className="col-sm-3 col-sm-offset-1 blog-sidebar">
							{this.renderRightMods()}
						</div>
						{/*<!-- /.blog-sidebar -->*/}
					</div>
						{/*<!-- /.row -->*/}
				</div>
				{/*<!-- /.container -->*/}
				<footer className="blog-footer row">
					<div className="left-footer col-md-4"	>{this.renderFooter1Mods()}</div>
					<div className="mid-footer col-md-4"	>{this.renderFooter2Mods()}</div>
					<div className="right-footer col-md-4">{this.renderFooter3Mods()}</div>
					{/*<div dangerouslySetInnerHTML={this.selectFooterTemplate()} />*/}
				</footer>
			</div>
		)
	}
});

Logo=React.createClass({
	mixins:[ReactMeteorData],
		getMeteorData(){
		var handle = Meteor.subscribe('siteName')
		return {
			pageLoading: ! handle.ready(), 
			results: Sites.findOne()
		};
	},
	render(){
		if (this.data.pageLoading)
			return <LoadingSpinner />;
		else{
			return(
			<div>
				<h3>Welcome to</h3>
				<h2 className="blog-title">{this.data.results?this.data.results.name:''}</h2>
				<p className="lead blog-description">{this.data.results?this.data.results.summary:''}</p>
			</div>
		);
		}
	}
});

ModuleList = React.createClass({
	propTypes: {module: React.PropTypes.object.isRequired },
	createMarkup(){
		return {__html: this.props.module.modDesc.value}; 
	},
	render(){
		// console.log(this.props.module._id);
		return(
			<div className="sidebar-module">
				<h4>{this.props.module.showTitle=="true"?this.props.module.title:''}</h4>
				<div dangerouslySetInnerHTML={this.createMarkup()} />
			</div>
		);
	}
});

NavMenu = React.createClass({
	propTypes: {
		item: React.PropTypes.object.isRequired
	},
	render(){
		// console.log(this.props.item._id);
		return(
			<a className="nav-link" href={this.props.item.alias}>{this.props.item.title}</a>
		);
	}
});

LoadingSpinner=React.createClass({
	render(){
		return <div>Loading....</div>
	}
});

/*var registrationFormSchema = new SimpleSchema({
		firstName: {
				type: String,
				max: 60,
				label: "First name",
				placeholder: "John"
		},
		lastName: {
				type: String,
				max: 60,
				label: "Last name",
				placeholder: "Doe"
		},
		gender: {
				type: String,
				allowedValues: ["Male", "Female", "Other"],
				label: "Gender"
		},
		email: {
				type: String,
				max: 60,
				label: "Email"
		},
		password: {
				type: String,
				max: 60,
				min: 8,
				label: "Password"
		},
		termsAgreement: {
				type: Boolean
		}
});

DefaultTemplate = React.createClass({
		_onSubmit(doc) {
				Accounts.createUser(doc, function(error){
						if (error) {
								// Handle error
						} else {
								// Handle success
						}
				});
		},
		render() {
			return (
				<div className="main-container">
					<div className="col-md-10">
						<Form schema={registrationFormSchema} id="registration-form" onSubmit={this._onSubmit}>
								<TextInput name="firstName" layoutStyle="first-half" />
								<TextInput name="lastName" layoutStyle="second-half" />
								<Select name="gender" useAllowedValues />
								<TextInput name="email" />
								<TextInput name="password" type="password" />
								<Checkbox name="termsAgreement" />
								<SubmitButton label="Register" />
						</Form>
					</div>
				</div>
			);
		}
});*/
