import React, { Component } from "react";

export class Description extends Component {
  render() {
    return (
      <div id="description" className="tab-pane active">
        <div className="description mt-4">
          <h3 className="font-bold">Description</h3>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.
          </p>
        </div>
      </div>
    );
  }
}

export default Description;
