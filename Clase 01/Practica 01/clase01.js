var name = prompt("¿Como te llamas?")
var saludo = "Hola " + name + ", Bienvenido a mi Script!"
console.log(saludo)
var valorFijo = 5
var valorManual = parseInt(prompt("Ingresa un numero: "))
var valorFinal = valorFijo + valorManual
console.log("Se suma valorManual a valorFijo:")
console.log(valorFinal)
var fraseUno = prompt("Inicia una frase: ")
var fraseDos = prompt("Termina la frase anterior: ")
var fraseFInal = fraseUno + " " + fraseDos
console.log("Se muestra frase via alert.")
alert(fraseFInal)
console.log("Fin del script.")
