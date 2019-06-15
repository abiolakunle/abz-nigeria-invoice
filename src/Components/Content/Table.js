import React, { Component } from "react";

import TableItem from "./TableItem";
import { Consumer } from "../../Context";

class Table extends Component {
  state = {
    partNumber: "",
    description: "",
    quantity: 0,
    unitPrice: 0,
    extendedPrice: 0,
    newItem: {},
    items: [],
    total: 0
  };

  render() {
    return (
      <Consumer>
        {contextValue => {
          const { contextState } = contextValue;
          return (
            <React.Fragment>
              <table className="table table-striped">
                {this.renderTableHead()}
                <tbody>
                  {this.state.items.map((item, index) => {
                    return <TableItem key={index} index={index} item={item} />;
                  })}
                  <tr>
                    <td colSpan="100%">{this.renderForm(contextState)}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td className="bg-secondary text-white">
                      <strong>{this.state.total}</strong>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }

  onSubmit = (value, event) => {
    event.preventDefault();

    //const newItemCopy = Object.assign({}, this.state.newItem);

    this.setState(
      Object.assign(this.state.newItem, {
        partNumber: this.state.partNumber,
        description: this.state.description,
        quantity: this.state.quantity,
        unitPrice: this.state.unitPrice,
        extendedPrice: this.state.quantity * this.state.unitPrice
      })
    );
    console.log(this.state.newItem);
    this.addItem(value);
  };

  addItem = contextState => {
    let tempItems = [...this.state.items];
    tempItems.push({ ...this.state.newItem });
    console.log("newctc addcontact", this.state.newItem);
    console.log("newctclist", tempItems);

    this.setState(
      { items: tempItems, total: this.calculateTotal(tempItems) },
      () => {
        console.log(this.state.items);
      }
    );

    const itemsAndTotal = Object.assign(
      {},
      {
        items: this.state.items,
        total: this.calculateTotal(tempItems)
      }
    );

    contextState.dispatch({
      type: "TABLE_DATA",
      payload: itemsAndTotal
    });
  };

  calculateTotal = itemsIn => {
    var total = 0;
    console.table(itemsIn);
    itemsIn.forEach(item => {
      console.log("Item", item.extendedPrice);
      total = total + item.extendedPrice;
    });

    this.setState({
      total: total
    });
    return total;
  };

  onFormChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  renderForm(contextState) {
    return (
      <form onSubmit={this.onSubmit.bind(this, contextState)}>
        <div className="form-row align-items-center">
          <div className="col-auto">
            <input
              name="partNumber"
              value={this.state.partNumber}
              type="text"
              className="form-control mb-2"
              placeholder="Part number"
              onChange={this.onFormChange}
            />
          </div>
          <div className="col-auto">
            <input
              name="description"
              value={this.state.description}
              type="text"
              className="form-control mb-2"
              placeholder="Description"
              onChange={this.onFormChange}
            />
          </div>

          <div className="col-auto">
            <input
              name="quantity"
              value={this.state.quantity}
              type="number"
              className="form-control mb-2"
              placeholder="Quantity"
              step="1"
              onChange={this.onFormChange}
            />
          </div>

          <div className="col-auto">
            <input
              name="unitPrice"
              value={this.state.unitPrice}
              type="number"
              className="form-control mb-2"
              placeholder="Unit price"
              onChange={this.onFormChange}
            />
          </div>
          <div className="col-auto">
            <input
              name="extendedPrice"
              value={this.state.unitPrice * this.state.quantity}
              type="number"
              className="form-control mb-2"
              placeholder="Extended price"
              readOnly
            />
          </div>

          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-2">
              Add
            </button>
          </div>
        </div>
      </form>
    );
  }

  renderTableHead() {
    return (
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Part Number</th>
          <th scope="col">Description</th>
          <th scope="col">Quantity</th>
          <th scope="col">Unit Price</th>
          <th scope="col">Extended Price</th>
        </tr>
      </thead>
    );
  }
}

export default Table;
