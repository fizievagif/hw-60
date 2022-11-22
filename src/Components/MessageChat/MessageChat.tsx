import React from 'react';
import {AttractorChat} from "../../types";
import './MessageChat.css';

interface Props {
  message: AttractorChat;
}

const MessageChat: React.FC<Props> = ({message}) => {
  return (
    <div className="main-mes-block">
      <div className="author-block">
        <p>Author: <b>{message.author}</b></p>
        <p>Date: <b>{message.datetime}</b></p>
      </div>
      <div className="message-block">
        <p>{message.message}</p>
      </div>
    </div>
  );
};

export default MessageChat;