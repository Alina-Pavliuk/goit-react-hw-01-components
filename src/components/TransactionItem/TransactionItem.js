import React from 'react';
import styles from './TransactionItem.module.css'
import PropTypes from "prop-types"

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr className={styles.transaction_tr}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

export default TransactionItem;

TransactionItem.propType = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired
}