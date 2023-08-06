import { useState } from "react";

function Counter() {
  const [arr, setArr] = useState([])

  function addPlus() {
    setArr((prevArr) => [...prevArr, "+"])
  }
  
  function addMinus() {
    setArr((prevArr) => [...prevArr, "-"])
  }
  
  return (
    <>
      <button onClick={addMinus}>-</button>
      <button onClick={addPlus}>+</button>
      {arr}
    </>
  );
}

export default Counter;
