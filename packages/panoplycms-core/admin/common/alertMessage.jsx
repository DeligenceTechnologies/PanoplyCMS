AlertMessage=React.createClass({
  render:function(){
    return (
          <div className="successMsg alert alert-success ">
	          <button type="button" onClick={this.props.func} className="close"  aria-label="Close">
	            <span aria-hidden="true">&times;</span>
	          </button>
            <strong>Successfully! </strong>
	             {this.props.data}
       		</div>
      )
  }
})

AlertMessageOfError=React.createClass({
  render:function(){
    return (
          <div className="successMsg alert alert-danger ">
            <button type="button" onClick={this.props.func} className="close"  aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <strong>Error! </strong>
               {this.props.data}
          </div>
      )
  }
})

NotFoundComp=React.createClass({
  render:function(){
    return <div className="alert alert-danger">
              <strong>Sorry!</strong> Data not found.
            </div>

  }
})

export default NotFoundComp;
export default AlertMessageOfError;
export default AlertMessage;