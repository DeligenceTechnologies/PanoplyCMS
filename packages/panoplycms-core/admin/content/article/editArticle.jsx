import {teamon} from 'meteor/teamon:tinymce';

EditArticle=React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
    Meteor.subscribe('Categories');
    /*Meteor.subscribe('tags');*/
    var handle=Meteor.subscribe('findOneArticle',FlowRouter.getParam("_id"));
    return {
      pageLoading: ! handle.ready(),
      results: PanoplyCMSCollections.Articles.findOne({_id:FlowRouter.getParam("_id")}),
      catdata: PanoplyCMSCollections.Categories.find().fetch(),
      tags: PanoplyCMSCollections.Tags.find({}).fetch()
    } 
  },
  getInitialState(){
    return{
      successMsg:false,
      errorMsg:false,
      valid:'',
      tagTitle:''
    }

  },
	componentDidMount: function(){
   
    let arrayOftag=[];
     _.each(this.data.tags,(a)=>{
        _.each(this.data.results.tags,function(t){
          if(t==a._id){
            arrayOftag.push(a.title)
          }
        })
      });
    this.setState({tagTitle:arrayOftag})
    console.log(this.state.tagTitle,'tagTitle---')
    $('#tokenfield').tokenfield('destroy');
		document.title = "Edit Article";
    tinymce.init({
      selector: 'textarea',
      skin_url: '/packages/teamon_tinymce/skins/lightgray',
    });
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
		tinymce.remove();
	},
	componentDidUpdate: function() {
    var sourceData=[];

    tinymce.remove();
    tinymce.init({
      selector: 'textarea',
      skin_url: '/packages/teamon_tinymce/skins/lightgray',
    });

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
      	var alias= generateAlias(title);
      	var category=ReactDOM.findDOMNode(this.refs.myselect).value.trim();
      	var tags=ReactDOM.findDOMNode(this.refs.token).value.trim();
      	var article=tinyMCE.get(ReactDOM.findDOMNode(this.refs.editor1).id).getContent().trim();
      	var metaKeyword=ReactDOM.findDOMNode(this.refs.keyword).value.trim();
      	var metaDescription=ReactDOM.findDOMNode(this.refs.desc).value.trim();

      	Meteor.call('editArticle',FlowRouter.getParam("_id"),title,alias,category,tags,article,metaKeyword,metaDescription,(err,data)=>{
      		if(err){
      			this.setState({errorMsg:err})
          }
      		else{
      			this.setState({successMsg:'Articles update.'});
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
       msg=<AlertMessage data={' Update article.'} func={this.resetSuccessMsg}/>
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
            <form id="edit-article" className = "form-horizontal" role = "form" onSubmit={this.submitData} >
              <div className = "form-group">
                <label  htmlFor = "firstname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_TITLE')}</label>
                <div className = "col-sm-10">
                  <input type = "text" id="title" name="title" ref="title" className = "form-control"  placeholder = "Enter title" defaultValue={this.data.results?this.data.results.title:''} required/>
{/*                   <input type = "hidden" id="title" ref="alias" className = "form-control"  placeholder = "alias" defaultValue={this.data.results.alias} required/>
            */} 
                </div>
              </div>
              <div className = "form-group">
                <label  htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_CATEGORY')}</label>
                <div className = "col-sm-10">
                  <select selected="select" defaultValue={this.data.results?this.data.results.category:''} ref="myselect"  name='SelectName' className="selectpicker form-control " id='myselect' data-style="btn-primary" >
                      <option value="">--select--</option>
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
                  <input type="text" ref="token" id="tokenfield"   className="form-control"  defaultValue={this.data.results?this.state.tagTitle:''} />
                </div>
             </div>
            <div className = "form-group">
              <label  htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_ARTICLE')}</label>
              <div className = "col-sm-10">
                <div className="summernote">
                  <textarea ref="editor1" id="article"  name='editor' defaultValue={this.data.results?this.data.results.article:''} />
                </div>
              </div>
            </div>
            <div className = "form-group">
              <label  htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_METAKEYWORD')}</label>
              <div className = "col-sm-10">
                 <input type = "text" id='metaKeyword' name="keyword" ref="keyword" defaultValue={this.data.results?this.data.results.metaKeyword:''} className = "form-control" />
              </div>
            </div>
            <div className = "form-group">
              <label  htmlFor = "lastname" className = "col-sm-2 control-label">{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_METADESCRIPTION')}</label>
              <div className = "col-sm-10">
                <input type="textarea" id='metaDescription'  name="desc" ref="desc" defaultValue={this.data.results?this.data.results.metaDescription:''} className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <div className = "col-sm-offset-2 col-sm-10">
                <button className="btn btn-primary " >UPDATE</button>
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
