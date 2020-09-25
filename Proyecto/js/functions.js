// Función para calcular precio final
function calc(){
    console.log('Cargo calc()');
    // data[0] = Nro de secciones
    // data[1] = true lleva blog / false no lleva blog
    // data[2] = true lleva tienda / false no lleva tienda
    // data[3] = true Si desea mantenimiento / false no desea mantenimiento
    // data[4] = Nombre
    // data[5] = Telefono
    // data[6] = Email
    let data = [];

    // Tomo valores del formulario
    data[0] = sectInput.value;
    data[1] = blogInput.checked;
    data[2] = ecomInput.checked;
    data[3] = mantInput.checked;
    data[4] = nameInput.value;
    data[5] = telInput.value;
    data[6] = emailInput.value;
    const format = " HH:mm - DD/MM/YY";
    let date = new Date();
    let dateTime = moment(date).format(format);
    data[7] = dateTime;
    data[8] = Date.now();

    checkCalc(data);
}

// Valido y formateo valores para crear objeto
function checkCalc(data){
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

// Obtengo las cotizaciones guardadas en localStorage
function filterStorage() {
    // Filtro las keys que empiezan con mu clave 'bud-'
    let values = [];
    let i;
    keys = Object.keys(localStorage).sort().reverse();
    // Limito a las ultimas 3 cotizaciones
    if(keys.length <= 3){
        i = keys.length;
    }else{
        i = 3;
    }
    while(i--) {
        if(keys[i].substr(0, 4) == 'bud-') {
            values.push(localStorage.getItem(keys[i]));
        }
    }
    return values;
}

// Obtengo una cotizacion guardada en localStorage
function getStorage(select) {
    let value = '';
    let i;
    keys = Object.keys(localStorage).sort().reverse();
    // Limito a las ultimas 3 cotizaciones
    if(keys.length <= 3){
        i = keys.length;
    }else{
        i = 3;
    }
    while(i--) {
        if(keys[i] == ('bud-' + select)) {
            value = localStorage.getItem(keys[i]);
        }
    }
    return value;
}

//Guardar cotizacion
function saveWeb(){
    console.log('Cargo saveWeb()');
    // Cargo el JSON de sessionStorage
    let getData = sessionStorage.getItem('budget');
    localStorage.setItem('bud-' + JSON.parse(getData).select, getData);
}

// Limpiar Historial de Cotizaciones en DOM
function clearHis(){
    webHis.innerHTML = '';
}

// De booleano a Si/No
function siNo(info){
    if(info == true){
        return 'Si'
    }else{
        return 'No';
    }
}

// De Si/No a booleano
function trueFalse(info){
    if(info == "Si"){
        return true
    }else{
        return false;
    }
}

// Traer cotizaciones guardadas
function getWeb(){
    console.log('Cargo getWeb()');
    clearHis();
    // Recibo las cotizaciones anteriores
    let getData = filterStorage();
    let temp = []
    getData.forEach(function (web) {
        web = JSON.parse(web)
        let data = [web.sect, web.blog, web.ecom, web.mant, web.fullName, web.tel, web.email, web.date, web.select];
        temp.push(new Web(data));
    })
    let i = 4;
    temp.forEach(e => {
        let article = document.createElement("article");
        article.innerHTML =
            '<article class="p-2 mb-1" id="' + e.select + '">' +
            '<p class="font-weight-bold">Cotización: ' + e.date +
            '</p><ul>' +
            '<li id="bud-fullName">Nombre: ' + noData(e.fullName) + '</li>' +
            '<li id="bud-email">Email: ' + noData(e.email) + '</li>' +
            '<li id="bud-tel">Tel.: ' + noData(e.tel) + '</li>' +
            '<li id="bud-sect">Secciones: ' + e.sect + '</li>' +
            '<li id="bud-blog">Blog: ' + siNo(e.blog) + '</li>' +
            '<li id="bud-ecom">Tienda: ' + siNo(e.ecom) + '</li>' +
            '<li id="bud-mant">Mantenimiento: ' + siNo(e.mant) + '</li>' +
            '<li id="bud-price">Precio Final: $' + e.price() + '</li>' +
            '</ul>' +
            '<a id="loadBtn-' + e.fullName +'" class="btn btn-info ml-4 w-100">Cargar</a>' +
            '</article>';
        webHis.insertBefore(article, webHis.firstChild);
        i--;
        var loadButton = document.querySelector('#loadBtn-' + e.fullName);
        loadButton.addEventListener('click', loadBud);
    })
}

function noData(data){
    if(data == ''){
        return 'Anonimo';
    }else{
        return data;
    }
}

// Cargar cotizaciones guardadas
function loadBud(){
    console.log('Cargo loadBud()');
    let art = this.parentNode.id;
    let info = JSON.parse(getStorage(art));
    data = [info.sect, info.blog, info.ecom, info.mant, info.fullName, info.tel, info.email, info.date, info.select];
    console.log(data);
    sectInput.value = data[0];
    document.querySelector('#amount').textContent = sectInput.value;
    blogInput.checked = data[1];
    ecomInput.checked = data[2];
    mantInput.checked = data[3];
    nameInput.value = data[4];
    telInput.value = data[5];
    emailInput.value = data[6];
    checkCalc(data);
}