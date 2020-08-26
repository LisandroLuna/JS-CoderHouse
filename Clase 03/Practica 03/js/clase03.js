function daysWeek(){
    //Listo dias de la semana
    var days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
    //Almaceno la longitud del array
    var nDays = days.length
    //Inicio el FOR para recorrer el array
    for(var i=0; i<nDays; i++){
        //Tomo i + 1 como dayNum para que los dias de la semana coincidan en:
        //Lunes 1 - Martes 2 - Miércoles 3 - Jueves 4 .....
        //Lo hice asi para desacoplarme de los indices del array y que sea mas clara
        //La asignación de números a los dias
        var dayNum = i + 1
        //Calculo modulo para saber si es par
        var mod = dayNum%2
        //Si me encuentro en el dia 7 (Domingo)
        if(dayNum == 7){
            alert('Es Domingo, mañana toca trabajar :(')
            break
        }
        //Informo si el dia es par o impar
        if(mod == 0){
            console.log(days[i] + ' (' + dayNum + ') es dia par.')
        }else{
            console.log(days[i] + ' (' + dayNum + ') es dia impar.')
        }
    }
}