function ConsorcioDePropietarios(direccion, altura, codigoPostal, unidadesFuncionales){
    this.direccion = direccion;
    this.altura = altura;
    this.codigoPostal = codigoPostal;
    this.unidadesFuncionales = unidadesFuncionales;
}

function Propietario(nombre, apellido, unidadFuncional, porcentualA, porcentualB, porcentualC, porcentualD){
    this.nombre = nombre;
    this.apellido = apellido;
    this.unidadFuncional = unidadFuncional;
    this.porcentualA = porcentualA;
    this.porcentualB = porcentualB;
    this.porcentualC = porcentualC;
    this.porcentualD = porcentualD;
}

// CONSORCIOS: Calle, altura, CP, cant. de UF//
const consorcioCuchacucha2281 = new ConsorcioDePropietarios("Cucha Cucha", 2281, 1428, 17);
const consorcioLibertador1916 = new ConsorcioDePropietarios("Av. del Libertador 1916", 1916, 1426, 12);
// PROPIETARIOS //
const propietarioCuchacucha2281UF01 = new Propietario("VALERIA", "SIMON", 1, 6.35, 6.35, 0, 0);
const propietarioCuchacucha2281UF02 = new Propietario("BRAIAN", "GOMEZ", 2, 6.43, 6.43, 0, 0);
const propietarioCuchacucha2281UF03 = new Propietario("JUN LYN", "DTJTRJN", 3, 6.36, 6.36, 0, 0);
const propietarioCuchacucha2281UF04 = new Propietario("DARIO", "ASSIF", 4, 6.47, 6.47, 0, 0);
const propietarioCuchacucha2281UF05 = new Propietario("MIGUEL", "GRECCO", 5, 6.47, 6.47, 0, 0);
const propietarioCuchacucha2281UF06 = new Propietario("TOMÁS", "DE VICTORIA", 6, 5.65, 5.65, 0, 0);
const propietarioCuchacucha2281UF07 = new Propietario("ANA", "NODUERME", 7, 5.65, 5.65, 0, 0);
const propietarioCuchacucha2281UF08 = new Propietario("ANTONIO", "RIOS", 8, 6.28, 6.28, 0, 0);
const propietarioCuchacucha2281UF09 = new Propietario("JOSÉ", "PRIETO", 9, 6.28, 6.28, 0, 0);
const propietarioCuchacucha2281UF10 = new Propietario("HELGA", "CLARIS", 10, 5.46, 5.46, 0, 0);
const propietarioCuchacucha2281UF11 = new Propietario("GASTÓN", "RANCIO", 11, 5.46, 5.46, 0, 0);
const propietarioCuchacucha2281UF12 = new Propietario("FRANCISCA", "CASTRO", 12, 6.09, 6.09, 0, 0);
const propietarioCuchacucha2281UF13 = new Propietario("ELSA", "ETEL", 13, 6.09, 6.09, 0, 0);
const propietarioCuchacucha2281UF14 = new Propietario("RAÚL", "MICCON", 14, 5.27, 5.27, 0, 0);
const propietarioCuchacucha2281UF15 = new Propietario("TOMÁS", "FRESCO", 15, 5.27, 5.27, 0, 0);
const propietarioCuchacucha2281UF16 = new Propietario("CECILIA", "DABAS", 16, 5.21, 5.21, 0, 0);
const propietarioCuchacucha2281UF17 = new Propietario("MARCELO", "ELTON", 17, 5.21, 5.21, 0, 0);

const propietarioLibertador1916UF01 = new Propietario("PEPITO", "PEREZ", 1, 7.25, 7.58, 0, 0);
const propietarioLibertador1916UF02 = new Propietario("AGUSTINA", "GOMEZ", 2, 7.92, 8.05, 0, 0);
const propietarioLibertador1916UF03 = new Propietario("RAUL", "SANCHEZ", 3, 8.78, 8.64, 0, 0);
const propietarioLibertador1916UF04 = new Propietario("DAMIAN", "ERNST", 4, 7.85, 8, 0, 0);
const propietarioLibertador1916UF05 = new Propietario("GUILLERMO", "DE SANTIS", 5, 8.86, 8.7, 0, 0);
const propietarioLibertador1916UF06 = new Propietario("CATALINA", "AYMARA", 6, 7.93, 8.05, 0, 0);
const propietarioLibertador1916UF07 = new Propietario("LUIS", "BOSSI", 7, 8.96, 8.77, 0, 0);
const propietarioLibertador1916UF08 = new Propietario("WALTER", "OLMOS", 8, 8.01, 8.11, 0, 0);
const propietarioLibertador1916UF09 = new Propietario("FRANCISCA", "LEHMAN", 9, 9.13, 8.88, 0, 0);
const propietarioLibertador1916UF10 = new Propietario("ERNESTINA", "GALLARDO", 10, 8.18, 8.23, 0, 0);
const propietarioLibertador1916UF11 = new Propietario("SAUL", "MENDEZ", 11, 9.04, 8.82, 0, 0);
const propietarioLibertador1916UF12 = new Propietario("NEW HORIZON & ASOCIADOS", "", 12, 8.09, 8.17, 0, 0);

// Gastos A, B, C y D del consorcio declarados en arrays

// Consorcio Libertador 1916
let consorcioLibertador1916gastosTotales = 0;
let arrayConsorcioLibertador1916Gasto[0] = 300000;
let arrayConsorcioLibertador1916Gasto[1] = 15000;
let arrayConsorcioLibertador1916Gasto[2] = 60456;
let arrayConsorcioLibertador1916Gasto[3] = 0;

// Consorcio Cucha Cucha 2281
let consorcioCuchacucha2281gastosTotales = 0;
let arrayConsorcioCuchacucha2281Gasto[0] = 100000;
let arrayConsorcioCuchacucha2281Gasto[1] = 50000;
let arrayConsorcioCuchacucha2281Gasto[2] = 0;
let arrayConsorcioCuchacucha2281Gasto[3] = 0;

function consorcioLibertador1916SumarExpensasTotales(){
    for(i=0 ; i < arrayConsorcioLibertador1916Gasto.length ; i++){
        if(arrayConsorcioLibertador1916Gasto !== 0){
            consorcioLibertador1916GastosTotales = consorcioLibertador1916GastosTotales +arrayConsorcioLibertador1916Gasto[i];
        }else{
            arrayConsorcioLibertador1916Gasto.splice(i,1);
        }

    }
    return consorcioLibertador1916GastosTotales;
}

function consorcioCuchacucha2281SumarExpensasTotales(){
    for(i=0 ; i < arrayConsorcioCuchacucha2281Gasto.length ; i++){
        if(arrayConsorcioLibertador1916Gasto !== 0){
            consorcioCuchacucha2281gastosTotales = consorcioCuchacucha2281gastosTotales + arrayConsorcioCuchacucha2281Gasto[i];
        }else{
            arrayConsorcioCuchacucha2281Gasto.splice(i,1);
        }

    }
    return consorcioLibertador1916GastosTotales;
}


let sumarTodos = 