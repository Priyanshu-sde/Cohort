import { useEffect } from 'react';
import './App.css'

function App() {
useEffect(() => {
    const ws = new WebSocket("http://localhost:3000");
    ws.onmessage = (event) => {
        setMessages(m => [...m,event.data])
    }
})

    return (
        <div className='h-screen bg-black '>
            <div className='h-[90vh]'></div>
            <div className='w-full bg-white flex'>
                <input className='text w-full p-4'></input>
                <button className='bg-purple-600 text-white' >
                    Send Message
                </button>
            </div>
        </div>
    )
}

export default App;