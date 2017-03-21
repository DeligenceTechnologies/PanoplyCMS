AlertMessageOfError=React.createClass({
	render:function(){
		return (
			<div className="successMsg alert alert-danger ">
				<button type="button" onClick={this.props.func} className="close" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				<strong>Error! </strong>
				{this.props.data}
			</div>
		)
	}
})

export default AlertMessageOfError;