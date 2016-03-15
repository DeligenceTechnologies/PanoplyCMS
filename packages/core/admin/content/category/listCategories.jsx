ListCategories = React.createClass({
	mixins:[ReactMeteorData],
	getMeteorData(){
		
		return{
			Categories:Categories.find().fetch()
		}
	},
	submitForm(event){
		event.preventDefault();
		var name=React.findDOMNode(this.refs.sitename).value.trim();
		console.log(name);
		//Sites.update({name:name});
	},
	render() {
		return (
			<div>
				<div className="panel panel-black">
					<div className="panel-heading"><span className="lead"> Category </span></div>
					<a href={FlowRouter.path( 'addCategory')} className="btn btn-success">Add Category</a>
					<div className="panel-body">
						<div className="panel">
							<div className="table-responsive" id="non-editable">
								<table className="table table-striped">
									<thead>
										<tr>
											<th>Category Name</th>
											<th>Alias</th>
											<th>Trash</th>
											<th>Update</th>
										</tr>
									</thead>
									<tbody>
										{this.data.Categories.map(function(cat){return<CategoriesItem key={cat._id} data={cat} />})}
									</tbody>
								</table>
							</div>
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
					<td><a href={FlowRouter.path('editCategory',{_id:this.props.data._id})}><large> {this.props.data.title}</large><small> <em>{this.props.data.alias}</em> </small> </a></td>
					<td>{this.props.data.alias}</td>
					<td><div  onClick={this.deleteCategory} className="delete_btn"><i className="fa fa-trash-o" data-toggle="tooltip" title="Delete" ></i> </div></td>
					<td><div  onClick={this.editCategory} className="edit_btn"  id=""><a href={FlowRouter.path('editCategory',{_id:this.props.data._id})}><i className="fa fa-pencil-square-o" data-toggle="tooltip" title="Edit"></i></a> </div></td>
				</tr>
			)
		}
})
 

/*adminRoutes.route('/categories', {
	name: 'categories',
	 subscriptions: function(params){
		this.register('categories',Meteor.subscribe('Categories')) 
	},
	action: function(params) {
		ReactLayout.render(AdminLayout,{
			content:<CategoriesLayout />
		});
	}
});*/


// db.adminSidebarMenu.insert({
// title:'Content',
// description:'Site settings',
// icon:'fa fa-file-text-o',
// params:[
//   {
//   label:'Article',
//   route:'/admin/article',
//   template:'article',
//   provides:'AdminLayout'
//   },
//   {
//   label:'Category',
//   route:'/admin/category',
//   template:'category',
//   provides:'AdminLayout'
//   }
//   ]
// });