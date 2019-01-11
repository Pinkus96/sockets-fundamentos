var socket = io();

socket.on("connect", function() {
    console.log("Conactado al servidor");
});

// Escuchar
socket.on("disconnect", function() {
    console.log("Perdimos conexión con el servidor");
});

// Enviar información
socket.emit("enviarMensaje", {
    usuario: "Fernando",
    mensaje: "Hola mundo"
}, function(resp) {
    console.log("Repuesta del server", resp);
});

// Escuchar información
socket.on("enviarMensaje", function(mensaje) {
    console.log("Servidor: ", mensaje);
});