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

function funcion_inicial()
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

    for(var i = 1; i < 22; i++) {
        document.getElementById("_" + i).addEventListener("click", function() {
            console.log(this.id.replace("_",""));
        });
    }
    /*var client = new HttpClient();
    client.get('https://d2mkcjc0c59xy8.cloudfront.net/getstudents', function(response) {
        var contenedor = document.getElementById("container-lista-estudiantes");
        var listado = JSON.parse(response).listado;
        console.log(listado);
        for(var i = 0; i <= (Math.round(listado.length / 4)+ 1); i++) {
            var fila = document.createElement("div");
            fila.className="row";

            for(var j = 0; j < 4; j++) {
                if(4*i+j < listado.length) {
                    var col = document.createElement("div");
                    col.className = "col-md-3 col-sm-3";

                    var team = document.createElement("div");
                    team.className = "team-thumb";

                    var img = document.createElement("img");
                    img.className = "img-responsive";
                    img.src = "https://pro1-images-grupo8.s3.us-east-2.amazonaws.com/" + listado[4*i+j].Foto;
                                
                    var info = document.createElement("div");
                    info.className = "team-info team-thumb-up";
                    info.innerHTML = "<h3>" + listado[4*i+j].Nombre + "</h3>";

                    team.appendChild(img);
                    team.appendChild(info);
                    col.appendChild(team);
                    fila.appendChild(col);
                }
            }
            contenedor.appendChild(fila);
            contenedor.innerHTML += "<br>"
        }
    });*/

    /*client.get('https://vv3p26ogll.execute-api.us-east-2.amazonaws.com/pro1-g8/serverless/get-grupal', function(response) {
        var contenedor = document.getElementById("container-lista-grupos");
        var listado = JSON.parse(response);
        console.log(listado);
        for(var i = 0; i <= (Math.round(listado.length / 4)+ 1); i++) {
            var fila = document.createElement("div");
            fila.className="row";

            for(var j = 0; j < 4; j++) {
                if(4*i+j < listado.length) {
                    var col = document.createElement("div");
                    col.className = "col-md-3 col-sm-3";

                    var team = document.createElement("div");
                    team.className = "team-thumb";

                    var img = document.createElement("img");
                    img.className = "img-responsive";
                    img.src = "https://pro1-images-grupo8.s3.us-east-2.amazonaws.com/" + listado[4*i+j].Foto.S;
                                
                    var info = document.createElement("div");
                    info.className = "team-info team-thumb-up";
                    info.innerHTML = "<h3>" + listado[4*i+j].Id_foto.S + "</h3>";

                    team.appendChild(img);
                    team.appendChild(info);
                    col.appendChild(team);
                    fila.appendChild(col);
                }
            }
            contenedor.appendChild(fila);
            contenedor.innerHTML += "<br>"
        }
    });*/

    var client = new HttpClient();
    client.get('https://yfsgst38xj.execute-api.us-east-2.amazonaws.com/develop/serverless/getVotos', function(response) {
        var contenedor = document.getElementById("container-lista-asistencias");
        var listado = JSON.parse(response);
        console.log(listado);
            
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
}

function promptFile(contentType, multiple) {
    var input = document.createElement("input");
    input.type = "file";
    input.multiple = multiple;
    input.accept = contentType;
    return new Promise(function(resolve) {
      document.activeElement.onfocus = function() {
        document.activeElement.onfocus = null;
        setTimeout(resolve, 100);
      };
      input.onchange = function() {
        var files = Array.from(input.files);
        if (multiple)
          return resolve(files);
        resolve(files[0]);
      };
      input.click();
    });
}

function promptFilename() {
    var img = document.getElementById("img-estudiante");
    promptFile().then(function(file) {
        img.src = URL.createObjectURL(file);
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

function promptFilenameGrupo() {
    var img = document.getElementById("img-grupo");
    promptFile().then(function(file) {
        img.src = URL.createObjectURL(file);
    });
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