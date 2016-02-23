AddArticle=React.createClass({
	componentDidMount: function(){
		document.title = "Add Article"
		tinymce.init({ selector: 'textarea' });
    
    var engine = new Bloodhound({
  local: [{value: 'red'}, {value: 'blue'}, {value: 'green'} , {value: 'yellow'}, {value: 'violet'}, {value: 'brown'}, {value: 'purple'}, {value: 'black'}, {value: 'white'}],
  datumTokenizer: function(d) {
    return Bloodhound.tokenizers.whitespace(d.value);
  },
  queryTokenizer: Bloodhound.tokenizers.whitespace
});

    engine.initialize();
      console.log(888, $('#tokenfield-typeahead'));
  //   $('#tokenfield-typeahead').tokenfield({
  //   typeahead: [null, { source: engine.ttAdapter() }]
  // });
    console.log('------------');
	},
	componentWillUnmount: function() {
		
	},
	componentDidUpdate: function() {
	    tinymce.init({ selector: 'textarea' });
	},
	submitData(event){
		event.preventDefault();
    
    	var title=ReactDOM.findDOMNode(this.refs.title).value.trim();
    	var alias=ReactDOM.findDOMNode(this.refs.alias).value.trim();
    	var category=ReactDOM.findDOMNode(this.refs.myselect).value.trim();
    	var tags=ReactDOM.findDOMNode(this.refs.token).value.trim();
    	var article=tinyMCE.get(ReactDOM.findDOMNode(this.refs.editor1).id).getContent();
    	var metaKeyword=ReactDOM.findDOMNode(this.refs.keyword).value.trim();
    	var metaDescription=ReactDOM.findDOMNode(this.refs.desc).value.trim();
      console.log(article);
    	Meteor.call('addArticles',title,alias,category,tags,article,metaKeyword,metaDescription,function(err,data){
    		if(err)
    			console.log(err);
    		else
    			FlowRouter.go('articles');
      
    	});
	},
	render(){
		return (
			 <div className="col-md-10 content">
    <div className="panel-heading"><span className="lead"> Add Articles </span></div>
    <div className="panel-body">
    <div id="notification"></div>
      <form id="non-editable" className = "form-horizontal" role = "form" onSubmit={this.submitData} >
        <div className = "form-group">
          <label htmlFor = "firstname" className = "col-sm-2 control-label">Title</label>
          <div className = "col-sm-10">
            <input type = "text" name="title" ref="title"  className = "form-control"  placeholder = "Enter title" required/>
          </div>
        </div>
        <div className = "form-group">
          <label htmlFor = "lastname" className = "col-sm-2 control-label">Alias</label>
          <div className = "col-sm-10">
            <input type = "text" name="alias" ref="alias" className = "form-control"  placeholder = "Enter alias" />
          </div>
        </div>
        <div className = "form-group">
          <label htmlFor = "lastname" className = "col-sm-2 control-label">Category</label>
          <div className = "col-sm-10">
            <select selected="select" ref="myselect" className="selectpicker form-control " data-style="btn-primary" >
              <option value="">Option</option>
             
                <option value="category1">category1</option>
                <option value="category2">category1</option>
             
            </select>
          </div>
        </div>
        <div className = "form-group">
          <label htmlFor = "lastname" className = "col-sm-2 control-label">Tags</label>
          <div className = "col-sm-10" id="token" > 
            <input type="text" ref="token" className="form-control" id="tokenfield-typeahead" />
          </div>
       </div>
      <div className = "form-group">
        <label htmlFor = "lastname" className = "col-sm-2 control-label">Article</label>
        <div className = "col-sm-10">
          <div className="summernote">
            <textarea ref="editor1"></textarea>
          </div>
        </div>
      </div>
      <div className = "form-group">
        <label htmlFor = "lastname" className = "col-sm-2 control-label">Meta Keyword</label>
        <div className = "col-sm-10">
           <input type = "text" name="keyword" ref="keyword" className = "form-control" required/>
        </div>
      </div>
      <div className = "form-group">
        <label htmlFor = "lastname" className = "col-sm-2 control-label">Meta Description</label>
        <div className = "col-sm-10">
          <input type="textarea" name="desc" ref="desc" className="form-control" required/>
        </div>
      </div>
      <div className="form-group">
        <div className = "col-sm-offset-2 col-sm-10">
          <button className="btn btn-primary btn-lg" >Save</button>
        </div>
      </div> 
      <div className="form-group">
        <div className = "col-sm-offset-2 col-sm-10">
          <button className="btn btn-success btn-lg" ><a href={FlowRouter.path('articles')}>Cancel</a></button>
        </div>
      </div>   
    </form>
  </div>
</div>
		)
	}

})