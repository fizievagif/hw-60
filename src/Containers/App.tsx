import React from 'react';
import './App.css';
import FormChat from "../Components/FormChat/FormChat";
import MessageChat from "../Components/MessageChat/MessageChat";

// const url = 'http://146.185.154.90:8000/messages';

function App() {
  return (
    <div className="App">
      <FormChat onSubmit={() => console.log('vagif')}/>
      <MessageChat/>
    </div>
  );
}

export default App;
