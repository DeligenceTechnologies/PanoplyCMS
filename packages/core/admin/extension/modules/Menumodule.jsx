Menumodule = React.createClass({
	componentWillUnmount(){
		var textboxid = tinyMCE.get(ReactDOM.findDOMNode(this.refs.htmlValue).id).getContent().trim();
	},
	render(){
		return(
			<div className="form-group">
				<label htmlFor="html" className="col-sm-1 control-label">Select Menu</label>
				<div className="col-sm-5">
					<textarea id="editor1" ref="htmlValue" name="htmlValue" name="editor1" ></textarea>
				</div>
				<div className="col-sm-6">
					<input name="abcd" type="text"></input>
				</div>
			</div>
		);
	}
});
