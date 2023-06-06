import PropTypes from 'prop-types';
import style from 'components/friendList/friendListItem/FriendListItem.module.css'

const FriendListItem = ({avatar, name, isOnline, }) => {
    return (
        <li className={style.item}>
            {isOnline ? <span className={style.status} style={{ backgroundColor: 'green'}}>{isOnline}</span> : <span className={style.status} style={{ backgroundColor: 'red'}}>{isOnline}</span>}
            
            <img className={style.avatar} src={avatar} alt={name} width="48" />
            <p className={style.name}>{name}</p>
        </li>
    )
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;