//Joaquín Bono Pineda


//usuarios y contraseñas logeados en nuestra web
var usuarios = [
    {
        usuario:'joaquin',
        password: 'admin1',
        admin: true
    },
    {
        usuario:'jose',
        password:'user1',
        admin: false
    },
    {
        usuario:'dani',
        password:'user2',
        admin: false
    }
]

var estaRegistrado=false;//Variable que nos indica si se han logeado en nuestra web
var userName="";//Guarda el nombre del usuario que se ha logeado

//Función que valida que el usuario introducido y la contraseña coincida con nuestros usuarios registrados
function validaLogin(){
    let password=document.getElementById("password").value;
    let user=document.getElementById("user").value;
    let esCorrecto=false;
    let userCorrecto=false;
    let i=0;
    esAdmin=false;

    while(!esCorrecto && i<usuarios.length){
        if(user == usuarios[i]['usuario']){
            userCorrecto=true;
            document.getElementById("errorUsu").innerHTML="";
            if(userCorrecto && password == usuarios[i]['password']){
                esCorrecto=true;
                document.getElementById("errorPass").innerHTML="";
                if(usuarios[i]['admin']){
                    esAdmin=true;
                }

                userName=user;
                estaRegistrado=true;
                location.href="index_usuario.html";

            } else{
                document.getElementById("errorPass").innerHTML="Usuario o contraseña incorrectos";
            }  
        } else{
            document.getElementById("errorPass").innerHTML="Usuario o contraseña incorrectos";
        }
        i++;
    }

    return esCorrecto;
     
}

/*
function $(selector){
    return document.querySelector(selector);
}



function compruebaLogin() {
    if(estaRegistrado){
        document.getElementById("simboloLogin").style.display="none";
        document.getElementById("cierre").style.display="block";
    } else{
        document.getElementById("simboloLogin").style.display="block";
        document.getElementById("cierre").style.display="none";
    }
    alert("Ya estas cffefefegistrado");
}

window.onload = function(){
    let login=document.getElementById("simboloLogin");
    let cierre=document.getElementById("cierre")
    if(estaRegistrado){
        login.style.display="none";
       cierre.style.display="block";
    } else{
        login.style.display="block";
       cierre.style.display="none";
    }
}
*/

//Scroll arriba de la pagina
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('a.scroll-top').fadeIn('slow');

    } else {
        $('a.scroll-top').fadeOut('slow');
    }
});

$('a.scroll-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 600);
});

