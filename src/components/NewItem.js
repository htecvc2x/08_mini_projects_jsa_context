import React, { Component } from "react";
import { generate as id } from "shortid";

class NewItem extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
      const value = event.target.value;
      this.setState(state => {
          return {
              value : value
          }
      });
    //
  };

  handleSubmit = event => {
      event.preventDefault();
      const { onNewItemAdded } = this.props;
      onNewItemAdded(this.state.value);
      this.setState(state => {
          return {
              value : ''
          }
      });
  };

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-md-10">
            <input className="form-control mb-3" type="text" value={value} onChange={this.handleChange} />
          </div>
          <div className="col-md-2">
            <input className="btn btn-success" type="submit" value="Add item" />
          </div>
        </div>
      </form>
    );
  }
}

export default NewItem;
