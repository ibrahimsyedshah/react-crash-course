import './App.css';
import Todo from './components/Todo'
import Title from './components/Title'
import Modal from './components/Modal'

function App() {
  return (
    <div>
      <Title />
      <div className="todo__wrapper">
        <Todo 
        title="Finish FES"
        paragraph="Code along with FES step by step"
        />
        <Todo title="Finish Interview Section" 
        paragraph="Finish every interview question"
        />
        <Todo title="Land $100k job" 
        paragraph="Apply to 100 jobs"
        />
      </div>
      {/* <Modal text="Are you sure?"/> */}
    </div>
  )
}

export default App;
