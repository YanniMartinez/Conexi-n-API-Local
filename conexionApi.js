alert("Hola");
const formLogin = document.querySelector("#formLogin");

formLogin.addEventListener("submit", (e) =>{

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
            method = 'POST',
            //Aquí iría todo lo referente al contenido como en el POST-Man
            //El JSON.stringify convierte el JSON a cadena para mandarlo
            body: JSON.stringify({
                //Valoresque enviará
                username: email.value,
                password: password.value
            })
        }).then((response ) => response.json) //El response lo pasamos a JSON
        .then((data) => console.log(data));
    }
})