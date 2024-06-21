// client.js
import WebSocket from 'ws';

// Replace with the URL of your WebSocket server
const ws = new WebSocket('ws://wsserver-ef3ed238ca25.herokuapp.com/');
const data = {
    "botid": '131428',
    "author": 'fong',
    active: true,
}
ws.on('open', function open() {
    console.log('Connected to the server');

    // Send a message to the server
    ws.send(JSON.stringify(data));
})
ws.on('message', function message(data) {
    console.log('Received message from server:', data.toString());
});

ws.on('close', function close() {
    console.log('Disconnected from the server');
});

ws.on('error', function error(err) {
    console.error('Error:', err);
});
