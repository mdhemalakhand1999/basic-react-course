import ErrorMessage from "./ErrorMessage";
import Item from "./Item";

// eslint-disable-next-line react/prop-types
const FoodItems = ({items}) => {
    return(
        <>
        <ErrorMessage items={items}/>
        {
            items &&
            <ul className="list-group">
                {
                    // eslint-disable-next-line react/prop-types
                    items.map((food, index) => <Item key={index} foodName={food} />)
                }
            </ul>
        }
        </>
    )
}

export default FoodItems;