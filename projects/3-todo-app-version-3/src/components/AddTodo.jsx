import { useRef } from 'react';
import style from './AddTodo.module.css';
import { IoAdd } from "react-icons/io5";


// eslint-disable-next-line react/prop-types
const AddTodo = ({insertItem}) => {
  const todoName = useRef('');
  const dueDate = useRef('');
  const handleItem = (event) => {
    event.preventDefault();
    const name = todoName.current.value;
    const date = dueDate.current.value;
    insertItem(name, date);
    todoName.current.value = '';
    todoName.current.value = '';
  }

  return(
      <form onSubmit={handleItem}  className={`row ${style['kg-row']} kg-row`}>
        <div className="col-6">
          <input ref={todoName} type="text" name="" placeholder="Enter todo here" id="" />
        </div>
        <div className="col-4">
          <input ref={dueDate} type="date" name="" id="" />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-btn"><IoAdd/></button>
        </div>
      </form>
  )
}
export default AddTodo;