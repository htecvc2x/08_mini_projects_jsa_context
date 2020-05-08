import React, { Component } from "react";
import "./Item.css";

class Item extends Component {
  render() {
    const { item , onItemRemoved,
        onItemToggled} = this.props;
    return (
      <li className="item-box">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={item.packed}
            onChange={(e) => {onItemToggled(item.id)}}
            id={item.id}
          />
          <label className="form-check-label" htmlFor={item.id}>
            {" "}
            {item.value}
          </label>
        </div>
        <button className="btn btn-secondary btn-sm" onClick={(e) => {onItemRemoved(item.id)}}>
          Remove
        </button>
      </li>
    );
  }
}

export default Item;
