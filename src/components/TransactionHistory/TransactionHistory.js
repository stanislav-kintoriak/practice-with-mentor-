import PropTypes from 'prop-types';
import styles from '../TransactionHistory/TransactionHistory.module.css';

export const TransactionHistory = ({transactions}) => {
return (
<table class={styles.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
  {transactions.map(({id,type,amount,currency}) => (
    <tr>
    <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  ))}   
  </tbody>
</table>
)
}

TransactionHistory.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  };