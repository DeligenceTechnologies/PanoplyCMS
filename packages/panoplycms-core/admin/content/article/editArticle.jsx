// import { teamon } from 'meteor/teamon:tinymce';

EditArticle=React.createClass({
	mixins:[ReactMeteorData],
	getMeteorData(){
		var handle1 = Meteor.subscribe('Categories');
		/*Meteor.subscribe('tags');*/
		var handle2 = Meteor.subscribe('findOneArticle',FlowRouter.getParam("_id"));
		return {
			pageLoading: !handle1.ready() && !handle2.ready(),
			results: PanoplyCMSCollections.Articles.findOne({_id:FlowRouter.getParam("_id")}),
			catdata: PanoplyCMSCollections.Categories.find().fetch(),
			tags: PanoplyCMSCollections.Tags.find({}).fetch()
		}
	},
	getInitialState(){
		return {
			successMsg:false,
			errorMsg:false,
			valid:'',
			tagTitle:''
		}
	},
	componentDidMount: function(){
		// console.log("====>> componentDidMount()")
		let arrayOftag=[];
		_.each(this.data.tags,(a)=>{
			_.each(this.data.results.tags,function(t){
				if(t==a._id){
					arrayOftag.push(a.title)
				}
			})
		});
		this.setState({tagTitle:arrayOftag})
		// console.log(this.state.tagTitle,'tagTitle---')
		$('#tokenfield').tokenfield('destroy');
		document.title = "Edit Article";

		$('#article').summernote({height:200});
		
		/*tinymce.init({
			selector: 'textarea',
			resize: 'true',
			skin_url: '/packages/teamon_tinymce/skins/lightgray',
			toolbar:'image styleselect codesample forecolor backcolor ltr rtl fullscreen insertdatetime media pagebreak searchreplace table visualblocks code',
			plugins: "advlist autolink link image imagetools lists charmap print preview wordcount codesample textcolor colorpicker contextmenu directionality fullscreen hr insertdatetime legacyoutput media pagebreak searchreplace table visualblocks code",
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
			},
			setup: function(editor) {
				// console.log("====>>", editor)
				editor.on('init', function (e) {
					console.log('Editor was initialized.');
				});
			}
		});*/
		
		that=this;
		setTimeout(function(){
			var validObj=$("#edit-article").validate({
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
			that.setState({valid:validObj})
		}, 3000)
	},
	componentWillUnmount: function() {
		// tinymce.remove();
		$('#article').summernote('destroy');
	},
	componentDidUpdate: function() {
		// console.log("====>> componentDidUpdate()")
		var sourceData=[];

		$('#article').summernote({height: 200});


		/*tinymce.remove();
		tinymce.init({
			selector: 'textarea',
			skin_url: '/packages/teamon_tinymce/skins/lightgray',
			resize: 'true'
		});*/

		/*tinymce.init({
			selector: 'textarea',
			resize: 'true',
			skin_url: '/packages/teamon_tinymce/skins/lightgray',
			toolbar:'image styleselect codesample forecolor backcolor ltr rtl fullscreen insertdatetime media pagebreak searchreplace table visualblocks code',
			plugins: "advlist autolink link image imagetools lists charmap print preview wordcount codesample textcolor colorpicker contextmenu directionality fullscreen hr insertdatetime legacyoutput media pagebreak searchreplace table visualblocks code",
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
			},
			setup: function(editor) {
				// console.log("====>>", editor)
				editor.on('click', function (e) {
					console.log('Editor is clicked!');
				});
			}
		});*/
		
		_.each(this.data.tags,function(a){
			sourceData.push(a.title);
		});

		$('#tokenfield').tokenfield({
			autocomplete: {
				source: sourceData,
				delay: 100
			},
			showAutocompleteOnFocus: true,
			createTokensOnBlur: true
		})
	},
	submitData(event){
		event.preventDefault();
		if(this.state.valid.form()){
			var title=ReactDOM.findDOMNode(this.refs.title).value.trim();
			var alias= generateAlias(title);
			var category=ReactDOM.findDOMNode(this.refs.myselect).value.trim();
			// var article=tinyMCE.get(ReactDOM.findDOMNode(this.refs.editor1).id).getContent().trim();
			var article = $('#article').summernote('code');
			var metaKeyword=ReactDOM.findDOMNode(this.refs.keyword).value.trim();
			var metaDescription=ReactDOM.findDOMNode(this.refs.desc).value.trim();
			let objOfTags=$('#tokenfield').tokenfield('getTokens');
			tags=_.pluck(objOfTags, 'value');
			Meteor.call('editArticle',FlowRouter.getParam("_id"),title,alias,category,tags,article,metaKeyword,metaDescription,(err,data)=>{
				if(err){
					this.setState({errorMsg:err.reason})
				}else{
					this.setState({successMsg:true});
				}
			});
		}
	},
	resetSuccessMsg(){
		this.setState({'successMsg':false})
		this.setState({'errorMsg':false})
	},
	render(){

		if (this.data.pageLoading) {
			return <LoadingSpinner />;
		}
    
		if(this.state.successMsg){
			msg=<AlertMessage data={'updated article.'} func={this.resetSuccessMsg}/>
		}else if(this.state.errorMsg){
			msg=<AlertMessageOfError data={this.state.errorMsg} func={this.resetSuccessMsg}/>
		}else{
			msg='';
		}

		return (
			<div className="col-md-10 content" onClick={this.resetSuccessMsg}>
				<Heading  data={i18n('ADMIN_COTNENTS_ARTICLES_EDITARTICLE')} />
				{msg}
				<div className="panel-body">
					<div id="notification"></div>
					<form id="edit-article" className = "form-horizontal" role = "form" onSubmit={this.submitData}>
						<div className = "form-group">
							<label htmlFor = "firstname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_TITLE')}</label>
							<div className = "col-sm-10">
								<input type = "text" id="title" name="title" ref="title" className = "form-control"  placeholder = "Enter title" defaultValue={this.data.results?this.data.results.title:''} required/>
								{/* <input type = "hidden" id="title" ref="alias" className = "form-control" placeholder = "alias" defaultValue={this.data.results.alias} required/>
								*/} 
							</div>
						</div>
						<div className = "form-group">
							<label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_CATEGORY')}</label>
							<div className = "col-sm-10">
								<select selected="select" defaultValue={this.data.results?this.data.results.category:''} ref="myselect" name='SelectName' className="selectpicker form-control" id='myselect' data-style="btn-primary" >
									<option value="">--select--</option>
									{
										this.data.catdata.map(function(result){
											return  <option key={result._id} value={result._id}>{result.title}</option>
										})
									} 
								</select>
							</div>
						</div>
						<div className = "form-group">
							<label  htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_TAGS')}</label>
							<div className = "col-sm-10" id="token"> 
								<input type="text" ref="token" id="tokenfield" className="form-control" defaultValue={this.data.results?this.state.tagTitle:''} />
							</div>
						</div>
						<div className = "form-group">
							<label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_ARTICLE')}</label>
							<div className = "col-sm-10">
								<div className="summernote">
									<textarea type="text" id="article" className="form-control" defaultValue={this.data.results?this.data.results.article:''}></textarea>
								</div>
							</div>
						</div>
						<div className = "form-group">
							<label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_METAKEYWORD')}</label>
							<div className = "col-sm-10">
								<input type = "text" id='metaKeyword' name="keyword" ref="keyword" defaultValue={this.data.results?this.data.results.metaKeyword:''} className = "form-control" />
							</div>
						</div>
						<div className = "form-group">
							<label  htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_METADESCRIPTION')}</label>
							<div className = "col-sm-10">
								<input type="textarea" id='metaDescription' name="desc" ref="desc" defaultValue={this.data.results?this.data.results.metaDescription:''} className="form-control" />
							</div>
						</div>
						<div className="form-group">
							<div className = "col-sm-offset-2 col-sm-10">
								<button className="btn btn-primary" type="submit">UPDATE</button>
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

/*LoadingSpinner=React.createClass({
	render:function(){
		return <div>Loading....</div>
	}
})*/