import './app.css'
import BDTime from './components/BDTime'
import ClockHeading from './components/ClockHeading'
import ClockSlogan from './components/ClockSlogan'

export function App() {

  return (
    <>
      <div className="container">
        <ClockHeading/>
        <ClockSlogan/>
        <BDTime/>
      </div>
    </>
  )
}
