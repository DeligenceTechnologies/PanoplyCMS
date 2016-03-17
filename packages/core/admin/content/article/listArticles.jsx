ListArticles = React.createClass({
	mixins:[ReactMeteorData],
	getMeteorData(){
		return {
			results: Articles.find().fetch()
		} 
	},
	render() {
		return (
			<div className="col-md-10 content">
				<div className="panel-heading"><span className="lead"> Article </span></div>
				<div className="panel-heading"> <a  className="btn btn-success" href={FlowRouter.path('addArticle')} >Add Articles</a></div>
				<div className="panel-body">
					<div className="table-responsive" id="non-editable">
						<table className="table table-striped table-hover ">
							<thead>
								<tr>
									<th>Title</th>
									<th>Category</th>
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
	deleteArticle(){
		Meteor.call('deleteArticle',this.props.data._id,function(err,data){
console.log(err,data)
		});
	},
	editArticle(){

	},
	render: function() {
		var c=0;
		return (
			 <tr>
					<td id="edit_article"><a href="#"><large> {this.props.data.title}</large><small> (<em>{this.props.data.alias}</em>) </small> </a></td>
					<td  >{this.props.data.category}</td>
					<td id="delete_article"><div  onClick={this.deleteArticle} className="delete_btn"><i className="fa fa-trash-o" data-toggle="tooltip" title="Delete" ></i> </div></td>
					<td id="edit_article"><div  className="edit_btn"  id=""><a href={FlowRouter.path('editArticle',{_id:this.props.data._id})}><i className="fa fa-pencil-square-o" data-toggle="tooltip" title="Edit"></i></a> </div></td>
				</tr>
		)
		
	}
});
