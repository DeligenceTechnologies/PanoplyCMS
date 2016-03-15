HtmlBlock = React.createClass({
	componentDidMount: function(){
		tinymce.init({
			selector: '#editor1',
			resize: 'both',
			min_height: 250
		});
	},
	getHTML(){
		return tinyMCE.get(ReactDOM.findDOMNode(this.refs.htmlValue).id).getContent().trim();
	},
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
