import React from 'react';

export interface IMessage {
  greetMessage: string;
  sayHello: () => void;
}

export default function Hello({ greetMessage, sayHello }: IMessage) {
  sayHello();
  return <div>{greetMessage}</div>;
}
