TemplateManger = React.createClass({
	mixins:[ReactMeteorData],
	getMeteorData(){
		const categoriesSubscription = Meteor.subscribe('Categories')
		return{
			registeredPackages: PanoplyCMSCollections.RegisteredPackages.findOne({name:'template'})
		}
	},
	getInitialState(){
		return{
			trashListShow:false,
			url: ''
		}
	},
	setDefaultTemp(name,active){
		let modifedArray=this.data.registeredPackages.templates;
		let i=0;
		_.each(modifedArray, (t) => {
			if(t.name == name){ 
				modifedArray[i].active=true;
			}else{ 
				modifedArray[i].active=false;
			}
			i++;
		})
		Meteor.call('setDefaultTempalteStatus',modifedArray,function(err,data){
		})
	},
	showLayout(p, i){
		if(p && i){
			url = "/packages/" + p.split(":").join('_') + "/" + i;
			this.setState({url: url})
			console.log(url)
		}
		$('#view.modal').modal()
	},
	render() {
		that=this;
		nodata='';
		return (
			<div>
				<div className="panel panel-black col-md-10">
					<Heading  data={'Template Manger'} />
					<div className="panel-heading">
					</div>
					<div className="panel-body"> 
						<div className="table-responsive" >
							<table className="table  table-bordered">
								<thead>
									<tr>
										<th>Template Name</th>
										<th>Default</th>
										<th>Preview</th>
									</tr>
								</thead>
								<tbody>
									{
										this.data.registeredPackages.templates.map( (tem) => {
											return <TemplateName key={tem.name} {...tem} func={this.setDefaultTemp} show={this.showLayout} />
										})
									}
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<ViewLayout url={this.state.url} />
			</div>
		);
	}
});

TemplateName = template => {
	if(template.active){
		obj = {
			style: {color:'#2574ab',cursor:'pointer'},
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
			<td id={template.name} >
			<span {...obj} onClick={() => {template.func(template.name,template.active)}}></span></td>
			<td> <span className="glyphicon glyphicon-zoom-in" onClick={() => {template.show(template.packageName,template.layoutImage)}}></span> </td>
		</tr>
	);
}

ViewLayout = template => {
	return (
		<div id="view" className="modal fade" role="dialog">
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