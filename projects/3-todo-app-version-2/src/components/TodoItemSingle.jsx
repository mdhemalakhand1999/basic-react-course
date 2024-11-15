import style from './TodoItemSingle.module.css';
const TodoItemSingle = ({name, date}) => {
    return(
        <div className={`row ${style['kg-row']}  kg-row`}>
          <div className="col-6">
            {name}
          </div>
          <div className="col-4">
            {date}
          </div>
          <div className="col-2">
            <button type="button" className={`btn btn-danger ${style['kg-btn']}`}>Delete</button>
          </div>
        </div>
    )
}

export default TodoItemSingle