import React, { Component } from 'react';
import { render } from 'react-dom';

var createReactClass = require('create-react-class');

import MenuItemType from './menuItemTypes.jsx'
import Positions from './positions.jsx';

EditSliderModule = createReactClass({
	getInitialState(){
		return {
			valid: '',
			imageId: '',
			checkAllPage: null
		}
	},
	mixins: [ReactMeteorData],
	getMeteorData() {
		return {
			sliderModuleData: PanoplyCMSCollections.Modules.findOne({_id:this.props._id}),
			templateRegister: PanoplyCMSCollections.RegisteredPackages.findOne({name:'template'})
		};
	},
	/*resetSuccessMsg(){
		this.setState({'successMsg': false})
		this.setState({'errorMsg': false})
	},*/
	componentDidMount(){
		// $('#slider-content').summernote({ height: 200 });
		$('.options').toggleClass('active');
		$('.option').button();

		let c = 0;
		$('.slider-info').on('click', '.add-item', function(e) {
			e.preventDefault();
			let controlForm = $(this).parents('.slider-info'),
				currentEntry = controlForm.children(':first'),
				addSlider = $(this).parent().clone(),
				newEntry = $(currentEntry.clone()).appendTo(controlForm);
			$(this).parent().remove();
			$(addSlider).appendTo(controlForm);
			newEntry.find('input, textarea').val('');
			c ++;
			newEntry.find('.show-image').addClass("-"+c);
			// $('.-'+c).css('display','none');
			$('.-'+c).remove();
		}).on('click', '.remove-item', function(e) {
			e.preventDefault();
			var childs = $(this).parents('.slider').parent().children('.slider').length;
			if (childs > 1){
				$(this).parents('.slider').remove();
			}
			else $(this).parents('.slider').find('input, textarea').val('');
			return false;
		});
	},
	componentWillUnmount: function() {
		// tinymce.remove();
		// $('#slider-content').summernote('destroy');
	},
	checkAllPage(){
		this.setState({
			checkAllPage:$("#pageall").is(':checked')?"true":"false"
		});
	},
	handleUpdate(e){
		e.preventDefault();
		let regex = /[^.]+$/;
		let menuItems = [];
		$.each($("input[name='menucheck']:checked"), function(){            
			menuItems.push($(this).val());
		});

		if($('input[name="options"]:checked').val()){
			if($('input[name="options"]:checked').val() == 1){
				showTitle = true
			}else{
				showTitle = false
			}
		}else if(this.data.sliderModuleData.showTitle){
			showTitle = this.data.sliderModuleData.showTitle
		}else{
			showTitle = false
		}

		let sliderObj = {
			name: this.refs.name.value,
			type:'slidermodule',
			showTitle: showTitle,
			position: $('#position').val(),
			menuItems: menuItems,
			moduleClass: $('#module-class').val(),
			allPages: $('.pageall').is(':checked'),
			moduleData: []
		}
		let select = {
			_id: this.props._id
		}

		if(!e.currentTarget.content.length) {
			let imageFile = $('#bg-image')[0].files[0];
			if(imageFile){
				if(regex.exec(imageFile.name)[0] == "jpg" || regex.exec(imageFile.name)[0] == "png" || regex.exec(imageFile.name)[0] == "svg"){
					Images.insert(imageFile, (err, fileObj) => {
						if(fileObj){
							sliderObj.moduleData.push({
								title: this.refs.title.value,
								description: this.refs.description.value,
								linkTitle: this.refs.linkText.value,
								linkUrl: this.refs.linkUrl.value,
								published: $(".published").is(':checked'),
								bgImageId: fileObj. _id
							})
							select = {
								_id: this.props._id
							}
							Meteor.call('editModule', select, sliderObj, (error,data) => {
								if(error){
									AlertMessage('ERROR', err.reason, 'error');
								}else{
									AlertMessage('SUCCESS', 'Successfully! Updated slider module.', 'success');
								}
							})
						}
					})
				}else{
					AlertMessage('ERROR', 'Unsupported Image format', 'error');
				}
			}else{
				this.data.sliderModuleData && this.data.sliderModuleData.moduleData ?
					this.data.sliderModuleData.moduleData.map((value, index) => {
						sliderObj.moduleData.push({
							title: this.refs.title.value,
							description: this.refs.description.value,
							linkTitle: this.refs.linkText.value,
							linkUrl: this.refs.linkUrl.value,
							published: $(".published").is(':checked'),
							bgImageId: value.bgImageId ? value.bgImageId : ''
						})
					})
				: ''
				select = {
					_id: this.props._id
				}
				Meteor.call('editModule', select, sliderObj, (error,data) => {
					if(error){
						AlertMessage('ERROR', err.reason, 'error');
					}else{
						AlertMessage('SUCCESS', 'Successfully! Updated slider module.', 'success');
					}
				})
			}
		}else{
			let title = [], content = [], linkText = [], linkUrl = [], published = [], imageObj = [];
			e.currentTarget.title.forEach(i => { title.push(i.value) });
			e.currentTarget.content.forEach(i => { content.push(i.value) });
			e.currentTarget.linkText.forEach(i => { linkText.push(i.value) });
			e.currentTarget.linkUrl.forEach(i => { linkUrl.push(i.value) });
			e.currentTarget.published.forEach(i => { published.push(i.checked) });
			e.currentTarget.bgimage.forEach(i => { imageObj.push(i.files[0]) });
			
			let imageId = _.pluck(this.data.sliderModuleData.moduleData, 'bgImageId');
			
			for (let i = 0; i < content.length; i++) {
				if(imageObj[i]){
					if(regex.exec(imageObj[i].name)[0] == "jpg" || regex.exec(imageObj[i].name)[0] == "png" || regex.exec(imageObj[i].name)[0] == "svg") {
						Images.insert(imageObj[i], (err, fileObj)=> {
							if(fileObj){
								sliderObj.moduleData.push({
									title: title[i],
									description: content[i],
									linkTitle: linkText[i],
									linkUrl: linkUrl[i],
									published: published[i],
									bgImageId: fileObj. _id
								});
								select = {
									_id:this.props._id
								}
								Meteor.call('editModule', select, sliderObj, (error,data) => {
									if(error){
										AlertMessage('ERROR', err.reason, 'error');
									}else{
										AlertMessage('SUCCESS', 'Successfully! Updated slider module.', 'success');
									}
								})
							}
						})
					}else{
						AlertMessage('ERROR', 'Unsupported Image format', 'error');
					}
				}else{
					sliderObj.moduleData.push({
						title: title[i],
						description: content[i],
						linkTitle: linkText[i],
						linkUrl: linkUrl[i],
						published: published[i],
						bgImageId: imageId[i]
					});
					if(sliderObj.moduleData.length == content.length) {
						select = {
							_id:this.props._id
						}
						Meteor.call('editModule', select, sliderObj, (error,data) => {
							if(error){
								AlertMessage('ERROR', err.reason, 'error');
							}else{
								AlertMessage('SUCCESS', 'Successfully! Updated slider module.', 'success');
							}
						})
					}
				}
			}
		}
	},
	render() {
		/*let msg = ''
		if(this.state.successMsg){
			msg = <AlertMessageSuccess data={'Updated slider module.'} func={this.resetSuccessMsg} />
		}else if(this.state.errorMsg){
			msg = <AlertMessageError data={this.state.errorMsg} func={this.resetSuccessMsg} />
		}else{
			msg = '';
		}*/
		return (
			<div className="">
				<div className="page-header">
					<h3 className="sub-header">Update Slider Module</h3>
				</div>
				<form id="sliderModule" className = "form-horizontal" role = "form" onSubmit={this.handleUpdate}>
					<div className="controls-header">
						<div className="form-group">
							<div className = "col-sm-12">
								<button className="btn custom-default-btn">SAVE</button>
								&nbsp;&nbsp;
								<a className="btn custom-default-btn" href={FlowRouter.path('modulesManager')}>CANCEL</a>
							</div>
						</div>
					</div>
					<div className="panel-body custom-panel">
						<div id="notification"></div>
						<div className="custom-tab">
							<ul className="nav nav-tabs">
							    <li className="active"><a data-toggle="tab" href="#module-home">Module</a></li>
							    <li><a data-toggle="tab" href="#module-menu-assign">Menu Assignment</a></li>
							    <li><a data-toggle="tab" href="#module-advanced">Advanced</a></li>
							</ul>
							<div className="tab-content">
								{/* =======> MODULE START<======= */}
									<div id="module-home" className="tab-pane active">
										<div className = "form-group">
											<label className="col-sm-2 control-label">Module Title</label>
											<div className="col-sm-10"><input type = "text" name="name" ref="name" id="name" className = "form-control" defaultValue={this.data.sliderModuleData ? this.data.sliderModuleData.name : ''} required /></div>
										</div>
										<Positions key={this.data.templateRegister._id} data={this.data.templateRegister} value={this.data.sliderModuleData?this.data.sliderModuleData.position:''}/>
										<div className="addslide-item">
											<div className="form-group">
												<label >Add Slides</label>
												 <div className="panel panel-default">
													 <div className="panel-heading menuitem-heading">Slides</div>
												  	<ul className="list-group slider-info">
														{
															this.data.sliderModuleData && this.data.sliderModuleData.moduleData ?
																this.data.sliderModuleData.moduleData.map((value, index) => {
																	// console.log("=========", value)
																	let img = Images.findOne({ _id: value.bgImageId })
																	return(
																		<li key={index} className="list-group-item slider">
																			<div>
																				<div className="remove-item-wrap">
																					<button type="button" className="btn custom-default-btn remove-item">
																						<span className="glyphicon glyphicon-minus"></span>
																					</button>
																				</div><br/>
																				<div className="array-item-body">
																					<div className="">
																						<div className="panel-body">
																							<div className="form-group" data-required="true">
																								<label className="col-sm-2 control-label">Title</label>
																								<div className="col-sm-10"><input type = "text" name="title" ref="title" id="title" className = "form-control title" defaultValue={value.title} required /></div>
																							</div>
																							<div className="form-group" data-required="true">
																								<label className="col-sm-2 control-label">Description</label>
																								<div className="col-sm-10"><textarea id="slider-content" name="content" ref="description" className="form-control" defaultValue={value.description}></textarea></div>
																							</div>
																							<div className="form-group" data-required="true">
																								<label className="col-sm-2 control-label">Link Title</label>
																								<div className="col-sm-10"><input name="linkText" className="form-control linkText" type="text" required ref="linkText" defaultValue={value.linkTitle} /></div>
																							</div>
																							<div className="form-group" data-required="true">
																								<label className="col-sm-2 control-label">Link Url</label>
																								<div className="col-sm-10"><input type="text" name="linkUrl" ref="linkUrl" id="link-url" className="form-control linkUrl" defaultValue={value.linkUrl} required /></div>
																							</div>
																							<div className="form-group" data-required="true">
																								<label className="col-sm-2 control-label">Image</label>
																								<div className="col-sm-10"><input name="bgimage" type="file" id="bg-image" className="bgimage" /><br/>
																									<div className="show-image">
																										{
																											img ?
																												<img src={ img.url() } className="img-rounded" height="100px" width="100px" style={{maxWidth: "100%"}} />
																											: ''
																										}
																									</div>
																								</div>
																							</div>
																							<div className="form-group" data-required="true">
																								<label className="col-sm-2 control-label">Published&nbsp;&nbsp;</label>
																								<div className="col-sm-10"><label className="switch">
																									<input name="published" type="checkbox" className="input-checkbox published" defaultChecked={value.published} />
																									<div className="slide round"></div>
																								</label>
																								</div>
																							</div>
																						</div>
																					</div>
																				</div>
																			</div>
																		</li>
																	);
																})
															: ''
														}
														<li className="list-group-item">
															<button type="button" className="btn custom-default-btn add-item"><span className="glyphicon glyphicon-plus"></span></button>
															</li>
												   	</ul>
												</div>
											</div>
										</div>

										<div className="form-group">
											<label className="col-sm-2 control-label">Show Title</label>
											<div className="col-sm-10">
												<div className="btn-group switch-btn" data-toggle="buttons">
													<label className={this.data.sliderModuleData.showTitle?'active option btn btn-primary':'option btn btn-primary'} ref="option">
														<div className="col-sm-10"><input type="radio" className="rad" name="options" ref="options" id="option2" value={1} />{i18n('ADMIN_SETTINGS_SITE_OFFLINE_YES')}</div>
													</label>
													<label className={this.data.sliderModuleData.showTitle?'option btn btn-primary':'active option btn btn-primary'} ref="option">
														<div className="col-sm-10"><input type="radio" className="rad" ref="options" name="options" id="option3" value={0} /> {i18n('ADMIN_SETTINGS_SITE_OFFLINE_NO')}</div>
													</label>
												</div>
											</div>
										</div>
									</div>
								{/* =======> MODULE END<======= */}


								{/* =======> MENU ASSIGNMENT START<======= */}
									<div id="module-menu-assign" className="tab-pane">
										<div className="form-group">
											<label className="col-sm-2 control-label">All Page</label>
											<div className="col-sm-10"><input onChange={this.checkAllPage} type="checkbox" id="pageall" className="pageall" ref="pageall" name="pageall" defaultChecked={this.data.sliderModuleData.allPages} /></div>
										</div>
										{ 
											this.state.checkAllPage ?
												this.state.checkAllPage == "false"?
													<MenuItemType value={this.data.sliderModuleData?this.data.sliderModuleData.menuItems:[]} />
												:
													''
											:
												!this.data.sliderModuleData.allPages?
													<MenuItemType value={this.data.sliderModuleData?this.data.sliderModuleData.menuItems:[]} />
												:
													''
										}
									</div>
								{/* =======> MENU ASSIGNMENT END<======= */}


								{/* =======> ADVANCED SETTING START<======= */}
									<div id="module-advanced" className="tab-pane">
										<div className="advance-htmlBlock">
											<div className = "form-group">
												<label htmlFor = "firstname" className = "col-sm-2 control-label">Module Suffix Class</label>
												<div className = "col-sm-10">
													<input type = "text" name="moduleClass" ref="moduleClass" id="module-class" className = "form-control" placeholder = "Enter Module Suffix class" />
												</div>
											</div>
										</div>
									</div>
								{/* =======> ADVANCED SETTING END<======= */}
							</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
})

AlertMessage = (title, message, messageType) => {
  // TODO -> change icons (a/c to your need)
  let type = '', icon = '';
  if(messageType == 'warning'){
    type = 'warning-msg';
    icon =  'fa-exclamation-triangle';
  }else if(messageType == 'success'){
    type = 'success-msg';
    icon =  'fa-check';
  }else if(messageType == 'error'){
    type = 'error-msg';
    icon =  'fa-remove';
  }
  return (
    Bert.alert({
      title: title,
      message: message,
      type: type,
      style: 'growl-top-right',
      icon: icon
    })
  );
}

/*class AlertMessageError extends Component {
  render(){
    return (
      <div className="successMsg alert alert-danger">
        <button type="button" onClick={this.props.func} className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <strong>Error! </strong>
        {this.props.data}
      </div>
    )
  }
}*/


export default EditSliderModule;