// client.js
const socket = io(); // Initialize socket.io properly

socket.on('connect', () => {
    console.log('Connected to server');
});

socket.on('message', message => {
    appendMessage(message);
});

function sendMessage() {
    const message = document.getElementById('message-input').value;
    console.log('Sending message:', message);
    socket.emit('message', message);
    appendMessage('You: ' + message);
    document.getElementById('message-input').value = '';
}

function appendMessage(message) {
    const chatWindow = document.getElementById('chat-window');
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}
