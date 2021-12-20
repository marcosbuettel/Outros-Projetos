var timerId = null;
var min = 0;
var pontos = 0;

function capital(){ //função para preencher o campo das capitais
	
	for(var i = 1; i <=26; i++){		
		var id = 'cap' + i;
		var rp = 'rp' + i;
		var capital = document.getElementById(id).value;
		var teste = document.getElementById(rp).innerHTML;
		
		if (teste == ""){
			document.getElementById(rp).innerHTML = capital;
			verificaCapital(capital);			
		}				
	}		
}


function iniciaJogo(){ //função para iniciar o jogo
	var tempo = 0;	
	min = 0;

	for(var i = 1; i <=26; i++){		
		var id = 'cap' + i;
		var rp = 'rp' + i;
		var capital = document.getElementById(id).value;
		var teste = document.getElementById(rp).innerHTML;
		
		document.getElementById(id).value = '';
		document.getElementById(rp).innerHTML = '';				
	}

	document.getElementById("cronometro").innerHTML = tempo;

	contador(tempo);
}


function contador(contSegundos){ //função para diminuir o tempo
	contSegundos = contSegundos + 1;		

	if (contSegundos <= 59){
		document.getElementById("cronometro").innerHTML = min + ":" + contSegundos;
	}
	else if (contSegundos > 59){
		min = min + 1;
		document.getElementById("cronometro").innerHTML = min + ":" + 0;
		contSegundos = 0;
	}
	
	var nivelJogo = document.getElementById("dificuldade").value;

	if (nivelJogo == 1){
		if (min != 15){
			timerId = setTimeout('contador('+contSegundos+')', 1000);		
		}
		else if (min == 15){
			fimDeJogo();
		}
	}
	else if(nivelJogo == 2){
		if (min != 10){
			timerId = setTimeout('contador('+contSegundos+')', 1000);		
		}
		else if (min == 10){
			fimDeJogo();
		}
	}
	else if(nivelJogo == 3){
		if (min != 5){
			timerId = setTimeout('contador('+contSegundos+')', 1000);		
		}
		else if (min == 5){
			fimDeJogo();
		}
	}
	
}

function fimDeJogo(){ //função que finaliza o jogo
	if (pontos < 26){
		alert("O tempo terminou e você não completou todas as capitais! Capitais corretas: " + pontos);
	}
	else if (pontos == 26){
		alert("Parabéns! Você completou todas as capitais corretamente!");
	}
	pontos = 0;
	min = 0;
	return false;
}

function verificaCapital(capital){ //função para verificar se a capital está correta
	
	capitalCerta = capital;
	
	if (capitalCerta.toLowerCase() == "rio branco"){
		pontos++;				
	}
	else if (capitalCerta.toLowerCase() == "maceió" || capitalCerta.toLowerCase() == "maceio"){
		pontos++;		
	}
	else if (capitalCerta.toLowerCase() == "macapá" || capitalCerta.toLowerCase() == "macapa"){
		pontos++;
	}
	else if (capitalCerta.toLowerCase() == "manaus"){
		pontos++;
	}
	else if (capitalCerta.toLowerCase() == "salvador"){
		pontos++;
	}
	else if (capitalCerta.toLowerCase() == "fortaleza" || capitalCerta.toLowerCase() == "ceará"){
		pontos++;
	}
	else if (capitalCerta.toLowerCase() == "vitoria" || capitalCerta.toLowerCase() == "vitória"){
		pontos++;
	}
	else if (capitalCerta.toLowerCase() == "goiania" || capitalCerta.toLowerCase() == "goiânia"){
		pontos++;
	}
	else if (capitalCerta.toLowerCase() == "sao luis" || capitalCerta.toLowerCase() == "são luis" 
		|| capitalCerta.toLowerCase() == "são luís" || capitalCerta.toLowerCase() == "sao luís"){
		pontos++;
	}
	else if (capitalCerta.toLowerCase() == "cuiaba" || capitalCerta.toLowerCase() == "cuiabá"){
		pontos++;
	}
	else if (capitalCerta.toLowerCase() == "campo grande"){
		pontos++;
	}
	else if (capitalCerta.toLowerCase() == "belo horizonte"){
		pontos++;
	}
	else if (capitalCerta.toLowerCase() == "belem" || capitalCerta.toLowerCase() == "belém"){
		pontos++;
	}
	else if (capitalCerta.toLowerCase() == "joao pessoa" || capitalCerta.toLowerCase() == "joão pessoa"){
		pontos++;
	}
	else if (capitalCerta.toLowerCase() == "curitiba"){
		pontos++;
	}
	else if (capitalCerta.toLowerCase() == "recife"){
		pontos++;
	}
	else if (capitalCerta.toLowerCase() == "teresina"){
		pontos++;
	}
	else if (capitalCerta.toLowerCase() == "rio de janeiro"){
		pontos++;
	}
	else if (capitalCerta.toLowerCase() == "natal"){
		pontos++;
	}
	else if (capitalCerta.toLowerCase() == "porto alegre"){
		pontos++;
	}
	else if (capitalCerta.toLowerCase() == "porto velho"){
		pontos++;
	}
	else if (capitalCerta.toLowerCase() == "boa vista"){
		pontos++;
	}
	else if (capitalCerta.toLowerCase() == "florianopolis" || capitalCerta.toLowerCase() == "florianópolis"){
		pontos++;
	}
	else if (capitalCerta.toLowerCase() == "sao paulo" || capitalCerta.toLowerCase() == "são paulo"){
		pontos++;
	}
	else if (capitalCerta.toLowerCase() == "aracaju"){
		pontos++;
	}
	else if (capitalCerta.toLowerCase() == "palmas"){
		pontos++;
	}
	
}


function finalizarJogo(){ //função para caso a pessoa clique no botão de terminar antes do tempo acabar
	if (pontos < 26){
		alert("Você não completou todas as capitais! Capitais corretas: " + pontos);
	}
	else if (pontos == 26){
		alert("Parabéns! Você completou todas as capitais corretamente!");
	}
	pontos = 0;
	min = 0;
	document.location.reload(true);
}

