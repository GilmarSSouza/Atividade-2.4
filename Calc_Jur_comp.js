var valor;
var juros;
var soma;
var multi;
var tempo;
var result;
var jc = 0;
var jct = 0;
function calculo(){
	var end = document.getElementById('result');
	end.innerHTML = " "
	valor = document.getElementById('valor').value;
	juros = document.getElementById('juros').value;
	tempo = document.getElementById('tempo').value;
	console.log(valor);
	console.log(juros);
	console.log(tempo);
	soma = 1+(juros/100);
	var m = 0;
	for(cont=0;cont<tempo;cont++){
	m++;
	multi = Math.pow(soma, m);
	console.log(multi);
	result = valor*multi;

	jc = result-valor
	end.innerHTML += "Mês " + m;
	end.innerHTML += " - Montante = " + result.toFixed(2);
	end.innerHTML += " - Juros = " + jc.toFixed(2) + "<br>";
}
}