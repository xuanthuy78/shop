import React, { Component } from 'react'

export class Result extends Component {
  render() {
    var {count} = this.props;
    
    return (
      <div className="Result mb-5">
        <h5>Showing all {count} results</h5>
      </div>
    )
  }
}

export default Result
 