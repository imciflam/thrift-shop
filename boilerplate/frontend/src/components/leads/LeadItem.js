import React, { Component } from "react";

import { deleteLead } from "../../actions/leads";
var FileSaver = require("file-saver");
import { connect } from "react-redux";
import { Card } from "antd";
const { Meta } = Card;

export class LeadItem extends Component {
  onClick(j) {
    var blob = new Blob(["1"], {
      type: "text/plain;charset=utf-8"
    });
    console.log(j);
    FileSaver.saveAs(blob, j);
  }

  render() {
    console.log(this.props);
    let lead = this.props.lead;

    return (
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://static.turbosquid.com/Preview/001294/194/VQ/_D.jpg"
          />
        }
      >
        <Meta title={lead.brand} description={lead.price} />
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  leads: state.leads.leads
});
export default connect(
  mapStateToProps,
  { deleteLead }
)(LeadItem);
