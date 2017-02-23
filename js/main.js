//function validar()
$(document).ready(function()
    {
    $("#name").keyup(validateNombre);
    $("#lastname").keyup(validateApellido);
    $("#email").keyup(validateEmail);
    $("#input-password").keyup(validatePass);
    $("#select").keyup(validateSelector)
});

/*
function removeMessage(_inputID)
{
	var elemento = document.getElementById(_inputID);

	if(elemento.nextSibling != null)
	   elemento.parentNode.removeChild(elemento.nextSibling);
	
}

function createMessage(_inputID, _message)
{
	var elemento = document.getElementById(_inputID);

	if(elemento.nextSibling == null)
	{
		//El span no existe
		var span = document.createElement('span');
		span.innerHTML = _message;
		elemento.parentNode.appendChild(span);
	}else{
		//El span ya existe
		if(elemento.nextSibling.tagName == 'SPAN')
		{
			elemento.nextSibling.innerHTML = _message;
		}else{
			elemento.parentNode.removeChild(elemento.nextSibling);

			var span = document.createElement('span');
			span.innerHTML = _message;
			elemento.parentNode.appendChild(span);
            
		}
	}
}

//VALIDACION DE NOMBRE

function validateNombre(_evt){
    
        var nombre = document.getElementById("name").value;

        var nombreArray = nombre.split("");
        var primeraLetra = nombreArray[0];
        var mayuscula = primeraLetra.toUpperCase();
        var separacion= false;
    
      
        for(var i=1; i<nombreArray.length; i++){
            if(separacion)
            {    
                mayuscula+= nombreArray[i].toUpperCase();
                
            }
            else
                mayuscula+=nombreArray[i];
            if(nombreArray[i] == " ")
                separacion= true;
            
        }
       document.getElementById("name").value = mayuscula;
   
}
*/

function validateNombre(){
    
   //var nombre=document.getElementById("name").value;
    var nombre = $("#name").val();
    //var text="Ingrese su nombre";
    
    if(nombre .length == 0){
        $("#name").after ("<span>Ingrese su nombre</span>")
    }
    else{
       // removeMessage("name");
        $(".name-container  span").remove();
    }
}
  
//VALIDACION DE APELLIDO

function validateApellido(){
    //var apellido=document.getElementById("lastname").value;
    var apellido = $("#lastname").val();
    
    //var text="Ingrese su apellido";
    
    if(apellido.length== 0){
        //createMessage("lastname", text);
        $("#lastname").after("<span>Ingrese su apellido</span>")
    }
    else {
        //removeMessage("lastname");
        $(".lastname-container span").remove();
    }
}


//VALIDACION DE EMAIL.
    
function validateEmail(){
    
  //var email = document.getElementById("email");
  var email = $("#email").val();
 // var text ="Correo inválido. Ejemplo: name@enlace.xy";
    
    if(/([a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]+)/g.test(email)){
        //removeMessage("email");
        $(".email-container  span").remove();
        
    }else{
        
        if(email.length>=0){
           // createMessage("email",text);
           $("#email").after("<span>Correo inválido. Ejemplo: name@enlace.xy</span>")
        }
    }
}

//VALIDACION DE CONTRASEÑA

function validatePass(){
    
      //var pass=document.getElementById("input-password");
      var pass = $("#input-password").val();
     // var text= "Ingrese su contraseña";
      
      if(pass ==="123456"||pass === "098754"||pass.length<=6){
        // createMessage("input-password",text);
         $("#input-password").after("<span>Ingrese su contraseña</span>")
        
      }else{
         // removeMessage("input-password");
         $(".form-group  span").remove();
      }
  }

//VALIDACION DE SELECTOR

function validateSelector(){
   // var selector= document.getElementById("select").value;
   var selector =$("#select").val();
    //var text="Escoger al menos un tipo de bicicleta";
    
    if(selector==0){;
        //createMessage("select",text);
        $("#select").after("<span>Escoger al menos un tipo de bicicleta</span>")
    }else{
        //removeMessage("select");
        $(".form-group  span").remove();
    }
}
function validateForm(){
    validateSelector();
    validatePass();
    validateNombre();
    validateApellido();
    validateEmail();
}