import React, { Component } from "react";
import Item from "./Item";
import Filter from "./Filter";

import {AppContext} from '../AppContext'

class ListItems extends Component {
  state = {
      searchTerm : ''
  };

  updateFilter = (searchTerm) => {
      const value = searchTerm.target.value;
      this.setState(state => {
          return {
              searchTerm: value
          }
      });
  };

  render() {
    const { items } = this.context;
    const { title, packed} = this.props;
    const {searchTerm} = this.state;
    const elements = items
          .filter((item) => item.packed == packed)
          .filter((item) => {
              return item.value.toLowerCase().indexOf(searchTerm.toLowerCase()) + 1
          })
          .map((item) => {
    return (
        <Item item={item} key={item.id} />
    )
    });
    return (
      <section>
        <h3 className="mb-3">{title}</h3>
        <Filter filter={searchTerm} onChange={this.updateFilter} />
        <ul className="mb-3 p-0">
            {elements}
        </ul>
      </section>
    );
  }
}

ListItems.contextType = AppContext;

export default ListItems;
