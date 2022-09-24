<?php

// error_reporting(E_ERROR |  E_PARSE);



$nombre = $_REQUEST['username'];
$contraseña = $_REQUEST['password'];


$conexion=new mysqli("localhost","root","","innova-users"); 
session_start();
$_SESSION['user']=$_REQUEST['username'];
$q = "SELECT COUNT(*) as contar from usernames WHERE password = '$contraseña' AND username = '$nombre'  ";
$consulta = mysqli_query($conexion,$q);
$array = mysqli_fetch_array($consulta);
if ($array['contar']>0) { 
	
	if($nombre=="admin"){
		echo 2;
	}
	else{
		echo 3;
	}

    
    // echo $_SESSION['user'];

    

}
else{
	echo 1;
}
?>


