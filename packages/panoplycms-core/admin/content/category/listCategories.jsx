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
                    <i className="fa fa-plus-circle "></i>
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
          <td><a href={FlowRouter.path('editCategory',{_id:this.props.data._id})} ><large> {this.props.data.title}</large><small> (<em>Alias:{this.props.data.alias}</em> )</small> </a></td>
          <td><div  onClick={this.deleteCategory} className="delete_btn"><i className="fa fa-trash-o" data-toggle="tooltip" title="Delete" ></i> </div></td>
          <td><div  onClick={this.editCategory} className="edit_btn"  id=""><a href={FlowRouter.path('editCategory',{_id:this.props.data._id})}><i className="fa fa-pencil-square-o" data-toggle="tooltip" title="Edit"></i></a> </div></td>
        </tr>    
      )
    }
})