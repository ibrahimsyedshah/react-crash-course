import "./App.css";
import Todo from "./components/Todo";
import Title from "./components/Title";
import Modal from "./components/Modal";
import React, {useState, useEffect} from 'react';
import Counter from "./components/Counter";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }}/>
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo onTodoDelete={onTodoDelete} title="Finish FES" />
        <Todo onTodoDelete={onTodoDelete} title="Finish Interview Section" />
        <Todo onTodoDelete={onTodoDelete} title="Land $100k job" />
      </div>
      {showModal && <Modal text="Are you sure?" onModalClick={onModalClick}/>}
    </div>
  );
}

export default App;
