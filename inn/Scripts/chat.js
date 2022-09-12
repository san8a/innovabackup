function send(){
$(".send-button").css({
    'background-color':'green',
    'border':'transparent',
    'color':'white',
    'font-size':'30px',
    'padding-left':'80px',
    'padding-top':'5px',
    'height':'45px',
    'width':'120px'
})
document.getElementById("send2").innerHTML="<i class='fa-solid fa-check'></i>";

setTimeout(function(){
    $(".send-button").css({
        'background-color':'var(--details-color)',
        'border':'transparent',
        'color':'white',
        'font-size':'20px',
        'padding-left':'50px',
        'padding-top':'10px',
        'height':'40px',
        'width':'150px'
    })
    document.getElementById("send2").innerHTML="Send <span><i class='fa-solid fa-paper-plane'></i></span>";
},1000)



var message = $(".message-chat").val();

  var datos = {
      "mensaje": message
      
  }
  
      $.ajax({
          url: "usermessage.php",
          data: datos,
          success: function(respuesta){
             $(".messages").html(respuesta)
             
          }
          }
  )
}


function actualizarchat(){

    $.ajax({
           url: "actu.php",
           success: function(respuesta){
              $(".messages").html(respuesta)
          setTimeout(actualizarchat(),1000)
           
             
              
           }
           })

         

          
     
 }  


