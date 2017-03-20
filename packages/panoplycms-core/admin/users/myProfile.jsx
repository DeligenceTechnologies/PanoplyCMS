UserList = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
    // return {
    //   results: Images.findOne(),
    //   user: Meteor.users.findOne(),
    // } 
    // console.log(Meteor.users.findOne(),'<----')
    var handle = Meteor.subscribe('usersProfile')
    return {
      pageLoading: !handle.ready(), 
      user: Meteor.users.findOne(),
      image: Images.findOne()
    };
  },
  
  render() {
    if (this.data.pageLoading) {
      return <LoadingSpinner />;
    }
    
      return(
              <div className="col-md-10 content">
              <Heading  data={'User List'} />
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
                          <th>Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr>
                      <td><img src={this.data?this.data.image?this.data.image.url():'':''} className="img-circle" alt="Cinque Terre" width="50" height="50" /></td>
                      <td>{this.data.user?this.data.user.profile?this.data.user.profile.username:'':''}</td>
                      <td>{this.data.user?this.data.user.emails[0].address:''}</td>
                      <td><a className = "btn btn-primary fa fa-pencil-square-o" data-toggle="tooltip" title="Edit" href={FlowRouter.path('editUser',{_id:this.data.user._id})}></a></td>
                      <td><button disabled='true' className = "btn btn-danger fa fa-trash-o" href={FlowRouter.path('dashboard')} data-toggle="tooltip" title="Delete" ></button></td> 
                      </tr> 
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

UserAlertMsg=React.createClass({

  render:function(){
    return <div className="successMsg alert alert-success " >
            <button type="button" onClick={this.props.data} className="close"  aria-label="Close">
              <span aria-hidden="true"  >&times;</span>
            </button>
            <strong>Successfully! </strong>
                Updated profile.
          </div>
  }
})