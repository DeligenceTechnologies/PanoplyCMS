
/*=======================================================
	this component is used display each article in list
========================================================*/

import('react').then(({Component})=>{
	class ArticleDataList extends Component {
		openRestoreModal(){
			$('#'+this.props.data._id+' restoreArticle').modal('show');
		}
		render() {
			let c = 0;

			return (
				<tr>
					<td id="edit_article">
						<a href={FlowRouter.path('editArticle',{_id:this.props.data._id})}>
							<large>
								{this.props.data.title}
							</large>
						</a>
						<small>
							&nbsp;(<em>Alias:&nbsp;{this.props.data.alias}</em>) 
						</small>
					</td>
					<td>
						{this.props.results?this.props.results.title:''}
					</td>
					<td>
	           			{	
							this.props.stateVal ?
								<div className="btn btn-default" data-toggle="modal" data-target={'#'+this.props.data._id+'restoreArticle'} aria-hidden="true" title="Restore"> 
									<i style={{cursor:'pointer'}}  className="fa fa-undo" ></i>
								</div>
							:
								<a href={FlowRouter.path('editArticle',{_id:this.props.data._id})} className="btn btn-default" data-toggle="tooltip" title="Edit">
									<i style={{color:"#142849",cursor:'pointer'}} className="fa fa-pencil-square-o" ></i>
								</a>
						}
	          			&nbsp;&nbsp;
					  	<div id="delete_article" className="btn btn-danger" data-toggle="modal" data-target={"#"+this.props.data._id} style={{display:'inline-block'}}>
							{
								this.props.stateVal ?
									<i  title="Delete" className="fa fa-times" aria-hidden="true"></i>
								:
									<i className="fa fa-trash-o" title="Trash"></i> 
							}
						</div>
					</td>
				</tr>
			)
		}
	}

	import('meteor/react-meteor-data').then(({createContainer})=>{
		export default createContainer((data)=>{
			Meteor.subscribe('findCategory', data.data.category);
			return {
				results: PanoplyCMSCollections.Categories.findOne({_id:data.data.category})
			}
		}, ArticleDataList);
	});
});