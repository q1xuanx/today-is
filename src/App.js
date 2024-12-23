import './App.css';
import {useState} from 'react'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Count/>
      </header>
    </div>
  );
}
function Count(){
  const [currentStep, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const stepMinusEvent = (() => {
    setStep((currentStep) => Math.max(1, currentStep - 1));
  });
  const stepPlusEvent = (() => {
    setStep((currentStep) => currentStep + 1);
  });
  const countPlusEvent = (() => {
    setCount((prevCount) => prevCount + currentStep);
  });
  const countMinusEvent = (() => {
    setCount((prevCount) => prevCount - currentStep);
  });
  const dateCurrent = (() => {
    let currentDate = new Date(); 
    currentDate.setDate(currentDate.getDate() + count); 
    return currentDate.toDateString();
  });
  return <><div>
    <div>
      <button onClick={stepMinusEvent}>-</button> Step: {currentStep} <button onClick={stepPlusEvent}>+</button>
    </div>
    <div>
      <button onClick={countMinusEvent}>-</button> Count: {count} <button onClick={countPlusEvent}>+</button>
    </div>
    <div>
        {count === 0 ? 
          (<h2>Today is {dateCurrent()}</h2>) : 
          ( <h2>{count} days from today is {dateCurrent()}</h2>)
        }
    </div>
  </div></>
}
export default App;
