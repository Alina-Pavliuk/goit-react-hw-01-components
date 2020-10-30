import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProfileItem.module.css'

const ProfileItem = (props) => {
  const { stat: [key, value] } = props;

  return (
    <li className={styles.statsItem}>
      <span className={styles.statsItem_label}>{key}</span>
      <span className={styles.quantity}>{value}</span>
    </li>
  );
};

export default ProfileItem;

ProfileItem.propTypes = {
  stat: PropTypes.array.isRequired,

}