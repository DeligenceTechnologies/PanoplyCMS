EditModule = React.createClass({
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
    var handle1=Meteor.subscribe('menus');
    return {
      ready : handle.ready(),
      aModule: Modules.find({_id:this.props._id}).fetch(),
      results: Menus.find({trash:false}).fetch()
    };
  },
  getMenuValue(){
    this.refs.menus.value=this.data.aModule[0].menu;
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
  if (this.data.ready) {
    that=this
    return (
      <div className="col-md-10 sidebar">
        <span className=""> {i18n('ADMIN_EXTENSION_MODULES_EDITHTMLBLOCKS')} </span>
          <form id="non-editable" className="form-horizontal" role="form" >
            <div className="form-group">
              <label htmlFor="title" className="col-sm-1 control-label">{i18n('ADMIN_EXTENSION_MODULES_ADDMODULE_FORM_TITLE')}</label>
              <div className="col-sm-9">
                <input type="text" name="title" ref="titleRaw" id="title" className="col-sm-6 form-control" defaultValue={this.data.aModule[0].title} required/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="html" className="col-sm-1 control-label">{i18n('ADMIN_EXTENSION_MODULES_ADDMODULE_FORM_HTML')}</label>
              <div className="col-sm-11">
                <textarea defaultValue={this.data.aModule[0].modDesc.value} id="editor1" ref="htmlValue" name="editor1" width="800px"></textarea>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="position" className="col-sm-1 control-label">{i18n('ADMIN_EXTENSION_MODULES_ADDMODULE_FORM_POSITION')}</label>
              <div className="col-sm-6">
                <select id="select_position" defaultValue={this.data.aModule[0].position} ref="position" className="form-control" >
                    <option value="0">-- select --</option>
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
              <label htmlFor="menu" className="col-sm-1 control-label" ref="menu" >{i18n('ADMIN_EXTENSION_MODULES_ADDMODULE_FORM_MENU')}</label>
              <div className="col-sm-6">
               <select id="select_menus" ref="menus"  className="form-control" >
                  {this.data.results.map(function(result){
                    return  <ChildValue   key={result._id} data={result} func={that.getMenuValue} />
                    })
                  }
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="" className="col-sm-1 control-label">{i18n('ADMIN_EXTENSION_MODULES_ADDMODULE_FORM_STATUS')}</label>
              <div className="col-sm-6">
                <select id="select_publish" defaultValue={this.data.aModule[0].status} ref="publish" className="form-control" >
                    <option value="">-- Select --</option>
                    <option value="true">Published</option>
                    <option value="false">Unpublished</option>
                </select>
              </div>
            </div>
            <div className="btn-toolbar">
              <button className="btn btn-success" onClick={this.handleSubmit}>{i18n('ADMIN_EXTENSION_MODULES_ADDMODULE_FORM_SAVE')}</button>
              {/*<button className="btn btn-warning" onClick={this.trashThisModule}>Trash</button>*/}
              <button className="btn btn-danger" onClick={this.cancelSubmit}>{i18n('ADMIN_EXTENSION_MODULES_ADDMODULE_FORM_CANCEL')}</button>
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

ChildValue=React.createClass({
 mixins: [ReactMeteorData],
  
  getMeteorData() {
    
     var handle=Meteor.subscribe('menuItemsbyParentId',this.props.data._id)
    return {
       pageLoading: ! handle.ready(),
      results: MenuItems.find({parentId:this.props.data._id,trash:false}).fetch()
    };
  },
  setValue(event){
    //event.preventDefault();
    console.log('setvalue called',this.props);
    this.props.func();
  },
  render() {
   var options = [];

   console.log(this.data.results,'this.data.results');
    if (this.data.pageLoading) {
      return <LoadingSpinner1  />;
    }else{
      this.setValue()
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