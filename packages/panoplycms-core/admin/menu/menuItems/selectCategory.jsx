import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

class SelectCategory extends Component {
  setValue(event){
    event.preventDefault();
    this.props.func(this.refs.select.value.trim());
  }
  render() {
    let c = 0;
    return (
      <select className = "" ref="select" onChange={this.setValue.bind(this)}> 
        {
          this.props.dataList.map((result)=> {
            return <option key={result._id} value={result._id}> {result.title} </option>;
          })
        }
      </select>
    )
  }
}
export default createContainer(() => {
  let handle1 = Meteor.subscribe('Categories')
  return {
    dataList: PanoplyCMSCollections.Categories.find({trash:false}).fetch()
  };
})