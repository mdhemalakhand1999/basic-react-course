import style from './items.module.css';

// eslint-disable-next-line react/prop-types
const Item = ({ foodName, isFoodActive, insertIntoActive }) => {
    return (
        <>
            {foodName && (
                <li className={`${style['kg-item']} list-group-item  ${isFoodActive && 'active'}`}>
                    <span>{foodName}</span>
                    <button onClick={insertIntoActive} className={`btn btn-success`}>Buy</button>
                </li>
            )}
        </>
    );
};

export default Item;
