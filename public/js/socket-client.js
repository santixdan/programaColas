const socket = io();

socket.on('connect', () => {
    console.log("Navegador conectado");
});

socket.on('disconect', () => {
    console.log("Navegador conectado")
});

btnEnviar.addEventListener('click',()=>{
    socket.emit("saludar",txtNombre.value,(saludo)=>{
        console.log(saludo);
    })
})