function calc(){
    let sect = parseInt(prompt(
                        'Ingrese el numero de secciones para su sitio excluyendo blog y tienda si las requiere:\n' +
                    'Ej.: si su sitio tiene una pagina de inicio, seccion galeria y seccion de contacto serian 3 secciones.'
            ))
    let opt = parseInt(prompt(
            'Ingrese la opcion que desea:' +
                    '\n1- Sitio Simple' +
                    '\n2- Sitio + Blog' +
                    '\n3- Sitio + Ecommerce' +
                    '\n4- Sitio + Blog + Ecommerce'
            ))
    let total = calcTotal(sect, opt)
    alert("Costo total de su sitio web: $" + total)
}

function calcSect(sect){
    let sectPrice = 500
    return sectPrice*sect
}

function calcTotal(sect, opt){
    let price = [calcSect(sect),3000, 3000, 3000, 3000]
    let total = 0
    for(let i = 0; i<=opt; i++){
        total = total + price[i]
    }
    return total
}