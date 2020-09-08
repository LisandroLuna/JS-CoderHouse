function calc(){
    opt = parseInt(prompt('Ingrese la opcion que desea:\n1- Sitio Simple\n2- Sitio + Blog\n3- Sitio + Ecommerce\n4- Sitio + Blog + Ecommerce'))
    price = [3000, 3000, 3000, 3000]
    total = 0
    for(var i = 0; i<opt; i++){
        total = total + price[i]
    }
    alert("Costo total de su sitio web: $" + total)
}