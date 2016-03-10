ListTags = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
    Meteor.subscribe('tags')
    return{
      tagsData:Tags.find().fetch()
    }
  },
  submitForm(event){
    event.preventDefault();
    var name=React.findDOMNode(this.refs.sitename).value.trim();
  },
  render() {
    return (<div>
             <div className="col-md-10 content">
             <Heading  data={i18n('ADMIN_COMPONENTS_TAGS')} />
              <a href={FlowRouter.path('addTag')} className="btn btn-success"><i className="fa fa-plus-circle "></i>{i18n('ADMIN_COMPONENTS_TAGS_ADDTAGS')}</a>
              <div className="panel-body">
                  <div className="table-responsive" id="non-editable">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>{i18n('ADMIN_COMPONENTS_TAGS_ADDTAGS_FORM_TAGNAME')}</th>
                          <th>{i18n('ADMIN_COMPONENTS_TAGS_ADDTAGS_FORM_DESCRIPTION')}</th>
                          <th>{i18n('ADMIN_COMPONENTS_TAGS_ADDTAGS_FORM_METAKEYWORD')}</th>
                          <th>{i18n('ADMIN_COMPONENTS_TAGS_ADDTAGS_FORM_METADESCRIPTION')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.data.tagsData.map(function(tag){
                          return <TagsItem key={tag._id} data={tag} />
                        })
                      }
                         
                      </tbody>
                    </table>
                </div>
              </div> 
            </div>
    </div>
    );
  }
});
var TagsItem = React.createClass({
  deleteTag(){
    Meteor.call('deleteTag',this.props.data._id,function(err,data){
      console.log(err,data)
    });
  },
  editTag(){
    Meteor.call('editTag',this.props.data._id,function(err,data){
      console.log(err,data)
    });
  },
    render(){
      return(                                      
        <tr>
          <td><a href="#"><large> {this.props.data.title}</large><small> <em>{this.props.data.alias}</em> </small> </a></td>
          <td>{this.props.data.desc}</td>
          <td>{this.props.data.metaKeyword}</td>
          <td>{this.props.data.metaDescription}</td>
          <td><div  onClick={this.deleteTag} className="delete_btn"><i className="fa fa-trash-o" data-toggle="tooltip" title="Delete" ></i> </div></td>
          <td><div  onClick={this.editTag} className="edit_btn"  id=""><a href={FlowRouter.path('editTag',{_id:this.props.data._id})}><i className="fa fa-pencil-square-o" data-toggle="tooltip" title="Edit"></i></a> </div></td>
        </tr>    
      )
    }
})
 

