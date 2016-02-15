EditModule = React.createClass({
  insertSidebar() { },
  componentDidMount: function(){
    console.log("Component Mount Call");
    document.title = "Edit Module";
    tinymce.init({ selector: '#editor1' });

  },
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      aModule: Modules.find({_id:this.props._id}).fetch()
    };
  },
  handleSubmit(event) {
    event.preventDefault();
    update = {
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
  trashThisModule(){
    Meteor.call("removeModule", this.props._id);
    FlowRouter.go('modulesManager');
  },
  render() {
    console.log(this.data.aModule[0].modDesc.value);
    return (
      <div className="col-md-10 sidebar">
        <span className=""> Add HTML Blocks </span>
          <form id="non-editable" className="" role="form" >
            <div className="control-group">
              <div className="control-label">
                <label htmlFor="title" className="">Title</label>
              </div>
              <div className="controls">
                <input type="text" name="title" ref="titleRaw" id="title" className="" defaultValue={this.data.aModule[0].title} required/>
              </div>
            </div>
            <div className="">
              <label htmlFor="html" className="">HTML</label>
              <div className="">
                <textarea defaultValue={this.data.aModule[0].modDesc.value} id="editor1" ref="htmlValue" name="editor1" ></textarea>
              </div>
            </div>
            <div className="btn-group">
              <label htmlFor="position" className="">Position</label>
              <div className="">
                <select id="select_position" defaultValue={this.data.aModule[0].position} ref="position" className="" >
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
            <div className="">
              <label htmlFor="menu" className="" ref="menu" >Menu</label>
              <div className="">
                <select id="select_menus" defaultValue={this.data.aModule[0].menu} ref="menus" multiple>
                  <option value="main-menu">Home</option>
                  <option value="left-side">Left</option>
                  <option value="right-side">Right</option>
                  <option value="footer-menu">Bottom</option>
                </select>
              </div>
            </div>
            <div className="">
              <label htmlFor="" className="">Status</label>
              <div className="">
                <select id="select_publish" defaultValue={this.data.aModule[0].status} ref="publish" className="" >
                    <option value="">-- Select --</option>
                    <option value="true">Published</option>
                    <option value="false">Unpublished</option>
                </select>
              </div>
            </div>
            <div className="btn-toolbar">
              <button className="btn btn-success" onClick={this.handleSubmit}>Save</button>
              <button className="btn btn-danger" onClick={this.trashThisModule}>Trash</button>
            </div>
          </form>
      </div>
    );
  }
});

FlowRouter.route('/admin/modules/edit/:_id', {
 name: 'EditModule',
  subscriptions: function(params){
    this.register('AdminSidebarMenu',Meteor.subscribe('sidebar')),
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
