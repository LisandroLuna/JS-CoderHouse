reserva = parseInt(prompt('Ingrese su numero de reserva: '))
console.log('Se registra numero de reserva: ' + reserva)
if ((reserva > 10) && (reserva < 50)){
    alert('Su reserva esta disponible.')
} else {
    alert('Su reserva ya fue utilizada.')
}
