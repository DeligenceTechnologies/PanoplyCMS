ListCategories = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
    Meteor.subscribe('Categories')
    return{
      Categories: PanoplyCMSCollections.Categories.find().fetch()
    }
  },
  submitForm(event){
  	event.preventDefault();
    var name = React.findDOMNode(this.refs.sitename).value.trim();
  },
  render() {
    return (<div>
             <div className="panel panel-black">
             <Heading  data={i18n('ADMIN_COTNENTS_CATEGORY_CATEGORY')} />
              <div className="panel-heading">
                <a href={FlowRouter.path('addCategory')} className="btn btn-success btn-ico">
                    <i className="fa fa-plus-circle fa-lg"></i>&nbsp;
                       {i18n('ADMIN_COTNENTS_CATEGORY_ADDCATEGORY')}
                </a>
              </div>
              <div className="panel-body"> 
                <div className="table-responsive" id="non-editable">
                  <table className="table  table-bordered">
                    <thead>
                      <tr>
                        <th>{i18n('ADMIN_COTNENTS_CATEGORY_ADDCATEGORY_FORM_CATEGORYNAME')}</th>
                        <th>Action</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.data.Categories.map(function(cat){
                        return <CategoriesItem key={cat._id} data={cat} />
                      })
                    }   
                    </tbody>
                  </table>
                </div>
              </div>
              {this.data.Categories.map(function(cat){
                return  <ModalOfCat key={cat._id} data={cat}/> 
                })
              }
            </div>     
          </div>
    );
  }
});
var CategoriesItem = React.createClass({
  deleteCategory(){
    Meteor.call('delete_category',this.props.data._id,function(err,data){
      console.log(err,data)
    });
  },
  editCategory(){
    Meteor.call('editCategory',this.props.data._id,function(err,data){
      console.log(err,data)
    });
  },
    render(){
      return(                                      
        <tr>
          <td>
            <a href={FlowRouter.path('editCategory',{_id:this.props.data._id})} >
              <large> 
                {this.props.data.title}
              </large>
              <small> 
                (<em>Alias:{this.props.data.alias}</em> )
              </small> 
            </a>
          </td>
          <td>
            <div className="delete_btn" data-toggle="modal" data-target={"#"+this.props.data._id}>
              <i className="fa fa-trash-o" data-toggle="tooltip" title="Delete" ></i> 
            </div>
          </td>
          <td>
            <div  onClick={this.editCategory} className="edit_btn"  id="">
              <a href={FlowRouter.path('editCategory',{_id:this.props.data._id})}>
                <i className="fa fa-pencil-square-o" data-toggle="tooltip" title="Edit"></i>
              </a>
            </div>
          </td>
        </tr>    
      )
    }
})

ModalOfCat=React.createClass({
  deleteCategory(){
    Meteor.call('delete_category',this.props.data._id,function(err,data){
      console.log(err,data)
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
                  <button type="button" className="btn btn-primary" onClick={this.deleteCategory} data-dismiss="modal">YES</button>
                  <button type="button" className="btn btn-danger" data-dismiss="modal">NO</button>
                </div>
              </div>
            </div>
          </div>
    )     
  }
})