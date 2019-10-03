var btnMenu = document.getElementById('btnMenu');
var pagina = document.getElementById('pagina');
var contenido = document.getElementById('contenido');

var desplegarMenu = function(){
	pagina.classList.toggle("real");
	//Toggle es un switch

}
var volverALaPagina = function(){
	pagina.classList.remove("real");
}



btnMenu.addEventListener('click', desplegarMenu);
contenido.addEventListener('click', volverALaPagina);

