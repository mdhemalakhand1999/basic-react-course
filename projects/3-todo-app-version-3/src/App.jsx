import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import TodoItems from "./components/TodoItems";
import './App.css';
import { useState } from "react";

function App() {
  const initialTodoItems = [
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

  const [items, setItems] = useState(initialTodoItems);
  
  const insertItem = (name, date) => {
    setItems((currItems) => {
      const newItem = [
        ...currItems,
        {
          name, date
        }
      ]
      return newItem; 
    });
  }

  const handleDeleteItem = (name) => {
    console.log(name);
    
    const newItems = items.filter(item => item.name !== name);
    setItems(newItems);
  }
  
  return(
    <div className="todo-project-root">
      <div className="container">
        <AppName/>
        <AddTodo insertItem={insertItem}/>
        <TodoItems onDelete={handleDeleteItem} items={items} />
      </div>
    </div>
  )  
}

export default App
