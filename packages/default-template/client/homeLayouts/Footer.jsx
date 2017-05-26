import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

export default class FrontFooter extends Component {
	render(){
		// console.log("footer ------", this.props)
		return(
			<footer className="site-footer">
				<div className={this.props.mainFooterLeft.length > 0 || this.props.mainFooterRight.length > 0 ? "ftrbtm-link":''}>
					<div className="container">
						<div className="row">
							<div className="col-sm-6">
								{
									this.props.mainFooterLeft ?
										this.props.mainFooterLeft.map((value) => {
											return value;
										})
									: ''
								}
							</div>
							<div className="col-sm-6">
								<div className="legal-links">
									{
										this.props.mainFooterRight ?
											this.props.mainFooterRight.map((value) => {
												// console.log("--------->>", value)
												return value;
											})
										: ''
									}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={this.props.copyright.length > 0 ? "footer-bottom" : ''}>
					<div className="container">
        		<div className="copyright-content">
							{
								this.props.copyright ?
									this.props.copyright.map((value) => {
										return value;
									})
								: ''
							}
        		</div>
        	</div>
				</div>
			</footer>
		);
	}
}

/*FrontFooter = data => {
	let className = 'col-md-12'
	if(data.module){
		className = 'col-md-'+Math.ceil(12 / data.module.length)
	}
	return(
		<div className="footer">
			<div className="ftrbtm-link">
				<div className="container">
					<footer className={_.isEmpty(data.module)?"":"blog-footer row"}>
						{
							data.module ?
								data.module.map(m => {
									return(
										<div className={className} key={m.key}>
											{m}
										</div>
									);
								})
							: ''
						}
					</footer>
				</div>
			</div>
		</div>
	)
}*/