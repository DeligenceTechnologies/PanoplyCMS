MyProfile = React.createClass({
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
   render() {
    if (this.data.pageLoading) {
      return <LoadingSpinner />;
    }
    console.log(this.data.image.copies.images.key);
      return(
              <div className="col-md-10 content">
                <h2 className="sub-header">My Profile</h2>
                 
              
                  <div className = "form-group">
                    <label htmlFor = "firstname" className = "col-sm-2 control-label">Username</label>
                    <div className = "col-sm-10">
                      {this.data.user.profile.username} 
                    </div>
                  </div> 
                  <div className = "form-group">
                    <label htmlFor = "firstname" className = "col-sm-2 control-label" >Email</label>
                    <div className = "col-sm-10">
                    {this.data.user.emails[0].address}
                    </div>
                  </div> 
                  <img src={"/"+this.data.image.copies.images.key} className="img-rounded" />
                  <div className = "form-group">
                    <div className = "col-sm-10">
                      <a className = "btn btn-primary" href={FlowRouter.path('edit')}>Edit</a>
                    </div>
                  </div> 
                  <div className = "form-group">
                    <div className = "col-sm-10">
                      <a className = "btn btn-success" href={FlowRouter.path('home')}>Cancel</a>
                    </div>
                  </div> 
             
            </div>
      )  
  }

})
LoadingSpinner=React.createClass({
  render:function(){
    return <div>Loading....</div>
  }
})