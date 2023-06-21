class ConsorcioDePropietarios(direccion, altura, codigoPostal, unidadesFuncionales){
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

function Proveedor(consorcio, razonSocial, cuit, numeroDeFactura, concepto, importe, cuotas){
    this.consorcio = consorcio;
    this.razonSocial = razonSocial;
    this.cuit = cuit;
    this.numeroDeFactura = numeroDeFactura;
    this.concepto = concepto;
    this.importe = importe;
    this.cuotas = cuotas;
}
// CONSORCIOS //
const consorcioFreire2281 = new ConsorcioDePropietarios("Cap. Gral. Ramón Freire", 2281, 1428, 17);
const consorcioChenaut1916 = new ConsorcioDePropietarios("Av. Gral. Indalecio Chenaut", 1916, 1426, 12);
// PROPIETARIOS //
const propietarioFreire2281UF01 = new Propietario("SDGSD", "FBJ6T", 1, 6.35, 0, 0, 0);
const propietarioFreire2281UF02 = new Propietario("HRJJS", "SJ6SQ", 2, 6.43, 0, 0, 0);
const propietarioFreire2281UF03 = new Propietario("POIYUGN", "DTJTRJN", 3, 6.36, 0, 0, 0);
const propietarioFreire2281UF04 = new Propietario("SSHW", "ERJEFDV", 4, 6.47, 0, 0, 0);
const propietarioFreire2281UF05 = new Propietario("SFHHW", "WRHJ5", 5, , 0, 0, 0);
const propietarioFreire2281UF06 = new Propietario("ERJETBV", "SDVDE", 6, 5.65, 0, 0, 0);
const propietarioFreire2281UF07 = new Propietario("SRJTJHV", "SWDVCE", 7, 5.65, 0, 0, 0);
const propietarioFreire2281UF08 = new Propietario("FRHTEJHV", "SFHETJH", 8, 6.28, 0, 0, 0);
const propietarioFreire2281UF09 = new Propietario("SDFSETJH", "SFHETHV", 9, 6.28, 0, 0, 0);
const propietarioFreire2281UF10 = new Propietario("SDCQC", "CWWXXZ", 10, 5.46, 0, 0, 0);
const propietarioFreire2281UF11 = new Propietario("WEGRWGB", "SDVRB", 11, 5.46, 0, 0, 0);
const propietarioFreire2281UF12 = new Propietario("NMNYMR", "YMJIKY", 12, 6.09, 0, 0, 0);
const propietarioFreire2281UF13 = new Propietario("TNTRVCW", "ERERTT", 13, 6.09, 0, 0, 0);
const propietarioFreire2281UF14 = new Propietario("VFNNB", "NVBVS", 14, 5.27, 0, 0, 0);
const propietarioFreire2281UF15 = new Propietario("DSBVRENH", "BFBEREW", 15, 5.27, 0, 0, 0);
const propietarioFreire2281UF16 = new Propietario("ASGRG", "SFBTNJ", 16, 5.21, 0, 0, 0);
const propietarioFreire2281UF17 = new Propietario("SBRBBS", "SFRBRH", 17, 5.21, 0, 0, 0);

const propietarioChenaut1916UF01 = new Propietario("PEPITO", "PEREZ", 1, 7.25, 7.58, 0, 0);
const propietarioChenaut1916UF02 = new Propietario("AGUSTINA", "GOMEZ", 2, 7.92, 8.05, 0, 0);
const propietarioChenaut1916UF03 = new Propietario("RAUL", "SANCHEZ", 3, 8.78, 8.64, 0, 0);
const propietarioChenaut1916UF04 = new Propietario("DAMIAN", "ERNST", 4, 7.85, 8, 0, 0);
const propietarioChenaut1916UF05 = new Propietario("GUILLERMO", "DE SANTIS", 5, 8.86, 8.7, 0, 0);
const propietarioChenaut1916UF06 = new Propietario("CATALINA", "AYMARA", 6, 7.93, 8.05, 0, 0);
const propietarioChenaut1916UF07 = new Propietario("LUIS", "BOSSI", 7, 8.96, 8.77, 0, 0);
const propietarioChenaut1916UF08 = new Propietario("WALTER", "OLMOS", 8, 8.01, 8.11, 0, 0);
const propietarioChenaut1916UF09 = new Propietario("FRANCISCA", "LEHMAN", 9, 9.13, 8.88, 0, 0);
const propietarioChenaut1916UF10 = new Propietario("ERNESTINA", "GALLARDO", 10, 8.18, 8.23, 0, 0);
const propietarioChenaut1916UF11 = new Propietario("SAUL", "MENDEZ", 11, 9.04, 8.82, 0, 0);
const propietarioChenaut1916UF12 = new Propietario("NEW HORIZON & ASOCIADOS", "", 12, 8.09, 8.17, 0, 0);

// FACTURA DE PROVEEDORES //


