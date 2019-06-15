import React from "react";

const TableItem = props => {
  return (
    <React.Fragment>
      <tr>
        <th scope="row">{props.index + 1}</th>
        <td>{props.item.partNumber}</td>
        <td>{props.item.description}</td>
        <td>{props.item.quantity}</td>
        <td>{props.item.unitPrice}</td>
        <td>{props.item.extendedPrice}</td>
      </tr>
    </React.Fragment>
  );
};

export default TableItem;
