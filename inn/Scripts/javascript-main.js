

//varibles
var x = 0;
var sliderCounter = 40;
var menuCounter=0;
var ventana_alto = $(window).height();
var ventana_ancho = $(window).width();
var loginCounter=0;
var inputPassword=document.getElementById("password-input");
var eyeCounter=0;
var send_button=document.getElementById("send")
var javaintroductioncounter=0;
var progressPHP;
var cuadroactual=0;

var r = document.querySelector(':root');

function letra(){
    setInterval(()=>{var ventana_ancho = $(window).width();if(ventana_ancho<=800){  $(".home").addClass("hidden")
    $(".about-us").addClass("hidden")
    $(".contact").addClass("hidden")
    $(".opinions").addClass("hidden")
}
else{
    $(".home").removeClass("hidden")
    $(".about-us").removeClass("hidden")
    $(".contact").removeClass("hidden")
    $(".opinions").removeClass("hidden")
}},100)
}
//const pageStyle = document.documentElement.style;

// var intervalID =  window.setInterval(width,100)
//     function width(){
//         var ventana_ancho = $(window).width();
//         console.log(ventana_ancho)
//       if(ventana_ancho==800){
    
//         $(".home").addClass("hidden")
//         $(".about-us").addClass("hidden")
//         $(".contact").addClass("hidden")
//         $(".opinions").addClass("hidden")
//         console.log("pequeña")
//     } 
//     else{
        
//         $(".home").removeClass("hidden")
//         $(".about-us").removeClass("hidden")
//         $(".contact").removeClass("hidden")
//         $(".opinions").removeClass("hidden")
//         $(".home").css('color','var(--color-main)')
//         $(".about-us").css('color','var(--color-main)')
//         $(".contact").css('color','var(--color-main)')
//         $(".opinions").css('color','var(--color-main)')
        
// }
//     }


//menu function

function menuResponsive(){
    if(menuCounter==0){
        $(".menu-responsive").removeClass("hidden")

        $(".menu").addClass("fa-x")
        $(".menu").removeClass("fa-bars")
        menuCounter=1
    }
    else{
        $(".menu-responsive").addClass("hidden")
        $(".menu").removeClass("fa-x")
        $(".menu").addClass("fa-bars")
        menuCounter=0
    }

}
    



//fucntion notification
function show(){
        
    x=document.getElementById('notification')
    x.classList.toggle("notification-show");

    x=document.getElementById('progress-bar')
    x.classList.toggle("progress-bar-animation");
    x.style.background="var(--details-color)"

    document.getElementById('notification').style.borderLeft="4px solid var(--details-color)";
    document.getElementById('icon-notification').style.color="var(--details-color)"
    document.getElementById('title-notification').innerText="Success!"
    document.getElementById('text-notification').innerText="Now you have a account!"

    setTimeout(function(){
        x=document.getElementById('notification')
    x.classList.toggle("notification-show");

    x=document.getElementById('progress-bar')
    x.style.background="transparent";
    x.classList.toggle("progress-bar-animation");




    }, 4000)
   
}

function showIncorrect(){
        
    x=document.getElementById('notification')
    x.classList.toggle("notification-show");
    x=document.getElementById('progress-bar')
    x.classList.toggle("progress-bar-animation");
    x.style.background="red"
    document.getElementById('notification').style.borderLeft="4px solid red";
    document.getElementById('icon-notification').style.color="red"
    document.getElementById('title-notification').innerText="Oops!"
    document.getElementById('text-notification').innerText="Something went wrong!"


    setTimeout(function(){
        x=document.getElementById('notification')
    x.classList.toggle("notification-show");

    x=document.getElementById('progress-bar')
    x.style.background="transparent";
    x.classList.toggle("progress-bar-animation");




    }, 4000)
    console.log("ejecutado el show")
}


//input strong
inputPassword.addEventListener('keyup', function(){
    var value=inputPassword.value;
    let alphabet = /[a-zA-Z]/,
    numbers = /[0-9]/,
    characters = /[!,@,#,$,%,^,&,*,?,_,(,),-,+,=,~]/

    if(value.match(alphabet)||value.match(numbers)||value.match(characters)){
        inputPassword.style.border="2px solid red"
        inputPassword.style.borderRadius="4px"
    }
    
    if(value.match(alphabet) && value.match(numbers) && value.length >= 6){
        inputPassword.style.border="2px solid orange"
        inputPassword.style.borderRadius="4px"
    }
    

    if(value.match(alphabet) && value.match(numbers) && value.match(characters) && value.length >= 8){
        inputPassword.style.border="2px solid green"
        inputPassword.style.borderRadius="4px"
    }
    
    
    if(value=="  "){
        inputPassword.style.border="tranparent"
    }





})
//ajax function

$(".login-form-button").click(function(){
var user = $(".input-user").val();
var passw = $(".input-password").val();
        var datos = {
            "username": user,
            "password": passw
            
        }
        if(loginCounter==0){
            $.ajax({
                url: "login.php",
                data: datos,
                success: function(respuesta){

                    if(respuesta==1){
                      
                        showIncorrect()
                     }
                     else{
                        window.location.href="profie.html";
                     }
                    
                }
                }
        )
        }
        else{
            $.ajax({

                url: "registro.php",
                data: datos,
                success: function(respuesta){
                    show()
                }
        })
    }    
    })


   
   
 //Start button function

 function hoverstartbutton(){
    $(".arrow-button").css({"width":"270px","height":"47px","border-radius":"20px"})
    $("#icon-start-button").removeClass("fa-solid fa-chevron-right")
    $("#icon-start-button").addClass("fa-solid fa-arrow-right")
    setTimeout(() => {
        $(".start-button").css({'background':'white','background-clip':'text','-webkit-background-clip':'text'})
    }, 200);
    
    
   
}
function hoverstartbutton2(){
   $(".arrow-button").css({"width":"40px","border-radius":"20px","height":"47px"})
   $("#icon-start-button").removeClass("fa-solid fa-arrow-right")
   $("#icon-start-button").addClass("fa-solid fa-chevron-right")
   setTimeout(() => {
    $(".start-button").css({'background':'var(--gradient)','background-clip':'text','-webkit-background-clip':'text'})
}, 300);
}
//login functions
function login(){

if($(".login-box").hasClass("hidden")){
   $(".login-box").removeClass("hidden");
   $("section").addClass('effect-blur')

}
}

function loginClose(){
   $(".login-box").addClass("hidden");
   $(".register-box").addClass("hidden");
   $("section").removeClass('effect-blur')
}

//eye function
$("#eye").click(function(){
    if(eyeCounter==0){
        $("#eye").addClass("fa-eye-slash")
        inputPassword.type="text"
        eyeCounter=1;
    }
    else{
        $("#eye").removeClass("fa-eye-slash")
        inputPassword.type="password"
        eyeCounter=0;
    }

})





function register(){
    var ventana_ancho = $(window).width();
    if(loginCounter==0){
//aqui cambia a sign up
    if(ventana_ancho<800){

         $(".login-illustration").css('background','url(images/study-from-books.png)')
         $(".login-illustration").css('background-size','cover')
         $(".login-title").text("Sign Up");
         $("#eye").css('transform','translate(80%)')
         $(".sub-box").css('background','transparent')
         document.getElementById('form-p').innerHTML="Have a account? <a href='#' onclick='register()'>Log in</a>";
   }
   else{
            $(".login-illustration").css('transform','translate(80% , 10%)')
            $(".login-illustration").css('background','url(images/study-from-books.png)')
            $(".login-illustration").css('background-size','cover')
            $(".login-title").text("Sign Up");
            document.getElementById('form-p').innerHTML="Have a account? <a href='javascript:void(0)' onclick='register()'>Log in</a>";
            $("input").addClass("positionv2")
            $(".icon-user").css('left','8%')
            $(".password-icon").css('left','8%')
            $(".sign-up-p").css('left','8%')
            $(".login-title").css('left','8%')
            $(".login-form-button").css('left','8%')
            $(".sub-box").css('left','45%')
            $(".login-illustration").css('top','3%')
            $(".eye").css('left','25%')
   }
   
    loginCounter=1;
   }
   else{

    //aqui cambia al log in
       if(ventana_ancho<800){
            $(".login-illustration").css('background','url(images/welcome.png)')
            $(".login-illustration").css('background-size','cover')
            $(".login-title").text("Log In");
            $("#eye").css('transform','translateX(-80%)')
            
            $(".sub-box").css('background','transparent')
       }
       else{
           $(".login-illustration").css('background','url(images/welcome.png)')
            $(".login-illustration").css('background-size','cover')
            $(".login-illustration").css('transform','translate(0% , 10%)')
            $(".login-illustration").css('top','-3%')
            $(".login-title").text("Log In");
            
            $("input").removeClass("positionv2")
            $(".icon-user").css('left','60%')
            $(".password-icon").css('left','60%')
            $(".sign-up-p").css('left','60%')
            $(".login-title").css('left','60%')
            $(".login-form-button").css('left','62%')
            $(".sub-box").css('left','0%')
            document.getElementById('form-p').innerHTML="Don´t Have a account? <a href='javascript:void(0)' onclick='register()'>Sign up</a>";
            $(".eye").css('left','78%')
       }
            
  
       document.getElementById("switcher").value="1";
   loginCounter=0;
   }
 }
function cargarTheme(){ 
if(localStorage.getItem('dark-mode') === 'true'){
    r.style.setProperty('--details-color', '#11998e')
    r.style.setProperty('--color-main','#000')
    r.style.setProperty('--gradient','linear-gradient(to right, #11998e, #38ef7d)')
    r.style.setProperty('--font-color','white')
    r.style.setProperty('--grey','#292828')
    r.style.setProperty('--menu1','black')
    $('.login-button').css('color','white')
    $('.texto-main').css('color','white')
    r.style.setProperty('--sombra','rgba(255, 255, 255, 0.2)')
    r.style.setProperty('--button-background','black')
    $('#button-theme').css('background-image','url(../images/secondary-moon.png)')
    $('.menu-list').css('color','white')
    $('.logo-main').css('background-image','url(../images/logo-blanco-verde.jfif)')
    r.style.setProperty('--menu','#11998e')
    
    $('.details-section').css('background-color','black')   
    // r.style.setProperty('--color-degradado','#8b5beb9a')
}
else{
    r.style.setProperty('--details-color', '#8b5beb')
    r.style.setProperty('--color-main','#fff')
    r.style.setProperty('--gradient','linear-gradient(to right, #c742bc, #7673f3)')
    r.style.setProperty('--font-color','black')
 r.style.setProperty('--button-background','white')  
 $('#button-theme').css('background-image','url(../images/moon.png)')
    r.style.setProperty('--grey','#f0f0f0')
    r.style.setProperty('--menu1','white')
    $('.login-button').css('color','black')
    r.style.setProperty('--sombra','rgba(0,0,0,0.20)')
    $('.menu-list').css('color','black')
    r.style.setProperty('--menu','black')
    $('.texto-main').css('color','black')
    $('.logo-main').css('background-image','url(../images/logo2.png)')
    // r.style.setProperty('--color-degradado','#1caca0b6')
}
}





$("#button-theme").click(function(){
   

if(localStorage.getItem('dark-mode')==='true'){

    //white theme
    r.style.setProperty('--details-color', '#8b5beb')
    r.style.setProperty('--color-main','#fff')
    r.style.setProperty('--gradient','linear-gradient(to right, #c742bc, #7673f3)')
    r.style.setProperty('--font-color','black')
    localStorage.setItem('dark-mode','false');
    r.style.setProperty('--grey','#f0f0f0')
    r.style.setProperty('--menu1','black')
    r.style.setProperty('--button-background','white')
    r.style.setProperty('--sombra','rgba(0,0,0,0.20)')
    $('.login-button').css('color','black')
    $('.menu-list').css('color','black')
    $('#button-theme').css('background-image','url(../images/moon.png)')
    $('.logo-main').css('background-image','url(../images/logo2.png)')
    r.style.setProperty('--menu','black')
    $('.texto-main').css('color','black')
    $('.details-section').css('background-color','var(--details-color)')
    // r.style.setProperty('--color-degradado','#8b5beb9a')
}
else{

    //black theme
    r.style.setProperty('--details-color', '#11998e')
    r.style.setProperty('--color-main','#000')
    r.style.setProperty('--gradient','linear-gradient(to right, #11998e, #38ef7d)')
    r.style.setProperty('--font-color','white')
    localStorage.setItem('dark-mode','true');
    r.style.setProperty('--grey','#292828')
    r.style.setProperty('--menu1','white')
    r.style.setProperty('--button-background','black')
    r.style.setProperty('--sombra','rgba(255, 255, 255, 0.2)')
    $('#button-theme').css('background-image','url(../images/secondary-moon.png)')
    $('.login-button').css('color','white')
    $('.menu-list').css('color','white')
    r.style.setProperty('--color-degradado','#11998e8f')
    $('.logo-main').css('background-image','url(../images/logo-blanco-verde.jfif)')
    r.style.setProperty('--menu','#11998e')
    $('.details-section').css('background-color','black')
    $('.texto-main').css('color','white')
    // r.style.setProperty('--color-degradado','#1caca0b6')
}
    

})
   




$(".button-slider-left").click(function(){
    
  


})

$(".button-slider-right").click(function(){
    if(sliderCounter==0){
        $(".opinion1").css('left','10%')
        $(".opinion2").css('left','100%') 
        sliderCounter=0;
    }

    if(sliderCounter==1){
        $(".opinion1").css('left','10%')
        $(".opinion2").css('left','220%')
        $(".opinion3").css('left','210%') 
        sliderCounter=0;

    }

    if(sliderCounter==2){
        $(".opinion3").css('left','200%')
        $(".opinion2").css('left','10%') 
        sliderCounter=0;
    }



})

function alert(){
    
    var ventana_ancho = $(window).width();

    if(ventana_ancho<=800){

    }else{ $(".back-button").css({
       'width':'140px'

   })
   $(".back").css('left','3.5%')}

  
}
function antialert(){
    if(ventana_ancho<=800){

    }else{ 
    $(".back-button").css({
        'width':'130px'
 
    })
    $(".back").css('left','3%')}
}



function profilePicture1(){
    $(".profile-icon").css("opacity","0")
    $(".pencil-icon").css("opacity","1")
}

function profilePicture2(){
    $(".profile-icon").css("opacity","1")
    $(".pencil-icon").css("opacity","0")
}



function accountButton(){
    $(".info-submit").css('display','block')
    $(".mail-input").css('display','block')
    document.getElementById("myChart").style.display="none";
}

function javascriptButton(){
    document.getElementById("myChart").style.display="block";
    $(".info-submit").css('display','none')
    $(".mail-input").css('display','none')  
}

function redi(x){
   window.location.href =x;
}




function bien(){
    this.style.backgroundColor="green";
}

function buena(){
$("#buena").css({'background-color':'green','color':'white'})
javaintroductioncounter=javaintroductioncounter+1;
}
function mala(){
    $(".respuesta-div").css({'background-color':'red','color':'white'})
    $("#buena").css({'background-color':'green','color':'white'})
}
function buena2(){
    $("#buena2").css({'background-color':'green','color':'white'})
    javaintroductioncounter=javaintroductioncounter+1;
    }
    function mala2(){
        $(".respuesta-div2").css({'background-color':'red','color':'white'})
        $("#buena2").css({'background-color':'green','color':'white'})
    }


    function buena1js(){
        $("#buena").css({'background-color':'green','color':'white'})
        javaintroductioncounter=javaintroductioncounter+2;
        }
        function buena1js2(){
            $("#buena2").css({'background-color':'green','color':'white'})
            javaintroductioncounter=javaintroductioncounter+2;
            }
            function mala(){
                $(".respuesta-div").css({'background-color':'red','color':'white'})
                $("#buena").css({'background-color':'green','color':'white'})
                
            }   
        function mala2(){
            $(".respuesta-div2").css({'background-color':'red','color':'white'})
            $("#buena2").css({'background-color':'green','color':'white'})
            
        }


    
function progressFunction(){
    if(javaintroductioncounter>=2){
        var datos = {
            "progress": javaintroductioncounter
        }
            $.ajax({

                url: "progress.php",
                data: datos,
                success: function(respuesta){
                    
                }
        })
    }
}



     
// }
// else{
//     console.log(javaintroductioncounter)
// }

       
        
function cargarGrafica(){const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
type: 'doughnut',
data: {
labels: ['Incompleted', 'Completed'],
 datasets: [{
     
     data: [8, progressPHP],
     backgroundColor: [
         'rgba(255, 99, 132, 0.2)',
         'rgba(99, 255, 182, 0.2)',
         
     ],
     
     borderWidth: 1
 }]
},
options: {
 
}
});}

function load(){
    console.log("hola")
    $.ajax({

        url: "load.php",
        success: function(respuesta){
            progressPHP=respuesta;
            console.log(progressPHP)
            cargarGrafica()
        }
})
}

function loadinfo(){
    $.ajax({

        url: "load2.php",
        success: function(respuesta){
           document.getElementById("name").innerHTML=respuesta;
        }
})
}



function showExample(){
$(".img-lesson-one").css("display","block")
$(".gobo-texto").css("display","none")
$(".flecha-text").css("display","none")
$(".flecha2").css("display","none")
}

$(document).ready(function() {
  $(window).scroll(function() {
    if($(window).width()<=700){
        $('.menu').css('position','absolute')
    }
    else{
        $('.menu').css('position','fixed')
    if ($(document).scrollTop() > 50) {
      $(".menu").addClass("menu-scroll")
      if(localStorage.getItem('dark-mode')==='true'){
  
    }
    else{
         $('.menu-list').css('color','black')
$('.logo-main').css('background-image','url(../images/logo-morado-blanco.png)')
} 
    
      $('.menu-list').css('color','var(--menu-font-color)')
      
    } else {
        $(".menu").removeClass("menu-scroll")
       
        if(localStorage.getItem('dark-mode')==='true'){

        }
        else{
             $('.menu-list').css('color','black') 
                $('.logo-main').css('background-image','url(../images/logo2.png)')

    } 
        }
         
    }
  });
});

function emparejar(opcion){
    cuadroactual=opcion;

}
function verificar(){
    if(cuadroactual==1){
        $(".div").css('background-color')
    }
        
}