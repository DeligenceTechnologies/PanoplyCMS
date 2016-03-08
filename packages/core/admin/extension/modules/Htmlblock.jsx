Htmlblock = React.createClass({
	render(){
		return(
			<div className="form-group">
				<label htmlFor="html" className="col-sm-1 control-label">HTML</label>
				<div className="col-sm-11">
					<textarea id="editor1" ref="htmlValue" name="editor1" ></textarea>
				</div>
			</div>
		);
	}
});
