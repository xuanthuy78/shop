import React, { Component } from 'react'

export class Result extends Component {
  render() {
    var {count} = this.props;
    
    return (
      <div className="Result">
        <h6>Showing all {count} results</h6>
      </div>
    )
  }
}

export default Result
 