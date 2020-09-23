// Configuro precios constantes
const basePrice = 1500;
const sectPrice = 500;
const blogPrice = 3000;
const ecomPrice = 3000;
const mantPrice = 4500;

document.addEventListener('DOMContentLoaded', function(){
    console.log('Cargo el DOM')
    document.querySelector('#sections').addEventListener('change', calc);
    document.querySelector('#blog').addEventListener('change', calc);
    document.querySelector('#ecom').addEventListener('change', calc);
    document.querySelector('#mant').addEventListener('change', calc);

});

// Creo el objeto web
function Web(data) {
    this.sect = data[0];
    this.blog = data[1];
    this.ecom = data[2];
    this.mant = data[3];
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
        if(this.mant === true){
            price += mantPrice
        }
        return price
    };
    this.calcSect = function () {
        return sectPrice*this.sect
    }
}

function calc(){
    // data[0] = Nro de secciones
    // data[1] = true lleva blog / false no lleva blog
    // data[2] = true lleva tienda / false no lleva tienda
    let data = [];

    // Tomo valores del formulario
    data[0] = document.querySelector('#sections').value;
    data[1] = document.querySelector('#blog').checked;
    data[2] = document.querySelector('#ecom').checked;
    data[3] = document.querySelector('#mant').checked;

    // Si no ingresan booleanos
    if(typeof data[1] !== "boolean"){
        alert('Error al seleccionar Blog, intente nuevamente!');
        document.querySelector('#blog').setAttribute('value','false')
        console.warn('Error al seleccionar Blog, no ingreso booleano');
    }
    if(typeof data[2] !== "boolean"){
        alert('Error al seleccionar Tienda, intente nuevamente!');
        document.querySelector('#ecom').setAttribute('value','false')
        console.warn('Error al seleccionar Tienda, no ingreso booleano');
    }

    // Creo el objeto para realizar el calculo
    const webCalc = new Web(data);
    console.log(webCalc);

    // Muestro el precio final en el HTML
    if((typeof webCalc.price()) == 'number' ) {
        let price = document.querySelector('#price');
        if(webCalc.blog ===true){
            document.querySelector('#choiceb').textContent = 'Si';
            document.querySelector('#priceb').textContent = '$3000';
        }
        if(webCalc.ecom ===true){
            document.querySelector('#choicee').textContent = 'Si';
            document.querySelector('#pricee').textContent = '$3000';
        }
        if(webCalc.mant ===true){
            document.querySelector('#choicem').textContent = 'Si';
            document.querySelector('#pricem').textContent = '$4500';
        }
        document.querySelector('#unitsect').textContent = webCalc.sect;
        finalSec = webCalc.calcSect();
        document.querySelector('#prices').textContent = '$' + finalSec;
        price.textContent = '$' + webCalc.price();
        console.log('Costo total: $' + webCalc.price());
    }else{
        alert('Error al obtener presupuesto.');
        console.warn('Error al obtener presupuesto.')
    }
}

