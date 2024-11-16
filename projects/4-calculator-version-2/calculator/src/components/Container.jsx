
import style from './Container.module.css';

const Container = ({children}) => {
    return(
        <div className={style.calculator}>
            {children}
        </div>
    )
}

export default Container;