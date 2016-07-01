import 'meteor/twbs:bootstrap';
import 'meteor/jquery';

ListArticles = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
     Meteor.subscribe('articlesFind');
    return {
      results: PanoplyCMSCollections.Articles.find().fetch()
    } 
  },
  render() {
    
    return (
      <div className="col-md-10 content">
        <Heading  data={i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_ARTICLE')} />
        <div className="panel-heading"> <a  className="btn btn-success btn-ico " href={FlowRouter.path('addArticle')} ><i className="fa fa-plus-circle fa-lg"></i> {i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLES')}</a>
        </div>
        <div className="panel-body">
          <div className="table-responsive" id="non-editable">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_TITLE')}</th>
                  <th>{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_CATEGORY')}</th>
                  <th>{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_ACTIONS')}</th>
                  <th>{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_ACTIONS')}</th>
                </tr>
              </thead>
              <tbody>
                {this.data.results.map(function(result) {
                   return <Trvalue key={result._id} data={result}/>;
                })} 
              </tbody>
            </table>
          </div>
        </div> 
        {this.data.results.map(function(result) {
          return  <Modal key={result._id} data={result}/>         
        })} 
      </div>

    );
  }
});

var Trvalue = React.createClass({
  deleteArticle(){
    /*Meteor.call('deleteArticle',this.props.data._id,function(err,data){
    });*/
  },
  editArticle(){

  },
  mixins:[ReactMeteorData],
  getMeteorData(){
     Meteor.subscribe('findCategory',this.props.data.category);
    return {
      results: PanoplyCMSCollections.Categories.findOne({_id:this.props.data.category})
    } 
  },
  render: function() {

    var c=0;
    return (
       <tr>
          <td id="edit_article">
            <a href={FlowRouter.path('editArticle',{_id:this.props.data._id})} >
              <large> 
                {this.props.data.title}
              </large>
              <small> 
                (<em>Alias:{this.props.data.alias}</em>) 
              </small> 
            </a>
          </td>
          <td>
            {this.data.results?this.data.results.title:''}
          </td>
          <td id="delete_article">
            <div  onClick={this.deleteArticle} className="delete_btn" data-toggle="modal" data-target={"#"+this.props.data._id}>
              <i className="fa fa-trash-o"  title="Delete" ></i> 
            </div>
          </td>
          <td id="edit_article">                  
            <div  className="edit_btn"  id="">
              <a href={FlowRouter.path('editArticle',{_id:this.props.data._id})}>
                <i className="fa fa-pencil-square-o" data-toggle="tooltip" title="Edit"></i>
              </a> 
            </div>
          </td>
        </tr>
    )
    
  }
});

Modal=React.createClass({
  deleteArticle(){
    Meteor.call('deleteArticle',this.props.data._id,function(err,data){
    });
  },
  render:function(){
    return(
          <div id={this.props.data._id} className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Do you really want to remove ?</h4>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" onClick={this.deleteArticle} data-dismiss="modal">YES</button>
                  <button type="button" className="btn btn-danger" data-dismiss="modal">NO</button>
                </div>
              </div>
            </div>
          </div>
    )     
  }
})