import style from './Input.module.css';
const Input = ({inputTrigger}) => {
    return(
        <input onKeyDown={inputTrigger} type="search" className={style.search} placeholder="Enter food here..." />
    )
}

export default Input;