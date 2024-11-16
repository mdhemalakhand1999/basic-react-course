import { useContext } from "react";
import TodoItemSingle from "./TodoItemSingle";
import { TodoItemContext } from "../store/todo-item-context";

// eslint-disable-next-line react/prop-types
const TodoItems = () => {
    const {items} = useContext(TodoItemContext);
    return(
        <div className="todo-items">
            {
                // eslint-disable-next-line react/prop-types
                items && items.map((item, index) => <TodoItemSingle key={index} name={item.name} date={item.date} />)
            }
        </div>
    )
}

export default TodoItems