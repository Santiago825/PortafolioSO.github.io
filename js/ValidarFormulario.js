var myform = document.getElementById("formulario");

function camposVacios(valor,evento){

    if(valor.value.length==0){
        evento.style.display="flex";
        return false
    }else{
        evento.style.display="none";
        return true 
    }
}
function validarFormulario(){
    let nombre=document.getElementById("name");
    let email=document.getElementById("email").value;
    let message=document.getElementById("menssage");
    let expresion=/\w+@+\w+\.+[a-z]/;
    let errorName=document.getElementById("errorName")
    let errorEmail=document.getElementById("errorEmail")
    let errorMessage=document.getElementById("errorMessage")


    camposVacios(nombre,errorName);
    camposVacios(message,errorMessage);
    if(!expresion.test(email)){
        errorEmail.style.display="flex";
    }else{
        errorEmail.style.display="none"; 
    }
    
    
    
  }

document.getElementById("btn-enviar").addEventListener("click", function () {
  myform.submit();
});