import { Children, createContext, useReducer } from "react";

export const TodoItemContext = createContext({
    items: [],
    handleDeleteItem: () => {},
    insertItem: () => {}
});


export const TodoItemContextReducer = ({children}) => {
    function dispatchPureFunc(currentItem, action) {
        let newItem = currentItem;
        if( action.type === 'ADD_ITEM' ) {
            newItem = [
            ...currentItem,
            {
                name: action.payload.name, date: action.payload.date
            }
            ]
        
            return newItem;
        } else if ( action.type === 'DELETE_ITEM' ) {
            newItem = currentItem.filter(item => item.name !== action.payload.name);
        }
        
        return newItem;
    }
    const [items, dispatchItems] = useReducer(dispatchPureFunc, []);
    function insertItem(name, data) {
        const newItemAction = {
          type: 'ADD_ITEM',
          payload: {
            name, data
          }
        }
        dispatchItems(newItemAction);
    }
    const handleDeleteItem = (name) => {
        const deleteItemAction = {
            type: "DELETE_ITEM",
            payload: {
            name
            }
        }

        dispatchItems(deleteItemAction);
    }

    return (
        <TodoItemContext.Provider value={{
            items,
            handleDeleteItem,
            insertItem
          }}>
          {children}
        </TodoItemContext.Provider>
    )
}