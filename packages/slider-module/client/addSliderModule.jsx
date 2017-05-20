import React, { Component } from 'react';
import { render } from 'react-dom';

var createReactClass = require('create-react-class');

import MenuItemType from './menuItemTypes.jsx'
import Positions from './positions.jsx';

AddSliderModule = createReactClass({
	mixins: [ReactMeteorData],
	getMeteorData() {
		return {
			templateRegister: PanoplyCMSCollections.RegisteredPackages.findOne({name:'template'})
		};
	},
	getInitialState(){
		return {
			valid: '',
			checkAllPage:null
		}
	},
	/*resetSuccessMsg(){
		this.setState({'successMsg': false})
		this.setState({'errorMsg': false})
	},*/
	componentDidMount(){
		// $('#slider-content').summernote({ height: 200 });
		// $('.option').toggleClass('active');
    $('.option').button();

		$('.slider-info').on('click', '.add-item', function(e) {
			e.preventDefault();
			let controlForm = $(this).parents('.slider-info'),
				currentEntry = controlForm.children(':first'),
				addSlider = $(this).parent().clone(),
				newEntry = $(currentEntry.clone()).appendTo(controlForm);
			$(this).parent().remove();
			$(addSlider).appendTo(controlForm);
			newEntry.find('input, textarea').val('');
		}).on('click', '.remove-item', function(e) {
			e.preventDefault();
			let childs = $(this).parents('.slider').parent().children('.slider').length;
			if (childs > 1){
				$(this).parents('.slider').remove();
			}
			else $(this).parents('.slider').find('input').val('');
			return false;
		});
	},
	componentWillUnmount: function() {
		// tinymce.remove();
		// $('#slider-content').summernote('destroy');
	},
	checkAllPage(){
		this.setState({
			checkAllPage:$("#pageAll").is(':checked')
		});
	},
	handleSubmit(e){
		e.preventDefault();
		let regex = /[^.]+$/;

		let menuItems = [];
		$.each($("input[name='menucheck']:checked"), function(){
			menuItems.push($(this).val());
		});
		
		let sliderObj = {
			name: this.refs.name.value,
			type:'slidermodule',
			showTitle: $('input[name="options"]:checked').val() == 0 ? false : true,
			position: $('#position').val(),
			moduleClass: $('#module-class').val(),
			allPages: $('.pageAll').is(':checked'),
			menuItems: menuItems,
			moduleData: []
		}

		if(!e.currentTarget.content.length) {
			let imageFile = $('#bg-image')[0].files[0];
			if(regex.exec(imageFile.name)[0] == "jpg" || regex.exec(imageFile.name)[0] == "png" || regex.exec(imageFile.name)[0] == "svg"){
				Images.insert(imageFile, (err, fileObj)=> {
					if(fileObj){
						sliderObj.moduleData.push({
							title: this.refs.title.value,
							description: this.refs.description.value,
							linkTitle: this.refs.linkText.value,
							linkUrl: this.refs.linkUrl.value,
							published: $(".published").is(':checked'),
							bgImageId: fileObj. _id
						})
						Meteor.call('addModule', sliderObj, (error,data) => {
							if(error){
								AlertMessage('ERROR', err.reason, 'error');
							}else{
								AlertMessage('SUCCESS', 'Successfully! added slider module.', 'success');
								this.refs.name.value = '';
								this.refs.title.value = '';
								this.refs.linkText.value = '';
								this.refs.linkUrl.value = '';
								$("#slider-content").val('');
								$('#bg-image').val('');
								// $("li.list-group-item.slider:not(:first-child)").remove();
								// FlowRouter.go('modulesManager')

							}
						})
					}
				})
			}else{
				AlertMessage('ERROR', 'Unsupported Image format', 'error');
			}
		}else{
			let title = [], content = [], linkText = [], linkUrl = [], published = [], imageObj = [];
			e.currentTarget.title.forEach(i => { title.push(i.value) });
			e.currentTarget.content.forEach(i => { content.push(i.value) });
			e.currentTarget.linkText.forEach(i => { linkText.push(i.value) });
			e.currentTarget.linkUrl.forEach(i => { linkUrl.push(i.value) });
			e.currentTarget.published.forEach(i => { published.push(i.checked) });
			e.currentTarget.bgimage.forEach(i => { imageObj.push(i.files[0]) });
			
			for (let i = 0; i < content.length; i++) {
				if(regex.exec(imageObj[i].name)[0] == "jpg" || regex.exec(imageObj[i].name)[0] == "png" || regex.exec(imageObj[i].name)[0] == "svg"){
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
							if(sliderObj.moduleData.length == content.length) {
								Meteor.call('addModule', sliderObj, (error,data) => {
									if(error){
										AlertMessage('ERROR', err.reason, 'error');
									}else{
										AlertMessage('SUCCESS', 'Successfully! added slider module.', 'success');
										this.refs.name.value = '';
										this.refs.title.value = '';
										this.refs.linkText.value = '';
										this.refs.linkUrl.value = '';
										$("#slider-content").val('');
										$('#bg-image').val('');
										// FlowRouter.go('modulesManager')
										$("li.list-group-item.slider:not(:first-child)").remove();
									}
								})
							}
						}
					})
				}else{
					AlertMessage('ERROR', 'Unsupported Image format', 'error');
				}
			}
		}
	},
	render() {
		/*let msg = '';
		if(this.state.successMsg){
			msg = <AlertMessageSuccess data={'added slider module.'} func={this.resetSuccessMsg} />
		}else if(this.state.errorMsg){
			msg = <AlertMessageError data={this.state.errorMsg} func={this.resetSuccessMsg} />
		}else{
			msg = '';
		}*/
		return (
			<div className="">
				<div className="page-header">
					<h3 className="sub-header">Add Slider Module</h3>
				</div>
				<form id="sliderModule" className = "form-horizontal" role = "form" onSubmit={this.handleSubmit}>
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
											<div className="col-sm-10"><input type = "text" name="name" ref="name" id="name" className = "form-control" placeholder = "Enter module name" required /></div>
										</div>
										<Positions key={this.data.templateRegister._id} data={this.data.templateRegister} value={this.data.templateRegister} />
										<div className="addslide-item">
									  	<div className="form-group">
											<label>Add Slides</label>
											<div className="panel panel-default">
												<div className="panel-heading menuitem-heading">Slides</div>
												<ul className="list-group slider-info">
													<li className="list-group-item slider">
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
																			<div className="col-sm-10"><input type="text" name="title" ref="title" id="title" className="form-control title" placeholder = "Enter title" required /></div>
																		</div>
																		<div className="form-group" data-required="true">
																			<label className="col-sm-2 control-label">Description</label>
																			<div className="col-sm-10">
																				<textarea id="slider-content" placeholder = "Enter Description" ref="description" name="content" className="form-control"></textarea>
																			</div>
																		</div>
																		<div className="form-group" data-required="true">
																			<label className="col-sm-2 control-label">Link Title</label>
																			<div className="col-sm-10"><input name="linkText" className="form-control linkText" ref="linkText" type="text" placeholder = "Enter Link Title" required /></div>
																		</div>
																		<div className="form-group" data-required="true">
																			<label className="col-sm-2 control-label">Link Url</label>
																		<div className="col-sm-10">	<input type="text" name="linkUrl" ref="linkUrl" id="link-url" className="form-control linkUrl" placeholder = "Enter Link Url" required /></div>
																		</div>
																		<div className="form-group" data-required="true">
																			<label className="col-sm-2 control-label">Image</label>
																		<div className="col-sm-10">	<input name="bgimage" type="file" id="bg-image" className="bgimage" required /></div>
																		</div>
																		<div className="form-group" data-required="true">
																			<label className="col-sm-2 control-label">Published&nbsp;&nbsp;</label>
																		<div className="col-sm-10">	<label className="switch">
																				<input name="published" type="checkbox" className="input-checkbox published" defaultChecked="true" />
																				<div className="slide round"></div>
																			</label>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</li>
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
												<label className='active option btn btn-primary' ref="option">
													<input type="radio" className="rad" name="options" ref="options" id="option2" value={1} />{i18n('ADMIN_SETTINGS_SITE_OFFLINE_YES')}
												</label>
												<label className='option btn btn-primary' ref="option">
													<input type="radio" className="rad" ref="options" name="options" id="option3" value={0} /> {i18n('ADMIN_SETTINGS_SITE_OFFLINE_NO')}
												</label>
											</div>
											</div>
										</div>
									</div>
								{/* =======> MODULE END<======= */}


								{/* =======> MENU ASSIGNMENT START<======= */}
									<div id="module-menu-assign" className="tab-pane">
										<div className="form-group">
											<label className = "col-sm-2 control-label">All Page</label>&nbsp;&nbsp;
												<div className = "col-sm-10"><input onChange={this.checkAllPage} type="checkbox" id="pageAll" className="pageAll" ref="pageAll" name="pageAll" /></div>
										</div>
										{ 
											!this.state.checkAllPage?
												<MenuItemType value={[]} />
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


SliderBlock = data => {
	let showTitle = '';
	if(data.module_title) showTitle = <h3>{data.module_title}</h3>;
	let dataArr = _.values(data)
	return(
		<section className="main-slider" data-start-height="600" data-slide-overlay="yes">
			<div className="tp-banner-container">
				<div className={data.moduleClass+"tp-banner"}>
					<ul>
						{
							dataArr.map((value, index) => {
								let img = Images.findOne({ _id: value.bgImageId })
								if(value.published){
									return(
										<li key={index} data-transition="fade" data-slotamount="1" data-masterspeed="1000" data-saveperformance="off" data-title="">
											<img src={img ? img.url() :''} alt="" data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat" />
											<div className="tp-caption sfr sfb tp-resizeme"
												data-x="center" data-hoffset="0"
												data-y="center" data-voffset="-10"
												data-speed="1500"
												data-start="0"
												data-easing="easeOutExpo"
												data-splitin="none"
												data-splitout="none"
												data-elementdelay="0.01"
												data-endelementdelay="0.3"
												data-endspeed="1200"
												data-endeasing="Power4.easeIn"
											>
												<h2 className="big-title text-center">{value && value.title ? value.title :''}</h2>
											</div>

											<div className="tp-caption sfr sfb tp-resizeme"
												data-x="center" data-hoffset="0"
												data-y="center" data-voffset="-120"
												data-speed="1500"
												data-start="500"
												data-easing="easeOutExpo"
												data-splitin="none"
												data-splitout="none"
												data-elementdelay="0.01"
												data-endelementdelay="0.3"
												data-endspeed="1200"
												data-endeasing="Power4.easeIn"
											>
												<div className="normal-text text-center">{value && value.description ? value.description :''}</div>
												{/*<!--Slider Separeter Line-->*/}
												<div className="slider-separeter-line">
													<div className="line-one"></div>
													<div className="line-two"></div>
												</div>
											</div>

											<div className="tp-caption sfl sfb tp-resizeme"
		                    data-x="center" data-hoffset="0"
		                    data-y="center" data-voffset="70"
		                    data-speed="1500"
		                    data-start="1000"
		                    data-easing="easeOutExpo"
		                    data-splitin="none"
		                    data-splitout="none"
		                    data-elementdelay="0.01"
		                    data-endelementdelay="0.3"
		                    data-endspeed="1200"
		                    data-endeasing="Power4.easeIn"
		                  >
		                    <a href={value && value.linkUrl ? value.linkUrl :''} className="white-btn">{value && value.linkTitle ? value.linkTitle :''}</a>
		                  </div>
										</li>
									);
								}else{
									return ''
								}
							})
						}
					</ul>
				</div>
			</div>
		</section>
	);
}


export default AddSliderModule;