import Button from "./Button"
import style from "./Buttons.module.css"


const Buttons = () => {
    return(
        <>
            <div className={style['calculator-btn-group']}>
                <Button />
            </div>
        </>
    )
}
export default Buttons