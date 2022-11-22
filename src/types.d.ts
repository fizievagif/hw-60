export interface AttractorChat {
  _id: string;
  author: string;
  message: string;
  datetime: string;
}

export interface AttractorChatMut {
  message: string;
  author: string;
  datetime: string;
}