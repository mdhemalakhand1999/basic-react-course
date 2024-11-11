const TodoItem2 = () => {
    const name = "Go to college";
    const date = "4/10/2023";
    return(
        <div className="row kg-row">
          <div className="col-6">
            {name}
          </div>
          <div className="col-4">
            {date}
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-danger kg-btn">Delete</button>
          </div>
        </div>
    )
}
export default TodoItem2