import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import Heading from '../../common/heading.jsx';
import NotFoundComp from '../../common/notFoundComp.jsx';
import LoadingSpinner from '../../common/loadingSpinner.jsx';
import CategoriesItem from './categoriesItem.jsx';
import ModalOfCat from './modalOfCat.jsx';
import ModalOfRestoreCat from './modalOfRestoreCat.jsx';

class ListCategories extends Component {
	constructor(props) {
		super(props);

		this.state = {
			trashListShow: false
		};
		this.props.dict.set('limit', Meteor.settings.public.limit)
	}
	showCategories(){
		if($('#display').val() == 'trash'){
			this.setState({trashListShow:true})
		}else{
			this.setState({trashListShow:false})
		}
		if(Meteor.settings.public && Meteor.settings.public.limit)
			this.props.dict.set('limit', Meteor.settings.public.limit)
		else
			this.props.dict.set('limit',20)
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
		if(this.props.Categories.length == 0  && this.state.trashListShow == false){
			nodata = <NotFoundComp />
		}else if(this.props.resultOfTrash.length == 0 && this.state.trashListShow == true){
			nodata = <NotFoundComp />
		}else{
			nodata = '';
		}
		let url=[{
	      title:"Dashboard",
	      url:"/admin/dashboard",
	      active:false
	    },{
	      title:"Categories",
	      url:"/admin/categories",
	      active:true
	    }];
		return (
			<div className="">
				<Heading data={i18n('ADMIN_COTNENTS_CATEGORY_CATEGORY')} url={url}/>
				<div className="custom-table">
				   	<div className="row">
               			<div className="col-sm-12">
                   			<div className="controls-header form-inline ">
                   	   			<a href={FlowRouter.path('addCategory')} className="btn custom-default-btn">
					              <i className="fa fa-plus-circle fa-lg"></i>&nbsp;
						            {i18n('ADMIN_COTNENTS_CATEGORY_ADDCATEGORY')}
				            	</a>
				            	<div className="dataTables_length dataTables_wrapper pull-right">
					            	<label> Display
						              <select id="display" className="form-control input-sm" onChange={this.showCategories.bind(this)}>
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
							<div className="table-responsive">
								{
									nodata == '' ?
										<table className="table table-striped table-bordered table-list table-hover">

											<thead>
												<tr>
													<th>{i18n('ADMIN_COTNENTS_CATEGORY_ADDCATEGORY_FORM_CATEGORYNAME')}</th>
													<th>Action</th>
												</tr>
											</thead>
											<tbody>
												{
													this.state.trashListShow ?
														this.props.resultOfTrash.map((cat)=>{
															return <CategoriesItem key={cat._id} data={cat} stateVal={this.state.trashListShow} />
														})
													:
														this.props.Categories.map((cat)=>{
															return <CategoriesItem key={cat._id} data={cat} stateVal={this.state.trashListShow} />
														})
												}
											</tbody>
										</table>
									:''
								}
								{ nodata }
							</div>
							<div className="col-md-3 col-md-offset-5">
								{
									!nodata ?
										!this.state.trashListShow ?
											this.props.dict.get('limit') < this.props.categoriesCount ?
												<button className="btn custom-default-btn" id="load-more" onClick={this.loadMore.bind(this)}>Load more</button>
											: ''
										:this.props.dict.get('limit') < this.props.categoriesCountTrash ?
											<button className="btn custom-default-btn" id="load-more" onClick={this.loadMore.bind(this)}>Load more</button>
										: ''
									:''
								}
							</div>
				     	</div>
				   </div>
				</div>
				{
					this.props.Categories.map((cat)=>{
						return <ModalOfCat key={cat._id} resultOfArticles={this.props.resultOfArticles} data={cat} stateVal={this.state.trashListShow} /> 
					})
				}

				{
					this.props.resultOfTrash.map((cat)=>{
						return <ModalOfRestoreCat key={cat._id} data={cat} />
					})
				}

				{
					this.props.resultOfTrash.map((cat)=>{
						return <ModalOfCat key={cat._id} data={cat} resultOfArticles={this.props.resultOfArticles} stateVal={this.state.trashListShow} /> 
					})
				}
				<ArticlesExistPopup />
			</div>
		);
	}
}

export default createContainer((props)=>{
	Tracker.autorun(()=> {
		const categoriesSubscription1 = Meteor.subscribe('category', props.dict.get('limit'))
		const categoriesSubscription2 = Meteor.subscribe('categoryTrash', props.dict.get('limit'))
		ready = categoriesSubscription1.ready() && categoriesSubscription2.ready();
	});
	return{
		// pageLoading: !ready,
		Categories: PanoplyCMSCollections.Categories.find({trash:false},{limit: props.dict.get('limit')}).fetch(),
		categoriesCount: PanoplyCMSCollections.Categories.find({trash:false}).count(),
		categoriesCountTrash: PanoplyCMSCollections.Categories.find({trash:true}).count(),
		resultOfTrash: PanoplyCMSCollections.Categories.find({trash:true},{limit: props.dict.get('limit')}).fetch(),
		resultOfArticles: PanoplyCMSCollections.Articles.find({trash:false},{category:1}).fetch()
	}
}, ListCategories)


ArticlesExistPopup = (m) => {
	return(
		<div id="articlExist" className="modal fade" role="dialog">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-body">
						<button type="button" className="close" data-dismiss="modal">&times;</button>
						<h4 className="modal-title">You can not remove this category because articles exist of that category. Please remove the article first after you can delete category.</h4>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-danger" data-dismiss="modal">CANCEL</button>
					</div>
				</div>
			</div>
		</div>
	)
}