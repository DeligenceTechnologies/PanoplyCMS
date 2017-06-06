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

    require('../../imports/styles/admin.css');
    document.title = this.props.siteData.name + ' Login';

    // let validObj=$("#loginForm").validate({
    //   rules: {
    //     email: {
    //       required: true,
    //       email:true
    //     },
    //     password: {
    //       required: true,
    //       password: true
    //     },
    //   },
    //   //For custom messages
    //   messages: {
    //     email:{
    //       required: "Please enter email.",
    //       email: "Please enter a valid email."
    //     },
    //     password: {
    //       required: "Please enter password.",
    //       password: "Please enter valid password."
    //     }
    //   },
    //   submitHandler: function (form) { // for demo
    //     return false;
    //   },
    //   errorElement : 'div',
    //   errorPlacement: function(error, element) {
    //     var placement = $(element).data('error');
    //     if (placement) {
    //       $(placement).append(error)
    //     } else {
    //       error.insertAfter(element);
    //     }
    //   }
    // });
    // this.setState({ valid:validObj })
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
      <div className="loginForm">
        <div className="login-header"> <img src="/logo.png" /> </div>
        <form id="loginForm" onSubmit={this.submitData.bind(this)}>
          <div className="group">
            <input type="email" className="used" type="email" id="email" pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$' required/>
            <span className="highlight"></span><span className="bar"></span>
            <label>Email Id</label>
          </div>
          <div className="group">
            <input type="password" id="password" className="used"  required/>
            <span className="highlight"></span><span className="bar"></span>
            <label>Password</label>
          </div>
          <button type="submit" className="buttonui "> <span> LOGIN </span> </button>
        </form>
        <div className="powered"> <strong>Powered by <a href="https://www.deligence.com/" target="_blank"> Deligence Technologies</a> </strong></div>
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