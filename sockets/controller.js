let contar = 0
let tickets=[]
let escritorios=[]
let payload = {}
let atendiendoA= ""
let nextTicket = 0

function socketController (socket) {
    console.log(socket.client.id);

    socket.on('numTicket',()=>{
        contar++
        tickets.push(contar)
        payload={
            contar,
            tickets
        }
        socket.broadcast.emit('ticketNum',payload)
        socket.emit('ticketNum',payload)
        console.log(tickets);
    })

    socket.on('nombre',(nombre)=>{
        escritorios.push(nombre)
        console.log(escritorios);
    })

    socket.on('atenderTicket',()=>{
        atendiendoA=tickets[nextTicket]
        nextTicket++
        socket.emit('atendiendo',atendiendoA)
    })
    socket.on('publico',()=>{
        payload={
            tickets,
            escritorios
        }
        socket.emit('publicos',payload)
    })
    // socket.on('eliminarUltimo',()=>{
    //     contar--
    //     nextTicket--
    //     tickets.shift()
    //     payload={
    //         tickets,
    //         contar
    //     }
    //     socket.broadcast.emit('eliminado',payload)
    //     socket.emit('eliminado',payload)
    // })
}

export {socketController}

