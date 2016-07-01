import {teamon} from 'meteor/teamon:tinymce';

EditArticle=React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
    Meteor.subscribe('Categories');
    //Meteor.subscribe('tags');
    var handle=Meteor.subscribe('findOneArticle',FlowRouter.getParam("_id"));
    return {
      pageLoading: ! handle.ready(),
      results: PanoplyCMSCollections.Articles.findOne({_id:FlowRouter.getParam("_id")}),
      catdata: PanoplyCMSCollections.Categories.find().fetch(),
      sourceData: PanoplyCMSCollections.Tags.find({}).fetch()
    } 
  },
	componentDidMount: function(){
		document.title = "Edit Article";
    console.log('edit article called.....',$('textarea'));
		//tinymce.remove();

    tinymce.init({
      selector: 'textarea',
      skin_url: '/packages/teamon_tinymce/skins/lightgray',
    });
	},
	componentWillUnmount: function() {
		//tinymce.remove();
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
        showAutocompleteOnFocus: true
      })
	},
	submitData(event){
		event.preventDefault();
    	var title=ReactDOM.findDOMNode(this.refs.title).value.trim();
    	var alias= generateAlias(title);
    	var category=ReactDOM.findDOMNode(this.refs.myselect).value.trim();
    	var tags=ReactDOM.findDOMNode(this.refs.token).value.trim();
    	var article=ReactDOM.findDOMNode(this.refs.editor1).value.trim();
    	var metaKeyword=ReactDOM.findDOMNode(this.refs.keyword).value.trim();
    	var metaDescription=ReactDOM.findDOMNode(this.refs.desc).value.trim();

    	Meteor.call('editArticle',FlowRouter.getParam("_id"),title,alias,category,tags,article,metaKeyword,metaDescription,function(err,data){
    		if(err)
    			console.log(err);
    		else
    			FlowRouter.go('articles');
    	});
	},
	render(){

    if (this.data.pageLoading) {
      return <LoadingSpinner />;
    }
		return (
			 <div className="col-md-10 content">
       <Heading  data={i18n('ADMIN_COTNENTS_ARTICLES_EDITARTICLE')} />
        <div className="panel-body">
          <div id="notification"></div>
            <form id="non-editable" className = "form-horizontal" role = "form" onSubmit={this.submitData} >
              <div className = "form-group">
                <label  htmlFor = "firstname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_TITLE')}</label>
                <div className = "col-sm-10">
                  <input type = "text" id="title" ref="title" className = "form-control"  placeholder = "Enter title" defaultValue={this.data.results.title} required/>
{/*                   <input type = "hidden" id="title" ref="alias" className = "form-control"  placeholder = "alias" defaultValue={this.data.results.alias} required/>
            */} 
                </div>
              </div>
              <div className = "form-group">
                <label  htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_CATEGORY')}</label>
                <div className = "col-sm-10">
                  <select selected="select" defaultValue={this.data.results.category} ref="myselect"  className="selectpicker form-control " id='myselect' data-style="btn-primary" >
                      {this.data.catdata.map(function(result){
                      return  <option key={result._id} value={result._id}>{result.title}</option>
                      })
                    } 
                  </select>
                </div>
              </div>
              <div className = "form-group">
                <label  htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_TAGS')}</label>
                <div className = "col-sm-10" id="token" > 
                  <input type="text" ref="token" id="tokenfield"   className="form-control"  defaultValue={this.data.results.tags} />
                </div>
             </div>
            <div className = "form-group">
              <label  htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_ARTICLE')}</label>
              <div className = "col-sm-10">
                <div className="summernote">
                  <textarea ref="editor1" id="article"  defaultValue={this.data.results.article} />
                </div>
              </div>
            </div>
            <div className = "form-group">
              <label  htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_METAKEYWORD')}</label>
              <div className = "col-sm-10">
                 <input type = "text" id='metaKeyword' name="keyword" ref="keyword" defaultValue={this.data.results.metaKeyword} className = "form-control" required/>
              </div>
            </div>
            <div className = "form-group">
              <label  htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_METADESCRIPTION')}</label>
              <div className = "col-sm-10">
                <input type="textarea" id='metaDescription'  name="desc" ref="desc" defaultValue={this.data.results.metaDescription} className="form-control" required/>
              </div>
            </div>
            <div className="form-group">
              <div className = "col-sm-offset-2 col-sm-10">
                <button className="btn btn-primary " >SAVE</button>
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

LoadingSpinner=React.createClass({
  render:function(){
    return <div>Loading....</div>
  }
})
