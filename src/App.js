import React from 'react';
import Profile from './components/Profile/Profile.js'
import user from './data/user.json'

import Statistics from './components/Statistics/Statistics.js'
import statisticalData from './data/statistical-data.json'

import TransactionHistory from './components/TransactionHistory/TransactionHistory.js';
import transactionData from './data/transactions.json';

import FriendList from './components/FriendList/FriendList.js';
import friends from './data/friends.json'

export default function App() {
  return (
    <>
      <Profile {...user} />
      <Statistics statisticalData={statisticalData} title={"Upload stats"} />
      <TransactionHistory transactions={transactionData} />
      <FriendList friends={friends} />
    </>
  );
}