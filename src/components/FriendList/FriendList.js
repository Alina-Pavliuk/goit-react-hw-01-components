import React from 'react';
import styles from './FriendList.module.css'
import FriendItem from '../FriendItem/FriendItem';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map((friend) => <FriendItem key={friend.id} {...friend} />)}
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.array
}