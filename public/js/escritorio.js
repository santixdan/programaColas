const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const socket = io();

const nombre = urlParams.get('escritorio');

socket.emit('nombre', nombre, () => {
    console.log("Se envió el nombre del escritorio");
})

console.log(nombre);

cajero.textContent = nombre

// socket.on('eliminado', (payload) => {
//     let ultimoIndice = payload.tickets.length -1
//     lblPendientes.textContent = payload.tickets[ultimoIndice]
// })
let sound = new Audio("./../audio/new-ticket.mp3")

socket.on('ticketNum', (payload) => {
    let ultimoIndice = payload.tickets.length -1
    lblPendientes.textContent = payload.tickets[ultimoIndice]
    console.log("ticketNum sirve");
})

socket.on('atendiendo', (atendiendoA) => {
    if (atendiendoA != null) {
        txtPrimary.textContent = 'Ticket: '+ atendiendoA
    } else {
        alert("Ya no hay más tickets")
    }
    console.log("sirvio");
})

btnAtender.addEventListener('click', () => {
    socket.emit('atenderTicket', () => {
        console.log("Se envió el ticket a atender");
    })
    sound.play()
})
