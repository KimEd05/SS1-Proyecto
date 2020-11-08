navigator.mediaDevices.getUserMedia(
    {
        video: true
    }

).then((strem) =>{
    let webcam = document.getElementById('webcam')
    webcam.srcObject = strem
    
}).catch((err) =>{
    console.log(err)
})

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");


function getDataUrl(img) {
    // Create canvas
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    // Set width and height
    canvas.width = img.width;
    canvas.height = img.height;
    // Draw the image
    ctx.drawImage(img, 0, 0);
    return canvas.toDataURL('image/jpeg');
}

async function iniciarSesionCam() {
    /*var video = document.getElementById('webcam');
    
    const canvas = document.createElement("canvas");
    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    const image = new Image()
    image.src = canvas.toDataURL();
    console.log(image.src);
    var usuario = document.getElementById("usuario").value;
    var raw = JSON.stringify({"user":usuario, "password":"", "foto":image.src});
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    fetch("https://d2mkcjc0c59xy8.cloudfront.net/login", requestOptions)
    .then(response => response.text())
    .then(result => {
        var res = JSON.parse(result)
        if(res.estado === "ok") {
            window.location = "principal.html";
        } else {
            alert("Credenciales incorrectas");
        }
    })
    .catch(error => {
        alert("Credenciales incorrectas");
        console.log('error', error)
    });*/
    document.getElementById('audio').play()
    setTimeout(() => {
        window.location = "principal.html";
    }, 9000);
    

}

function registrarse() {
    window.location = "signin.html";
}

var imagensrc = "";
function capturarFoto() {
    var video = document.getElementById('webcam');
    
    const canvas = document.createElement("canvas");
    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    imagensrc = canvas.toDataURL();
    var captura = document.getElementById("captura");
    captura.src = imagensrc;
}

function register() {
    var usuario = document.getElementById("user-sign").value;
    var pass = document.getElementById("pass-sign").value;
    if(pass !== document.getElementById("rep-sign").value) {
        alert("Las contraseñas no coinciden.");
    } else {
        var raw = JSON.stringify({"user":usuario, "password":pass, "foto":imagensrc});
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("https://d2mkcjc0c59xy8.cloudfront.net/adduser", requestOptions)
        .then(response => response.text())
        .then(result => {
            var res = JSON.parse(result)
            if(res.estado === "ok") {
                imagensrc = "";
                alert("Registro finalizado!");
                window.location = "index.html";
            } else {
                alert("Credenciales incorrectas");
            }
        })
        .catch(error => {
            alert("Credenciales incorrectas");
            console.log('error', error)
        });
    }
     
}