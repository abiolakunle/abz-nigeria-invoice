import React from "react";

const TableItem = props => {
  const { partNumber, description, quantity, unitPrice } = props.item;
  return (
    <React.Fragment>
      <tr>
        <th scope="row">{props.index + 1}</th>
        <td>{partNumber}</td>
        <td>{description}</td>
        <td>{quantity}</td>
        <td>{unitPrice}</td>
        <td>{unitPrice * quantity}</td>
      </tr>
    </React.Fragment>
  );
};

export default TableItem;
