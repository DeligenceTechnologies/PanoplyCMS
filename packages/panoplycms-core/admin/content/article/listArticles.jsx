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
        <div className="panel-heading"> <a  className="btn btn-success btn-ico" href={FlowRouter.path('addArticle')} ><i className="fa fa-plus-circle "></i>{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLES')}</a>
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
        <Modal/>
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
            <div  onClick={this.deleteArticle} className="delete_btn" data-toggle="modal" data-target="#myModal">
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
