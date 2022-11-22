import React, {useEffect, useState} from 'react';
import './App.css';
import FormChat from "../Components/FormChat/FormChat";
import MessageChat from "../Components/MessageChat/MessageChat";
import {AttractorChat} from "../types";

const url = 'http://146.185.154.90:8000/messages';
let time = '';

const App = () => {
  const [messages, setMessages] = useState<AttractorChat[]>([]);

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

  const reversed = [...messages].reverse();

  useEffect(() => {
    setInterval(async () => {
      const response = await fetch(url);
      const messageJson: AttractorChat[] = await response.json();

      if (time === '') {
        for (let i = 0; i < messageJson.length; i++) {
          setMessages(prev => [
            ...prev,
            {
              _id: messageJson[i]._id,
              author: messageJson[i].author,
              message: messageJson[i].message,
              datetime: messageJson[i].datetime
            }
          ]);

          time = messageJson[i].datetime;
        }
      } else {
        const date = 'http://146.185.154.90:8000/messages?datetime=' + time;
        const newResponse = await fetch(date);
        const newMessageJson: AttractorChat[] = await newResponse.json();

        if (newMessageJson.length !== 0) {
          setMessages(prev => [
            ...prev,
            {
              _id: newMessageJson[0]._id,
              author: newMessageJson[0].author,
              message: newMessageJson[0].message,
              datetime: newMessageJson[0].datetime
            }
          ]);
          time = newMessageJson[0].datetime;
        }
      }
    }, 2000)
  }, [])

  return (
    <div>
      <div className="App">
        {reversed.map(message => (
          <MessageChat
            key={message._id}
            message={message}
          />
        ))}
      </div>
      <FormChat onSubmit={isMessageSend}/>
    </div>
  );
};

export default App;
