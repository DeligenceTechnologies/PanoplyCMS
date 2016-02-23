SystemLayout = React.createClass({
  handleChange: function(event) {
    this.setState({name: event.target.value});
  },
  mixins:[ReactMeteorData],
    getMeteorData(){
       var handle = Meteor.subscribe('siteName')
    return {
      pageLoading: ! handle.ready(), 
      results: Sites.findOne()
    };
      // Meteor.subscribe('siteName')
      // return {
      // results: Sites.findOne()
      // }
    
  },
  submitForm(event){
  	event.preventDefault();
    var name=ReactDOM.findDOMNode(this.refs.sitename).value.trim();
    var id=ReactDOM.findDOMNode(this.refs.sitename).name.trim();
    Meteor.call('updateSiteName',id,name,function(err,data){
      if(err)
        console.log(err);
      else
        console.log(data);
    });
    
  },
  render() {
      if (this.data.pageLoading) {
      return <LoadingSpinner />;
    }
    return (<div>
    	<button>Global Configuration</button>
    	<form onSubmit={this.submitForm} >
    	<input type="text" name={this.data.results._id} ref="sitename" defaultValue={this.data.results.name}/>
    	<input type="submit" value="Change"/>
    	</form>
    </div>
    );
  }
});

LoadingSpinner=React.createClass({
  render:function(){
    return <div>Loading....</div>
  }
})
