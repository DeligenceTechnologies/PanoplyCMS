
EditArticle=React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
    return {
      results: Articles.find().fetch()
    } 
  },
  getInitialState: function() {
   
    res=Articles.findOne({_id:FlowRouter.getParam("_id")});
    return {
      result: res
    }
  },
  handleChange: function(event) {
    var retObj={};
      retObj["res"] = this.state.res;
    
    retObj["res"][event.target.id] = event.target.value;
    // let result1 = this.state.result
    // _.each(result1, function(v, k, l){
    //   if(k == event.target.id){
    //     l[k] = event.target.value
    //   }
    // })
    this.setState(retObj)
  },
	componentDidMount: function(){
		document.title = "Edit Article";
		tinymce.init({ selector: 'textarea' });
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
		return (
			 <div className="col-md-10 content">
    <div className="panel-heading"><span className="lead"> Add Articles </span></div>
    <div className="panel-body">
    <div id="notification"></div>
      <form id="non-editable" className = "form-horizontal" role = "form" onSubmit={this.submitData} >
        <div className = "form-group">
          <label  htmlFor = "firstname" className = "col-sm-2 control-label">Title</label>
          <div className = "col-sm-10">
            <input type = "text" id="title" ref="title"  onChange={this.handleChange} className = "form-control"  placeholder = "Enter title" value={this.state.result.title} required/>
          </div>
        </div>
        <div className = "form-group">
          <label htmlFor = "lastname" className = "col-sm-2 control-label">Alias</label>
          <div className = "col-sm-10">
            <input type = "text" id="alias" ref="alias" onChange={this.handleChange} value={this.state.result.alias} className = "form-control"  placeholder = "Enter alias" />
          </div>
        </div>
        <div className = "form-group">
          <label  htmlFor = "lastname" className = "col-sm-2 control-label">Category</label>
          <div className = "col-sm-10">
            <select selected="select" ref="myselect" onChange={this.handleChange} className="selectpicker form-control " id='myselect' data-style="btn-primary" >
              <option value={this.state.result.category}  >Option</option>
             
                <option value="category1">category1</option>
                <option value="category2">category1</option>
             
            </select>
          </div>
        </div>
        <div className = "form-group">
          <label  htmlFor = "lastname" className = "col-sm-2 control-label">Tags</label>
          <div className = "col-sm-10" id="token" > 
            <input type="text" ref="token" id="tag" onChange={this.handleChange}  className="form-control" id="tokenfield-typeahead" value={this.state.result.tags} />
          </div>
       </div>
      <div className = "form-group">
        <label  htmlFor = "lastname" className = "col-sm-2 control-label">Article</label>
        <div className = "col-sm-10">
          <div className="summernote">
            <textarea ref="editor1" id="article" onChange={this.handleChange} value={this.state.result.article}></textarea>
          </div>
        </div>
      </div>
      <div className = "form-group">
        <label  htmlFor = "lastname" className = "col-sm-2 control-label">Meta Keyword</label>
        <div className = "col-sm-10">
           <input type = "text" id='metaKeyword' name="keyword" ref="keyword" value={this.state.result.metaKeyword} className = "form-control" onChange={this.handleChange} required/>
        </div>
      </div>
      <div className = "form-group">
        <label  htmlFor = "lastname" className = "col-sm-2 control-label">Meta Description</label>
        <div className = "col-sm-10">
          <input type="textarea" id='metaDescription' onChange={this.handleChange} name="desc" ref="desc" value={this.state.result.metaDescription} className="form-control" required/>
        </div>
      </div>
      <div className="form-group">
        <div className = "col-sm-offset-2 col-sm-10">
          <button className="btn btn-primary btn-lg" >Save</button>
        </div>
      </div>  
      <div className="form-group">
        <div className = "col-sm-offset-2 col-sm-10">
          <button className="btn btn-success " ><a href={FlowRouter.path('articles')}>Cancel</a></button>
        </div>
      </div>  
    </form>
  </div>
</div>
		)
	}

})