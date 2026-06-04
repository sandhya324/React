import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)
  
  // let counter = 55

  const addValue = () =>{
    // console.log("clicked", {counter});
    // // counter += 1;
    // if(counter < 20){
    //   setCounter(counter + 1);
    // }
    setCounter(counter => counter +1)
     //Or
    setCounter((prevCounter) => prevCounter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
  }
  
  
  const removeValue = () => {
    console.log("clicked", {counter});
    // counter -= 1;
    if(counter>0){
      setCounter(counter - 1)
    }

  }
   
  return (
    <>
       <h1>Learning React</h1>
       <h2>Counter value: {counter}</h2>

       <button  onClick={addValue}>Add value : {counter}</button> // 0 to 20 
       <br />
       <button onClick={removeValue} >remove value : {counter}</button>
    </>
  )
}

export default App
