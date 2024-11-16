import style from './Button.module.css';
const Button = ({onClick}) => {
    const buttons = ['C', '1', '2', '+', '3', '4', '-', '5', '6','*', '7', '9', '/', '=', '9', '0', '.'];
    return(
        <>
        {
            buttons.map((name) => <button onClick={() => onClick(name)} className={style.btn} key={name}>{name}</button>)
        }
        </>
    )
}
export default Button