import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLead } from "../../actions/leads";

export class Form extends Component {
  state = {
    city: "",
    phoneNumber: "",
    brand: "",
    model: "",
    photo: "",
    color: "",
    mileage: "",
    engine: "",
    transmission: "",
    gearbox: "",
    dateOfManufacture: "",
    description: "",
    price: ""
  };

  static propTypes = {
    addLead: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {};
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
      photo,
      color,
      mileage,
      engine,
      transmission,
      gearbox,
      dateOfManufacture,
      description,
      price
    } = this.state;
    const lead = {
      city,
      phoneNumber,
      brand,
      model,
      photo,
      color,
      mileage,
      engine,
      transmission,
      gearbox,
      dateOfManufacture,
      description,
      price
    };
    this.props.addLead(lead);
    console.log(lead);
  };

  render() {
    const {
      city,
      phoneNumber,
      brand,
      model,
      photo,
      color,
      mileage,
      engine,
      transmission,
      gearbox,
      dateOfManufacture,
      description,
      price
    } = this.state;
    return (
      <div className="card card-body mt-4 mb-4 w-75 mx-auto">
        <h2>Добавить записку</h2>
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
            <label>Фото</label>
            <input
              className="form-control"
              type="text"
              name="photo"
              onChange={this.onChange}
              value={photo}
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
            <label>Двигатель</label>
            <input
              className="form-control"
              type="text"
              name="engine"
              onChange={this.onChange}
              value={engine}
            />
          </div>

          <div className="form-group">
            <label>Трансмиссия</label>
            <input
              className="form-control"
              type="text"
              name="transmission"
              onChange={this.onChange}
              value={transmission}
            />
          </div>

          <div className="form-group">
            <label>Коробка передач</label>
            <input
              className="form-control"
              type="text"
              name="gearbox"
              onChange={this.onChange}
              value={gearbox}
            />
          </div>

          <div className="form-group">
            <label>Дата изготовления</label>
            <input
              className="form-control"
              type="text"
              name="dateOfManufacture"
              onChange={this.onChange}
              value={dateOfManufacture}
            />
          </div>

          <div className="form-group">
            <label>Описание</label>
            <input
              className="form-control"
              type="text"
              name="description"
              onChange={this.onChange}
              value={description}
            />
          </div>

          <div className="form-group">
            <label>Цена</label>
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
  { addLead }
)(Form);
