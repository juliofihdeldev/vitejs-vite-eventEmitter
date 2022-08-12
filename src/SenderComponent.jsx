import * as React from 'react';
import './App.css';
import emitter from './utils/EventEmitter.js';

function SenderComponent() {
  let [message, setMessage] = React.useState('');

  let sendMessage = () => {
    // Sent event to every listener
    emitter.emit('uniqueName', {
      name: 'Julio',
      do: 'Dev',
      message: message,
    });
    setMessage('');
  };

  return (
    <div>
      <h1> sender name </h1>
      <input
        type="text"
        name="message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <input type="submit" value="send" onClick={sendMessage} />
    </div>
  );
}

export default SenderComponent;
