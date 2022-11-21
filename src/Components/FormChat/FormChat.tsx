import React, {useState} from 'react';
import {AttractorChat, AttractorChatMut} from "../../types";

interface Props {
  onSubmit: (message: AttractorChat) => void;
}

const FormChat: React.FC<Props> = ({onSubmit}) => {
  const [message, setMessage] = useState<AttractorChatMut>({
    author: '',
    message: ''
  });

  const onFormChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit({...message, id: Math.random().toString(), author: message.author, message: message.message,});
  };

  const onFormChatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setMessage(prev => ({...prev, [name]: value}));
  };

  return (
    <form onSubmit={onFormChatSubmit}>
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
      <button type="submit">Отправить</button>
    </form>
  );
};

export default FormChat;