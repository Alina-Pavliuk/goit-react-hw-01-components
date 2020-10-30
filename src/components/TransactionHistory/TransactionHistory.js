import React from 'react';
import styles from './TransactionHistory.module.css';
import TransactionItem from '../TransactionItem/TransactionItem';

const TransactionHistory = ({ transactions }) => {

  return (
    <table className={styles.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className="transaction-body">
        {transactions.map(transaction => <TransactionItem key={transaction.id} {...transaction} />)}
      </tbody>
    </table>
  );
};

export default TransactionHistory;