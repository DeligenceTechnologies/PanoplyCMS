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
              <Heading  data={i18n('ADMIN_USERS_PROFILE')} />
              <div className="panel-body">
                <div className="panel">
                  <div className="table-responsive" id="non-editable">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>{i18n('ADMIN_USERS_PROFILE_PICTURE')}</th>
                          <th>{i18n('ADMIN_USERS_EDIT_USERNAME')}</th>
                          <th>{i18n('ADMIN_USERS_EDIT_EMAIL')}</th>
                          
                          <th>{i18n('ADMIN_USERS_PROFILE_EDIT')}</th>
                          <th>{i18n('ADMIN_USERS_EDIT_CANCEL')}</th>
                        </tr>
                      </thead>
                      <tbody>
                      <td><img src={this.data.image?this.data.image.url():''} className="img-circle" alt="Cinque Terre" width="50" height="50" /></td>
                      <td>{this.data.user.profile.username}</td>
                      <td>{this.data.user.emails[0].address}</td>
                      <td><a className = "btn btn-primary" href={FlowRouter.path('edit')}>{i18n('ADMIN_USERS_PROFILE_EDIT')}</a></td>
                      <td><a className = "btn btn-success" href={FlowRouter.path('home')}>{i18n('ADMIN_USERS_EDIT_CANCEL')}</a></td>  
                      </tbody>
                    </table>
                  </div>
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