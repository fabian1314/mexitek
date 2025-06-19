
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>MEXItek | Contacto</title>
    <style>
        :root {
            --azul-oscuro: #002B5B;
            --azul-medio: #0066CC;
            --azul-claro: #E3F2FD;
            --gris-oscuro: #333;
            --blanco: #fff;
        }

        body {
            font-family: 'Segoe UI', sans-serif;
            background-color: var(--azul-claro);
            color: var(--gris-oscuro);
            margin: 0;
            padding: 0;
        }

        header {
            background-color: var(--azul-oscuro);
            color: var(--blanco);
            text-align: center;
            padding: 30px 20px;
        }

        h1 {
            margin: 0;
            font-size: 2.5rem;
        }

        section {
            max-width: 600px;
            background-color: var(--blanco);
            margin: 40px auto;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }

        label {
            font-weight: bold;
            display: block;
            margin-top: 15px;
        }

        input, textarea {
            width: 100%;
            padding: 12px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 6px;
            font-size: 1rem;
        }

        button {
            background-color: var(--azul-medio);
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1.1rem;
            margin-top: 20px;
            width: 100%;
        }

        button:hover {
            background-color: #004999;
        }

        .mensaje-exito {
            background-color: #d4edda;
            color: #155724;
            border-left: 6px solid #28a745;
            padding: 12px;
            margin-top: 20px;
            border-radius: 6px;
        }

        footer {
            text-align: center;
            padding: 20px;
            background-color: var(--azul-oscuro);
            color: var(--blanco);
            margin-top: 40px;
        }
    </style>
</head>
<body>

<header>
    <h1>Contacto | MEXItek</h1>
    <p>Déjanos tu mensaje y te responderemos pronto</p>
</header>

<section>
    <?php
    $host = "localhost";
    $usuario = "root";
    $clave = "";
    $bd = "mexitek_db";

    $conexion = new mysqli($host, $usuario, $clave, $bd);

    if ($conexion->connect_error) {
        die("Error de conexión: " . $conexion->connect_error);
    }

    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $nombre = $conexion->real_escape_string($_POST["nombre"]);
        $correo = $conexion->real_escape_string($_POST["correo"]);
        $mensaje = $conexion->real_escape_string($_POST["mensaje"]);

        $sql = "INSERT INTO mensajes_contacto (nombre, correo, mensaje)
                VALUES ('$nombre', '$correo', '$mensaje')";

        if ($conexion->query($sql)) {
            echo "<div class='mensaje-exito'>✅ Mensaje enviado con éxito. ¡Gracias por contactarnos!</div>";
        } else {
            echo "<p>Error al guardar el mensaje: " . $conexion->error . "</p>";
        }
    }

    $conexion->close();
    ?>

    <form method="POST" action="">
        <label for="nombre">Nombre:</label>
        <input type="text" name="nombre" id="nombre" required />

        <label for="correo">Correo electrónico:</label>
        <input type="email" name="correo" id="correo" required />

        <label for="mensaje">Mensaje:</label>
        <textarea name="mensaje" id="mensaje" rows="5" required></textarea>

        <button type="submit">Enviar mensaje</button>
    </form>
</section>

<footer>
    &copy; 2025 MEXItek. Todos los derechos reservados.
</footer>

</body>
</html>
