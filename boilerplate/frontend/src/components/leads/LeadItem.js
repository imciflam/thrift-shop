import React, { Component } from "react";

import { deleteLead } from "../../actions/leads";
import { connect } from "react-redux";
import { Card } from "antd";
const { Meta } = Card;
import LeadItemForm from "./LeadItemForm";

export class LeadItem extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  render() {
    let lead = this.props.lead;

    return (
      <div onClick={this.togglePopup.bind(this, this.props.lead)}>
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
        {this.state.showPopup ? (
          <LeadItemForm
            text="Close Me"
            data={this.props.lead}
            closePopup={this.togglePopup.bind(this)}
          />
        ) : null}
      </div>
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
