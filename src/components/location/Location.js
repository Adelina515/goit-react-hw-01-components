import style from 'components/location/Location.module.css'

const Location = ({ location }) => {
    return (
        <p className={style.location}> {location} </p>
    )
}
export default Location;