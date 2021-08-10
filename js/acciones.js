document.readyState;
//funcion abrir foto
function vista_p(datos){
    document.getElementById("verImg").src = datos.src;
    document.getElementById("ventanaImagen").style.display = 'block';
}
//funcion para cerrar la vista de las fotos
function cerrar_vista_p(){
    document.getElementById('ventanaImagen').style.display = 'none';
}

//abrir menu
var contador = 1;
function abrir_menu(){
    if(contador === 1){
      document.getElementById('menuCont').style.left='0';
      contador = 0
    }else{
        document.getElementById('menuCont').style.left='-100%';
        contador =1;
    }  
}
//cerrar menu
function cerrar_menu(){
        document.getElementById('menuCont').style.left='-100%';
    
}