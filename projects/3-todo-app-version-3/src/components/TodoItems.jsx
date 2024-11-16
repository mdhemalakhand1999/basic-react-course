import TodoItemSingle from "./TodoItemSingle";

// eslint-disable-next-line react/prop-types
const TodoItems = ({items, onDelete}) => {
    return(
        <div className="todo-items">
            {
                // eslint-disable-next-line react/prop-types
                items && items.map((item, index) => <TodoItemSingle onDelete={onDelete} key={index} name={item.name} date={item.date} />)
            }
        </div>
    )
}

export default TodoItems