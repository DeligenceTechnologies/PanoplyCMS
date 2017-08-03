/*==========================================
		its shows list of articles
==========================================*/


import('react').then(({Component})=>{
	import Heading from '../../common/heading.jsx';
	import NotFoundComp from '../../common/notFoundComp.jsx';
	import LoadingSpinner from '../../common/loadingSpinner.jsx';
	import ArticleDataList from './articleDataList.jsx';
	import ModalOfArticles from './modalOfArticles.jsx';
	import RestoreModalOfArticles from './restoreModalOfArticles.jsx';
	
	class ListArticles extends Component {
		constructor(props) {
	    super(props);
	 
	    this.state = {
	      trashListShow: false
	    };
	    this.props.dict.set('limit', Meteor.settings.public.limit)
	  }
		showArticles(){
			if($('#display').val()=='trash'){
				this.setState({ trashListShow:true })
				Session.set('trash',true)
			}else{
				this.setState({ trashListShow:false })
				Session.set('trash',false)
			}
			if(Meteor.settings.public && Meteor.settings.public.limit)
				this.props.dict.set('limit', Meteor.settings.public.limit)
			else
				this.props.dict.set('limit', 20)
		}
		loadMore(event){
			event.preventDefault();
			this.props.dict.set('limit', this.props.dict.get('limit')+10)
		}
		render() {
			let nodata = '';
			/*if (this.props.pageLoading) {
				return <LoadingSpinner />;
			}*/
			if(this.props.results.length == 0 ){
				nodata = <NotFoundComp />
			}else{
				nodata = '';
			}
			let url=[{
		      title:"Dashboard",
		      url:"/admin/dashboard",
		      active:false
		    },{
		      title:"Articles",
		      url:"/admin/articles",
		      active:true
		    }];
			return (
				<div>
					<Heading data={i18n('ADMIN_CONTENTS_ARTICLES_ADDARTICLE_FORM_ARTICLE')} url={url}/>
	        <div className="custom-table">
	       		<div className="row">
	          	<div className="col-sm-12">
	             	<div className="controls-header form-inline ">
	                <a className="btn custom-default-btn" href={FlowRouter.path('addArticle')}>
										<i className="fa fa-plus-circle fa-lg"></i> {i18n('ADMIN_CONTENTS_ARTICLES_ADDARTICLES')}
									</a>
									<div className="dataTables_length dataTables_wrapper pull-right">
								  	<label> Display
									    <select id="display" className="form-control input-sm" onChange={this.showArticles.bind(this)}>
										    <option value="active">Active</option>
										    <option value="trash">Trash</option>
									     </select>
								    </label>
					      	</div>
	         			</div>
	  					</div>
	 					</div>
	          <div className="panel panel-default panel-table">
	         		<div className="panel-body">
					    	<div className="table-responsive" id="non-editable">
									{
										nodata == '' ?
											<table className="table table-striped table-bordered table-list table-hover">

												<thead>
													<tr>
														<th>{i18n('ADMIN_CONTENTS_ARTICLES_ADDARTICLE_FORM_TITLE')}</th>
														<th>{i18n('ADMIN_CONTENTS_ARTICLES_ADDARTICLE_FORM_CATEGORY')}</th>
														<th>{i18n('ADMIN_CONTENTS_ARTICLES_ADDARTICLE_FORM_ACTIONS')}</th>
													</tr>
												</thead>
												<tbody>
													{
														this.props.results.map((result) => {
															return <ArticleDataList key={result._id} data={result} stateVal={Session.get('trash')?Session.get('trash'):false} />;
														})
													}
												</tbody>
											</table>
										: 
											''
									}
					     		{ nodata }
					    	</div>
					     	<div className="col-md-3 col-md-offset-5">
									{
										!nodata ?
										  this.props.dict.get('limit') < this.props.articlesCount ?
										    <button className="btn custom-default-btn" id="load-more" onClick={this.loadMore.bind(this)}>Load more</button>
										  : ''
										:''
									}
			      		</div>
							</div>
						</div>
					</div>				
					{
						this.props.results.map((result) => {
							return <ModalOfArticles key={result._id} data={result} stateVal={this.state.trashListShow} />         
						})
					}

					{
						this.state.trashListShow?
							this.props.results.map((result) => {
								return <RestoreModalOfArticles key={result._id} data={result} />
							})
						:
							''
					}
				</div>
			);
		}
	}

	import('meteor/react-meteor-data').then(({createContainer})=>{
		export default createContainer((props) => {
			// let articleSubscription = Meteor.subscribe('articlesFind');
			Tracker.autorun(()=> {
		    let articles_Sub = Meteor.subscribe('articles', props.dict.get('limit'))
		    ready = articles_Sub.ready();
			});
			if(!Session.get('trash')){
				Session.set('trash',false)
			}
			return {
				// pageLoading: !ready,
				results: PanoplyCMSCollections.Articles.find({trash:Session.get('trash')},{limit: props.dict.get('limit')}).fetch(),
				articlesCount: PanoplyCMSCollections.Articles.find({trash:Session.get('trash')}).count()
			}
		}, ListArticles);
	});	
});
