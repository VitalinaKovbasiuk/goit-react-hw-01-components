import React from "react";
import PropTypes from "prop-types";
import {
  TransactionHistoryTable,
  TableThead,
  TableBody,
  TableTitle,
  TableRow,
  TableCell,
  TableCellType,
} from './TransactionHistory.styled';

export default function TransactionHistory ({ items }) {
    return (
<TransactionHistoryTable>
  <TableThead >
    <tr>
      <TableTitle>Type</TableTitle>
      <TableTitle>Amount</TableTitle>
      <TableTitle>Currency</TableTitle>
    </tr>
  </TableThead>

  <TableBody >
  {items.map((items) => (
    <TableRow key={items.id}>
      <TableCellType>{items.type}</TableCellType>
      <TableCell>{items.amount}</TableCell>
      <TableCell>{items.currency}</TableCell>
    </TableRow>
  ))}
  </TableBody>
</TransactionHistoryTable>    
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