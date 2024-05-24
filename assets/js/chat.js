sendButton = document.getElementById('send-button');
messageInput = document.getElementById('user-message-input');
messageContainer = document.getElementById('messages-container');
sendButton.onclick = function() {
    message = messageInput.value;
    if (message) {
        messageInput.value = '';
        messageContainer.innerHTML += '<div class="message message-user"><img src="./assets/img/user.jpeg" alt="Foto Usuario" width="50"><p>' + message + '</p></div>';
    }
}