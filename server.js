// Package imports.
const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const { formatMessage } = require('./utils/message');

const SERVER_NAME = 'Server';

// Setting up application and server.
const app = express();
const server = http.createServer(app);
const io = socketio(server);
console.log(io);
app.use(express.static(path.join(__dirname, 'public')));

// When a client connects
io.on('connection', socket => {
    console.log("Added client");

    socket.on('join-room', ( { id, name } ) => {
        console.log(`${name} has joined.`);

        socket.join(id);
        io.in(id).emit('message', formatMessage(SERVER_NAME, `${name} has joined.`));
    })
});

// Setting up port listener.
const PORT = 3000 || process.env.PORT;
server.listen(PORT, () => console.log(`[Server on Port ${PORT}]`));