const socket = io();

socket.on('publicos', (payload)=>{
    lblTicket1.textContent=payload.tickets[0]
    lblEscritorio1.textContent=payload.escritorios[0]
})