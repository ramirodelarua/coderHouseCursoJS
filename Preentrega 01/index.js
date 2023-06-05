let expensaOrdinaria = parseInt(prompt("¿Cuánto pagás de expensas ordinarias? Ingresar sólo números enteros"),);
let expensaExtraordinaria = parseInt(prompt("¿Cuánto pagás de expensas extraordinarias? Ingresar sólo números enteros"));
let deudaAnterior= parseInt(prompt("¿Cuánto debés del mes anterior? Ingresar sólo números enteros"));
let interesesPunitorios = parseInt(prompt("¿Cuál es el monto de los intereses punitorios? Ingresar sólo números enteros"));
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

function mostrarLiquidacionDeExpensas(expensaOrdinaria, expensaExtraordinaria, deudaAnterior, interesesPunitorios){
	console.log("Expensas Comunes Ordinarias: $" + expensaOrdinaria);
	console.log("Expensas Comunes Extraordinarias: $" + expensaExtraordinaria);
	console.log("Saldo Anterior: $" + deudaAnterior);
	console.log("Intereses Punitorios: $" + interesesPunitorios);	
}
mostrarLiquidacionDeExpensas(expensaOrdinaria, expensaExtraordinaria, deudaAnterior, interesesPunitorios);
let mostrarLiquidacionTotal = 0;
function totalLiquidacionDeExpensas(expensaOrdinaria, expensaExtraordinaria, deudaAnterior, interesesPunitorios){
	for(i = 0 , i < (arguments.length - 1) , i++){
		if(inquilinoOrPropietario === 1){
			mostrarLiquidacionTotal = mostrarLiquidacionTotal + arguments[i];
		}else if(inquilinoOrPropietario === 2){
			mostrarLiquidacionTotal = mostrarLiquidacionTotal + arguments[i];
			if(arguments[i] = 1){
				continue;
			}
		}
		console.log("Total a pagar por quien consulta: $" + mostrarLiquidacionTotal);
	}
}
totalLiquidacionDeExpensas(expensaOrdinaria, expensaExtraordinaria, deudaAnterior, interesesPunitorios);

// *SEGUNDO MODELO DE CONSULTOR DE EXPENSAS ONLINE CON OBJETOS*

/* let expensasUFX = {
	expensaOrdinaria = 16175,
	expensaExtraordinaria = 11221,
	expensasAysa = 1391,
	deudaAnterior = 25698,
	interesesPunitorios = 770,
}
*/