var nombre=document.getElementById("name").value;
let email=document.getElementById("email").value;
let message=document.getElementById("menssage").value;
let expresion=/\w+@+\w+\.+[a-z]/;
let errorName=document.getElementById("errorName")
let errorEmail=document.getElementById("errorEmail")
let errorMessage=document.getElementById("errorMessage")





function slider(nom_list,nom_indi,){
  new Glider(document.querySelector(nom_list),{
    slidesToShow: 2,
    slidesToScroll: 1,
    draggable: true,
    

    dots: nom_indi,
    arrows: {
      prev: '.carousel__anterior',
      next: '.carousel__Siguiente'
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 800,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 3,
          slidesToScroll: 2,
    
          duration: 0.25
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
  
          duration: 0.25
        }
      }
    ]

  });

}

window.addEventListener("load",slider(".carousel__lista1",'.carousel__indicador1') )
window.addEventListener("load",slider(".carousel__lista2",'.carousel__indicador2'))



