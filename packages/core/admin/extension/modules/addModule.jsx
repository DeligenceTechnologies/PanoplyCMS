AddModule = React.createClass({
  propTypes: {
    type: React.PropTypes.string
  },
  insertSidebar() { },
  componentDidMount: function(){
		document.title = "Add Module";
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
  handleSubmit(event) {
    event.preventDefault();
    var insert = {
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
  },
  renderHBform(){
    // console.log(this.props.type, "<= Calling from props");
    return (
      <div className="form-group">
        <label htmlFor="html" className="col-sm-1 control-label">HTML</label>
        <div className="col-sm-11">
          <textarea id="editor1" ref="htmlValue" name="editor1" ></textarea>
        </div>
      </div>
    );
  },
  cancelSubmit(){
    FlowRouter.go('modulesManager');
  },
  render() {
    return (
      <div className="col-md-10 sidebar">
        <span className="alert"> Add {this.props.type} </span>
          <form id="non-editable" className="form-horizontal" role="form" >
            <div className="form-group">
              <label htmlFor="lastname" className="col-sm-1 control-label">Title</label>
              <div className="col-sm-11">
                <input type="text" name="title" ref="titleRaw" id="title" className="form-control" required/>
              </div>
            </div>
            {this.props.type == _('Htmlblock').capitalize()?this.renderHBform():''}            
            {/*<Menumodule /> // {this.props.children}*/}
            <div className="form-group">
              <label htmlFor="position" className="col-sm-1 control-label">Position</label>
              <div className="col-sm-11">
                <select id="select_position" ref="position" name="position" className="form-control" >
                    <option value="">-- Select --</option>
                    <option value="home-page-head"> Home Page Header </option>
                    <option value="home-block-1">   Home Block 1     </option>
                    <option value="home-block-2">   Home Block 2     </option>
                    <option value="copyright">      Copyright Block  </option>
                    <option value="footer-1">       Footer Block1    </option>
                    <option value="footer-2">       Footer Block2    </option>
                    <option value="footer-3">       Footer Block3    </option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="menu" className="col-sm-1 control-label" >Menu</label>
              <div className="col-sm-11">
                <select id="select_menus" ref="menus" name="menus" className="form-control" multiple>
                  <option value="main-menu">  Home  </option>
                  <option value="left-side">  Left  </option>
                  <option value="right-side"> Right </option>
                  <option value="footer-menu">Bottom</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="" className="col-sm-1 control-label">Status</label>
              <div className="col-sm-11">
                <select id="select_publish" ref="publish" name="publish" className="form-control" >
                    <option value="">--   Select  1   --</option>
                    <option value="true"> Published   </option>
                    <option value="false">Unpublished </option>
                </select>
              </div>
            </div>
            <div className="btn-toolbar">
              <button className="btn btn-success" onClick={this.handleSubmit}>Save & Close</button>
              <button className="btn btn-danger" onClick={this.cancelSubmit}>Close</button>
            </div>
          </form>
      </div>
    );
  }
});
