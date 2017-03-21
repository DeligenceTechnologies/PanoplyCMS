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
      msg:false,
      valid: '',
      errorMsg:false,
    }
  },
  componentDidMount(){
    let validObj=$("#loginForm").validate({
      rules: {
        email: {
          required: true,
          email:true
        },
        password: {
          required: true,
          password: true
        },
      },
      //For custom messages
      messages: {
        email:{
          required: "Please enter email.",
          email: "Please enter a valid email."
        },
        password: {
          required: "Please enter password.",
          password: "Please enter valid password."
        }
      },
      submitHandler: function (form) { // for demo
        return false;
      },
      errorElement : 'div',
      errorPlacement: function(error, element) {
        var placement = $(element).data('error');
        if (placement) {
          $(placement).append(error)
        } else {
          error.insertAfter(element);
        }
      }
    });
    this.setState({valid:validObj})
  },
  resetSuccessMsg(){
    this.setState({'msg': false})
    this.setState({'errorMsg': false})
  },
  submitData(event){
    event.preventDefault();
    var email=ReactDOM.findDOMNode(this.refs.email).value.trim();
    var password=ReactDOM.findDOMNode(this.refs.password).value.trim();
    // console.log(email,password,this);
    // self=this;
    Meteor.loginWithPassword(email,password,(err,data) =>{
      if(err){
        // console.log("Error while log in ->>", err);
        this.setState({errorMsg: err.reason})
      }else{
        this.setState({data:data})
        setTimeout(() => {
          FlowRouter.go('dashboard');
        },1000)
      }
    });
  },
  render() {
    return (
      <div>
       <div className="container-fluid main-container">
       <div className="content">
          <div className="panel panel-default">
            {this.state.errorMsg?<AlertMessageOfError data={this.state.errorMsg} func={this.resetSuccessMsg} />:'' }
            <section>
              <div className="container">
                <br />
                <div className="row">
                  <div className="col-md-offset-2 col-md-6">
                    <div className="panel panel-default">
                      <div className="panel-heading">
                        <span className="lead form-signin-heading">{this.data.result.name} Log In</span>
                      </div>
                      <form className="form-signin" id="loginForm" onSubmit={this.submitData}>
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

/*ShowAlert=React.createClass({
  render(){
    // console.log(this.props.err)
    return (
      <div className="alert alert-danger alert-dismissible" role="alert">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <strong>Error! </strong>{this.props.err}
      </div>
    )        
  }
})*/