import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [socket, setSocket] = useState();

  function sendMessage() {
    if (!socket) {
      return;
    }
    const message = inputRef.current.value;
    //@ts-ignore
    socket.send(message)
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);   

    ws.onmessage = (ev) => {
      alert(ev.data);
    }
  }, [])
  return (
    <div>
      <input type='text' placeholder='Message....'></input>
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
