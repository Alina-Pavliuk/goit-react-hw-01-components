import React from 'react';
import styles from './FriendItem.module.css'
import PropTypes from 'prop-types';

const FriendItem = ({ avatar, name, isOnline }) => {
  const status = `${styles.status} ${isOnline ? styles.onlineTrue : styles.onlineFalse}`
  return (
    <li className={styles.friendItem}>
      <span className={status}></span>
      <img className={styles.avatarFriend} src={avatar} alt="" width="48" />
      <p className={styles.nameFriend}>{name}</p>
    </li>
  );
};

export default FriendItem;

FriendItem.defaultProps = {
  avatar: "https://ncme-astana.kz/wp-content/uploads/muzh.jpg"
}

FriendItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
}