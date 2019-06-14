import React, { Component } from "react";

export class Searcher extends Component {
  render() {
    return (
      <div>
        <div className="searchbar form-group">
          <input
            value={this.props.text}
            onChange={this.props.search}
            type="text"
            className="form-control"
            placeholder="Поиск по марке..."
          />
        </div>
      </div>
    );
  }
}

export default Searcher;
