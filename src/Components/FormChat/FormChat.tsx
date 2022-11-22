import React, {useState} from 'react';
import {AttractorChat, AttractorChatMut} from "../../types";
import './FormChat.css';

interface Props {
  onSubmit: (message: AttractorChat) => void;
}

const FormChat: React.FC<Props> = ({onSubmit}) => {
  const [message, setMessage] = useState<AttractorChatMut>({
    author: '',
    message: '',
    datetime: '',
  });

  const resetForm = () => {
    setMessage({...message, author: '', message: '', datetime: ''});
  }

  const onFormChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({...message, _id: Math.random().toString(), author: message.author, message: message.message,});
    resetForm();
  };

  const onFormChatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setMessage(prev => ({...prev, [name]: value}));
  };

  return (
    <form onSubmit={onFormChatSubmit}>
      <div className="form-block">
        <div className="input-block">
          <input
            id="author"
            type="text"
            name="author"
            placeholder="Type an author"
            value={message.author}
            onChange={onFormChatChange}
            required
          />
          <input
            id="message"
            type="text"
            name="message"
            placeholder="Type a message"
            value={message.message}
            onChange={onFormChatChange}
            required
          />
        </div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
};

export default FormChat;