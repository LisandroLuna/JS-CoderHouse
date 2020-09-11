// Configuro precios constantes
const basePrice = 1500;
const sectPrice = 500;
const blogPrice = 3000;
const ecomPrice = 3000;

// Creo el objeto web
function Web(data) {
    this.sect = data[0];
    this.blog = data[1];
    this.ecom = data[2];
    this.price = function (){
        let price = basePrice;
        if(this.calcSect()>0) {
            price += this.calcSect()
        }
        if(this.blog === true){
            price += blogPrice
        }
        if(this.ecom === true){
            price += ecomPrice
        }
        return price
    };
    this.calcSect = function () {
        return sectPrice*this.sect
    }
}

function calc(){
    // Aplique el array en esta parte con el valor data
    // data[0] = Nro de secciones
    // data[1] = true lleva blog / false no lleva blog
    // data[2] = true lleva tienda / false no lleva tienda
    let data = [0, false, false];
    let stop = false;
    while(!stop) {
        data[0] = parseInt(prompt(
            'Ingrese el numero de secciones para su sitio excluyendo blog y tienda si las requiere:\n' +
            'Ej.: si su sitio tiene una pagina de inicio, seccion galeria y seccion de contacto serian 3 secciones.'
        ));
        if(data[0] <1 || !Number.isInteger(data[0])){
            alert('Ingrese un numero mayor a 1!');
            console.warn('Error en seleccion de numero de secciones.');
            continue;
        }
        console.log('Secciones: ' + data[0]);
        let stop2 = false;
        while (!stop2){
            let opt = parseInt(prompt(
                'Ingrese la opcion que desea:' +
                '\n1- Sitio Simple' +
                '\n2- Sitio + Blog' +
                '\n3- Sitio + Ecommerce' +
                '\n4- Sitio + Blog + Ecommerce'
            ));
            switch (opt) {
                case 1:
                    stop = true;
                    stop2 = true;
                    break;
                case 2:
                    data[1] = true;
                    stop = true;
                    stop2 = true;
                    console.log('Modelo: ' + data[0] + ' + Blog');
                    break;
                case 3:
                    data[2] = true;
                    stop = true;
                    stop2 = true;
                    console.log('Modelo: ' + data[0] + ' + Tienda');
                    break;
                case 4:
                    data[1] = true;
                    data[2] = true;
                    stop = true;
                    stop2 = true;
                    console.log('Modelo: ' + data[0] + ' + Blog + Tienda');
                    break;
                default:
                    alert('Ingrese una opcion valida!');
                    console.warn('Error de seleccion de modelo de sitio.');
            }
        }
    }
    const webCalc = new Web(data);
    console.log(webCalc);
    if((typeof webCalc.price()) == 'number' ) {
        alert('Costo total de su sitio web: $' + webCalc.price());
        console.log('Costo total: $' + webCalc.price())
    }else{
        alert('Error al obtener presupuesto.');
        console.warn('Error al obtener presupuesto.')
    }
}

