import React, { Component } from "react";

export class LeadItemForm extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="popup">
        <div className="popup_inner">
          <h1>{this.props.data.brand}</h1>
          <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}

export default LeadItemForm;
