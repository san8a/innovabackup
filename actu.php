
<table border="0" width="30%;" style="background-color:transparent;">


<?php 
error_reporting(0);

include 'conexion.php';
$sql="SELECT * from messages";
$result=mysqli_query($conexion,$sql);
while($mostrar=mysqli_fetch_array($result)){  

  ?>

<tr>
    <b><td style="color:black;font-weight: bold;font-size:20px;"><?php echo $mostrar['user'] ?></td></b>
    <td style="color:black;font-weight: light;position:absolute;left: 80%;"><?php echo $mostrar['message'] ?></td>


</tr>

<?php 

}
?>
</table>