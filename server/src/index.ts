import { Game } from './Game';
import { Server } from 'socket.io';
import http from 'http';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    },
});

server.listen(3001, () => {
    const game = new Game();
    console.log('server running');
});
