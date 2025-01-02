import { useRef, useState, useEffect } from 'react'
import WebSocket from 'ws';
import './App.css'

function App() {
    const [messages, setMessages] = useState(["hi there","hello"]);
    const wsRef = useRef();
    const inputRef = useRef();

    useEffect(() => {
        const ws = WebSocket("https://localhost:8080");
        ws.onmesssage = (event) => {
            setMessages(m => [...m,event.data]);
        }
        wsRef.current = ws;
        
        ws.onopen = () => {
            ws.send(JSON.stringify({
                type: "Join",
                payload : {
                    roomId: "red"
                }
            }))
        };
        return () => {
            ws.close();
        }
    }, []);

    return (
        <div className=' h-screen bg-black'>
            <br />
            <br />
            <br />
            <div className='h-[85vh]'>
                {messages.map(message => <div className='m-8'>
                    <span className='bg-white text-black rounded p-4'>
                        {message}
                    </span>
                </div>)}
            </div>
            <div className='w-full bg-white flex'>
                <input ref={inputRef} id="message" className="flex-1 p-4" ></input>
                <button onClick={() => {
                    const message = inputRef.current?.value;
                    wsRef.current.send(JSON.stringify({
                        type : "chat",
                        payload : {
                            message: message
                        }
                    }))
                }} className='bg-purple-500 text-white p-4'>
                Send Message</button>
            </div>
        </div>
    )
}

export default App