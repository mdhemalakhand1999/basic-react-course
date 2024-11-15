import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItems from "./components/TodoItems";
import './App.css';
// import TodoItems from "./components/TodoItems";

function App() {
  const items = [
    {
      name: 'Buy Milk',
      date: '4/10/2023'
    },
    {
      name: 'Go to college',
      date: '4/10/2023'
    },
    {
      name: 'Nike n2 pro',
      date: '4/11/2023'
    }
  ]
  
  return(
    <div className="todo-project-root">
      <div className="container">
        <AppName/>
        <AddTodo/>
        <TodoItems items={items} />
      </div>
    </div>
  )  
}

export default App
