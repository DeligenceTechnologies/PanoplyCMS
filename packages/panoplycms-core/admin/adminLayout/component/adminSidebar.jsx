

import React, { Component } from 'react';
import { render } from 'react-dom';

import SideBarMenuItem from './sideBarMenuItem.jsx';


export default class AdminSidebar extends Component {
	route(route){
		PanoplyRouter.go(route)
	}
	render() {
		return (
			<div>
				<nav className="navbar navbar-default" role="navigation">
					<div className="side-menu-container">
						<ul className="nav navbar-nav ">
							{
								this.props.sideBarMenus.map(result => {
									return <SideBarMenuItem key={result._id} {...result} onClick={this.route} dict={this.props.dict} />;
								})
							}
						</ul>

					</div>

				</nav>
				
			</div>
		);
	}
}