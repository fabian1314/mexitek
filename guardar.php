<?php
$conexion = new mysqli("localhost", "root", "", "mexitek");
if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}

$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];

$sql = "INSERT INTO mensajes (nombre, correo, mensaje) VALUES ('$nombre', '$correo', '$mensaje')";

if ($conexion->query($sql) === TRUE) {
    echo "Mensaje enviado correctamente. <a href='inicio.html'>Volver</a>";
} else {
    echo "Error: " . $sql . "<br>" . $conexion->error;
}

$conexion->close();
?>
