var myform = document.getElementById("formulario");
var ventanaAceptar=document.getElementById("container_alert_validacion")

let=camposVacios= (valor,evento)=>{

    if(valor.value.length==0){
        evento.style.display="flex";
        return 0
    }else{
        evento.style.display="none";
        return 1 
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
    let contador=0;
   

    
    
    contador+=camposVacios(message,errorMessage);

    contador+=camposVacios(nombre,errorName);

    if(!expresion.test(email)){
        errorEmail.style.display="flex";
    }else{
        errorEmail.style.display="none";
        contador+=1 
    }

    return contador
    
    
    
  }
 

document.getElementById("btn-enviar").addEventListener("click", function () {
    ventanaAceptar.style.display="flex";
    if(validarFormulario()==3){
        document.body.classList.add('no-scroll');
        
        
        document.getElementById("btn-aceptar").addEventListener("click",()=>{
            myform.submit();
        })


        
    }
  
});