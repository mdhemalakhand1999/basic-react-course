import style from './TodoItemSingle.module.css';
import { MdDeleteOutline } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const TodoItemSingle = ({name, date, onDelete}) => {
    return(
        <div className={`row ${style['kg-row']}  kg-row`}>
          <div className="col-6">
            {name}
          </div>
          <div className="col-4">
            {date}
          </div>
          <div className="col-2">
            <button type="button" className={`btn btn-danger ${style['kg-btn']}`} onClick={() => onDelete(name)}><MdDeleteOutline /></button>
          </div>
        </div>
    )
}

export default TodoItemSingle