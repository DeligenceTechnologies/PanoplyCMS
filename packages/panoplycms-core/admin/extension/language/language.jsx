Language=React.createClass({
  getInitialState(){
    return{
      value:''
      
    }
  },
  componentDidMount: function(){
    this.setState({value:i18n.getLanguage()});
   },  
  setLanguage(event){
    this.setState({value:event.currentTarget.value});
    i18n.setLanguage(event.currentTarget.value);
   },
	render(){
		return (
			
					<div className="" >
            <h2 className="sub-header">Language</h2>
              <div className = "form-group">
                <label htmlFor = "firstname" className = "col-sm-2 control-label" >English</label>
                <div className = "col-sm-10">
                  <input type = "radio"  name="lang" checked={this.state.value=='en'} onChange={this.setLanguage} value="en" className = "form-control" />
                </div>
              </div> 
               <div className = "form-group">
                <label htmlFor = "firstname" className = "col-sm-2 control-label" >French</label>
                <div className = "col-sm-10">
                  <input type = "radio" name="lang" checked={this.state.value=='fr'} onChange={this.setLanguage} value="fr" className = "form-control" />
                </div>
              </div>      
    		  </div>
		
		)
	}
})