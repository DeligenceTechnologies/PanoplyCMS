Heading=React.createClass({
	componentDidMount: function() {
		document.title = this.props.data;
	},
  render:function(){
    return (
      <div className="page-header">
        <h3 className="sub-header">{this.props.data}</h3>
      </div>
    )
  }
})
 export default Heading;

