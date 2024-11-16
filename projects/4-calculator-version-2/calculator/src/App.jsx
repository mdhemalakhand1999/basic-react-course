import Buttons from "./components/Button";
import Display from "./components/Display";
import Container from "./components/Container"
import './App.css';
import { useState } from "react";

function App() {
  const [displayText, setDisplayText] = useState("");

  const insertCalcDigit = (numberText) => {
    if( numberText === 'C' ) {
      setDisplayText('');
    } else if( numberText === '=' ) {
      setDisplayText(eval(displayText));
    } else {
      const newNumber = displayText + numberText;
      setDisplayText(newNumber);
    }
  }
  return(
    <>
    <Container>
      <Display displayText={displayText}/>
      <Buttons onClick={insertCalcDigit}/>
    </Container>
    </>
  )
}

export default App
