const clave = "amor123"; // cambia la contraseña

function entrar(){
    const pass = document.getElementById("pass").value;
    if(pass === clave){
        document.getElementById("login").style.display="none";
        document.getElementById("app").style.display="block";
        document.getElementById("musica").play();
    } else {
        alert("Contraseña incorrecta 💔");
    }
}

function ver(img){
    document.getElementById("modal").style.display="flex";
    document.getElementById("modal-img").src = img;
}

function cerrar(){
    document.getElementById("modal").style.display="none";
}
