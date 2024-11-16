import style from './Display.module.css';
const Display = ({displayText}) => {
    return(
        <input className={style.display} value={displayText} />
    )
}
export default Display