import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { getTreaties, deleteTreaty } from "../../actions/treaties";
import { Table } from "antd";

const columns = [
  {
    title: "Марка",
    dataIndex: "brand",
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.brand.indexOf(value) === 0,
    sorter: (a, b) => a.brand.length - b.brand.length,
    sortDirections: ["descend"]
  },
  {
    title: "Модель",
    dataIndex: "model",
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.model.indexOf(value) === 0,
    sorter: (a, b) => a.model.length - b.model.length,
    sortDirections: ["descend"]
  },
  {
    title: "Цвет",
    dataIndex: "color"
  },

  {
    title: "Пробег",
    dataIndex: "mileage",
    // specify the condition of filtering result
    // here is that finding the name started with `value`
  },
  {
    title: "Город",
    dataIndex: "city",
    filters: [
      {
        text: "Казань",
        value: "Казань"
      }
    ],
    filterMultiple: false,
    onFilter: (value, record) => record.city.indexOf(value) === 0,
    sorter: (a, b) => a.city.length - b.city.length,
    sortDirections: ["descend", "ascend"]
  },
  {
    title: "Цена",
    dataIndex: "price",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.price - b.price
  },

  {
    title: "Телефон",
    dataIndex: "phoneNumber"
  }
];

function onChange(pagination, filters, sorter) {
  console.log("params", pagination, filters, sorter);
}

export class Treaties extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
    this.props.getTreaties();
  }

  componentWillMount() {
    this.props.getTreaties();
  }
  componentDidMount() {
    this.setState({ data: this.props.treaties });
  }

  render() {
    return (
      <Fragment>
        <h2>Объявления о покупке</h2>

        <Table
          columns={columns}
          dataSource={this.props.treaties}
          onChange={onChange}
        />
      </Fragment>
    );
  }
}
//map that state to props of component
//state.treaties - we want treaties reducer
//.treaties - part, which we need (from another file - insides)
const mapStateToProps = state => ({
  treaties: state.treaties.treaties
});

export default connect(
  mapStateToProps,
  { getTreaties, deleteTreaty }
)(Treaties);
