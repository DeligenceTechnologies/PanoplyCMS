AddModule = React.createClass({
  componentDidMount: function(){
    document.title = "Add Module"
    /*tinymce.init({
      selector: '#editor1',
      resize: 'both',
      min_height: 250,
      image_advtab: true,
      content_css: [
        '//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
        '//www.tinymce.com/css/codepen.min.css'
      ]
    });*/
    tinymce.init({ selector: 'textarea' });
  },
  componentDidUpdate:function(){
    tinymce.init({ selector: 'textarea' });
  },
  mixins: [ReactMeteorData],
  getMeteorData() {
    
    var handle=Meteor.subscribe('menus')
    return {
      pageLoading: ! handle.ready(),
      results: Menus.find({trash:false}).fetch()
    };
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
    // return false;
  },
  cancelSubmit(){
    FlowRouter.go('modulesManager');
  },
  render() {
     console.log(this.data.results);
    if (this.data.pageLoading) {
      return <LoadingSpinner />;
    }

    return (
      <div className="col-md-10 sidebar">
        <span className=""> Add HTML Blocks </span>
          <form id="non-editable" className="form-horizontal" role="form" >
            <div className="form-group">
              <label htmlFor="lastname" className="col-sm-1 control-label">Title</label>
              <div className="col-sm-11">
                <input type="text" name="title" ref="titleRaw" id="title" className="form-control" required/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="html" className="col-sm-1 control-label">HTML</label>
              <div className="col-sm-11">
                <textarea id="editor1" ref="htmlValue"  ></textarea>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="position" className="col-sm-1 control-label">Position</label>
              <div className="col-sm-11">
                <select id="select_position" ref="position" className="form-control" >
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
              <label htmlFor="menu" className="col-sm-1 control-label" >Menu</label>
              <div className="col-sm-11">
                   <select id="select_menus" ref="menus" className="form-control" >
                    {this.data.results.map(function(result){
                      console.log(result.title);
                          return  <ChildValue key={result._id} data={result} />
                        })
                    }
                 
                   
                   </select>
                
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="" className="col-sm-1 control-label">Status</label>
              <div className="col-sm-11">
                <select id="select_publish" ref="publish" className="form-control" >
                    <option value="">-- Select --</option>
                    <option value="true">Published</option>
                    <option value="false">Unpublished</option>
                </select>
              </div>
            </div>
            <div className="btn-toolbar">
              <button className="btn btn-success" onClick={this.handleSubmit}>Save</button>
              <button className="btn btn-danger" onClick={this.cancelSubmit}>Cancel</button>
            </div>
          </form>
      </div>
    );
  }
});
ChildValue=React.createClass({
 mixins: [ReactMeteorData],
  
  getMeteorData() {
    
     var handle=Meteor.subscribe('menuItemsbyParentId',this.props.data._id)
    return {
       pageLoading: ! handle.ready(),
      results: MenuItems.find({parentId:this.props.data._id,trash:false}).fetch()
    };
  },
  render() {
   var options = [];

   console.log(this.data.results,'this.data.results');
    if (this.data.pageLoading) {
      return <LoadingSpinner1  />;
    }

    options.push(<option key={this.props.data._id}  value={this.props.data._id} >{this.props.data.title}</option>);
    for (var i=0; i<this.data.results.length; i++) {
    options.push(<option key={i} value={this.data.results[i]._id} >{'--'+this.data.results[i].title}</option>);
    }
        return(
         <optgroup>
          {options}
        </optgroup>
        )
      
    
  }    
})


LoadingSpinner1=React.createClass({
  render:function(){
    return <option>Loading....</option>
  }
})

LoadingSpinner=React.createClass({
  render:function(){
    return <div>Loading....</div>
  }
})