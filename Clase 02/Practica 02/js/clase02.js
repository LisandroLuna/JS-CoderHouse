var nombre = ""
nombre = prompt('Ingrese su nombre: ')

if (nombre != ''){
    console.log('Bienvenido ' + nombre)
} else {
    console.warn('Debe ingresar un nombre!')
}
