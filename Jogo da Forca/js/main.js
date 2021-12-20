var palavra;
var verificaLetraExiste = false; //verificar se acertou a letra, para não completar a forca
var cabeca = false;
var corpo = false;
var bracoD = false;
var bracoE = false;
var pernaD = false;
var pernaE = false;
var terminaJogo = false;
var botaoClicado = false;
var pontos = [];

window.onload = function(){
	
	var botao = $('#botao');
	var tamanhoPalavra;

	jQuery('#palavra').keyup(function () { 
   		this.value = this.value.replace(/[^a-zA-Z]/g,'');
	});

	jQuery('#letraEscolhida').keyup(function () { 
   		this.value = this.value.replace(/[^a-zA-Z]/g,'');
	});

	botao.click(function(){
		if(terminaJogo == false && botaoClicado == false){
			
			palavra = document.getElementById('palavra').value;

			if(palavra == ''){
				alert("Digite uma palavra!");
			}
			else{

				$('#palavra').css('pointer-events', 'none');

				$('.rolarTela').click(function(){
					
					    var el = $(this).attr("href");
					    $('html, body').animate({
					      scrollTop: $(el).offset().top
					    }, 1000);	 
						return false;
				});

				tamanhoPalavra = palavra.length;
				for(var i = 0; i < tamanhoPalavra; i++){
					var underline = document.createElement("span");
					underline.innerHTML = '___';
					underline.style.margin = '6px';
					underline.style.fontSize ='25px';
					underline.style.color  = 'black';
					underline.id = 'u' + i;
					document.getElementById('posicaoLetras').appendChild(underline);
				}

				botaoClicado = true;
			}
		}
	});
}

// Função para verificar se a letra escolhida está dentro da palavra
function letra(letraEscolhida){
	if(terminaJogo == false){
		for(var i = 0; i < palavra.length; i++){
			if(palavra[i].toLowerCase() == letraEscolhida.toLowerCase()){
				document.getElementById('u' + i).innerHTML = letraEscolhida.toUpperCase();
				verificaLetraExiste = true;
				pontos[i] = letraEscolhida;
			}
		}

		if(verificaLetraExiste == false){
			montarForca();
		}

		verificaLetraExiste = false;

		if(pontos.join('') == palavra){
			alert("Você venceu!");
			terminaJogo = true;
		}
	}
}

// Função para montar a forca a medida que o usuário for errando as letras
function montarForca(){
	alert("Letra não encontrada!");

	if(cabeca == false){
		$('.cabeca').css('display', 'block');
		cabeca = true;
	}
	else if(corpo == false){
		$('.corpo').css('display', 'block');
		corpo = true;
	}
	else if(bracoD == false){
		$('.bracoDireito').css('display', 'block');
		bracoD = true;
	}
	else if(bracoE == false){
		$('.bracoEsquerdo').css('display', 'block');
		bracoE = true;
	}
	
	else if(pernaD == false){
		$('.pernaDireita').css('display', 'block');
		pernaD = true;
	}
	else if(pernaE == false){
		$('.pernaEsquerda').css('display', 'block');
		pernaE = true;
		alert("Infelizmente você não conseguiu acertar a palavra.");
		terminaJogo = true;
	}
}

function revelarPalavra(palavra){
	alert(palavra.toUpperCase());
}
