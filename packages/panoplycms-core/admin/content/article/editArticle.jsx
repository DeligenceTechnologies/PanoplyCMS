import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import Heading from '../../common/heading.jsx';
import LoadingSpinner from '../../common/loadingSpinner.jsx';
import { AlertMessage } from '../../common/alertMessage.jsx';

import { updateArticle } from '../../actions/article_action.js';

let editArticleHandler = function() {
  let onClick = function(id, obj) {
    store.dispatch(updateArticle(id, obj))
  };
  return {
    onClick
  };
};

class EditArticle extends Component {
	constructor(props) {
    super(props);
 
    this.state = {
			valid:'',
			tagTitle:''
    };
    this.handlers = editArticleHandler();
  }
  componentDidMount(){
		let arrayOftag = [];
		_.each(this.props.tags,(a)=>{
			_.each(this.props.results.tags,function(t){
				if(t == a._id){
					arrayOftag.push(a.title)
				}
			})
		});
		this.setState({ tagTitle: arrayOftag })

		$('#tokenfield').tokenfield('destroy');
		document.title = "Edit Article";

		$('#article').summernote({ height:200 });
		
		setTimeout(() => {
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
			this.setState({ valid:validObj })
		}, 3000)
	}
	componentWillUnmount() {
		// tinymce.remove();
		$('#article').summernote('destroy');
	}
	componentDidUpdate() {
		var sourceData = [];

		$('#article').summernote({height: 200});

		_.each(this.props.tags,function(a){
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
	}
	submitData(event){
		event.preventDefault();
		if(this.state.valid.form()){
			let objOfTags=$('#tokenfield').tokenfield('getTokens');
			let title = $('#title').val()
			let alias = generateAlias(title)
			let articleData ={
				title: title,
				alias: alias,
				category: $("#selectCategory").val(),
				article: $('#article').summernote('code'),
				metaKeyword: $('#metaKeyword').val(),
				metaDescription: $('#metaDescription').val(),
				tags: _.pluck(objOfTags, 'value')
			}
			/*Meteor.call('editArticle', FlowRouter.getParam("_id"), articleData, (err,data) => {
				if(err){
					AlertMessage('ERROR', err.reason, 'error');
				}else{
					AlertMessage('SUCCESS', 'Successfully! updated article.', 'success');
				}
			});*/
			this.handlers.onClick(FlowRouter.getParam("_id"), articleData);
		}
	}
	render(){
		if (this.props.pageLoading) {
			return <LoadingSpinner />;
		}

		let url=[{
	      title:"Dashboard",
	      url:"/admin/dashboard",
	      active:false
	    },{
	      title:"Articles",
	      url:"/admin/articles",
	      active:false
	    },{
	    	title:i18n('ADMIN_COTNENTS_ARTICLES_EDITARTICLE'),
	    	url:"/admin/articles/edit/"+FlowRouter.getParam("_id"),
	    	active:true
	    }];

		return (
			<div>
				<Heading key={this.props.pageLoading}  data={i18n('ADMIN_COTNENTS_ARTICLES_EDITARTICLE')} url={url} />
				<form id="edit-article" className="form-horizontal" role="form" onSubmit={this.submitData.bind(this)}>
				  <div className="controls-header">
            <div className="form-group">
							<div className="col-sm-12">
								<button className="btn custom-default-btn" type="submit">UPDATE</button>
								<a className="btn custom-default-btn" href={FlowRouter.path('articles')}>CANCEL</a>
							</div>
						</div>
				  </div>
					<div className="panel-body custom-panel">
						<div id="notification"></div>
						<div className="form-group">
							<label htmlFor="title" className="col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_TITLE')}</label>
							<div className = "col-sm-10">
								<input type = "text" id="title" name="title" className = "form-control" placeholder = "Enter title" defaultValue={this.props.results && this.props.results.title ? this.props.results.title:''} required />
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="selectCategory" className="col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_CATEGORY')}</label>
							<div className="col-sm-10">
								<select selected="select" defaultValue={this.props.results && this.props.results.category ? this.props.results.category:''} name='SelectName' className="selectpicker form-control" id='selectCategory' data-style="btn-primary">
									<option value="">--select--</option>
									{
										this.props.catdata ?
											this.props.catdata.map((result) => {
												return <option key={result._id} value={result._id}>{result.title}</option>
											})
										: ''
									} 
								</select>
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="tokenfield" className="col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_TAGS')}</label>
							<div className="col-sm-10" id="token"> 
								<input type="text" id="tokenfield" className="form-control" defaultValue={this.props.results?this.state.tagTitle:''} />
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="article" className="col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_ARTICLE')}</label>
							<div className="col-sm-10">
								<div className="summernote">
									<textarea type="text" id="article" className="form-control" defaultValue={this.props.results && this.props.results.article ? this.props.results.article:''}></textarea>
								</div>
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="metaKeyword" className="col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_METAKEYWORD')}</label>
							<div className="col-sm-10">
								<input type="text" id='metaKeyword' name="keyword" defaultValue={this.props.results && this.props.results.metaKeyword ? this.props.results.metaKeyword:''} className="form-control" />
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="metaDescription" className="col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_METADESCRIPTION')}</label>
							<div className="col-sm-10">
								<input type="textarea" id='metaDescription' name="desc" defaultValue={this.props.results && this.props.results.metaDescription ? this.props.results.metaDescription : ''} className="form-control" />
							</div>
						</div>
					</div>
			  </form>
			</div>
		)
	}
}

export default createContainer(() => {
	let handle1 = Meteor.subscribe('Categories');
	let handle2 = Meteor.subscribe('findOneArticle', FlowRouter.getParam("_id"));
	return {
		pageLoading: !handle1.ready() && !handle2.ready(),
		results: PanoplyCMSCollections.Articles.findOne({ _id:FlowRouter.getParam("_id") }),
		catdata: PanoplyCMSCollections.Categories.find().fetch(),
		tags: PanoplyCMSCollections.Tags.find({}).fetch()
	}
}, EditArticle)