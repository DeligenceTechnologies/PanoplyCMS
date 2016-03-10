EditTag=React.createClass({
  mixins:[ReactMeteorData],  
  getMeteorData: function() {
    var handle = Meteor.subscribe('findTag',this.props._id)
    return {
      pageLoading: ! handle.ready(), 
      tagsData: Tags.findOne({_id:this.props._id})
    };
  },
  submitData(event){
    event.preventDefault();    
     var title=ReactDOM.findDOMNode(this.refs.title).value.trim();
      var desc=ReactDOM.findDOMNode(this.refs.desc).value.trim();
      var metaKeyword=ReactDOM.findDOMNode(this.refs.metaKeyword).value.trim();
      var metaDesc=ReactDOM.findDOMNode(this.refs.metaDesc).value.trim();
      //console.log(title,alias)
      Meteor.call('editTag',this.props._id,title,desc,metaKeyword,metaDesc,function(err,data){
        if(err)
          console.log(err);
        else{
          console.log(data);
          FlowRouter.go('tags');      
        }
      });
  },
render:function(){
   if (this.data.pageLoading) {
      return <LoadingSpinner />;
    }

return(
  <div className="col-md-10 content">
    <Heading  data={i18n('ADMIN_COMPONENTS_TAGS_EDITTAG')} />
    <div className="panel-body">
      <form className = "form-horizontal" role = "form" onSubmit={this.submitData}>
          <div className="form-group">
            <label className="col-sm-2 control-label">{i18n('ADMIN_COMPONENTS_TAGS_ADDTAGS_FORM_TAGNAME')}</label>
            <div className="col-sm-10">
              <input type = "text" ref="title" id="title" defaultValue={this.data.tagsData.title} className="form-control"   placeholder = "Enter title" required />
            </div>
          </div>
           <div className="form-group">
            <label className="col-sm-2 control-label">{i18n('ADMIN_COMPONENTS_TAGS_ADDTAGS_FORM_DESCRIPTION')}</label>
            <div className="col-sm-10">
              <textarea ref="desc" id="desc"  defaultValue={this.data.tagsData.desc} className="form-control"   required ></textarea>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">{i18n('ADMIN_COMPONENTS_TAGS_ADDTAGS_FORM_METAKEYWORD')}</label>
            <div className="col-sm-10">
              <input type = "text" ref="metaKeyword" id="metaKeyword" defaultValue={this.data.tagsData.metaKeyword} className="form-control"   placeholder = "Enter title" required />
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">{i18n('ADMIN_COMPONENTS_TAGS_ADDTAGS_FORM_METADESCRIPTION')}</label>
            <div className="col-sm-10">
              <textarea ref="metaDesc" id="metaDesc"  defaultValue={this.data.tagsData.metaDescription} className="form-control"    required ></textarea>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <input type = "submit" className="btn btn-success" value={i18n('ADMIN_COMPONENTS_TAGS_ADDTAGS_FORM_SAVE')} />
              &nbsp;&nbsp;
              <a href={FlowRouter.path('tags')} className="btn btn-danger">{i18n('ADMIN_COMPONENTS_TAGS_ADDTAGS_FORM_CANCEL')}</a>
            </div>
          </div>
      </form>
    </div>
    <div className="panel-body">
      <div id="notification"></div>
      
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