AddModule = React.createClass({
    insertSidebar() { },
    componentDidMount: function(){
  		document.title = "Add Module"
  		tinymce.init({ selector: '#editor1' });
  	},
    handleSubmit(event) {
      event.preventDefault();
      insert = {
        "title":ReactDOM.findDOMNode(this.refs.titleRaw).value.trim(),
        "modDesc":{
          "type":'htmlBlock',
          "value": tinyMCE.get(ReactDOM.findDOMNode(this.refs.htmlValue).id).getContent().trim(),
        },
        "position": $(ReactDOM.findDOMNode(this.refs.position)).val(),
        "menu": $(ReactDOM.findDOMNode(this.refs.menus)).val(),
        "status": $(ReactDOM.findDOMNode(this.refs.publish)).val(),
        "owner":'browser-user'
      }
      Meteor.call("addModule", insert);

      ReactDOM.findDOMNode(this.refs.titleRaw).value = "";
      tinyMCE.get(ReactDOM.findDOMNode(this.refs.htmlValue).id).setContent('');
      ReactDOM.findDOMNode(this.refs.position).value = "";
      ReactDOM.findDOMNode(this.refs.menus).value = "";
      ReactDOM.findDOMNode(this.refs.publish).value = "";
      FlowRouter.go('modulesManager');
      // return false;
    },
    render() {
        return (

            <div className="col-md-10 sidebar">
              <span className=""> Add HTML Blocks </span>
                <form id="non-editable" className="" role="form" >
                  <div className="">
                    <label htmlFor="lastname" className="">Title</label>
                    <div className="">
                      <input type="text" name="title" ref="titleRaw" id="title" className="" required/>
                    </div>
                  </div>
                  <div className="">
                    <label htmlFor="html" className="">HTML</label>
                    <div className="">
                      <textarea id="editor1" ref="htmlValue" name="editor1" ></textarea>
                    </div>
                  </div>
                  <div className="btn-group">
                    <label htmlFor="position" className="">Position</label>
                    <div className="">
                      <select id="select_position" ref="position" className="" >
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
                    <label htmlFor="menu" className="" >Menu</label>
                    <div className="">
                      <select id="select_menus" ref="menus" multiple>
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
                      <select id="select_publish" ref="publish" className="" >
                          <option value="">-- Select --</option>
                          <option value="true">Published</option>
                          <option value="false">Unpublished</option>
                      </select>
                    </div>
                  </div>
                  <div className="">
                    <button className="btn btn-success" onClick={this.handleSubmit}>Save</button>
                  </div>
                </form>
            </div>
        );
    }
});

FlowRouter.route('/admin/modules/add', {
  name: 'AddModules',
  subscriptions: function(params){
    this.register('AdminSidebarMenu',Meteor.subscribe('sidebar')) ,
    this.register('Sites',Meteor.subscribe('siteName'))
  },
  action: function(params) {
    ReactLayout.render(AdminLayout, {content:<AddModule />});
  },
  triggersEnter: [function(context, redirect){
    console.log('Add Module Form');
  }]
});
