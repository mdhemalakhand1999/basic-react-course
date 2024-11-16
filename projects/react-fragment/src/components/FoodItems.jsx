import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import Item from "./Item";

// eslint-disable-next-line react/prop-types
const FoodItems = ({ items }) => {
    let [activeFoods, setActiveFoods] = useState([]);

    const insertIntoActive = (item, event) => {
        const newFood = [...activeFoods, item];
        setActiveFoods(newFood);
    };

    return (
        <>
            <ErrorMessage items={items} />
            {items && (
                <ul className="list-group">
                    {items.map((item, index) => (
                        <Item 
                            isFoodActive={activeFoods.includes(item)} 
                            insertIntoActive={(event) => insertIntoActive(item, event)} 
                            key={index} 
                            foodName={item} 
                        />
                    ))}
                </ul>
            )}
        </>
    );
};

export default FoodItems;
