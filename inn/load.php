<?php
$conexion=new mysqli("localhost","root","","innova-users"); 
session_start();
$username=$_SESSION['user'];
$sq="SELECT * from progress WHERE name = '$username'";
$result=mysqli_query($conexion,$sq);
$mostrar=mysqli_fetch_array($result);



echo $mostrar['progress'];
?>