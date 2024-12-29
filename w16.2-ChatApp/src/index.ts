import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port : 8081});

interface User{
    socket: WebSocket;
    room: String
}
let allSocket: User[] = [];


wss.on("connection", (socket) => {

socket.on("message", (message) => {
    //@ts-ignore
    const parsedMessage = JSON.parse(message);
    if(parsedMessage.type == "join"){
        console.log("Pushed")
        allSocket.push({
            socket,
            room : parsedMessage.payload.roomId
        })
    }

    if(parsedMessage.type == "chat"){
        let currentUserRoom = null;
        for(let i = 0; i < allSocket.length; i++) {
            if(allSocket[i].socket == socket) {
                currentUserRoom = allSocket[i].room
            }
        }

        for(let i = 0; i < allSocket.length;i++){
            if(allSocket[i].room == currentUserRoom) {
                allSocket[i].socket.send(parsedMessage.payload.message)
            }
        }
    }

})



})