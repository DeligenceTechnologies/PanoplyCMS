Dashboard = React.createClass({
  /*mixins:[ReactMeteorData],
  getMeteorData(){
    
  }*/
  submitForm(event){
    /*event.preventDefault();
    var n*/ame=React.findDOMNode(this.refs.sitename).value.trim();
  },
  render() {
    return (<div>
            <div className="col-md-10 content">
              <Heading  data={'Dashboard'} />
              <div className="panel-body">

              </div> 
            </div>
    </div>
    );
  }
});