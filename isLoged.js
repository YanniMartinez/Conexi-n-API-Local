token = localStorage.getItem('token');

if(!token){//Si no hay token
    url = window.location;
    console.log(url);
    const path = url.pathname.substring(0, url.pathname.lastIndexOf('/') + 1)

    location.href = path + 'index.html';
}