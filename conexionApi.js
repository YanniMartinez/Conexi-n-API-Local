alert("Hola");
const formLogin = document.querySelector("#formLogin");

formLogin.addEventListener("submit", (e) =>{
    //Previene el envio del formulario para que no refresque la pagina
    //Si no lo ponemos entonces manda una peticion get con valores vacios
    e.preventDefault(); //NEcesito que te detengas y no ejecutes lo que debes hacer
    //Evitará mandar algo como /apiJava.html?email=""&password=""
    console.log(e);

    //Referenciando a elementos mediante su ID.
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");

    const emailError = document.querySelector("#emailError");
    const passwordError = document.querySelector("#passwordError");

    /* IF's por si existe se mandaron los campos vacios: */
    if(email.value == ''){
        emailError.textContent = "Error, favor de ingresar un email";
    }

    if(password.value == ''){
        passwordError.textContent = "Error, favor de ingresar un password";
    }

    //Si existen valores entonces puede hacer el fetch
    if( email.value != "" && password.value!="" ){
        //Como debemos hacer una peticion post debemos poner cosas despues del URL
        let req = fetch("http://localhost:8080/login",{
            method : 'POST',
            //Aquí iría todo lo referente al contenido como en el POST-Man
            //El JSON.stringify convierte el JSON a cadena para mandarlo
            body: JSON.stringify({
                //Valoresque enviará
                username: email.value,
                password: password.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then( resp => {
            token = resp.headers.get("Authorization");
            console.log(token);
            //Si la respuesta contiene el Bearear entonces si es un token valido
            if(token.includes('Bearer')){
                console.log(token);
                //Almacena en el local storage
                localStorage.setItem('token',token);
                //Obteniendo url en donde estamos situados
                url = window.location;
                console.log(url); //imprime la localizacion en la que estamos ubicados

                //Construyendo nuestro path, es decir la ruta en donde estamos
                const path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1);
                //El substring hace un recorte del texto, va del inicio hasta el ultimo "/" y devolverá ese indice

                //Lo redireccionamos a la otra pagina
                location.href= path + "success.html";
            }
            else{
                //Indica que los datos son incorrectos
                emailError.textContent = "Usuario o contraseña incorrecta";

                //Removiendo del local storage
                localStorage.removeItem('token');
            }
        })
    }
})