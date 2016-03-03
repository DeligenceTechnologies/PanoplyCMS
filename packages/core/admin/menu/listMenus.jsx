ListMenus = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
    Meteor.subscribe('menus')
    return {
      results: Menus.find({trash:false}).fetch()
    } 
  },
  render() {
    
    return (
      <div className="col-md-10 content">
        <div className="panel-heading"><span className="lead"> Menu </span></div>
        <div className="panel-heading"> <a  className="btn btn-success" href={FlowRouter.path('addMenu')} >Add Menus</a></div>
        <div className="panel-body">
          <div className="table-responsive" id="non-editable">
            <table className="table table-striped table-hover ">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Desc</th>
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
      </div>

    );
  }
});

var Trvalue = React.createClass({
  deleteMenu(){
    Meteor.call('deleteMenu',this.props.data._id,function(err,data){
      console.log(err,data)
    });
  },
  editArticle(){

  },
  storeMenuid(event){
      event.preventDefault();
      Session.set('MenuId',this.props.data._id);
      FlowRouter.go('listMenuItems',{_id:this.props.data._id})
  },
  render: function() {
    var c=0;
    return (
       <tr>
        <td id="edit_article"  ><a onClick={this.storeMenuid} ><large> {this.props.data.title}</large><small> (<em>{this.props.data.alias}</em>) </small> </a></td>
        <td  >{this.props.data.desc}</td>  
        <td id="delete_article"><div  onClick={this.deleteMenu} className="delete_btn"><i className="fa fa-trash-o" data-toggle="tooltip" title="Delete" ></i> </div></td>
        <td id="edit_article"><div  className="edit_btn"  id=""><a href={FlowRouter.path('editMenu',{_id:this.props.data._id})}><i className="fa fa-pencil-square-o" data-toggle="tooltip" title="Edit"></i></a> </div></td>
      </tr>
    )
    
  }
});
