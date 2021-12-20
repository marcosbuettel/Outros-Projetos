window.onload = function(){

	var iniciar = $('.iniciaCorrida');
	var imagem = $('.boxPista img');
	var imagemTurbo;
	var carro;
	var confirma = false;
	var contador;
	var margin = [1,2,3,4,5,6];
	var ganhador;
	var carroEscolhido;

	//Aqui vai iniciar a corrida depois de clicar no botão
	iniciar.click(function(){		

		if(confirma == false){  //verificando se o botão de iniciar já foi clicado e a corrida iniciou

			if($('#carro1').prop("checked") || $('#carro2').prop("checked") || $('#carro3').prop("checked")
				|| $('#carro4').prop("checked") || $('#carro5').prop("checked") || $('#carro6').prop("checked")){

				confirma = true; //para o botão de iniciar não poder ser acionado quando a corrida começar

				if($('#carro1').prop("checked")){  //condições para verificar o carro escolhido e colocar borda
					carro = $('.boxPista:nth-child(1) img');
					carro.css('border', 'solid 8px white');
					carroEscolhido = "Máquina do Mal!";
				}
				else if($('#carro2').prop("checked")){
					carro = $('.boxPista:nth-child(2) img');
					carro.css('border', 'solid 8px white');
					carroEscolhido = "CUPÊ Mal-Assombrado!";
				}
				else if($('#carro3').prop("checked")){
					carro = $('.boxPista:nth-child(3) img');
					carro.css('border', 'solid 8px white');
					carroEscolhido = "Penélope Charmosa!";
				}
				else if($('#carro4').prop("checked")){
					carro = $('.boxPista:nth-child(4) img');
					carro.css('border', 'solid 8px white');
					carroEscolhido = "Carroça a Vapor!";
				}
				else if($('#carro5').prop("checked")){
					carro = $('.boxPista:nth-child(5) img');
					carro.css('border', 'solid 8px white');
					carroEscolhido = "Carrão Aerodinâmico!";
				}
				else if($('#carro6').prop("checked")){
					carro = $('.boxPista:nth-child(6) img');
					carro.css('border', 'solid 8px white');
					carroEscolhido = "Carro-Tronco!";
				}

				$('.pistaDeCorrida').css('display', 'block');

				for(let i=0; i<66; i++){ //for vai at[e 66 para que pelo menos um carro consiga vencer
					
					if(margin[0] >= 550){ //condições para parar o for quando tiver um vencedor
						ganhador = "Máquina do Mal!";
						break;
					}
					if(margin[1] >= 550){
						ganhador = "CUPÊ Mal-Assombrado!";
						break;
					}
					if(margin[2] >= 550){
						ganhador = "Penélope Charmosa!";
						break;
					}
					if(margin[3] >= 550){
						ganhador = "Carroça a Vapor!";
						break;
					}
					if(margin[4] >= 550){
						ganhador = "Carrão Aerodinâmico!";
						break;
					}
					if(margin[5] >= 550){
						ganhador = "Carro-Tronco!";
						break;
					}

					contador = Math.floor(Math.random() * 6); //gerar um número randômico			

					if(contador == 0){  //condiçao para dar uma margem para o carro ir para frente
						imagemTurbo = $('.boxPista:nth-child(1) img');
						if(margin[0] <= 550){
							imagemTurbo.animate({
								marginLeft: "+=50px",
							}, 200);
						}
						margin[0] += 50;
					}	
					else if(contador == 1){
						imagemTurbo = $('.boxPista:nth-child(2) img');
						if(margin[1] <= 550){
							imagemTurbo.animate({
								marginLeft: "+=50px",
							}, 200);
						}
						margin[1] += 50;
					}	
					else if(contador == 2){
						imagemTurbo = $('.boxPista:nth-child(3) img');
						if(margin[2] <= 550){
							imagemTurbo.animate({
								marginLeft: "+=50px",
							}, 200);
						}
						margin[2] += 50;
					}	
					else if(contador == 3){
						imagemTurbo = $('.boxPista:nth-child(4) img');
						if(margin[4] <= 550){
							imagemTurbo.animate({
								marginLeft: "+=50px",
							}, 200);
						}
						margin[3] += 50;
					}	
					else if(contador == 4){
						imagemTurbo = $('.boxPista:nth-child(5) img');
						if(margin[4] <= 550){
							imagemTurbo.animate({
								marginLeft: "+=50px",
							}, 200);
						}
						margin[4] += 50;
					}	
					else if(contador == 5){
						imagemTurbo = $('.boxPista:nth-child(6) img');
						if(margin[5] <= 550){
							imagemTurbo.animate({
								marginLeft: "+=50px",
							}, 200);
						}
						margin[5] += 50;
					}	
				}//FIM DO FOR

				setTimeout(function(){
					vencedor(ganhador, carroEscolhido);
				} ,2500);
			}
			else{
				alert("Escolha um carro!");
			}
		}
	})


	//função para rolar a tela até a pista de corrida que estava escondida
	$('.pista').click(function(){
	    var el = $(this).attr("href");
	    $('html, body').animate({
	      scrollTop: $(el).offset().top
	    }, 1000);	 
		return false;
	});	

	confirma = false;
}

function vencedor(ganhador, carroEscolhido){
	alert("O vencedor é: " + ganhador);

	if(ganhador == carroEscolhido){
		alert("Parabéns! O seu carro venceu a corrida!");
	}
	else{
		alert("Infelizmente seu carro não venceu, mais sorte na próxima!");
	}

}