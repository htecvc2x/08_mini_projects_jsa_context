import React, { Component } from "react";
import Item from "./Item";
import Filter from "./Filter";

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
    const { title, items, packed, 
        onItemRemoved, onItemToggled} = this.props;
    const {searchTerm} = this.state;
    const elements = items
          .filter((item) => item.packed == packed)
          .filter((item) => {
              return item.value.toLowerCase().indexOf(searchTerm.toLowerCase()) + 1
          })
          .map((item) => {
    return (
        <Item item={item}
            key={item.id}
            onItemRemoved={onItemRemoved}
            onItemToggled={onItemToggled}/>
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

export default ListItems;
