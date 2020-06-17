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
app.use(express.static(path.join(__dirname, 'public')));

// When a client connects
io.on('connection', socket => {
    const SERVER_NAME = 'Server';
    socket.on('join-room', ( { id, name } ) => {
        console.log(`[${name} Joined]`);

        socket.join(id);
        io.in(id).emit('message', formatMessage(id, SERVER_NAME, `${name} has joined.`));
    })

    socket.on('message', msg => {
        console.log(msg);
        io.in(msg.id).emit('message', formatMessage(msg.id, msg.author, msg.text));
    });
});

// Setting up port listener.
const PORT = 3000 || process.env.PORT;
server.listen(PORT, () => console.log(`[Server on Port ${PORT}]`));