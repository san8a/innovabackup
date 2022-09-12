<?php
$conexion=new mysqli("localhost","root","","innova-users"); 
$pro = $_REQUEST['progress'];
session_start();
$username=$_SESSION['user'];
$sq="SELECT * from progress WHERE name = '$username'";
$result=mysqli_query($conexion,$sq);
$mostrar=mysqli_fetch_array($result);


$sql="UPDATE `progress` SET `progress`='$pro' WHERE  name = '$username'"; 
$r=mysqli_query($conexion,$sql);
?>