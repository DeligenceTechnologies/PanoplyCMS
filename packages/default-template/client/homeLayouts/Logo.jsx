import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

// var createReactClass = require('create-react-class');

class Logo extends Component {
	onClick(){
		PanoplyRouter.go('/')
	}
	render(){
		let img = Images.findOne({ _id:this.props.siteData.logoId })
		return(
			<div>
				{
					img ?
						<img style={{margin:"10px 0", maxWidth: "100%", maxHeight: "100px"}} src={img.url()} />
					:
						<div>
							<h3>Welcome to</h3>
							<h2 className="blog-title" onClick={this.onClick.bind(this)}>{this.props.siteData?this.props.siteData.name:''}</h2>
						</div>
				}
				<p className="lead blog-description">{this.props.siteData?this.props.siteData.summary:''}</p>
			</div>
		);
	}
}

export default createContainer(()=>{
	return {
		siteData: PanoplyCMSCollections.Sites.findOne()
	};
}, Logo)