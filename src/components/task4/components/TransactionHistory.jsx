import './transactionHistory.css';
import PropTypes from 'prop-types';
import Transaction from './Transaction';

export const TransactionHistory = ({ items }) => {
  return (
    <section>
      <table className="transaction-history">
        <thead>
          <tr className="transaction-history-head-row">
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>{items.map(Transaction)}</tbody>
      </table>
    </section>
  );
};

TransactionHistory.propTypes = {
    d: PropTypes.shape(
        {
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        }
    )
};

export default TransactionHistory;
