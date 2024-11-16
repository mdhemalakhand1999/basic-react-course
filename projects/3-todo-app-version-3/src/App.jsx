import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItems from "./components/TodoItems";
import './App.css';
import { TodoItemContextReducer } from "./store/todo-item-context";


function App() {
  
  return(
    <TodoItemContextReducer>
    <div className="todo-project-root">
      <div className="container">
        <AppName />
        <AddTodo />
        <TodoItems />
      </div>
    </div>
    </TodoItemContextReducer>
  )  
}

export default App
