let expensaOrdinaria = parseInt(prompt("¿Cuánto pagás de expensas ordinarias? Ingresar sólo números enteros"),);
let expensaExtraordinaria = parseInt(prompt("¿Cuánto pagás de expensas extraordinarias? Ingresar sólo números enteros"));
let deudaAnterior= parseInt(prompt("¿Cuánto debés del mes anterior? Ingresar sólo números enteros"));
let interesesPunitorios = parseInt(prompt("¿Cuánto te cobraron de intereses punitorios? Ingresar sólo números enteros"));
let sumaExpensasOrdinariasTotales = expensaOrdinaria + deudaAnterior + interesesPunitorios;
let inquilinoOrPropietario = parseInt(prompt("Si sos propietario, ingresá 1 en el casillero, si sos inquilino, ingresá 2"));
let sumaTotal = sumaExpensasOrdinariasTotales + expensaExtraordinaria;
function avisoDePago(){
	if(inquilinoOrPropietario === 1){
		alert("Debés un total de " + sumaTotal + " pesos. Recordá que tenés tiempo hasta el 10 de cada mes para pagarlo");
	}else if(inquilinoOrPropietario === 2){
		alert("Debés un total de " + sumaExpensasOrdinariasTotales + " pesos. Recordá que tenés tiempo hasta el 10 de cada mes para pagarlo");
	}else{
		alert("Usted ha ingresado una opción incorrecta. Por favor, pulse F5 y vuelva a consultar sus expensas")
	}
} avisoDePago();
let preguntaDeuda = parseInt(prompt("¿Cuántos meses de expensas debés?"));
function alertaDeuda(){
	for(i = 0 , i <= 3 , i++){
		if(preguntaDeuda > i){
			alert("La unidad registra una deuda de más de tres (3) meses. En caso de no cancelarla en la inmediatez se intimará fehacientemente conforme a la ley vigente.");
		}else if(preguntaDeuda > 0){
			alert("La unidad no posee deuda significativa. Aún así les pedimos mantener al día las expensas para que el consorcio pueda cumplir con sus obligaciones.");
		}else if(preguntaDeuda < 4){
			alert("La unidad no posee deuda significativa. Aún así les pedimos mantener al día las expensas para que el consorcio pueda cumplir con sus obligaciones.");
		}else{
		alert("La unidad no presenta deudas.");
	}}
}

alertaDeuda();

// *SEGUNDO MODELO DE CONSULTOR DE EXPENSAS ONLINE CON OBJETOS*

/* let expensasUFX = {
	expensaOrdinaria = 16175,
	expensaExtraordinaria = 11221,
	expensasAysa = 1391,
	deudaAnterior = 25698,
	interesesPunitorios = 770,
}
*/