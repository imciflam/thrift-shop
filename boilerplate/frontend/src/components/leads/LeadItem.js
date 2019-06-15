import React, { Component } from "react";

import { deleteLead } from "../../actions/leads";
import { connect } from "react-redux";
import { Card } from "antd";
const { Meta } = Card;
import { Modal, Button } from "antd";

export class LeadItem extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

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
        {/* <button
          onClick={this.props.deleteLead.bind(this, lead.id)}
          className="btn btn-danger btn-sm"
        >
          {" "}
          удалить
        </button> */}
        <div>
          <br />
          <Button type="secondary btn-block" onClick={this.showModal}>
            Подробнее
          </Button>
          <Modal
            title={lead.brand + " " + lead.model}
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            {
              <img
                style={{ width: "100%" }}
                alt="example"
                src={
                  lead.photo
                    ? lead.photo
                    : "http://chinacars.in.ua/images/no-photos/no-photo-details-big.png"
                }
              />
            }
            <br />
            <p>{"Марка автомобиля: " + lead.brand}</p>
            <p>{"Модель автомобиля: " + lead.model}</p>
            <p>{"Тип двигателя: " + lead.engine}</p>
            <p>{"Цвет: " + lead.color}</p>
            <p>{"Коробка передач: " + lead.gearbox}</p>
            <p>{"Привод: " + lead.transmission}</p>
            <p>{"Пробег: " + lead.mileage}</p>
            <p>{"Описание от продавца: " + lead.description}</p>
            <p>{"Цена: " + lead.price + " ₽"}</p>
            <p>
              {"Номер телефона продавца: "} <b>{lead.phoneNumber}</b>
            </p>
            <p>{"Дата подачи объявления: " + lead.created_at.slice(0, 10)}</p>
          </Modal>
        </div>
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
