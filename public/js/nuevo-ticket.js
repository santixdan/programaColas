const socket = io();

// socket.on('eliminado', (payload) => {
//     let ultimoIndice = payload.tickets.length -1
//     lblPendientes.textContent = payload.tickets[ultimoIndice]
// })


socket.on('ticketNum', (payload) => {
    lblNuevoTicket.textContent = 'Ticket: '+ payload.contar
    console.log("ticketNum sirve");
})

btnNuevoTicket.addEventListener('click',()=>{
    socket.emit("numTicket",()=>{
        console.log("It works");
    })
})

// let contar = 0;
// contar++;
//     lblNuevoTicket.textContent = `Ticket ${contar}`
//     let payload={
//         ticket:contar
//     }