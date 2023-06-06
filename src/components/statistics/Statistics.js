import style from 'components/statistics/Statistics.module.css'
import PropTypes from 'prop-types';
import ItemStats from 'components/itemStats/ItemStats';
import TitleStats from 'components/titleStats/TitleStats';

const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      <TitleStats title />

  <ul className={style.statList}>
      {stats.map((stat) => {
          return (
              <ItemStats key={stat.id} {...stat} />
          )
      })
      }
  </ul>
</section>
  )
}

Statistics.propTypes = {
    title: PropTypes.string,
   stats: PropTypes.arrayOf(
     PropTypes.shape({
       id: PropTypes.string.isRequired,
       label: PropTypes.string.isRequired,
       percentage: PropTypes.number.isRequired,
    })
    ).isRequired,
}


export default Statistics;



