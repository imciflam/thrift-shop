import React, { Component } from "react";
import LeadItem from "./LeadItem";
import { Pagination } from "antd";
import { Card, Col, Row } from "antd";

export class LeadList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.leads == undefined) {
      return <p>Ничего не найдено</p>;
    }

    return (
      <div style={{ background: "#ECECEC", padding: "30px" }}>
        <Row gutter={16}>
          {this.props.leads.map(lead => {
            if (lead.match == false) {
              return;
            }
            return (
              <Col span={6} style={{ marginBottom: "10px" }}>
                <LeadItem key={lead.id} lead={lead} />
              </Col>
            );
          })}
        </Row>
        <Pagination
          defaultCurrent={1}
          total={50}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
          showSizeChanger
          pageSizeOptions={["15", "30", "40", "50", "100"]}
        />
      </div>
    );
  }
}

export default LeadList;
