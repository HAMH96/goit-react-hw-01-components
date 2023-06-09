function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Stat = ({ id, label, percentage }) => {
  return (
    <li
      className="stat-item"
      key={id}
      style={{ backgroundColor: getRandomHexColor() }}
    >
      <span className="stat-label">{label}</span>
      <span className="stat-percentage">{percentage}%</span>
    </li>
  );
};

export default Stat;
