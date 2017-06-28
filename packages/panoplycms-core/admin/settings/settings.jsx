import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import Heading from '../common/heading.jsx';
import { AlertMessage } from '../common/alertMessage.jsx';

import store from '../store/store.js';
import { updateWebsiteSettings } from '../actions/websiteSettings_action.js';

let settingHandler = function() {
	let onClick = function(id, obj) {
		store.dispatch(updateWebsiteSettings(id, obj))
	};
	return {
		onClick
	};
};


class SystemLayout extends Component {
	constructor(props) {
    super(props);

    this.handler = settingHandler();
  }
	componentDidMount(){
		$('.options').toggleClass('active');
		$('.option').button();
	}
	submitForm(event){
		event.preventDefault();
		let files = $('#logoId')[0].files[0];
		let name = $('#sitename').val();
		let regex = /[^.]+$/;
		let siteOffline = $('input[name="options"]:checked').val() == 1 ? true : false;
		let siteMetaKeyword = $('#siteMetaKeyword').val();
		let siteMetaDesc = $('#siteMetaDesc').val();
		let id = $('#sitename')[0].name;

		let settingObj = {
			name: name,
			siteMetaKeyword: siteMetaKeyword,
			siteMetaDesc: siteMetaDesc,
			siteOffline: siteOffline,
			logoId: this.props.results.logoId
		}

		if(files){
			if(regex.exec(files.name)[0] == "jpg" || regex.exec(files.name)[0] == "png" || regex.exec(files.name)[0] == "svg"){
				Images.insert(files, (err, fileObj) => {
					if(fileObj){
						settingObj.logoId = fileObj._id;
						/*Meteor.call('updateSiteName', id, settingObj, (err,data) => {
							if(err){
								AlertMessage('ERROR', err.reason, 'error');
							}else{
								AlertMessage('SUCCESS', 'Successfully! updated website settings.', 'success');
							}
						});*/
						this.handler.onClick(id, settingObj)
					}
				});
			}else{
				AlertMessage('ERROR', 'Unsupported Image format', 'error');
			}
		}else{
			/*Meteor.call('updateSiteName', id, settingObj, (err,data) => {
				if(err){
					AlertMessage('ERROR', err.reason, 'error');
				}else{
					AlertMessage('SUCCESS', 'Successfully! updated website settings.', 'success');
				}
			});*/
			this.handler.onClick(id, settingObj)
		}
	}
	restrictLength(event){
		if (event.currentTarget.value.length > 250){
			event.currentTarget.value = event.currentTarget.value.substring(0, 250);
		}
	}
	render() {
		// let img = Images.findOne({ _id:this.props.results.logoId })
		let url=[{
			title:i18n('ADMIN_SETTINGS_GLOBALCONFIGURATION'),
			url:"/admin/settings",
			active:true
		}];
		return (
			<div>
				<Heading data={i18n('ADMIN_SETTINGS_GLOBALCONFIGURATION')} url={url} />

				<form className = "form-horizontal" onSubmit={this.submitForm.bind(this)}>
				  <div className="controls-header">
            <div className="form-group">						
							<div className="col-sm-12">
								<input type="submit" className="btn custom-default-btn" value='UPDATE'/>
								&nbsp;&nbsp;
								<a className="btn custom-default-btn" href={FlowRouter.path('dashboard')}>CANCEL</a>
							</div>
						</div>
			   	</div>
		      <div className="panel-body custom-panel">
						<div className="form-group">
							<label className="col-sm-2 control-label">Site Name</label>
							<div className="col-sm-10">
								<input type="text" className="form-control" onChange={this.restrictLength.bind(this)} name={this.props.results._id} id="sitename" defaultValue={this.props.results.name} required/>
							</div>
						</div> 
						<div className="form-group">
							<label className="col-sm-2 control-label"> {i18n('ADMIN_SETTINGS_SITE_META_KEYWORD')}</label>
							<div className="col-sm-10">
								<textarea className="form-control" id="siteMetaKeyword" defaultValue={this.props.results.siteMetaKeyword}></textarea>
							</div>
						</div>
						<div className="form-group">
							<label className="col-sm-2 control-label"> {i18n('ADMIN_SETTINGS_SITE_META_DESCRIPTION')}</label>
							<div className="col-sm-10">
								<textarea className="form-control" id="siteMetaDesc" defaultValue={this.props.results.siteMetaDesc}></textarea>
							</div>
						</div>
						<div className="form-group">
							<label className="col-sm-2 control-label">{i18n('ADMIN_SETTINGS_SITE_OFFLINE')}</label>
							<div className="col-sm-10">
								<div className="btn-group switch-btn" data-toggle="buttons">
									<label className={this.props.results.siteOffline?'active option btn btn-primary':'option btn btn-primary'}>
										<input type="radio" className="rad" name="options" id="option2" value="1"/>{i18n('ADMIN_SETTINGS_SITE_OFFLINE_YES')}
									</label>
									<label className={!this.props.results.siteOffline?'active option btn btn-primary':'option btn btn-primary'}>
										<input type="radio" className="rad" name="options" id="option3" value="0" />{i18n('ADMIN_SETTINGS_SITE_OFFLINE_NO')}
									</label>
								</div>
							</div>
						</div>
						<div className = "form-group">
							<label htmlFor = "firstname" className = "col-sm-2 control-label">Logo</label>
							<div className = "col-sm-10">
								<input id="logoId" type="file" className="validate" /><br/>
								<div className="col-md-2">
								{
									this.props.image ?
										<img src={ this.props.image.url() } className="img-rounded" style={{maxWidth: "100%"}} /> 
									: ''
								}
								</div>
							</div>
						</div>
				 	</div>
				</form>
			</div>
		);
	}
}

export default createContainer(() => {
	let site = PanoplyCMSCollections.Sites.findOne();
	return {
		results: site,
		image : Images.findOne({ _id:site.logoId })
	};
}, SystemLayout)