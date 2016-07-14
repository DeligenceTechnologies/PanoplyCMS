Login = React.createClass({
  mixins:[ReactMeteorData],
    getMeteorData(){
    return {
      result: PanoplyCMSCollections.Sites.findOne()
    };
  },
  componentDidMount: function() {
    document.title = this.data.result.name + ' Login';
  },
  getInitialState(){
   return {
      err:'',
      data:''     
    }
  },
  submitData(event){
    event.preventDefault();
    console.log('err,data');
    var email=ReactDOM.findDOMNode(this.refs.email).value.trim();
    var password=ReactDOM.findDOMNode(this.refs.password).value.trim();
    console.log(email,password,this);
    self=this;
    Meteor.loginWithPassword(email,password,function(err,data){
      if(err){
        console.log(self,this,'this');
        self.setState({err:err})
      }else{
        self.setState({data:data})
        FlowRouter.go('dashboard');
      }
    });
  },
  render() {
    if(this.state.err){
      showAlert=<ShowAlert key={1} err={this.state.err} />
    }else{
      showAlert='';
    }
    return (<div>
       <div className="container-fluid main-container">
       <div className="col-md-10 content">
          <div className="panel panel-default">
            {showAlert}
            <section>
              <div className="container">
                <br />
                <div className="row">
                  <div className="col-md-offset-2 col-md-6">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <span className="lead form-signin-heading">{this.data.result.name} Log In</span>
                      </div>
                      <form className="form-signin" onSubmit={this.submitData} >
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" ref="email" id="inputEmail" className="form-control" placeholder="Email address" required />
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" ref="password" id="inputPassword" className="form-control" placeholder="Password" required />
                        <input type="submit" value="Login" className="btn btn-lg btn-primary btn-block" />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>  
        </div>
      </div>
    </div>
    );
  }
});

AdminLoginLayout = React.createClass({
  render() { 
    return <div>{this.props.content}</div>
  }
})

ShowAlert=React.createClass({
  render(){console.log(this.props.err)
    return (
      <div className="alert alert-danger alert-dismissible" role="alert">
              <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <strong>Error!</strong> 
            </div>
    )        
  }
})