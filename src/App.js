import React, { Component } from "react";
import NewItem from "./components/NewItem";
import ListItems from "./components/ListItems";
import { defaultState } from "./data";
import { generate as id } from "shortid";

class App extends Component {
    state = {
        items : defaultState,
    };

    createItem(value) {
        return {
            value: value,
            id: id(),
            packed: false
        };
    }

    addItem = (v) => {
        this.setState(({items}) => {
            return {
                items: [
                    ...items,
                    this.createItem(v) 
                ]
            }
        });
    }

    removeItem = (id) => {
        this.setState(({items}) => {
            const index = items.findIndex((e) => e.id == id);
            return {
                items: [
                    ...items.slice(0, index),
                    ...items.slice(index + 1)
                ]
            }
        });
    }

    markAllAsUnpacked = () => {
        const {items} = this.state;
        this.setState(({items}) => {
            return {
                items: 
                    items.map((item) => {
                        item.packed = false;
                        return item;
                    })
            }
        });
    }

    toggleItem = (id) => {
        this.setState(({items}) => {
            const index = items.findIndex((e) => e.id == id);
            items[index].packed = !items[index].packed;
            return items;
        });
    }

  render() {
      const {items} = this.state;
    return (
      <div className="container py-3">
        <NewItem onNewItemAdded={this.addItem} />
        <div className="row">
          <div className="col-md-5">
            <ListItems title="Unpacked Items" items={items} packed={false} onItemRemoved={this.removeItem} onItemToggled={this.toggleItem} />
          </div>
          <div className="offset-md-2 col-md-5">
            <ListItems title="Packed Items" items={items} packed={true} onItemRemoved={this.removeItem} onItemToggled={this.toggleItem} />
            <button className="btn btn-danger btn-lg btn-block" onClick={this.markAllAsUnpacked}>
              Mark All As Unpacked
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
