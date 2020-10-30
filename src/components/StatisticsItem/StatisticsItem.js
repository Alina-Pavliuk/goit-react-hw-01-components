import React from 'react';
import styles from './StatisticsItem.module.css';
import PropTypes from 'prop-types';

const createColor = () => {
  let num1 = Math.floor(Math.random() * 255);
  let num2 = Math.floor(Math.random() * 255);
  let num3 = Math.floor(Math.random() * 255);
  return `rgb(${num1}, ${num2}, ${num3})`
}; //хорошая практика - эту ф-ю вынести в отдельный файл helpers. Но в донном случае она используется только здесь.

const StatisticsItem = ({ label, percentage }) => {
  return (
    <li style={{ backgroundColor: createColor() }} className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatisticsItem;

StatisticsItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number.isRequired
}