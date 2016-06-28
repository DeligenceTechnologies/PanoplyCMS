AddArticle=React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
    Meteor.subscribe('Categories');
    Meteor.subscribe('tags');
    return {
      
      results: PanoplyCMSCollections.Categories.find({trash:false}).fetch(),
      tags: PanoplyCMSCollections.Tags.find({trash:false}).fetch()
    } 
  },
	getInitialState(){
	 return {
			language:i18n.getLanguage(),
      msg:'',
      valid:''
		}
	},
	componentDidMount: function(){
		document.title = "Add Article"
tinymce.init({ selector: '#editor1' });
	},
	componentWillUnmount: function() {
		
	},
	componentDidUpdate: function() {

	  tinymce.init({ selector: '#editor1' });
      var sourceData=[];
      
    _.each(this.data.tags,function(a){
        sourceData.push(a.title);
      });

      $('#tokenfield').tokenfield({
        autocomplete: {
          source:sourceData,
          delay: 100
        },
        showAutocompleteOnFocus: true
      })

	},
	submitData(event){
		event.preventDefault();
    
    	var title=ReactDOM.findDOMNode(this.refs.title).value.trim();
    	var alias = generateAlias(title);
    	var category=ReactDOM.findDOMNode(this.refs.myselect).value.trim();
    	var tags=ReactDOM.findDOMNode(this.refs.token).value.trim();
      var article=ReactDOM.findDOMNode(this.refs.editor1).value.trim();
  //	var article=tinyMCE.get(ReactDOM.findDOMNode(this.refs.editor1).id).getContent().trim();
    //alert(ReactDOM.findDOMNode(this.refs.editor1).value.trim())
    	var metaKeyword=ReactDOM.findDOMNode(this.refs.keyword).value.trim();
    	var metaDescription=ReactDOM.findDOMNode(this.refs.desc).value.trim();
      tagAry=tags.split(',');
      that=this;
      console.log(article)
      for(i=0;i<tagAry.length;i++){
         Meteor.call('addTagExt',tagAry[i]);
      }
      
    	Meteor.call('addArticles',title,alias,category,tags,article,metaKeyword,metaDescription,function(err,data){
    		if(err)
    			console.log(err);
    		else{
    			FlowRouter.go('articles');
          //that.setState({msg : true})
        }
      
    	});
	},
	render(){
    if (this.data.pageLoading) {
      return <LoadingSpinner />;
    }
		return (
			 <div className="col-md-10 content">
       <Heading  data={i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLES')} />
       {this.state.msg?<AlertMessage data={'Successfully added article.'}/>:''}
        <div className="panel-body">
        <div id="notification"></div>
          <form id="non-editable" className = "form-horizontal" role = "form" onSubmit={this.submitData} >
            <div className = "form-group">
              <label htmlFor = "firstname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_TITLE')}</label>
              <div className = "col-sm-10">
                <input type = "text" name="title" ref="title"  className = "form-control"  placeholder = "Enter title" required/>
              </div>
            </div>
            <div className = "form-group">
              <label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_CATEGORY')}</label>
              <div className = "col-sm-10">
                <select defaultValue='select' ref="myselect" className="selectpicker form-control " data-style="btn-primary" >
                  <option value="select">--select--</option>
                   {this.data.results.map(function(result){
                      return  <option key={result._id} value={result._id}>{result.title}</option>
                      })
                    }   
                </select>
              </div>
            </div>
            <div className = "form-group">
              <label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_TAGS')}</label>
              <div className = "col-sm-10" id="token" > 
                <input type="text" ref="token" className="form-control" id="tokenfield" defaultValue="red,green,blue" />
              </div>
            </div>
            <div className = "form-group">
              <label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_ARTICLE')}</label>
              <div className = "col-sm-10">
                <div className="summernote">

                  <textarea ref="editor1" id="article" />
                </div>
              </div>
            </div>
            <div className = "form-group">
              <label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_METAKEYWORD')}</label>
              <div className = "col-sm-10">
                 <input type = "text" name="keyword" ref="keyword" className = "form-control" required/>
              </div>
            </div>
            <div className = "form-group">
              <label htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_METADESCRIPTION')}</label>
              <div className = "col-sm-10">
                <input type="textarea" name="desc" ref="desc" className="form-control" required/>
              </div>
            </div>
            <div className="form-group">
              <div className = "col-sm-offset-2 col-sm-10">
                <button className="btn btn-primary " >{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_SAVE')}</button>
                &nbsp;&nbsp;
                <a className="btn btn-success" href={FlowRouter.path('articles')}>{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_CANCEL')}</a>
              </div>
            </div> 
          </form>
        </div>
      </div>
		)
	}

})

