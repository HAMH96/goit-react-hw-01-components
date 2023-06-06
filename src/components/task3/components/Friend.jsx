export const Friend = ({avatar, name, isOnline, id}) => {
  return (
    <li className="item" key={id}>
      <span
        className={isOnline ? 'status available' : 'status not-available'}
      ></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default Friend;
