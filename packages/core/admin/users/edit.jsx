AdminEdit = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
    // return {
    //   results: Images.findOne(),
    //   user: Meteor.users.findOne(),
    // } 
    var handle = Meteor.subscribe('usersProfile')
    return {
      pageLoading: ! handle.ready(), 
      user: Meteor.users.findOne(),
      image:Images.findOne()
    };
  },
 uploadFile: function (event) {
   if(Images.find().count()==0){

   }else{
      a=Images.find().fetch();
      Images.remove({_id:a[0]._id});
   }
   FS.Utility.eachFile(event, function(file) {
     
      Images.insert(file, function (err, fileObj) {
       
        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      });
    });
},
updateuser(event){
  event.preventDefault();
  var username=ReactDOM.findDOMNode(this.refs.username).value.trim();
  var email=ReactDOM.findDOMNode(this.refs.email).value.trim();
  var newPassword=ReactDOM.findDOMNode(this.refs.confirmPassword).value.trim();
  var oldPassword=ReactDOM.findDOMNode(this.refs.password).value.trim();
 
   Meteor.call('updateUser',username,email,function(err,data){
      if(err){

      }else{
        Accounts.changePassword(oldPassword, newPassword,function(err,data){
           if(err){
              alert('Incorrect old password');
           }else{
             alert('Successfully saved.');
           }
        });
      }
   })
  
  
},
   render() {
    if (this.data.pageLoading) {
      return <LoadingSpinner />;
    }
      return(
              <div className="col-md-10 content">
                <h2 className="sub-header">Profile</h2>
                  <form ref="uploadForm" className="uploader" encType="multipart/form-data" >
            <input ref="file" type="file" name="file" onChange={this.uploadFile} className="upload-file"/>
            <img src={this.data.image?"/"+this.data.image.copies.images.key:''} className="img-rounded"  onClick={this.uploadFile} />
        </form> 
                <form className="form-horizontal" onSubmit={this.updateuser}> 
                  <div className = "form-group">
                    <label htmlFor = "firstname" className = "col-sm-2 control-label">Username</label>
                    <div className = "col-sm-10">
                      <input type = "text" ref="username" id="username"    defaultValue={this.data.user.profile.username} className = "form-control" / >
                    </div>
                  </div> 
                  <div className = "form-group">
                    <label htmlFor = "firstname" className = "col-sm-2 control-label" >Email</label>
                    <div className = "col-sm-10">
                      <input type = "text" ref="email" id="email"  defaultValue={this.data.user.emails[0].address} className = "form-control" />
                    </div>
                  </div> 
                  <div className = "form-group">
                    <label htmlFor = "firstname" className = "col-sm-2 control-label" >Password</label>
                    <div className = "col-sm-10">
                      <input type = "text" ref="password" id="password"  className = "form-control" />
                    </div>
                  </div> 
                   <div className = "form-group">
                    <label htmlFor = "firstname" className = "col-sm-2 control-label" >Confirm Password</label>
                    <div className = "col-sm-10">
                      <input type = "text" ref="confirmPassword" id="confirmPassword"  className = "form-control" />
                    </div>
                  </div> 
                  <div className = "form-group">
                    <div className = "col-sm-10">
                      <input type = "submit"   className = "btn btn-primary" value="Update" />
                    </div>
                  </div> 
                  <div className = "form-group">
                    <div className = "col-sm-10">
                      <a className = "btn btn-success" href={FlowRouter.path('home')} >Cancel</a>
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