function calcular(){
	// pegando o id do formulario
	var formulario = document.getElementById("formulario");	

	// kilos é minha variavel
	// formulario é o id do meu formulario
	// value é o valor do input
	// o + na frente transforma em number a string	

	var kilos  		= +document.getElementById("kilos").value;
	var altura 		= +document.getElementById("altura").value/100;

	console.log(kilos)
	console.log(altura)
	// imc
	var imc = kilos / (altura * altura);

	// o metodo toFixed fixa apenas duas casas decimais apos o ponto.
	
  
	console.log(imc)
	if(imc < 20)
	{
		formulario.imc.value = document.getElementById("imc").innerHTML = 'Você esta abaixo do peso! seu IMC  é ' + imc;
	} 
	else if(imc >20 && imc <= 25)
	{
		formulario.imc.value = document.getElementById("imc").innerHTML = 'Peso Ideal seu IMC  é ' + imc;
	}
	else if(imc >25 && imc <= 30)
	{
		formulario.imc.value = document.getElementById("imc").innerHTML = 'Sobrepeso seu IMC  é ' + imc;
	}
	else if(imc >30 && imc <= 35)
	{
		formulario.imc.value = document.getElementById("imc").innerHTML = 'Obesidade Moderada seu IMC  é ' + imc;
	}
	else if(imc >35 && imc <= 40)
	{
		formulario.imc.value = document.getElementById("imc").innerHTML = 'Obesidade Severa seu IMC  é ' + imc;
	}
	else if(imc >40 && imc <= 50)
	{
		formulario.imc.value = document.getElementById("imc").innerHTML = 'Obesidade Morbida seu IMC  é ' + imc;
	}
	else
	{
		formulario.imc.value = document.getElementById("imc").innerHTML = 'Nao e valido seu IMC  é ' + imc;
	}
}
