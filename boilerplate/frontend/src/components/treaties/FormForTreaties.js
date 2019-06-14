import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTreaty } from "../../actions/treaties";
export class FormForTreaties extends Component {
  state = {
    city: "",
    phoneNumber: "",
    brand: "",
    model: "",
    photo: "",
    color: "",
    mileage: "",
    price: ""
  };

  static propTypes = {
    addTreaty: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      engine: "Дизель"
    };
    this.fileInput = React.createRef();
  }

  //any name will match, same with value
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const {
      city,
      phoneNumber,
      brand,
      model,
      color,
      mileage,
      price
    } = this.state;
    const treaty = {
      city,
      phoneNumber,
      brand,
      model,
      color,
      mileage,
      price
    };
    this.props.addTreaty(treaty);
  };

  render() {
    const {
      city,
      phoneNumber,
      brand,
      model,
      color,
      mileage,
      price
    } = this.state;
    return (
      <div className="card card-body mt-4 mb-4 w-75 mx-auto">
        <h2>Добавить объявление о покупке</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Город</label>
            <input
              className="form-control"
              type="text"
              name="city"
              onChange={this.onChange}
              value={city}
            />
          </div>
          <div className="form-group">
            <label>Телефон</label>
            <input
              className="form-control"
              type="text"
              name="phoneNumber"
              onChange={this.onChange}
              value={phoneNumber}
            />
          </div>
          <div className="form-group">
            <label>Марка</label>
            <input
              className="form-control"
              type="text"
              name="brand"
              onChange={this.onChange}
              value={brand}
            />
          </div>
          <div className="form-group">
            <label>Модель</label>
            <input
              className="form-control"
              type="text"
              name="model"
              onChange={this.onChange}
              value={model}
            />
          </div>

          <div className="form-group">
            <label>Цвет</label>
            <input
              className="form-control"
              type="text"
              name="color"
              onChange={this.onChange}
              value={color}
            />
          </div>

          <div className="form-group">
            <label>Пробег</label>
            <input
              className="form-control"
              type="text"
              name="mileage"
              onChange={this.onChange}
              value={mileage}
            />
          </div>

          <div className="form-group">
            <label>Цена в рублях</label>
            <input
              className="form-control"
              type="text"
              name="price"
              onChange={this.onChange}
              value={price}
            />
          </div>

          <br />
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Отправить
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addTreaty }
)(FormForTreaties);
