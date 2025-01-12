"use client"

export default function Signin() {
    return <div className="w-screen h-screen flex justify-center items-center">
        <div className="border p-2">
            <input type="text" placeholder="Username"></input>
            <input type="password" placeholder="Password"></input>
            <button>Signin</button>
        </div>
    </div>

}