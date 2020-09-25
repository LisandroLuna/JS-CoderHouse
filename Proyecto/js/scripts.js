// Configuro precios constantes
const basePrice = 1500;
const sectPrice = 500;
const blogPrice = 3000;
const ecomPrice = 3000;
const mantPrice = 2400;

// Constantes del DOM
const form = document.querySelector('#form-simu');
const nameInput = document.querySelector('#name');
const telInput = document.querySelector('#tel');
const emailInput = document.querySelector('#email');
const sectInput = document.querySelector('#sections');
const blogInput = document.querySelector('#blog');
const ecomInput = document.querySelector('#ecom');
const mantInput = document.querySelector('#mant');
const saveButton = document.querySelector('#saveBtn');
const webHis = document.querySelector('#webHis');
const choiceBlog = document.querySelector('#choiceb');
const priceBlog = document.querySelector('#priceb');
const choiceEcom = document.querySelector('#choicee');
const priceEcom = document.querySelector('#pricee');
const choiceMant = document.querySelector('#choicem');
const priceMant = document.querySelector('#pricem');
const unitSect = document.querySelector('#unitsect');
const priceSect = document.querySelector('#prices');
const price = document.querySelector('#price');

// Espero la carga del DOM
document.addEventListener('DOMContentLoaded', function(){
    console.log('Cargo el DOM');
    calc();
    getWeb();
    nameInput.addEventListener('change', calc);
    telInput.addEventListener('change', calc);
    emailInput.addEventListener('change', calc);
    sectInput.addEventListener('change', calc);
    blogInput.addEventListener('change', calc);
    ecomInput.addEventListener('change', calc);
    mantInput.addEventListener('change', calc);
    saveButton.addEventListener('click', saveWeb);
    saveButton.addEventListener('click', getWeb);
    form.addEventListener('submit', (event) => {
        alert('Se envio informacion!');
    });
});

// Creo el objeto web
function Web(data) {
    this.sect = data[0];
    this.blog = data[1];
    this.ecom = data[2];
    this.mant = data[3];
    this.fullName = data[4];
    this.tel = data[5];
    this.email = data[6];
    this.date = data[7];
    this.select = data[8];
    this.price = function (){
        let price = basePrice;
        if(this.calcSect()>0) {
            price += this.calcSect();
        }
        if(this.blog === true){
            price += blogPrice;
        }
        if(this.ecom === true){
            price += ecomPrice;
        }
        if(this.mant === true){
            price += mantPrice;
        }
        return price
    };
    this.calcSect = function () {
        return sectPrice*this.sect;
    }
}
