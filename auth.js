function login(usuario, contraseña) {
    if (usuario && contraseña) {
        console.log("Inicio de sesión correcto");
        return true;
    }

    console.log("Usuario y contraseña son obligatorios");
    return false;
}