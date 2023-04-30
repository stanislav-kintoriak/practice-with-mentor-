import PropTypes from 'prop-types';
import styles from '../Statistics/Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section class={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul class={styles.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={styles.item}
            style={{ backgroundColor: 'yellow' }}
            key={id}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
