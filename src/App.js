import React from 'react'
import './App.css';
import {
  Header,
  ToDoApp,
  Footer
} from './components';

const App = () => {
  return (
    <div className="App">
      <Header />
      <ToDoApp />
      <Footer />
    </div>
  );
}

export default App;
