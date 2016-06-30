HtmlBlock = React.createClass({
	componentDidMount: function(){
		
tinymce.init({ selector: '#editor1' });
	},
	componentDidUpdate(){
	 tinymce.init({ selector: '#editor1' });
	},
	getHTML(){
		return tinyMCE.get(ReactDOM.findDOMNode(this.refs.htmlValue).id).getContent().trim();
	},
	render(){
		return(
			   <div className = "form-group">
              <label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_ARTICLE')}</label>
              <div className = "col-sm-10">
                <div className="summernote">

                  <textarea ref="editor1" id="article" />
                </div>
              </div>
            </div>
		);
	}
});
