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
    fetch("http://localhost:8080/users/",{
        method: "GET",
        headers:{
            "Authorization": token,
            "Content-Type": "application/json"
        }
    }).then(resp => resp.json()).then(data =>{
        console.log(data)
    })
})