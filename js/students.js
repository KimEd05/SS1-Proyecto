var id_voto = -1;

var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
   
}


async function funcion_inicial()
{
    
    var contenedor = document.getElementById("container-lista-estudiantes");
    for(var i = 0; i < 7; i++) {
        var fila = document.createElement("div");
        fila.className="row";

        for(var j = 0; j < 3; j++) {
            if(3*i+j < 21) {
                var col = document.createElement("div");
                col.className = "col-md-4 col-sm-4";

                var team = document.createElement("div");
                team.className = "team-thumb";

                var img = document.createElement("img");
                img.id = "_" + (3*i+j + 1);
                img.className = "img-responsive";
                img.src = "https://bucket-proyecto-ss1.s3.us-east-2.amazonaws.com/Papeleta/" + (3*i+j + 1) + ".jpg";
                
                team.appendChild(img);
                col.appendChild(team);
                fila.appendChild(col);
            }
        }

        contenedor.appendChild(fila);
        contenedor.innerHTML += "<br>"
    }


    var client = new HttpClient();
    client.get('https://yfsgst38xj.execute-api.us-east-2.amazonaws.com/develop/serverless/getVotos', function(response) {
        var contenedor = document.getElementById("container-lista-asistencias");
        var listado = JSON.parse(response);
        
        var table = document.createElement("table");
        table.className = "tabcontainer";

        var thead = document.createElement("thead");
        thead.innerHTML +=  "<tr>"+
                                    "<th><h1><center>Candidato</center></h1></th>"+
                                    "<th><h1><center>Partido</center></h1></th>"+
                                    "<th><h1><center>Fotografía</center></h1></th>"+
                                    "<th><h1><center>Votos</center></h1></th>"+
                            "</tr>";

        var tbody = document.createElement("tbody");
            for(var j = 0; j < 21 ; j++){
                tbody.innerHTML +=  "<tr>"+
                                        "<td><center>" + listado[j]['nombre'] + "</center></td>"+
                                        "<td><center>" + listado[j]['partido'] + "</center></td>"+
                                        "<td><center><img src=\"https://bucket-proyecto-ss1.s3.us-east-2.amazonaws.com/Papeleta/" + listado[j]['id'] + ".jpg\" width=50></center></td>"+
                                        "<td><center>" + listado[j]['votos']+ "</center></td>"+
                                    "</tr>";
            }

            
        table.appendChild(thead);
        table.appendChild(tbody);
        
            
        contenedor.appendChild(table);
        contenedor.innerHTML += "<br><br>"
 
    });
    
    document.getElementById("pageBody").addEventListener("click", function(e) {
        if (id_voto == -1) {
            document.getElementById('audioPapeleta').play();
            setTimeout(() => {
                document.getElementById('audioPapeleta').src = "https://bucket-proyecto-ss1.s3.us-east-2.amazonaws.com/Audios/1.mp3";
                document.getElementById('audioPapeleta').play();
                id_voto = 1;
                console.log(id_voto);
                setTimeout(() => {
                    document.getElementById('audioPapeleta').src = "https://bucket-proyecto-ss1.s3.us-east-2.amazonaws.com/Audios/2.mp3";
                    document.getElementById('audioPapeleta').play();
                    id_voto++;
                    console.log(id_voto);
                    setTimeout(() => {
                        document.getElementById('audioPapeleta').src = "https://bucket-proyecto-ss1.s3.us-east-2.amazonaws.com/Audios/3.mp3";
                        document.getElementById('audioPapeleta').play();
                        id_voto++;
                        console.log(id_voto);
                        setTimeout(() => {
                            document.getElementById('audioPapeleta').src = "https://bucket-proyecto-ss1.s3.us-east-2.amazonaws.com/Audios/4.mp3";
                            document.getElementById('audioPapeleta').play();
                            id_voto++;
                            console.log(id_voto);
                            setTimeout(() => {
                                document.getElementById('audioPapeleta').src = "https://bucket-proyecto-ss1.s3.us-east-2.amazonaws.com/Audios/5.mp3";
                                document.getElementById('audioPapeleta').play();
                                id_voto++;
                                console.log(id_voto);
                                setTimeout(() => {
                                    document.getElementById('audioPapeleta').src = "https://bucket-proyecto-ss1.s3.us-east-2.amazonaws.com/Audios/6.mp3";
                                    document.getElementById('audioPapeleta').play();
                                    id_voto++;
                                    console.log(id_voto);
                                    setTimeout(() => {
                                        document.getElementById('audioPapeleta').src = "https://bucket-proyecto-ss1.s3.us-east-2.amazonaws.com/Audios/7.mp3";
                                        document.getElementById('audioPapeleta').play();
                                        id_voto++;
                                        setTimeout(() => {
                                            document.getElementById('audioPapeleta').src = "https://bucket-proyecto-ss1.s3.us-east-2.amazonaws.com/Audios/8.mp3";
                                            document.getElementById('audioPapeleta').play();
                                            id_voto++;
                                            setTimeout(() => {
                                                document.getElementById('audioPapeleta').src = "https://bucket-proyecto-ss1.s3.us-east-2.amazonaws.com/Audios/9.mp3";
                                                document.getElementById('audioPapeleta').play();
                                                id_voto++;
                                                setTimeout(() => {
                                                    document.getElementById('audioPapeleta').src = "https://bucket-proyecto-ss1.s3.us-east-2.amazonaws.com/Audios/10.mp3";
                                                    document.getElementById('audioPapeleta').play();
                                                    id_voto++;
                                                    setTimeout(() => {
                                                        document.getElementById('audioPapeleta').src = "https://bucket-proyecto-ss1.s3.us-east-2.amazonaws.com/Audios/11.mp3";
                                                        document.getElementById('audioPapeleta').play();
                                                        id_voto++;
                                                        setTimeout(() => {
                                                            document.getElementById('audioPapeleta').src = "https://bucket-proyecto-ss1.s3.us-east-2.amazonaws.com/Audios/12.mp3";
                                                            document.getElementById('audioPapeleta').play();
                                                            id_voto++;
                                                            setTimeout(() => {
                                                                document.getElementById('audioPapeleta').src = "https://bucket-proyecto-ss1.s3.us-east-2.amazonaws.com/Audios/13.mp3";
                                                                document.getElementById('audioPapeleta').play();
                                                                id_voto++;
                                                                setTimeout(() => {
                                                                    document.getElementById('audioPapeleta').src = "https://bucket-proyecto-ss1.s3.us-east-2.amazonaws.com/Audios/14.mp3";
                                                                    document.getElementById('audioPapeleta').play();
                                                                    id_voto++;
                                                                    setTimeout(() => {
                                                                        document.getElementById('audioPapeleta').src = "https://bucket-proyecto-ss1.s3.us-east-2.amazonaws.com/Audios/15.mp3";
                                                                        document.getElementById('audioPapeleta').play();
                                                                        id_voto++;
                                                                        setTimeout(() => {
                                                                            document.getElementById('audioPapeleta').src = "https://bucket-proyecto-ss1.s3.us-east-2.amazonaws.com/Audios/16.mp3";
                                                                            document.getElementById('audioPapeleta').play();
                                                                            id_voto++;
                                                                            setTimeout(() => {
                                                                                document.getElementById('audioPapeleta').src = "https://bucket-proyecto-ss1.s3.us-east-2.amazonaws.com/Audios/17.mp3";
                                                                                document.getElementById('audioPapeleta').play();
                                                                                id_voto++;
                                                                                setTimeout(() => {
                                                                                    document.getElementById('audioPapeleta').src = "https://bucket-proyecto-ss1.s3.us-east-2.amazonaws.com/Audios/18.mp3";
                                                                                    document.getElementById('audioPapeleta').play();
                                                                                    id_voto++;
                                                                                    setTimeout(() => {
                                                                                        document.getElementById('audioPapeleta').src = "https://bucket-proyecto-ss1.s3.us-east-2.amazonaws.com/Audios/19.mp3";
                                                                                        document.getElementById('audioPapeleta').play();
                                                                                        id_voto++;
                                                                                        setTimeout(() => {
                                                                                            document.getElementById('audioPapeleta').src = "https://bucket-proyecto-ss1.s3.us-east-2.amazonaws.com/Audios/20.mp3";
                                                                                            document.getElementById('audioPapeleta').play();
                                                                                            id_voto++;
                                                                                            setTimeout(() => {
                                                                                                document.getElementById('audioPapeleta').src = "https://bucket-proyecto-ss1.s3.us-east-2.amazonaws.com/Audios/21.mp3";
                                                                                                document.getElementById('audioPapeleta').play();
                                                                                                id_voto++;
                                                                                                setTimeout(() => {
                                                                                                    
                                                                                                }, 8000);
                                                                                            }, 7000);
                                                                                        }, 8000);
                                                                                    }, 7000);
                                                                                }, 8000);
                                                                            }, 7000);
                                                                        }, 8000);
                                                                    }, 7000);
                                                                }, 7000);
                                                            }, 8000);
                                                        }, 7000);
                                                    }, 7000);
                                                }, 8000);
                                            }, 9000);
                                        }, 8000);
                                    }, 7000);
                                }, 7000);
                            }, 7000);
                        }, 7000);
                    }, 7000);
                }, 9000);
            }, 15000);
        } else {
            console.log("id voto es " + id_voto);
            vote(id_voto);
        }
        
    });

}

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

function vote(id) 
{
    var raw = JSON.stringify({"id":String(id)});
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };
    fetch("https://yfsgst38xj.execute-api.us-east-2.amazonaws.com/develop/serverless/postVoto", requestOptions)
    .then(response => response.text())
    .then(result => {
        alert("Voto exitoso");
        location.reload();
    })
    .catch(error => {
        alert("Error");
        console.log('error', error);
    });
}

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

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

async function registrarEstudiante() {
    var img = document.getElementById("img-estudiante");
    var id = document.getElementById("id-estudiante").value;
    var raw = JSON.stringify({"id":id,"foto":getDataUrl(img)});
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

    fetch("https://d2mkcjc0c59xy8.cloudfront.net/addstudent", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .then(function () {
        
    location.reload();
    })
    .catch(error => console.log('error', error));
}

async function registrarGrupo() {
    var img = document.getElementById("img-grupo");
    var id = document.getElementById("id-grupo").value;
    var raw = JSON.stringify({"name":id,"sourceBase64":getDataUrl(img)});
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

    fetch("https://vv3p26ogll.execute-api.us-east-2.amazonaws.com/pro1-g8/serverless/upload-grupal", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .then(function () {
        
    location.reload();
    })
    .catch(error => console.log('error', error));
}