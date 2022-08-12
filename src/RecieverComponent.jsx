import * as React from 'react';
import './App.css';
import emitter from './utils/EventEmitter.js';

function RecieverComponent() {
  let [messages, setMessages] = React.useState([]);

  let onNewlogCB = (eventData) => {
    // Sent event to every listener
    // setMessages([...messages, ...eventData])
    setMessages((prev) => [...prev, ...eventData]);
  };

  React.useEffect(() => {
    // add eventlistener
    var listener = emitter.addListener('uniqueName', onNewlogCB);

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <div>
      <h1> Message list </h1>
      {messages.map((el) => {
        <li key={el.message}> {el.message}</li>;
      })}
    </div>
  );
}

export default RecieverComponent;
