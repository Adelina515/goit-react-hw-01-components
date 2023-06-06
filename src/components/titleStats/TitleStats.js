import style from 'components/titleStats/TitleStats.module.css'

const TitleStats = ({ title }) => {
    return (
        title && <h2 className={style.title}>{title}</h2>
        
    )
}
export default TitleStats;