import PropTypes from 'prop-types';
import style from 'components/itemStats/ItemStats.module.css';
import getRandom from 'components/randomColor/randomColor'

const ItemStats = ({ id, label, percentage }) => {
    const randomColor = getRandom();
    return (
        
        <li className={style.item} style={{backgroundColor: randomColor}}>
            <span className={style.label}>{label}</span>
            <span className={style.percentage}>{percentage}%</span>
    </li>
    )
}
ItemStats.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

  
export default ItemStats;