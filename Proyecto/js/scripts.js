const basePrice = 1500;
const sectPrice = 500;
const blogPrice = 3000;
const ecomPrice = 3000;

function Web(sect, blog, ecom) {
    this.sect = sect;
    this.blog = blog;
    this.ecom = ecom;
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
    let sect = 0;
    let blog, ecom, stop = false;
    while(stop === false) {
        sect = parseInt(prompt(
            'Ingrese el numero de secciones para su sitio excluyendo blog y tienda si las requiere:\n' +
            'Ej.: si su sitio tiene una pagina de inicio, seccion galeria y seccion de contacto serian 3 secciones.'
        ));
        if(sect<1 || !Number.isInteger(sect)){
            alert('Ingrese un numero mayor a 1!');
            console.log('Error en seleccion de numero de secciones.');
            continue;
        }
        console.log('Secciones: ' + sect);
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
                break;
            case 2:
                blog = true;
                stop = true;
                console.log('Modelo: ' + sect + ' + Blog');
                break;
            case 3:
                ecom = true;
                stop = true;
                console.log('Modelo: ' + sect + ' + Tienda');
                break;
            case 4:
                blog = true;
                ecom = true;
                stop = true;
                console.log('Modelo: ' + sect + ' + Blog + Tienda');
                break;
            default:
                alert('Ingrese una opcion valida!');
                console.log('Error de seleccion de modelo de sitio.')

        }
    }
    const webCalc = new Web(sect, blog, ecom);
    console.log(webCalc);
    alert("Costo total de su sitio web: $" + webCalc.price());
    console.log("Costo total: $" + webCalc.price())
}

