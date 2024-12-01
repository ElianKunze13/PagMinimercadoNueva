
                          
                           /*CODIGO PARA AGREGAR Y VER COMENTARIOS*/
function agregarMensaje(){
  let textoIngresado=document.getElementById("txtMensaje")
  let parrafoMensaje=document.createElement("p");
  parrafoMensaje.innerHTML=textoIngresado.value;
  let contenedor=document.getElementById("areaMensajes")
  contenedor.appendChild(parrafoMensaje)}
  
                  
  