import { useState } from 'react'
import './App.css'

function App() {
  // React doesn't allow you to change values in the UI.
  // You can change it internally but not show it.
  // let count = 0;

  // You have to use hooks for this purpose!
  let [count, setCount] = useState(10);

  let increaseCounter = () => {
    if (count < 20) {
      count = count + 1;
      setCount(count);
      console.log(count);
    } else {
      console.log("Limit exceeded!");
    }
  }

  let decreaseCounter = () => {
    if (count > 0) {
      count = count - 1;
      setCount(count);
      console.log(count);
    } else {
      console.log("Limit exceeded!");
    }
  }

  // Don't use Brackets in the function because it will execute it immediately, xyz() => xyz
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={increaseCounter} style={{margin: "0 10px 0 10px"}}>Increase</button>
      <button onClick={decreaseCounter} style={{margin: "0 10px 0 10px"}}>Decrease</button>
    </>
  )
}

export default App;