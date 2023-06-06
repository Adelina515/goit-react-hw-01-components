import style from 'components/tag/Tag.module.css';
const Tag = ({ tag }) => {
    return (
        <p className={style.tag}> {tag} </p>
    )
}
export default Tag;