import Buttons from "./Buttons";
import Display from "./Display";
import style from './Container.module.css';

const Container = () => {
    return(
        <div className={style.calculator}>
            <Display/>
            <Buttons/>
        </div>
    )
}

export default Container;