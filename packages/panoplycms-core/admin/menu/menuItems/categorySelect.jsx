import React, { Component } from 'react';
import { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import LoadingSpinner from '../../common/loadingSpinner.jsx';

class SelectCategory extends Component {
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
    this.setState({ selectValue: $('#selectCat').val() })
    this.props.func($('#selectCat').val());
  }
  render() {
    return (
      <div>
        <select className = "form-control" id="selectCat" defaultValue={this.state.selectValue} onChange={this.setValue.bind(this)}> 
          <option className="form-control" value="">Select</option>
          {
            this.props.dataList.map((result) => {
              return <option key={result._id} value={result._id}> {result.title} </option>;
            })
          } 
        </select>
      </div>
    )
  }
}

export default createContainer(() => {
  let handle = Meteor.subscribe('Categories')
  return {
    pageLoading: ! handle.ready(),
    dataList: PanoplyCMSCollections.Categories.find({trash:false}).fetch()
  };
}, SelectCategory)