import 'meteor/twbs:bootstrap';
import 'meteor/jquery';

ListArticles = React.createClass({
	mixins:[ReactMeteorData],
	getMeteorData(){
		const articleSubscription = Meteor.subscribe('articlesFind');
		return {
			pageLoading:! articleSubscription.ready(),
			results: PanoplyCMSCollections.Articles.find({trash:false}).fetch(),
			resultOfTrash: PanoplyCMSCollections.Articles.find({trash:true}).fetch()
		}
	},
	componentDidMount(){
	},
	showArticles(){
		if($('#display').val()=='trash'){
			this.setState({trashListShow:true})
		}else{
			this.setState({trashListShow:false})
		}
	},
	getInitialState(){
		return{
			trashListShow:false
		}
	},
	render() {
		that=this;
		nodata='';
		if (this.data.pageLoading) {
			return <LoadingSpinner />;
		}
		if((this.data.results).length==0  && this.state.trashListShow==false){
			nodata=<NotFoundComp/>
		}else if((this.data.resultOfTrash).length==0 && this.state.trashListShow==true){
			nodata=<NotFoundComp/>
		}else{
			nodata='';
		}
		return (
			<div className="col-md-10 content">
				<Heading  data={i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_ARTICLE')} />
				<div className="panel-heading">
					<a  className="btn btn-success btn-ico" href={FlowRouter.path('addArticle')}>
						<i className="fa fa-plus-circle fa-lg"></i> {i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLES')}
					</a>
					<div className="pull-right">
						Display: 
						<select id="display" onChange={this.showArticles}>
							<option value="active">Active</option>
							<option value="trash">Trash</option>
						</select>
					</div>
				</div>
				<div className="panel-body">
					<div className="table-responsive" id="non-editable">
						<table className="table table-bordered">
							<thead>
								<tr>
									<th>{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_TITLE')}</th>
									<th>{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_CATEGORY')}</th>
									<th>{i18n('ADMIN_COTNENTS_ARTICLES_ADDARTICLE_FORM_ACTIONS')}</th>
								</tr>
							</thead>
							<tbody>
								{
									this.state.trashListShow?
										this.data.resultOfTrash.map(function(result) {
											return <Trvalue key={result._id} data={result} stateVal={that.state.trashListShow}/>;
										})
									:this.data.results.map(function(result) {
										return <Trvalue key={result._id} data={result} stateVal={that.state.trashListShow}/>;
									})
								} 
							</tbody>
						</table>
					</div>
					{nodata}
				</div>
				{
					this.data.results.map(function(result) {
						return <ModalOfArticle key={result._id} data={result} stateVal={that.state.trashListShow} />         
					})
				}

				{
					this.data.resultOfTrash.map(function(result) {
						return  <RestoreModalOfArticle key={result._id} data={result}/>         
					})
				}

				{
					this.data.resultOfTrash.map(function(result) {
						return <ModalOfArticle key={result._id} data={result} stateVal={that.state.trashListShow} />         
					})
				}
			</div>
		);
	}
});

var Trvalue = React.createClass({
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
					<a href={FlowRouter.path('editArticle',{_id:this.props.data._id})}>
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
				<td>
					<div  id="delete_article" onClick={this.deleteArticle} className="delete_btn" data-toggle="modal" data-target={"#"+this.props.data._id} style={{display:'inline-block'}}>
						{
							this.props.stateVal ? <i style={{color:'red'}} title="Delete" className="fa fa-times" aria-hidden="true"></i> : <i style={{color:"red"}} className="fa fa-trash-o"  title="Trash" ></i> 
						}
					</div>
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					{
					this.props.stateVal? <i data-toggle="modal" data-target={'#'+this.props.data._id+'restoreArticle'} className="fa fa-undo" aria-hidden="true" onClick={this.restoreArticle} title="Restore" ></i> : <a href={FlowRouter.path('editArticle',{_id:this.props.data._id})}> <i style={{color:"#142849"}} className="fa fa-pencil-square-o" data-toggle="tooltip" title="Edit" ></i> </a> 
					}
				</td>
			</tr>
		)
	}
});

ModalOfArticle=React.createClass({
	deleteArticle(event){
		event.preventDefault();
		if(this.props.stateVal){
			Meteor.call('deleteArticleParma',this.props.data._id,function(err,data){
			});
		}else{
			Meteor.call('deleteArticle',this.props.data._id,function(err,data){
			});
		}
	},
	render:function(){
		return(
			<div id={this.props.data._id} className="modal fade" role="dialog">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-body">
							<button type="button" className="close" data-dismiss="modal">&times;</button>
							<h4 className="modal-title">Do you really want to remove?</h4>
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

RestoreModalOfArticle=React.createClass({
	restoreArticle(){
		Meteor.call('restoreArticles',this.props.data._id,function(err,data){
			if(err){
				console.log(err)
			}else{
				// console.log(data)
			}
		});
	},
	render:function(){
		return(
			<div id={this.props.data._id+'restoreArticle'} className="modal fade" role="dialog">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-body">
							<button type="button" className="close" data-dismiss="modal">&times;</button>
							<h4 className="modal-title">Do you really want to restore?</h4>
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-primary" onClick={this.restoreArticle} data-dismiss="modal">YES</button>
							<button type="button" className="btn btn-danger" data-dismiss="modal">NO</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
})