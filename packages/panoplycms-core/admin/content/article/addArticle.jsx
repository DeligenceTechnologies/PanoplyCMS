// import {teamon} from 'meteor/teamon:tinymce';

AddArticle=React.createClass({
	mixins:[ReactMeteorData],
	getMeteorData(){
		Meteor.subscribe('Categories');
		return {
			results: PanoplyCMSCollections.Categories.find({trash:false}).fetch(),
			tags: PanoplyCMSCollections.Tags.find({}).fetch()
		}
	},
	getInitialState(){
		return {
			language:i18n.getLanguage(),
			msg:false,
			valid:'',
			errorMsg:false
		}
	},
	componentDidMount: function(){
		$('#tokenfield').tokenfield('destroy');
		document.title = "Add Article"
		let validObj=$("#add-article").validate({
			rules: {
				title: {
					required: true
				},
				editor: {
					required: true
				},
				SelectName: { 
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
		
		$('#article').summernote({height: 200});

		/*tinymce.remove();
		tinymce.init({
			selector: 'textarea',
			resize: 'true',
			skin_url: '/packages/teamon_tinymce/skins/lightgray',
			toolbar:'image styleselect codesample forecolor backcolor ltr rtl fullscreen insertdatetime media pagebreak searchreplace table visualblocks code',
			plugins: "autosave advlist autolink link image imagetools lists charmap print preview wordcount codesample textcolor colorpicker contextmenu directionality fullscreen hr insertdatetime legacyoutput media pagebreak searchreplace table visualblocks code",
			contextmenu: "link image inserttable | cell row column deletetable",
			media_live_embeds: true,
			pagebreak_split_block: true,
			visualblocks_default_state: true,
			browser_spellcheck: true,
			imagetools_toolbar: "rotateleft rotateright | flipv fliph | editimage imageoptions",
			audio_template_callback: function(data) {
				return '<audio controls>' + '\n<source src="' + data.source1 + '"' + (data.source1mime ? ' type="' + data.source1mime + '"' : '') + ' />\n' + '</audio>';
			},
			video_template_callback: function(data) {
				return '<video width="' + data.width + '" height="' + data.height + '"' + (data.poster ? ' poster="' + data.poster + '"' : '') + ' controls="controls">\n' + '<source src="' + data.source1 + '"' + (data.source1mime ? ' type="' + data.source1mime + '"' : '') + ' />\n' + (data.source2 ? '<source src="' + data.source2 + '"' + (data.source2mime ? ' type="' + data.source2mime + '"' : '') + ' />\n' : '') + '</video>';
			}
		});*/
	},
	componentWillUnmount: function() {
		// tinymce.remove();
		$('#article').summernote('destroy');
	},
	componentDidUpdate: function() {

		var sourceData=[];

		_.each(this.data.tags,function(a){
			sourceData.push(a.title);
		});


		$('#tokenfield').tokenfield({
			autocomplete: {
				source:sourceData,
				delay: 100
			},
			showAutocompleteOnFocus: true,
			createTokensOnBlur:true
		})
	},
	submitData(event){
		event.preventDefault();
		if(this.state.valid.form()){
			var title=ReactDOM.findDOMNode(this.refs.title).value.trim();
			var alias = generateAlias(title);
			var category=ReactDOM.findDOMNode(this.refs.myselect).value.trim();
			// var article=tinyMCE.get(ReactDOM.findDOMNode(this.refs.editor1).id).getContent().trim();
			var article = $('#article').summernote('code');
			var metaKeyword=ReactDOM.findDOMNode(this.refs.keyword).value.trim();
			var metaDescription=ReactDOM.findDOMNode(this.refs.desc).value.trim();

			let objOfTags=$('#tokenfield').tokenfield('getTokens');
			tags=_.pluck(objOfTags, 'value');
			that=this;
			Meteor.call('addArticles',title,alias,category,tags,article,metaKeyword,metaDescription,(err,data) => {
				if(err){
					that.setState({errorMsg : 'Internal server error or duplicate article can not insert.'})
				}else{
					that.setState({msg : true})
					ReactDOM.findDOMNode(that.refs.title).value='';
					ReactDOM.findDOMNode(that.refs.myselect).value='';
					ReactDOM.findDOMNode(that.refs.token).value='';
					$('#tokenfield').tokenfield('setTokens', ' ');
					// tinyMCE.get(ReactDOM.findDOMNode(this.refs.editor1).id).setContent('')
					$("#article").summernote("code", "");
					ReactDOM.findDOMNode(that.refs.keyword).value='';
					ReactDOM.findDOMNode(this.refs.desc).value='';
				}
			});
		}
	},
	resetSuccessMsg(){
		this.setState({'msg':false})
		this.setState({'errorMsg':false})
	},
	render(){
		/*if (this.data.pageLoading) {
		return <LoadingSpinner />;
		}*/
		var msg='';
		if(this.state.msg){
			msg=<AlertMessage data={'added article.'} func={this.resetSuccessMsg}/>
		}else if(this.state.errorMsg){
			msg=<AlertMessageOfError data={this.state.errorMsg} func={this.resetSuccessMsg}/>
		}else{
			msg='';
		}
		return (
			<div className="col-md-10 content" onClick={this.resetSuccessMsg} >
				<Heading  data={i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLES')} />
				{msg}
				<div className="panel-body">
					<div id="notification"></div>
					<form id="add-article" className = "form-horizontal" role = "form" onSubmit={this.submitData}>
						<div className = "form-group">
							<label htmlFor = "firstname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_TITLE')}</label>
							<div className = "col-sm-10">
								<input type = "text" name="title" ref="title"  className = "form-control"  placeholder = "Enter title" required/>
							</div>
						</div>
						<div className = "form-group">
							<label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_CATEGORY')}</label>
							<div className = "col-sm-10">
								<select defaultValue='select' name="SelectName" ref="myselect" className="selectpicker form-control " data-style="btn-primary" >
									<option value="">--select--</option>
									{
										this.data.results.map(function(result){
											return <option key={result._id} value={result._id}>{result.title}</option>
										})
									}
								</select>
							</div>
						</div>
						<div className = "form-group">
							<label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_TAGS')}</label>
							<div className = "col-sm-10" id="token" > 
								<input type="text" ref="token" className="form-control" id="tokenfield" />
							</div>
						</div>
						<div className = "form-group">
							<label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_ARTICLE')}</label>
							<div className = "col-sm-10">
								<div className="summernote">
									<textarea id="article" className="form-control"></textarea>
								</div>
							</div>
						</div>
						<div className = "form-group">
							<label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_METAKEYWORD')}</label>
							<div className = "col-sm-10">
								<input type = "text" name="keyword" ref="keyword" className = "form-control" />
							</div>
						</div>
						<div className = "form-group">
							<label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_METADESCRIPTION')}</label>
							<div className = "col-sm-10">
								<input type="text" name="desc" ref="desc" className="form-control" />
							</div>
						</div>
						<div className="form-group">
							<div className = "col-sm-offset-2 col-sm-10">
								<button className="btn btn-primary">SAVE</button>
								&nbsp;&nbsp;
								<a className="btn btn-danger" href={FlowRouter.path('articles')}>CANCEL</a>
							</div>
						</div> 
					</form>
				</div>
			</div>
		)
	}
})