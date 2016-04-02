Heading=React.createClass({
  render:function(){
    return (
          <div className="page-header">
            <h3 className="sub-header">{this.props.data}</h3>
          </div>
      )
  }
})

AlertMessage=React.createClass({
  render:function(){
    return (
          <div className="successMsg alert alert-success alert-dismissible" role="alert">
	          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
	            <span aria-hidden="true">&times;</span>
	          </button>
	          <strong>{this.props.data}</strong>
       		</div>
      )
  }
})
