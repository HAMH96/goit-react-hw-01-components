export const Transaction = ({ id,type,amount,currency }) => {
  return (
    <tr className="transaction-row" key={id}>
      <td className="transaction-row-td">{type}</td>
      <td className="transaction-row-td">{amount}</td>
      <td className="transaction-row-td">{currency}</td>
    </tr>
  );
};

export default Transaction;
