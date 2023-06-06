import PropTypes from 'prop-types';
import Avatar from 'components/avatar/Avatar';
import Username from 'components/username/Username';
import Tag from 'components/tag/Tag';
import Location from 'components/location/Location';
import Stats from 'components/stats/Stats';
import style from 'components/profile/Profile.module.css'

const Profile = ({username, tag, location, avatar, stats }) => {
    return (
        <div className={style.profile}>
            <div className={style.description}>
                <Avatar avatar={avatar}
                        username={username} />
                <Username username={username} />
                <Tag tag={tag} />
                <Location location={location} />
    </div>
      <Stats stats={stats} />
    </div>
    )
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
  }),
};


export default Profile;



