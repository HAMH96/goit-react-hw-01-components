export const Stat = ({ id, label, percentage }) => {
  return (
    <li className="item" key={id}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
};

export default Stat;
