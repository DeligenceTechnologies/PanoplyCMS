ChangePassword = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
    // return {
    //   results: Images.findOne(),
    //   user: Meteor.users.findOne(),
    // } 
    var handle = Meteor.subscribe('usersProfile')
    return {
      pageLoading: ! handle.ready()
    };
  },
updateuser(event){
  event.preventDefault();
  var oldPassword=ReactDOM.findDOMNode(this.refs.oldPassword).value.trim();
  var newPassword=ReactDOM.findDOMNode(this.refs.newPassword).value.trim();
  var confirmPassword=ReactDOM.findDOMNode(this.refs.confirmPassword).value.trim();
  if(newPassword!=confirmPassword){
       alert('New password and Confirm password is not same. ');
  }else{
        Accounts.changePassword(oldPassword, newPassword,function(err,data){
           if(err){
              alert('Incorrect old password');
           }else{
             alert('Successfully saved.');
           }
        });
      }
},
   render() {
    if (this.data.pageLoading) {
      return <LoadingSpinner />;
    }

      return(
              <div className="col-md-10 content">
                <Heading  data={i18n('ADMIN_USERS_CHANGE_PASSWORD')} />
                <form className="form-horizontal"  encType="multipart/form-data" onSubmit={this.updateuser}> 
                  <div className = "form-group">
                    <label htmlFor = "firstname" className = "col-sm-2 control-label" >{i18n('ADMIN_USERS_EDIT_OLD_PASSWORD')}</label>
                    <div className = "col-sm-10">
                      <input type = "password" ref="oldPassword" id="oldPassword"  className = "form-control" />
                    </div>
                  </div> 
                   <div className = "form-group">
                    <label htmlFor = "firstname" className = "col-sm-2 control-label" >{i18n('ADMIN_USERS_EDIT_NEW_PASSWORD')}</label>
                    <div className = "col-sm-10">
                      <input type = "password" ref="newPassword" id="newPassword"  className = "form-control" />
                    </div>
                  </div> 
                  <div className = "form-group">
                    <label htmlFor = "firstname" className = "col-sm-2 control-label" >{i18n('ADMIN_USERS_EDIT_CONFIRMPASSWORD')}</label>
                    <div className = "col-sm-10">
                      <input type = "password" ref="confirmPassword" id="confirmPassword"  className = "form-control" />
                    </div>
                  </div> 
                  <div className = "form-group">
                    <label htmlFor = "firstname" className = "col-sm-2 control-label" ></label>
                    <div className = "col-sm-6">
                     <input type = "submit"   className = "btn btn-primary" value={i18n('ADMIN_USERS_EDIT_SAVE')} />
                     &nbsp;&nbsp;
                      <a className = "btn btn-success" href={FlowRouter.path('home')} >{i18n('ADMIN_USERS_EDIT_CANCEL')}</a>
                    </div>
                  </div> 
                </form>
            </div>
      )  
  }

})
LoadingSpinner=React.createClass({
  render:function(){
    return <div>Loading....</div>
  }
})

