import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

// import AlertMessageOfError from '../common/alertMessageOfError.jsx';
import { AlertMessage } from '../common/alertMessage.jsx';

var createReactClass = require('create-react-class');

class Login extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      valid: '',
    };
  }
  componentDidMount(){
    document.title = this.props.siteData.name + ' Login';

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
    this.setState({ valid:validObj })
  }
  /*resetSuccessMsg(){
    this.setState({'msg': false})
    this.setState({'errorMsg': false})
  }*/
  submitData(event){
    event.preventDefault();
    let email = $('#email').val();
    let password = $('#password').val();
    Meteor.loginWithPassword(email, password, (err,data) =>{
      if(err){
        // console.log("Error while log in ->>", err);
        // this.setState({ errorMsg: err.reason })
        AlertMessage('ERROR', err.reason, 'error');
      }else{
        this.setState({ data:data })
        setTimeout(() => {
          FlowRouter.go('dashboard');
        },1000)
      }
    });
  }
  render() {
    return (
      <div>
        <div className="container-fluid main-container">
          <div className="content">
            <div className="panel panel-default">
              {
                /*this.state.errorMsg ?
                  <AlertMessageOfError data={this.state.errorMsg} func={this.resetSuccessMsg} />
                : ''*/
              }
              <section>
                <div className="container">
                  <br />
                  <div className="row">
                    <div className="col-md-offset-2 col-md-6">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <span className="lead form-signin-heading">{this.props.siteData.name} Log In</span>
                        </div>
                        <form className="form-signin" id="loginForm" onSubmit={this.submitData.bind(this)}>
                          <label htmlFor="email" className="sr-only">Email address</label>
                          <input type="email" id="email" className="form-control" placeholder="Email address" required />
                          <label htmlFor="password" className="sr-only">Password</label>
                          <input type="password" id="password" className="form-control" placeholder="Password" required />
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
}

export default createContainer(() => {
  return {
    siteData: PanoplyCMSCollections.Sites.findOne()
  };
}, Login)



AdminLoginLayout = createReactClass({
  render() {
    return <div>{this.props.content}</div>
  }
})