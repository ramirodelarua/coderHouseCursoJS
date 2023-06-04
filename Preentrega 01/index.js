let expensaOrdinaria = prompt("¿Cuánto pagás de expensas ordinarias? Ingresar sólo números enteros");
let expensaExtraordinaria = prompt("¿Cuánto pagás de expensas extraordinarias? Ingresar sólo números enteros");
let deudaAnterior= prompt("¿Cuánto debés del mes anterior? Ingresar sólo números enteros");
let interesesPunitorios = prompt("¿Cuánto te cobraron de intereses punitorios? Ingresar sólo números enteros");
let sumaExpensasOrdinariasTotales = expensaOrdinaria + deudaAnterior + interesesPunitorios;
let inquilinoOrPropietario = prompt("Si sos propietario, ingresá 1 en el casillero, si sos inquilino, ingresá 2")
let sumaTotal = sumaExpensasOrdinariasTotales + expensaExtraordinaria;
function avisoDePago(){
	if(inquilinoOrPropietario == 1){
		alert("Debés un total de " + sumaTotal + " pesos. Recordá que tenés tiempo hasta el 10 de cada mes para pagarlo");
	}else if(inquilinoOrPropietario == 2){
		alert("Debés un total de " + sumaExpensasOrdinariasTotales + " pesos. Recordá que tenés tiempo hasta el 10 de cada mes para pagarlo");
	}else{
		alert("Usted ha ingresado una opción incorrecta. Por favor, pulse F5 y vuelva a consultar sus expensas")
	}
}
avisoDePago();