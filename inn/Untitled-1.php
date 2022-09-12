?>


<?php 
$sq="SELECT * from messages WHERE user = 'admin'";
$result=mysqli_query($conexion,$sq);

while($mostrar=mysqli_fetch_array($result)){
 ?>


    <div class="" style=" border-radius: 44px;
background-color: var(--details-color);
width: 200px;
height: 20px;
font-size: 10px;
font-family: Poppins-light;
padding:20px;
margin:20px;"><span style=" font-family: Poppins;"><?php  echo $mostrar['user'] ?></span><br><?php  echo $mostrar['message'] ?><br><br></div>
<?php 
}
?>



<?php


?>


<?php 
$sq="SELECT * from messages WHERE user = '$nombre'";
$result=mysqli_query($conexion,$sq);

while($mostrar=mysqli_fetch_array($result)){
 ?>


    <div class="" style=" border-radius: 44px;
background-color: grey;
position: absolute;
top: 10%;
right: 10%;
width: 200px;
height: 20px;
font-size: 10px;
font-family: Poppins-light;
padding:20px;
margin:20px;"><span style=" font-family: Poppins;"><?php  echo $mostrar['user'] ?></span><br><?php  echo $mostrar['message'] ?><br><br></div>
<?php 
}
?>



<?php
