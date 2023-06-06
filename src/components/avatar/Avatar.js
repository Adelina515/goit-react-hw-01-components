import style from 'components/avatar/Avatar.module.css'
const Avatar = ({avatar, username}) => {
    return (
    <img
        src={avatar} 
        alt={username}
            className={style.avatar}
            width="120"
        />
    )
}
export default Avatar;