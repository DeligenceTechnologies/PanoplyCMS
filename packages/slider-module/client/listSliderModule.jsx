import React, { Component } from 'react';
import { render } from 'react-dom';

var createReactClass = require('create-react-class');

ListSliderModule = createReactClass({
	getInitialState(){
		return {
			trashListShow: false
		}
	},
	render() {
		/*nodata = '';
		if (this.props.pageLoading) {
			return <LoadingSpinner />;
		}
		if(this.props.results.length == 0  && this.state.trashListShow == false){
			nodata = <NotFound />
		}else if(this.props.resultOfTrash.length == 0 && this.state.trashListShow == true){
			nodata = <NotFound />
		}else{
			nodata = '';
		}*/
		return (
			<div className="col-md-10 content">
				<h3 className="sub-header">Slider Module</h3>
				{ msg }
				<div className="panel-body">
					<div className="panel-body">
						<div className="table-responsive" id="non-editable">
							<table className="table table-bordered">
								<thead>
									<tr>
										<th>Title</th>
										<th>Content</th>
										<th>Link Text</th>
										<th>Link Url</th>
										<th>Link Image</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Dummy Title</td>
										<td>Dummy Content</td>
										<td>Dummy Link Text</td>
										<td>Dummy Link Url</td>
										<td>Dummy Link Image</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
})

/*class LoadingSpinner extends Component {
	render(){
		return <div>Loading...</div>
	}
}

class NotFound extends Component {
	render(){
		return(
			<div className="alert alert-danger">
				<strong>Sorry!</strong> Data not found.
			</div>
		)
	}
}*/

export default ListSliderModule;