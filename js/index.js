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

function makeid() { var text = ""; var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; for (var i = 0; i < 10; i++) text += possible.charAt(Math.floor(Math.random() * possible.length)); return text; }

async function iniciarSesionCam() {
    var video = document.getElementById('webcam');
    
    const canvas = document.createElement("canvas");
    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    const image = new Image()
    image.src = canvas.toDataURL();
    var raw = JSON.stringify({"name":makeid(), "sourceBase64":image.src});
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    fetch("https://yfsgst38xj.execute-api.us-east-2.amazonaws.com/develop/serverless/postLogin", requestOptions)
    .then(response => response.text())
    .then(result => {
        var res = JSON.parse(result)
        if(res.estado === "ok") {
            document.getElementById('audio').play()
            $('#myModal').modal('show');
            setTimeout(() => {
                window.location = "principal.html";
            }, 9000);
            
        } else {
            alert("Credenciales incorrectas");
        }
    })
    .catch(error => {
        alert("Credenciales incorrectas");
        console.log('error', error)
    });
    
    

}

function iniciarSesionVidente()
{
    window.location = "principal-vidente.html";
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
 
    var raw = JSON.stringify({"cui":usuario, "nombre":pass, "sourceBase64":imagensrc});
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    fetch("https://yfsgst38xj.execute-api.us-east-2.amazonaws.com/develop/serverless/postRegistro", requestOptions)
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