/*Modal=React.createClass({
	render:function(){
		return(
					<div id="myModal" className="modal fade" role="dialog">
					  <div className="modal-dialog">
					    <div className="modal-content">
					      <div className="modal-body">
					        <button type="button" className="close" data-dismiss="modal">&times;</button>
					        <h4 className="modal-title">Do you really want to remove ?</h4>
					      </div>
					      <div className="modal-footer">
					        <button type="button" className="btn btn-primary" onClick={this.props.func} data-dismiss="modal">YES</button>
					        <button type="button" className="btn btn-danger" data-dismiss="modal">NO</button>
					      </div>
					    </div>
					  </div>
					</div>
		)			
	}
})*/

CoreOfflineComponent = React.createClass({
  render: function() {
    return <div><h1>Site Offline...!!!</h1></div>
  }
})

CoreComponentNotFound = () => {
  return <div>
    <Heading data="404! Page not Found" />
    <p>Sorry! URL for this route is not configured.</p>
  </div>
}