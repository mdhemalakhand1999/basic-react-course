import './App.css'
import Container from './components/Container'
import FoodItems from './components/FoodItems'
import Input from './components/Input'
import { useState } from 'react'


function App() {
  const [inputval, setInput] = useState('');
  const [foodItems, setFoodItems] = useState([]);

  const inputTrigger = (event) => {
      if ('Enter' === event.key) {
          const value = event.target.value.trim();
          if (value) {
              event.target.value = ''; // Clear the input field
              setFoodItems((prevItems) => [...prevItems, value]); // Use the latest input value
          }
      }
  };
  

  return (
    <>
    <Container>
      <h1>Healthy Food</h1>
      <Input inputTrigger={inputTrigger} />
      <FoodItems items={foodItems} />
    </Container>
    </>
  )
}

export default App
