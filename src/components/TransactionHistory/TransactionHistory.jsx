import React from "react";
import PropTypes from "prop-types";

export default function TransactionHistory ({ items }) {
    return (
<table className="transaction-history">
  <thead >
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody >
  {items.map((items) => (
    <tr key={items.id}>
      <td>{items.type}</td>
      <td>{items.amount}</td>
      <td>{items.currency}</td>
    </tr>
  ))}
  </tbody>
</table>    
        );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
        }),
      ),
  };