import style from './items.module.css';
// eslint-disable-next-line react/prop-types
const Item = ( {foodName} ) => {
    return(
        <>
        {foodName && <li className={`${style['kg-item']} list-group-item`}>{foodName}</li>}
        </>
    )
}

export default Item;