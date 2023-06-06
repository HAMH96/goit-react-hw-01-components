import './friendList.css';
import PropTypes from 'prop-types';
import Friend from './Friend';

export const FriendList = ({ friends }) => {
    return (
        <section>
            <ul className="friend-list">
                {friends.map(Friend)}
            </ul>
        </section>
    );    
};

FriendList.propTypes = {
    d: PropTypes.shape(
        {
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number,
        }
    )
};

export default FriendList;
