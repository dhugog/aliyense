function removCorpo(corpo, proxCorpo) {
	var corpo;
	var proxCorpo = document.getElementById(proxCorpo);
	if(corpo = document.getElementById(corpo)) {
		corpo.style.transitionDelay = "0s";
		
		if(proxCorpo) {
			if(proxCorpo.style.left == "-100%") {
				corpo.style.left = "100%";
			}
			
			else {
				corpo.style.left = "-100%";
			}
		}
		
		else {
			restaurarTitulo();
			corpo.style.left = "100%";
		}
		corpo.style.marginLeft = "0%";
	}
}

function addCorpo(corpoAntes, corpo) {
	var corpo = document.getElementById(corpo);
	var corpoAntes;
	if(!(corpoAntes = document.getElementById(corpoAntes))) {
		diminuirTitulo();
		corpo.style.transitionDelay = "0s";
	}
	else {
		corpo.style.transitionDelay = ".3s";
	}
	
	corpo.style.left = "50%";
	corpo.style.marginLeft = "-40%";
}

function diminuirTitulo() { 
	var titulo = document.getElementById("titulo");
	titulo.style.animation = "diminuirTitulo .4s";
	titulo.style.position = "relative";
	titulo.style.right = "0%";
	titulo.style.top = "15px";
	titulo.style.fontSize = "24pt";
	titulo.style.textShadow = "none";
	document.getElementById("menu").style.zIndex = "1000";
}

function restaurarTitulo() {
	var titulo = document.getElementById("titulo");
	titulo.style.animation = "restauraTitulo .6s";
	titulo.style.position = "absolute";
	titulo.style.fontSize = "146pt";
	titulo.style.right = "5%";
	titulo.style.top = "370px";	
	titulo.style.textShadow = "3px 3px 4px rgba(255,255,255,.6), 3px 3px 4px rgba(0,0,0,1)";
}

function dropDownMenu() {
	var menu = document.getElementById("menu");
	var div1 = document.getElementsByClassName("btnMenuDiv")[0];
	var div2 = document.getElementsByClassName("btnMenuDiv")[1];
	var div3 = document.getElementsByClassName("btnMenuDiv")[2];
	
	if(menu.style.right == "0px") {
		menu.style.right = "-136px";
	}
	else {
		menu.style.right = "0px";
	}
	
	if(div3.style.backgroundColor == "rgb(86, 7, 222)") {
		div1.style.backgroundColor = "white";
		div2.style.backgroundColor = "white";
		div3.style.backgroundColor = "white";
	}
	else {
		div1.style.backgroundColor = "rgb(86, 7, 222)";
		div2.style.backgroundColor = "rgb(86, 7, 222)";
		div3.style.backgroundColor = "rgb(86, 7, 222)";
	}
}