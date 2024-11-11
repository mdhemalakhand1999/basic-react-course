import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItem1 from "./components/TodoItem1"
import TodoItem2 from "./components/TodoItem2"
import './App.css';

function App() {
  return(
    <div className="todo-project-root">
      <div className="container">
        <AppName/>
        <AddTodo/>
        <TodoItem1/>
        <TodoItem2/>
      </div>
    </div>
  )  
}

export default App
