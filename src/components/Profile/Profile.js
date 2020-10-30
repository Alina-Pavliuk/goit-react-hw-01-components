import React from 'react';
import styles from './Profile.module.css';
import ProfileItem from '../ProfileItem/ProfileItem.js'
import PropTypes from 'prop-types';

const Profile = ({ avatar, name, tag, location, stats }) => {

  return (<div className={styles.profile}>
    <div className="description">
      <img
        src={avatar}
        alt="user avatar"
        className={styles.avatar}
      />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      {Object.entries(stats).map(el => <ProfileItem key={stats[el[0]]} stat={el} />)}
    </ul>
  </div>
  );
};

export default Profile;

Profile.defaultProps = {
  avatar: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640",
  tag: '',
  location: '',
  name: 'user name'
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object
}