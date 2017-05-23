import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import { ReactiveDict } from 'meteor/reactive-dict'

import AdminFooter from '../adminLayout/component/adminFooter.jsx';
import AdminHeader from '../adminLayout/component/adminHeader.jsx';
import AdminSidebar from '../adminLayout/component/adminSidebar.jsx';

const dict = new ReactiveDict('myDict')

class AdminLayout extends Component {
	componentDidMount(){
		$('body').attr('style','')
		require('../../imports/styles/admin.css')
		let link = document.createElement('link');
		link.id = 'id2';
		link.rel = 'stylesheet';
		link.href = "https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i,800,800i";
		document.getElementsByTagName('head')[0].appendChild(link);

		let script1 = document.createElement('script');
		script1.type = 'text/javascript';
		script1.src = 'http://enscrollplugin.com/releases/enscroll-0.6.1.min.js';
		document.getElementsByTagName('head')[0].appendChild(script1);

		let script2 = document.createElement('script');
		script2.type = 'text/javascript';
		script2.src = 'https://code.jquery.com/jquery-1.12.4.js';
		document.getElementsByTagName('head')[0].appendChild(script2);

		let script3 = document.createElement('script');
		script3.type = 'text/javascript';
		script3.src = 'https://code.jquery.com/ui/1.12.1/jquery-ui.js';
		document.getElementsByTagName('head')[0].appendChild(script3);

		  

		// $('#scrollbox3').enscroll({
		//     showOnHover: true,
		//     verticalTrackClass: 'track3',
		//     verticalHandleClass: 'handle3'
		// });

	}
	componentDidUpdate(){
		/***************************************************
				Scroll To Top While Page Change
		***************************************************/
		$(window).scrollTop(0);
	}
	render() {
		return (
			<div>
				<AdminHeader siteData = {this.props.siteData} pageLoading={this.props.pageLoading} />
				<div className="container-fluid main-container">
					<div className="row">

						<div className="col-md-2 sidebar">
							<div className="side-menu side-nav">
								<AdminSidebar sideBarMenus={this.props.sideBarMenus}  dict={dict}/>
							</div>
						</div> 
						<div className="col-md-10 col-sm-offset-2  content">
							{ React.cloneElement(this.props.content, {dict}) }
							<AdminFooter />
						</div>
					</div>
					
				</div>
				
			</div>
		);
	}
}

AdminLayout.propTypes = {
	content: PropTypes.object.isRequired,
};

export default createContainer(() => {
	let handle1 = Meteor.subscribe('siteName')
	let handle2 = Meteor.subscribe('usersProfile')
	return {
		pageLoading: ! handle1.ready() && ! handle2.ready(),
		siteData: PanoplyCMSCollections.Sites.findOne(),
		sideBarMenus: PanoplyCMSCollections.AdminSidebarMenu.find().fetch()
	};
}, AdminLayout);

