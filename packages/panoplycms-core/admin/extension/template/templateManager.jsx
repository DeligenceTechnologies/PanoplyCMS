import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import Heading from '../../common/heading.jsx';

class TemplateManger extends Component {
	constructor(props) {
    super(props);
 
    this.state = {
      trashListShow: false,
			url: ''
    };
  }
  setDefaultTemp(name,active){
		let modifedArray = this.props.registeredPackages.templates;
		let i = 0;
		_.each(modifedArray, (t) => {
			if(t.name == name){ 
				modifedArray[i].active=true;
			}else{ 
				modifedArray[i].active=false;
			}
			i++;
		})
		Meteor.call('setDefaultTempalteStatus', modifedArray, function(err,data){
		})
	}
	showLayout(p, i){
		if(p && i){
			url = "/packages/" + p.split(":").join('_') + "/" + i;
			this.setState({url: url})
			// console.log(url)
		}
		$('#view.modal').modal()
	}
	render() {
		nodata = '';
		return (
			<div className="">
				<Heading data={'Template Manager'} />
				<div className="custom-table">
				  <div className="panel panel-default panel-table">
						<div className="panel-body">
							<div className="table-responsive">
								<table className="table table-striped table-bordered table-list table-hover">
									<thead>
										<tr>
											<th>Template Name</th>
											<th>Default</th>
											<th>Preview</th>
										</tr>
									</thead>
									<tbody>
										{
											this.props.registeredPackages.templates.map((template) => {
												return <TemplateName key={template.name} {...template} func={this.setDefaultTemp.bind(this)} show={this.showLayout.bind(this)} />
											})
										}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<ViewLayout url={this.state.url} />
			</div>
		);
	}
}

export default createContainer(() => {
	const categoriesSubscription = Meteor.subscribe('Categories')
	return{
		registeredPackages: PanoplyCMSCollections.RegisteredPackages.findOne({name:'template'})
	}
}, TemplateManger)

TemplateName = template => {
	if(template.active){
		obj = {
			style: {color:'#d86b0b',cursor:'pointer'},
			className: "fa fa-star fa-lg"
		}
	}else{
		obj = {
			className:'fa fa-star-o fa-lg',
			style: {cursor:'pointer'}
		}
	}
	return (
		<tr>
			<td>{template.name}</td>
			<td id={template.name}>
			<span {...obj} onClick={() => {template.func(template.name,template.active)}}></span></td>
			<td style={{cursor:'pointer', textAlign:'center'}}><div className="btn btn-primary zoom-icon" onClick={() => {template.show(template.packageName,template.layoutImage)}}> <span className="glyphicon glyphicon-zoom-in" ></span></div> </td>

		</tr>
	);
}

ViewLayout = template => {
	return (
		<div id="view" className="modal fade template-modal" role="dialog">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-body">
						<button type="button" className="close" data-dismiss="modal">&times;</button>
						<img src={template.url} style={{width:"100%"}} />
					</div>
				</div>
			</div>
		</div>
	);
}