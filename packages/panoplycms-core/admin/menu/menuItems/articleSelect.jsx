import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import LoadingSpinner from '../../common/loadingSpinner.jsx';

class SelectArticle extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      selectValue: ''
    };
  }
  componentDidMount() {
    this.setState({ selectValue: this.props.typeId })
  }
  setValue(event){
    event.preventDefault();
    this.setState({selectValue: $('#select-article').val()})
    this.props.func($('#select-article').val());
  }
  render() {
    if(this.props.pageLoading) {
      <LoadingSpinner />
    }

    return (
      <div>
        <select className = "form-control" id="select-article" onChange={this.setValue.bind(this)} defaultValue={this.state.selectValue ? this.state.selectValue : this.props.typeId}> 
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
  let handle = Meteor.subscribe('articlesFind')   
  return {
    pageLoading: ! handle.ready(),
    dataList: PanoplyCMSCollections.Articles.find({trash:false}).fetch()      
  };
}, SelectArticle)