import style from 'components/friendList/FriendList.module.css';
import FriendListItem from './friendListItem/FriendListItem';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
    return (
        <ul className={style.friendList}>
            {friends.map((friend) => {
                return( <FriendListItem  key={friend.id} {...friend} />)
            })}
           
     </ul>
    )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;

