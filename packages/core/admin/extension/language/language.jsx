Language=React.createClass({
	getInitialState(){
		return{
			enValue:'',
			frValue:''
		}
	},
	setValue(event){
		event.preventDefault();
		console.log(event.currentTarget.value,ReactDOM.findDOMNode(this.refs.en).value.trim(),ReactDOM.findDOMNode(this.refs.fn).value.trim());
		this.setState({enValue:ReactDOM.findDOMNode(this.refs.en).value.trim()});
		this.setState({frValue:ReactDOM.findDOMNode(this.refs.fn).value.trim()})
	},
	componentDidMount: function(){
    	this.setState({enValue:'checked'});
  	},
	render(){
		return(
			<div className="col-md-10 content">
		        <div className="panel-heading"><span className="lead"> Add Articles </span>
		        </div>
		        <div className="panel-body">
		        	<div className = "form-group">
		              <label htmlFor = "firstname" className = "col-sm-2 control-label">Language</label>
		              <div className = "col-sm-6">
		               	English<input type="radio" name="lang" ref="en"  />   
		              </div>
		              <div className = "col-sm-6">
		               	French<input type="radio" name="lang" ref="fn"  />   
		              </div>
		            </div>
         		
        		</div>
      		</div>
		)
	}
})