import React from 'react';
import styles from './Statistics.module.css'
import StatisticsItem from '../StatisticsItem/StatisticsItem.js'
import PropTypes from "prop-types"

const Statistics = ({ title, statisticalData }) => {
  return (
    <section className={styles.statistics} >
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.stat_list}>
        {statisticalData.map(element => <StatisticsItem key={element.id} {...element} />)}
      </ul>
    </section >
  );
};

export default Statistics;

Statistics.defaultProps = {
  title: ''
}

Statistics.propTypes = {
  title: PropTypes.string,
  statisticalData: PropTypes.array

}