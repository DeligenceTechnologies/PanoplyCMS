
import('react').then(( { Component } ) => {
  class AdminLoginLayout extends Component {
    render() {
      return <div>{this.props.content?this.props.content:''}</div>
    }
  }
  export default AdminLoginLayout;
});