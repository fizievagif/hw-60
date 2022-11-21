import React from 'react';
import './App.css';
import FormChat from "../Components/FormChat/FormChat";
import MessageChat from "../Components/MessageChat/MessageChat";
import {AttractorChat} from "../types";

const url = 'http://146.185.154.90:8000/messages';

const App = () => {
  const isMessageSend = async (item: AttractorChat) => {
    try {
      const body = new URLSearchParams();
      body.append('author', item.author);
      body.append('message', item.message);
      await fetch(url, { method: 'POST', body});
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="App">
      <FormChat onSubmit={isMessageSend}/>
      <MessageChat/>
    </div>
  );
};

export default App;
