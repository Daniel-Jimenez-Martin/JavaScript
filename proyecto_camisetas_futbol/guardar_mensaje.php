<?php
// Conexión con la base de datos
$conexion = new mysqli("localhost", "root", "", "contacto");

if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}

// Obtener datos del formulario
$nombre = $conexion->real_escape_string($_POST['nombre']);
$email = $conexion->real_escape_string($_POST['email']);
$mensaje = $conexion->real_escape_string($_POST['mensaje']);

// Insertar datos
$sql = "INSERT INTO mensajes (nombre, email, mensaje) VALUES ('$nombre', '$email', '$mensaje')";

if ($conexion->query($sql) === TRUE) {
    echo "Mensaje enviado correctamente.";
} else {
    echo "Error: " . $conexion->error;
}

$conexion->close();
?>
