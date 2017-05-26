import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

class SelectArticle extends Component {
  render() {
    return (
      <select className = "" ref="select" onChange={this.setValue}>
        {
          this.props.dataList.map((result) => {
           return <option key={result._id} value={result._id}> {result.title} </option>;
          })
        }
      </select>
    )
  }
}

export default createContainer(()=>{
  let handle1 = Meteor.subscribe('articlesFind')
  return {
    dataList: PanoplyCMSCollections.Articles.find({trash:false}).fetch()
  };
}, SelectArticle)