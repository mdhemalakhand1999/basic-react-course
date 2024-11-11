import './App.css'
import FoodItems from './components/FoodItems'

function App() {
  let foodItems = ['Sabzi', 'Green Vagitables', 'Roti', 'Salad', 'Milk']

  return (
    <>
      <div className="container">
        <h1>Healthy Food</h1>
        <FoodItems items={foodItems} />
      </div>
    </>
  )
}

export default App
