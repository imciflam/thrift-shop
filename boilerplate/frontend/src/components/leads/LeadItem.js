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
            src={
              lead.photo
                ? lead.photo
                : "http://chinacars.in.ua/images/no-photos/no-photo-details-big.png"
            }
          />
        }
      >
        <Meta
          title={lead.brand + " " + lead.model}
          description={lead.price + " ₽"}
        />
        <button
          onClick={this.props.deleteLead.bind(this, lead.id)}
          className="btn btn-danger btn-sm"
        >
          {" "}
          удалить
        </button>
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
