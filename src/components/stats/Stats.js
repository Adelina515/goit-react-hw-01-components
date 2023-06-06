import style from 'components/stats/Stats.module.css';
import PropTypes from 'prop-types';

const Stats = ({ stats }) => {
   const { followers, views, likes } = stats;
    return (
    <ul className={style.stats}>
        <li className={style.inform}>
        <span className={style.label}>Followers</span>
        <span className={style.quantity}> {followers} </span>
        </li>
        <li className={style.inform}>
        <span className={style.label}>Views</span>
        <span className={style.quantity}> {views} </span>
        </li>
        <li className={style.inform}>
        <span className={style.label}>Likes</span>
        <span className={style.quantity}> {likes} </span>
        </li>
    </ul>
    )
}
Stats.propTypes = {
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
}


export default Stats;