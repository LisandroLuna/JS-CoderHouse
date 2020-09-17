preProdListObj = [{
        "prod_id":1,"prod_name":"BENZALKONIUM CHLORIDE, HEXYLRESORCINOL, ZINC CHLORIDE","prod_brand":"AVAPTA","prod_desc":"Nondisplaced fracture of body of scapula, left shoulder, subsequent encounter for fracture with malunion","prod_fda":"76332-003","prod_company":"Neel Products LLC"
    },    {
        "prod_id":2,"prod_name":"Pyrithione Zinc","prod_brand":"Clear","prod_desc":"Blister (nonthermal) of nose, initial encounter","prod_fda":"64942-1252","prod_company":"Conopco Inc. d/b/a Unilever"
    },    {
        "prod_id":3,"prod_name":"Warfarin Sodium","prod_brand":"Warfarin Sodium","prod_desc":"Nondisplaced spiral fracture of shaft of left tibia, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with delayed healing","prod_fda":"33261-357","prod_company":"Aidarex Pharmaceuticals LLC"
    },    {
        "prod_id":4,"prod_name":"VENLAFAXINE HYDROCHLORIDE","prod_brand":"VENLAFAXINE HYDROCHLORIDE","prod_desc":"Subluxation of metacarpophalangeal joint of left thumb","prod_fda":"63739-633","prod_company":"McKesson Packaging Services a business unit of McKesson Corporation"
    },    {
        "prod_id":5,"prod_name":"Trichophyton rubrum","prod_brand":"Trichophyton rubrum","prod_desc":"Laceration of other part of colon, subsequent encounter","prod_fda":"49288-0580","prod_company":"Antigen Laboratories, Inc."
    },    {
        "prod_id":6,"prod_name":"Ibuprofen","prod_brand":"Ibuprofen","prod_desc":"Dislocation of interphalangeal joint","prod_fda":"63629-1470","prod_company":"Bryant Ranch Prepack"
    },    {
        "prod_id":7,"prod_name":"Octinoxate and Octisalate","prod_brand":"Principal Secret","prod_desc":"Person injured in collision between heavy transport vehicle and bus, nontraffic, subsequent encounter","prod_fda":"11410-541","prod_company":"Guthy-Renker LLC"
    },    {
        "prod_id":8,"prod_name":"Ammonium Lactate","prod_brand":"Ammonium Lactate","prod_desc":"Displaced fracture of posterior column [ilioischial] of unspecified acetabulum","prod_fda":"0591-2158","prod_company":"Watson Laboratories, Inc."
    },    {
        "prod_id":9,"prod_name":"ERYTHROMYCIN","prod_brand":"ERYTHROMYCIN","prod_desc":"Assault by steam or hot vapors, sequela","prod_fda":"16590-090","prod_company":"Stat Rx USA"
    },    {
        "prod_id":10,"prod_name":"Acetaminophen, Pamabrom and Pyrilamine maleate","prod_brand":"Menstrual Pain Relief Multi-Symptom","prod_desc":"Displaced spiral fracture of shaft of right tibia, subsequent encounter for open fracture type IIIA, IIIB, or IIIC with routine healing","prod_fda":"11673-963","prod_company":"Target Corporation"
    }]

// Convierto mi variable a formato JSON (Texto plano)
let prodListJson = JSON.stringify(preProdListObj)

// JSON a Arreglo de objetos
prodListObj = JSON.parse(prodListJson)

// Constructor objeto Product
function Product(id, nombre, marca, desc, fda, company){
    this.id = id
    this.nombre = nombre
    this.marca = marca
    this.desc = desc
    this.fda = fda
    this.company = company
}

// Recorro el Array de Objetos y creo cada Objeto Producto
let arrayProd = prodListObj.map((product) => {
    return new Product(product.prod_id, product.prod_name, product.prod_brand, product.prod_desc, product.prod_fda, product.prod_company)
})

// Lo convierto a JSON
let jsonProd = JSON.stringify(arrayProd)

console.log(typeof arrayProd)
console.log(arrayProd)
console.log(typeof jsonProd)
console.log(jsonProd)

sessionStorage.prearray = prodListObj
sessionStorage.prejson = prodListJson
localStorage.array = arrayProd
localStorage.json = jsonProd