token = localStorage.getItem('token');

if(!token){//Si no hay token lo manda al inicio de sesión
    url = window.location;
    console.log(url);
    const path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1)

    location.href = path + 'apiJava.html';
}


/** Esto iria en otro archivo */
const btnUsers = document.querySelector("#btnUsers");
btnUsers.addEventListener("click", () =>{
    //Si solo tuvieramos esto tendriamos un error, por ello debemos mandar headers:
    //fetch("http://localhost:8080/users/")

    /**
     * La siguiente peticion hará una petición a la API, si no se tiene el token
     * no se tiene acceso al sistema, en este casso 
     */
    fetch("http://localhost:8080/users/",{
        method: "GET",
        headers:{
            "Authorization": token,
            "Content-Type": "application/json" /*Hace referencia al tipo de contenido que devolverá */
        }
    }).then(resp => resp.json()).then(data =>{
        console.log(data);
    })
})

/**A traves del token la API sabe de que usuario se trata */


/**
 * TODO: Otra consulta, permite obtener toda información del usuario mediante el token
 */
/** Esto iria en otro archivo */
const btnUsers2 = document.querySelector("#btnUsers2");
btnUsers2.addEventListener("click", () =>{
    //Si solo tuvieramos esto tendriamos un error, por ello debemos mandar headers:
    //fetch("http://localhost:8080/users/")

    /**
     * La siguiente peticion hará una petición a la API, si no se tiene el token
     * no se tiene acceso al sistema, en este casso 
     */
    fetch("http://localhost:8080/user/auth",{
        method: "GET",
        headers:{
            "Authorization": token,
            "Content-Type": "application/json" /*Hace referencia al tipo de contenido que devolverá */
        }
    }).then(resp => resp.json()).then(data =>{
        console.log(data);
    })
})