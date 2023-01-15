import './App.css';
import Header from './components/Header'
import ToDoApp from './components/ToDoApp';
import taskContext from './context/Tasks';
import { useState } from 'react';

function App() {
  const [tasksList, setTasksList] = useState([]);
  return (
    // <taskContext.Provider value={
      
    //     tasksList
    //     // setTasksList: setTasksList
      
    // }>
    <div className="App">
      <Header />
      <ToDoApp />
    </div>
    // </taskContext.Provider>
  );
}

export default App;
