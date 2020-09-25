// Configuro precios constantes
const basePrice = 1500;
const sectPrice = 500;
const blogPrice = 3000;
const ecomPrice = 3000;
const mantPrice = 2400;

// Variables del DOM
const nameInput = document.querySelector('#name');
const telInput = document.querySelector('#tel');
const emailInput = document.querySelector('#email');
const sectInput = document.querySelector('#sections');
const blogInput = document.querySelector('#blog');
const ecomInput = document.querySelector('#ecom');
const mantInput = document.querySelector('#mant');
const saveButton =document.querySelector('#saveBtn');
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

function calc(){
    console.log('Cargo calc()');
    // data[0] = Nro de secciones
    // data[1] = true lleva blog / false no lleva blog
    // data[2] = true lleva tienda / false no lleva tienda
    // data[3] = true Si desea mantenimiento / false no desea mantenimiento
    let data = [];

    // Tomo valores del formulario
    data[0] = sectInput.value;
    data[1] = blogInput.checked;
    data[2] = ecomInput.checked;
    data[3] = mantInput.checked;
    data[4] = nameInput.value;
    data[5] = telInput.value;
    data[6] = emailInput.value;

    // Si no ingresan booleanos
    if(typeof data[1] !== "boolean"){
        alert('Error al seleccionar Blog, intente nuevamente!');
        blogInput.setAttribute('value','false')
        console.warn('Error al seleccionar Blog, no ingreso booleano');
    }
    if(typeof data[2] !== "boolean"){
        alert('Error al seleccionar Tienda, intente nuevamente!');
        ecomInput.setAttribute('value','false')
        console.warn('Error al seleccionar Tienda, no ingreso booleano');
    }
    if(typeof data[3] !== "boolean"){
        alert('Error al seleccionar Mantenimiento, intente nuevamente!');
        mantInput.setAttribute('value','false')
        console.warn('Error al seleccionar Mantenimiento, no ingreso booleano');
    }

    // Creo el objeto para realizar el calculo
    const webCalc = new Web(data);
    console.log(webCalc);

    // Muestro el precio final en el HTML
    if((typeof webCalc.price()) == 'number' ) {
        if(webCalc.blog === true){
            choiceBlog.textContent = 'Si';
            priceBlog.textContent = '$3000';
        }else{
            choiceBlog.textContent = 'No';
            priceBlog.textContent = '$0';
        }
        if(webCalc.ecom === true){
            choiceEcom.textContent = 'Si';
            priceEcom.textContent = '$3000';
        }else{
            choiceEcom.textContent = 'No';
            priceEcom.textContent = '$0';
        }
        if(webCalc.mant === true){
            choiceMant.textContent = 'Si';
            priceMant.textContent = '$4500';
        }else{
            choiceMant.textContent = 'No';
            priceMant.textContent = '$0';
        }
        unitSect.textContent = webCalc.sect;
        let finalSec = webCalc.calcSect();
        priceSect.textContent = '$' + finalSec;
        price.textContent = '$' + webCalc.price();
        console.log('Costo total: $' + webCalc.price());
        sessionStorage.setItem('budget', JSON.stringify(webCalc));
    }else{
        alert('Error al obtener presupuesto.');
        console.warn('Error al obtener presupuesto.')
    }
}
function filterStorage() {
    // Filtro las keys que empiezan con mu clave 'bud-'
    let values = [];
    let i;
    keys = Object.keys(localStorage).sort().reverse();
    // Limito a las ultimas 4 cotizaciones
    if(keys.length <= 4){
        i = keys.length;
    }else{
        i = 4;
    }
    while(i--) {
        if(keys[i].substr(0, 4) == 'bud-') {
            values.push(localStorage.getItem(keys[i]));
        }
    }
    return values;
}
function saveWeb(){
    console.log('Cargo saveWeb()');
    // Cargo el JSON de sessionStorage
    let getData = sessionStorage.getItem('budget');
    localStorage.setItem('bud-' + Date.now(), getData);
}

function clearHis(){
    webHis.innerHTML = '';
}

function siNo(info){
    if(info == true){
        return 'Si'
    }else{
        return 'No';
    }
}

function getWeb(){
    console.log('Cargo getWeb()');
    clearHis();
    // Recibo las cotizaciones anteriores
    let getData = filterStorage();
    let temp = []
    getData.forEach(function (web) {
        web = JSON.parse(web)
        let data = [web.sect, web.blog, web.ecom, web.mant];
        temp.push(new Web(data));
    })
    let i = 4;
    temp.forEach(e => {
        let article = document.createElement("article");
        article.innerHTML =
            '<article class="p-2 mb-1">' +
            '<p class="font-weight-bold">Cotización #' + i +
            '</p><ul>' +
            '<li>Secciones: ' + e.sect + '</li>' +
            '<li>Blog: ' + siNo(e.blog) + '</li>' +
            '<li>Tienda: ' + siNo(e.ecom) + '</li>' +
            '<li>Mantenimiento: ' + siNo(e.mant) + '</li>' +
            '<li>Precio Final: $' + e.price() + '</li>' +
            '</ul>' +
            '<a id="loadBtn" class="btn btn-info ml-4 w-100">Cargar</a>' +
            '</article>';
        webHis.insertBefore(article, webHis.firstChild);
        i--;
    })
}
