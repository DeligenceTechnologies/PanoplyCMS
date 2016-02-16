EditModule = React.createClass({
  insertSidebar() { },
  componentDidMount: function(){
    console.log("Component Mount Call");
    document.title = "Edit Module";
  },
  componentDidUpdate: function(){
    tinymce.init({
      selector: '#editor1',
      resize: 'both',
      min_height: 250,
      image_advtab: true,
      content_css: [
        '//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
        '//www.tinymce.com/css/codepen.min.css'
      ]
    });
  },
  mixins: [ReactMeteorData],
  getMeteorData() {
    var handle = Meteor.subscribe('moduleList');
    return {
      ready : handle.ready(),
      aModule: Modules.find({_id:this.props._id}).fetch()
    };
  },
  handleSubmit(event) {
    var update = {
      title : ReactDOM.findDOMNode(this.refs.titleRaw).value.trim(),
      "modDesc":{
        "type":'htmlBlock',
        "value": tinyMCE.get(ReactDOM.findDOMNode(this.refs.htmlValue).id).getContent().trim(),
      },
      "position": $(ReactDOM.findDOMNode(this.refs.position)).val(),
      "menu": $(ReactDOM.findDOMNode(this.refs.menus)).val(),
      "status": $(ReactDOM.findDOMNode(this.refs.publish)).val()
    }

    // console.log("message ==>",title, htmlValue, position, menuArr, publish);

    Meteor.call("editModule", {"_id": this.props._id}, update);

    FlowRouter.go('modulesManager');
  },
  cancelSubmit(){
    FlowRouter.go('modulesManager');
  },
  trashThisModule(){
    Meteor.call("removeModule", this.props._id);
    FlowRouter.go('modulesManager');
  },
  render() {
    // console.log(this.data.ready);
    console.log(this.data.aModule[0]);
    if (this.data.ready) {
      return (
        <div className="col-md-10 sidebar">
          <span className=""> Add HTML Blocks </span>
            <form id="non-editable" className="form-horizontal" role="form" >
              <div className="form-group">
                <label htmlFor="title" className="col-sm-1 control-label">Title</label>
                <div className="col-sm-9">
                  <input type="text" name="title" ref="titleRaw" id="title" className="col-sm-6 form-control" defaultValue={this.data.aModule[0].title} required/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="html" className="col-sm-1 control-label">HTML</label>
                <div className="col-sm-11">
                  <textarea defaultValue={this.data.aModule[0].modDesc.value} id="editor1" ref="htmlValue" name="editor1" width="800px"></textarea>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="position" className="col-sm-1 control-label">Position</label>
                <div className="col-sm-6">
                  <select id="select_position" defaultValue={this.data.aModule[0].position} ref="position" className="form-control" >
                      <option value="">-- Select --</option>
                      <option value="home-page-head">Home Page Head</option>
                      <option value="home-block-1">Home Block 1</option>
                      <option value="home-block-2">Home Block 2</option>
                      <option value="copyright">Copyright</option>
                      <option value="footer-1">Footer 1</option>
                      <option value="footer-2">Footer 2</option>
                      <option value="footer-3">Footer 3</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="menu" className="col-sm-1 control-label" ref="menu" >Menu</label>
                <div className="col-sm-6">
                  <select id="select_menus" defaultValue={this.data.aModule[0].menu} ref="menus" className="form-control" multiple>
                    <option value="main-menu">Home</option>
                    <option value="left-side">Left</option>
                    <option value="right-side">Right</option>
                    <option value="footer-menu">Bottom</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="" className="col-sm-1 control-label">Status</label>
                <div className="col-sm-6">
                  <select id="select_publish" defaultValue={this.data.aModule[0].status} ref="publish" className="form-control" >
                      <option value="">-- Select --</option>
                      <option value="true">Published</option>
                      <option value="false">Unpublished</option>
                  </select>
                </div>
              </div>
              <div className="btn-toolbar">
                <button className="btn btn-success" onClick={this.handleSubmit}>Save & Close</button>
                {/*<button className="btn btn-warning" onClick={this.trashThisModule}>Trash</button>*/}
                <button className="btn btn-danger" onClick={this.cancelSubmit}>Cancel</button>
              </div>
            </form>
        </div>
      );
    }else {
      return(
        <div className="alert alert-danger col-sm-3" role="alert">Please wait while the page is loading...</div>
      );
    }
  }
});

FlowRouter.route('/admin/modules/edit/:_id', {
 name: 'EditModule',
  subscriptions: function(params){
    this.register('AdminSidebarMenu',Meteor.subscribe('sidebar')),
    // this.register('AllModules',Meteor.subscribe('moduleList')),
    this.register('Sites',Meteor.subscribe('siteName')),
    this.register('editmodules',Meteor.subscribe('findAModule', params._id))
 },
 action: function(params) {
   ReactLayout.render(AdminLayout,{content:<EditModule _id={params._id}/>
   });
 },
 triggersEnter: [function(context, redirect){
   console.log('Edit Module Form');
 }]
});
