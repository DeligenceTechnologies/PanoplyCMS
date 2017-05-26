import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

export default class FrontHeader extends Component {
	onClick(){
		PanoplyRouter.go('/')
	}
	render() {
		// console.log("---------", this.props)
		let img = Images.findOne({ _id:this.props.siteData.logoId })
		return(
			<header className="header">
				<div className="container">
					<div className="top-head animated bounceInDown">
				    <div className="row">
				      <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
				        <div className="top-left">
				        	{
				        		this.props.topHeaderLeft ?
				        			this.props.topHeaderLeft.map((topHeader) => {
				        				return topHeader;
				        			})
				        		: ''
				        	}
				        </div>
				      </div>
				      <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
				        <div className="top-right clearfix">
					        {
					        	this.props.topHeaderRight ?
					        		this.props.topHeaderRight.map((topHeader) => {
					        			return topHeader;
					        		})
					        	: ''
					        }
				        </div>
				      </div>
				    </div>
				  </div>
				  <div className="navbar-head animated fadeInUp">
						<div className="row">
							<div className="col-sm-4">
								<div className="logo animated fadeInLeft">
									{
										img ?
											<a href="javascript:void(0)" onClick={this.onClick.bind(this)}><img src={img.url()} /></a>
										:
											<div>
												<h2 style={{marginTop: "5px"}} className="blog-title" onClick={this.onClick.bind(this)}>{this.props.siteData?this.props.siteData.name:''}</h2>
											</div>
									}
								</div>
							</div>
							<div className="col-lg-8">
								<div id="main_nav" className="pull-right animated fadeInRight">
  		          	{
										this.props.module ?
											this.props.module.map(m => {
												return m;
											})
										: ''
									}

  		          </div>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

/*FrontHeader = (data) => {
	return(
		<div className="blog-masthead">
			<div className="container">
				<nav className="nav blog-nav" id="main-nav">
					{
						data.module ?
							data.module.map(m => {
								return m;
							})
						: ''
					}
				</nav>
			</div>
		</div>
	);
}*/