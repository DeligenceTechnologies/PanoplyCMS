EditUser = React.createClass({
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
  getInitialState(){
   return {
      msg:'',
      valid:''
    }
  },
  componentDidUpdate(){
    this.state.valid=$("#userEditForm").validate({
       rules: {
           email: {
               required: true,
               email:true
           },
           username: {
            required: true,
          },
        
      },
//For custom messages
       messages: {
           email:{
               required: "Please enter  email.",
               email: "Please enter a valid email."
           },
           username: {
              required: "Please enter name.",
             
            }
        },
        submitHandler: function (form) { // for demo
            alert('valid form');
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
  if(this.state.valid.form()){
    var username = this.refs.username.value.trim();
    var email = this.refs.email.value.trim();
    that=this;
   
     Meteor.call('updateUser',username,email,function(err,data){
        if(err){
            alert('Error in update.');
        }else{
          
          that.setState({msg : true})
        }
   })
  }
 
  
  
},
   render() {
    if (this.data.pageLoading) {
      return <LoadingSpinner />;
    }

      return(
              <div className="col-md-10 content">
                <Heading  data={i18n('ADMIN_USERS_EDIT')} />
                {this.state.msg?<AlertMessage data={'Your Profile is successfully updated.'}/>:''}
                
                <form className="form-horizontal" id="userEditForm"  encType="multipart/form-data" onSubmit={this.updateuser}> 
                  <div className = "form-group">
                    <label htmlFor = "firstname" className = "col-sm-2 control-label">{i18n('ADMIN_USERS_EDIT_USERNAME')}</label>
                    <div className = "col-sm-10">
                      <input type = "text" ref="username" name="username"    defaultValue={this.data.user.profile?this.data.user.profile.username:''} className = "form-control" / >
                    </div>
                  </div> 
                  <div className = "form-group">
                    <label htmlFor = "firstname" className = "col-sm-2 control-label" >{i18n('ADMIN_USERS_EDIT_EMAIL')}</label>
                    <div className = "col-sm-10">
                      <input type = "text" ref="email" name="email" id="email"  defaultValue={this.data.user.emails[0].address} className = "form-control" />
                    </div>
                  </div> 
                  <div className = "form-group">
                    <label htmlFor = "firstname" className = "col-sm-2 control-label" >Profile Picture</label>
                    <div className = "col-sm-10">
                      <input ref="file" type="file" name="file" onChange={this.uploadFile} className="upload-file"/>
                      <img src={this.data.image?this.data.image.url():''} className="img-rounded"   /> 
                    </div>
                  </div> 
                  <div className = "form-group">
                    <label htmlFor = "firstname" className = "col-sm-2 control-label" ></label>
                    <div className = "col-sm-6">
                     <input type = "submit"   className = "btn btn-primary" value={i18n('ADMIN_USERS_EDIT_SAVE')} />
                     &nbsp;&nbsp;
                      <a className = "btn btn-success" href={FlowRouter.path('dashboard')} >{i18n('ADMIN_USERS_EDIT_CANCEL')}</a>
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

