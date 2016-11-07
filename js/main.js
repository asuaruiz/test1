/*function anadirBtn(){
	var btnJs = document.createElement("button");
	var texto = document.createTextNode("Boton JS");
	btnJs.appendChild(texto);
//	btnJs.type = "button";
	btnJs.id = "btn-js";
	btnJs.setAttribute("href","#");
	btnJs.setAttribute("id","myList")
	btnJs.classList.add("btn","btn-primary");
	document.getElementById("padreBtn").appendChild(btnJs)
	//document.getElementsByTagName("li")[0].appendChild(btnJs);
}
anadirBtn();*/


function anadirHijo() {
    var node = document.createElement("li");
    var textnode = document.createTextNode("Hijo Js 1");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
}
anadirHijo();
