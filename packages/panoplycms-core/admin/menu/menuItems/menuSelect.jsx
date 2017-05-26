import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import LoadingSpinner from '../../common/loadingSpinner.jsx';

class SelectMenu extends Component {
  setValue(event){
    event.preventDefault();
    this.props.func($('#selectMenu').val());
    //defaultValue={that.props.nameId}
  }
  render() {

    if(this.props.pageLoading) {
      <LoadingSpinner />
    }

    return (
      <div className = "col-sm-10">
        <select className = "form-control" id="selectMenu" onChange={this.setValue.bind(this)} defaultValue={this.props.nameId}>
          <option className="form-control" value="">Select</option>
          {
            this.props.dataList.map((result) => {
              return <option key={result._id} value={result._id} className="form-control"> {result.title} </option>;
            })
          }
        </select>
      </div>
    )
  }
}

export default createContainer(() => {
  let handle = Meteor.subscribe('menus')
  return {
    pageLoading: ! handle.ready(),
    dataList: PanoplyCMSCollections.Menus.find({trash:false}).fetch()
  };
}, SelectMenu)