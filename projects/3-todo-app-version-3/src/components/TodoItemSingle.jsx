import { useContext } from 'react';
import style from './TodoItemSingle.module.css';
import { MdDeleteOutline } from "react-icons/md";
import { TodoItemContext } from '../store/todo-item-context';

// eslint-disable-next-line react/prop-types
const TodoItemSingle = ({name, date}) => {
  const {handleDeleteItem} = useContext(TodoItemContext)
    return(
        <div className={`row ${style['kg-row']}  kg-row`}>
          <div className="col-6">
            {name}
          </div>
          <div className="col-4">
            {date}
          </div>
          <div className="col-2">
            <button type="button" className={`btn btn-danger ${style['kg-btn']}`} onClick={() => handleDeleteItem(name)}><MdDeleteOutline /></button>
          </div>
        </div>
    )
}

export default TodoItemSingle