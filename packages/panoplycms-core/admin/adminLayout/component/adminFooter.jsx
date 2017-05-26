import React, { Component } from 'react';
import { render } from 'react-dom';

export default class AdminFooter extends Component {
	render(){
		return (
			<footer className="footer-bg">
				<div className="pull-left">
					{i18n('ADMIN_FOOTER_COPYRIGHT')} &copy; 2017 <a href="http://www.deligence.com" target="_blank">{i18n('ADMIN_FOOTER_DELIGENCE')}</a>
	
              <ul className="admin-social-icons">
				        <li><a className="Facebook" title="Facebook" href="https://www.facebook.com/deligencetechnologies" target="_blank">Facebook</a></li>
				        <li><a className="LinkedIn" title="LinkedIn" href="https://www.linkedin.com/company/deligencetechnologies" target="_blank">LinkedIn</a></li>
				        <li><a className="Twitter" title="Twitter" href="https://twitter.com/deligence1" target="_blank">Twitter</a></li>
				        <li><a className="skype" title="skype" href="skype:sanjay.deligence" target="_blank">Skype</a></li>
				        <li><a className="github" title="github" href="https://github.com/DeligenceTechnologies" target="_blank">Github</a></li>
				        <li><a className="youtube" title="youtube" href="https://www.youtube.com/channel/UCbCXleygol2xB3Q4siq_6tg" target="_blank">Youtube</a></li>
				      </ul>
				 </div>
				<div className="pull-right">
			     <div className="footer-version">	Version: 1.3 </div>
				</div>
			</footer>
		)
	}
}
