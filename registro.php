<?php
$nombre = $_REQUEST['username'];
$contraseña = $_REQUEST['password'];

include 'conexion.php';
$sql="INSERT INTO usernames VALUES (Null,'$nombre','$contraseña')"; 
$ejecutar=mysqli_query($conexion, $sql); 


$sl="INSERT INTO progress VALUES ('$nombre', 0)"; 
$eje=mysqli_query($conexion, $sl); 

?>


