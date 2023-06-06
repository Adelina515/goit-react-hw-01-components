import style from 'components/username/Username.module.css';

const Username = ({ username }) => {
    return (
      <p className={style.name}> {username} </p>
    )
}
export default Username;