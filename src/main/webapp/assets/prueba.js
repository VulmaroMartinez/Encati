document.getElementById('encuesta').addEventListener('change', function () {
    if (!validar()) {
        return;
    }

    var tiendaSelect = document.getElementById('tienda');
    var encuestaSelect2 = document.getElementById('encuesta');
    var tiendaId = tiendaSelect.options[tiendaSelect.selectedIndex].value;
    var encuestaId = encuestaSelect2.options[encuestaSelect2.selectedIndex].value;

    var url = 'controller?tiendaId=' + tiendaId + '&encuestaId=' + encuestaId;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);

            // Verificar si 'data' es un objeto JSON y tiene la propiedad 'valores'
            if (typeof data === 'object' && data.hasOwnProperty('valores')) {
                // Procesar los datos recibidos del servidor aquí
                console.log('Valores recibidos:', data.valores);

                pintarResp(data.valores);
            } else {

                copiarPropiedadesUs();
                copiarPropiedades();
                copiarPropiedadesCom();
                copiarPropiedadesConf();
                copiarPropiedadesMan();
                copiarPropiedadesPor();
                copiarPropiedadesRen();
                copiarPropiedadesSeg();


            }
        })
        .catch(error => {
            console.error('Error al realizar la solicitud:', error);
        });
});





function validar() {
    var tiendaSelect = document.getElementById("tienda");
    var encuestaSelect = document.getElementById("encuesta");
    return (
        tiendaSelect.options[tiendaSelect.selectedIndex].value !== "Seleccionar la tienda" &&
        encuestaSelect.options[encuestaSelect.selectedIndex].value !== "Seleccionar encuesta"
    );
}




var po = 0;
var f, c, u, r, m, p, s, com;

function actualizarPorcentajeRespondido(f,c,u,r,m,p,s,com) {
    if (f == null || c == null || u == null || s == null || m == null || r == null || com == null || p == null) {
        return;
    }

    var nuevoPo = ((p + u + c + com + s + f + r + m) * 100) / 32;

    var poStr = nuevoPo.toString();
    if (poStr.includes(".")) {
        var partes = poStr.split(".");
        if (partes[1].length > 2) {
            nuevoPo = nuevoPo.toFixed(2); // Redondea a 2 decimales
        }
    }

    po = nuevoPo;

    var porcentaje = document.getElementById("porcentaje");
    porcentaje.textContent = po + "%";

    var contenido = porcentaje.innerHTML;
    var numero = parseFloat(contenido);

    if (numero >= 0 && numero <= 69) {
        porcentaje.style.backgroundColor = "red";
    } else if (numero >= 70 && numero <= 89) {
        porcentaje.style.backgroundColor = "darkgoldenrod";
    } else if (numero >= 90 && numero <= 95) {
        porcentaje.style.backgroundColor = "green";
    } else if (numero >= 96 && numero <= 100) {
        porcentaje.style.backgroundColor = "blue";
    } else {
        porcentaje.style.backgroundColor = "black";
    }
}


function actualizarPorcentaje(f,c,u,r,m,p,s,com) {
    if (f == null || c == null || u == null || s == null || m == null || r == null || com == null || p == null) {
        return;
    }

    var nuevoPo = ((p + u + c + com + s + f + r + m) * 100) / 32;

    var poStr = nuevoPo.toString();
    if (poStr.includes(".")) {
        var partes = poStr.split(".");
        if (partes[1].length > 2) {
            nuevoPo = nuevoPo.toFixed(2); // Redondea a 2 decimales
        }
    }

    po = nuevoPo;

    var porcentaje = document.getElementById("porcentaje");
    porcentaje.textContent = po + "%";

    var guardarBtn = document.getElementById("guardarBtn");
    guardarBtn.disabled = false;
    guardarBtn.style.backgroundColor = "rgb(0,18,86)";


    var contenido = porcentaje.innerHTML;
    var numero = parseFloat(contenido);

    if (numero >= 0 && numero <= 69) {
        porcentaje.style.backgroundColor = "red";
    } else if (numero >= 70 && numero <= 89) {
        porcentaje.style.backgroundColor = "darkgoldenrod";
    } else if (numero >= 90 && numero <= 95) {
        porcentaje.style.backgroundColor = "green";
    } else if (numero >= 96 && numero <= 100) {
        porcentaje.style.backgroundColor = "blue";
    } else {
        porcentaje.style.backgroundColor = "black";
    }
}

function copiarPropiedades(elemento) {
    if (!validar()) {
        return;
    }

    var resFun = document.getElementById("respFun");
    var row = document.getElementById("Funcionalidad");

    var color = window.getComputedStyle(elemento).color;
    var icon = elemento.querySelector("i").outerHTML;
    var text = elemento.textContent;
    resFun.style.color = color;
    resFun.innerHTML = icon + "<br>" + text;

    f = obtenerValor(color);

    row.style.backgroundColor = "rgba" + color.slice(3, -1) + ", 0.2)";

    actualizarPorcentaje(f,c,u,r,m,p,s,com);
}

function copiarPropiedadesConf(elemento) {
    if (!validar()) {
        return;
    }

    var resConf = document.getElementById("resConf");
    var row = document.getElementById("Confiabilidad");

    var color = window.getComputedStyle(elemento).color;
    var icon = elemento.querySelector("i").outerHTML;
    var text = elemento.textContent;

    resConf.style.color = color;
    resConf.innerHTML = icon + "<br>" + text;

    c = obtenerValor(color);

    row.style.backgroundColor = "rgba" + color.slice(3, -1) + ", 0.2)";

    actualizarPorcentaje(f,c,u,r,m,p,s,com);
}

function copiarPropiedadesUs(elemento) {
    if (!validar()) {
        return;
    }

    var resUs = document.getElementById("resUs");
    var row = document.getElementById("Usabilidad");

    var color = window.getComputedStyle(elemento).color;
    var icon = elemento.querySelector("i").outerHTML;
    var text = elemento.textContent;

    resUs.style.color = color;
    resUs.innerHTML = icon + "<br>" + text;

    u = obtenerValor(color);

    row.style.backgroundColor = "rgba" + color.slice(3, -1) + ", 0.2)";

    actualizarPorcentaje(f,c,u,r,m,p,s,com);
}

function copiarPropiedadesRen(elemento) {
    if (!validar()) {
        return;
    }

    var resRen = document.getElementById("resRen");
    var row = document.getElementById("Rendimiento");

    var color = window.getComputedStyle(elemento).color;
    var icon = elemento.querySelector("i").outerHTML;
    var text = elemento.textContent;

    resRen.style.color = color;
    resRen.innerHTML = icon + "<br>" + text;

    r = obtenerValor(color);

    row.style.backgroundColor = "rgba" + color.slice(3, -1) + ", 0.2)";

    actualizarPorcentaje(f,c,u,r,m,p,s,com);
}

function copiarPropiedadesMan(elemento) {
    if (!validar()) {
        return;
    }

    var resMan = document.getElementById("resMan");
    var row = document.getElementById("Mantenimiento");

    var color = window.getComputedStyle(elemento).color;
    var icon = elemento.querySelector("i").outerHTML;
    var text = elemento.textContent;

    resMan.style.color = color;
    resMan.innerHTML = icon + "<br>" + text;

    m = obtenerValor(color);

    row.style.backgroundColor = "rgba" + color.slice(3, -1) + ", 0.2)";

    actualizarPorcentaje(f,c,u,r,m,p,s,com);
}

function copiarPropiedadesPor(elemento) {
    if (!validar()) {
        return;
    }

    var resPor = document.getElementById("resPor");
    var row = document.getElementById("Portabilidad");

    var color = window.getComputedStyle(elemento).color;
    var icon = elemento.querySelector("i").outerHTML;
    var text = elemento.textContent;

    resPor.style.color = color;
    resPor.innerHTML = icon + "<br>" + text;

    p = obtenerValor(color);

    row.style.backgroundColor = "rgba" + color.slice(3, -1) + ", 0.2)";

    actualizarPorcentaje(f,c,u,r,m,p,s,com);
}

function copiarPropiedadesSeg(elemento) {
    if (!validar()) {
        return;
    }

    var resSeg = document.getElementById("resSeg");
    var row = document.getElementById("Seguridad");

    var color = window.getComputedStyle(elemento).color;
    var icon = elemento.querySelector("i").outerHTML;
    var text = elemento.textContent;

    resSeg.style.color = color;
    resSeg.innerHTML = icon + "<br>" + text;

    s = obtenerValor(color);

    row.style.backgroundColor = "rgba" + color.slice(3, -1) + ", 0.2)";

    actualizarPorcentaje(f,c,u,r,m,p,s,com);
}

function copiarPropiedadesCom(elemento) {
    if (!validar()) {
        return;
    }

    var resCom = document.getElementById("resCom");
    var row = document.getElementById("Compatibilidad");

    var color = window.getComputedStyle(elemento).color;
    var icon = elemento.querySelector("i").outerHTML;
    var text = elemento.textContent;

    resCom.style.color = color;
    resCom.innerHTML = icon + "<br>" + text;

    com = obtenerValor(color);

    row.style.backgroundColor = "rgba" + color.slice(3, -1) + ", 0.2)";

    actualizarPorcentaje(f,c,u,r,m,p,s,com);
}

function obtenerValor(color) {
    switch (color) {
        case "rgb(220, 20, 60)":
            return 0;
        case "rgb(255, 140, 0)":
            return 1;
        case "rgb(255, 215, 0)":
            return 2;
        case "rgb(46, 139, 87)":
            return 3;
        case "rgb(30, 144, 255)":
            return 4;
        default:
            return 0;
    }
}




function limpiar() {
    po = null;
    f = c = u = r = m = p = s = com = null;

    // Resetear estilos y contenido de respuestas
    resetearElemento("respFun", "Funcionalidad");
    resetearElemento("resConf", "Confiabilidad");
    resetearElemento("resUs", "Usabilidad");
    resetearElemento("resRen", "Rendimiento");
    resetearElemento("resMan", "Mantenimiento");
    resetearElemento("resPor", "Portabilidad");
    resetearElemento("resSeg", "Seguridad");
    resetearElemento("resCom", "Compatibilidad");



    var porcentaje = document.getElementById("porcentaje");
    porcentaje.textContent = "0%";
    porcentaje.style.backgroundColor = "";

    var guardarBtn = document.getElementById("guardarBtn");
    guardarBtn.disabled = true;
    guardarBtn.style.backgroundColor = "rgb(119, 120, 121)";
}

function resetearElemento(respuestaId, rowId) {
    var respuesta = document.getElementById(respuestaId);
    respuesta.style.color = "";
    respuesta.innerHTML = "";

    var row = document.getElementById(rowId);
    row.style.backgroundColor = "";
}




var guardarBtn = document.getElementById("guardarBtn");
guardarBtn.addEventListener("click", guardarRespuestas);

function guardarRespuestas() {
    if (!validar()) {
        return;
    }

    var tienditaSelect = document.getElementById("tienda");
    var encuestaSelect = document.getElementById("encuesta");

    var tienda = tienditaSelect.options[tienditaSelect.selectedIndex].value;
    var encuesta = encuestaSelect.options[encuestaSelect.selectedIndex].value;

    var respF = (f + 1);
    var respC = (c + 1);
    var respU = (u + 1);
    var respR = (r + 1);
    var respM = (m + 1);
    var respP = (p + 1);
    var respS = (s + 1);
    var respCom = (com + 1);

    var respuestas = [
        {
            pregunta_id: "P1",
            valor: respF
        },
        {
            pregunta_id: "P2",
            valor: respC
        },
        {
            pregunta_id: "P3",
            valor: respU
        },
        {
            pregunta_id: "P4",
            valor: respR
        },
        {
            pregunta_id: "P5",
            valor: respM
        },
        {
            pregunta_id: "P6",
            valor: respP
        },
        {
            pregunta_id: "P7",
            valor: respS
        },
        {
            pregunta_id: "P8",
            valor: respCom
        }
    ];

    //¿por que no me jala mi ajax?
    //

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'controller');

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log("ya");
                mostrarexito();
            } else if (xhr.status === 409) {
                // Código 409 Conflict, la tienda ya ha respondido a esa encuesta
                console.log("La tienda ya ha respondido a esta encuesta.");
                error409();
            } else {
                // Otro código de estado, manejar según sea necesario
                console.log("Error en la solicitud: " + xhr.status);
                mostrarfalse();
            }
        }
    };


    var data = {
        tienda: tienda,
        encuesta: encuesta,
        respuestas: respuestas
    }

    xhr.send(JSON.stringify(data));
    console.log(JSON.stringify(data));
}


function redirigirTienditasPorcentaje() {
    var encuestaSelect = document.getElementById("encuesta")
    var encuestaId = encuestaSelect.options[encuestaSelect.selectedIndex].value;

    window.location.href = "resumencontroller?encuestaId=" + encuestaId;

}


function pintarResp(valoresArray) {
    
    var fun = valoresArray[0];
    var conf = valoresArray[1];
    var usa = valoresArray[2];
    var ren = valoresArray[3];
    var mant = valoresArray[4];
    var por = valoresArray[5];
    var segu = valoresArray[6];
    var comp = valoresArray[7];

    actualizarPorcentajeRespondido(fun,conf,usa,ren,mant,por,segu,comp);

    var fo = document.getElementById("respFunciona");
    var cf = document.getElementById("resconfi");
    var ud = document.getElementById("resUsa");
    var md = document.getElementById("resMante");
    var ro = document.getElementById("resRendi");
    var pd = document.getElementById("resPorta");
    var sd = document.getElementById("resSegu");
    var cd = document.getElementById("resCompa");

    switch (fun) {
        case 0:
            fo.style.color = "rgb(220, 20, 60)";
            fo.style.textAlign="center";
            fo.style.backgroundColor="rgba(220,20,60, 0.2)"
            fo.innerHTML="<i class=\"bi bi-emoji-angry-fill\"></i>";
            break;
        case 1:
            fo.style.color = "rgb(255, 140, 0)";
            fo.style.textAlign="center";
            fo.style.backgroundColor="rgba(255,140,0, 0.2)"
            fo.innerHTML="<i class=\"bi bi-emoji-frown-fill\"></i>";
            break;
        case 2:
            fo.style.color = "rgb(255, 215, 0)";
            fo.style.textAlign="center";
            fo.style.backgroundColor="rgba(255,215,0, 0.2)"
            fo.innerHTML="<i class=\"bi bi-emoji-neutral-fill\"></i>";
            break;
        case 3:
            fo.style.color = "rgb(46, 139, 87)";
            fo.style.textAlign="center";
            fo.style.backgroundColor="rgba(46,139,87, 0.2)"
            fo.innerHTML="<i class=\"bi bi-emoji-smile-fill\"></i>";
            break;
        case 4:
            fo.style.color= "rgb(30, 144, 255)";
            fo.style.textAlign= "center";
            fo.style.backgroundColor="rgba(30,144,255, 0.2)"
            fo.innerHTML="<i class=\"bi bi-emoji-laughing-fill\"></i>";
            break;
    }

    switch (conf) {
        case 0:
            cf.style.color = "rgb(220, 20, 60)";
            cf.style.textAlign="center";
            cf.style.backgroundColor="rgba(220,20,60, 0.2)"
            cf.innerHTML="<i class=\"bi bi-emoji-angry-fill\"></i>";
            break;
        case 1:
            cf.style.color = "rgb(255, 140, 0)";
            cf.style.textAlign="center";
            cf.style.backgroundColor="rgba(255,140,0, 0.2)"
            cf.innerHTML="<i class=\"bi bi-emoji-frown-fill\"></i>";
            break;
        case 2:
            cf.style.color = "rgb(255, 215, 0)";
            cf.style.textAlign="center";
            cf.style.backgroundColor="rgba(255,215,0, 0.2)"
            cf.innerHTML="<i class=\"bi bi-emoji-neutral-fill\"></i>";
            break;
        case 3:
            cf.style.color = "rgb(46, 139, 87)";
            cf.style.textAlign="center";
            cf.style.backgroundColor="rgba(46,139,87, 0.2)"
            cf.innerHTML="<i class=\"bi bi-emoji-smile-fill\"></i>";
            break;
        case 4:
            cf.style.textAlign= "center";
            cf.style.backgroundColor="rgba(30,144,255, 0.2)"
            cf.innerHTML="<i class=\"bi bi-emoji-laughing-fill\"></i>";
            cf.style.color= "rgb(30, 144, 255)";
            break;
    }

    switch (usa) {
        case 0:
            ud.style.color = "rgb(220, 20, 60)";
            ud.style.textAlign="center";
            ud.style.backgroundColor="rgba(220,20,60, 0.2)"
            ud.innerHTML="<i class=\"bi bi-emoji-angry-fill\"></i>";
            break;
        case 1:
            ud.style.color = "rgb(255, 140, 0)";
            ud.style.textAlign="center";
            ud.style.backgroundColor="rgba(255,140,0, 0.2)"
            ud.innerHTML="<i class=\"bi bi-emoji-frown-fill\"></i>";
            break;
        case 2:
            ud.style.color = "rgb(255, 215, 0)";
            ud.style.textAlign="center";
            ud.style.backgroundColor="rgba(255,215,0, 0.2)"
            ud.innerHTML="<i class=\"bi bi-emoji-neutral-fill\"></i>";
            break;
        case 3:
            ud.style.color = "rgb(46, 139, 87)";
            ud.style.textAlign="center";
            ud.style.backgroundColor="rgba(46,139,87, 0.2)"
            ud.innerHTML="<i class=\"bi bi-emoji-smile-fill\"></i>";
            break;
        case 4:
            ud.style.textAlign= "center";
            ud.style.backgroundColor="rgba(30,144,255, 0.2)"
            ud.innerHTML="<i class=\"bi bi-emoji-laughing-fill\"></i>";
            ud.style.color= "rgb(30, 144, 255)";
            break;
    }

    switch (ren) {
        case 0:
            ro.style.color = "rgb(220, 20, 60)";
            ro.style.textAlign="center";
            ro.style.backgroundColor="rgba(220,20,60, 0.2)"
            ro.innerHTML="<i class=\"bi bi-emoji-angry-fill\"></i>";
            break;
        case 1:
            ro.style.color = "rgb(255, 140, 0)";
            ro.style.textAlign="center";
            ro.style.backgroundColor="rgba(255,140,0, 0.2)"
            ro.innerHTML="<i class=\"bi bi-emoji-frown-fill\"></i>";
            break;
        case 2:
            ro.style.color = "rgb(255, 215, 0)";
            ro.style.textAlign="center";
            ro.style.backgroundColor="rgba(255,215,0, 0.2)"
            ro.innerHTML="<i class=\"bi bi-emoji-neutral-fill\"></i>";
            break;
        case 3:
            ro.style.color = "rgb(46, 139, 87)";
            ro.style.textAlign="center";
            ro.style.backgroundColor="rgba(46,139,87, 0.2)"
            ro.innerHTML="<i class=\"bi bi-emoji-smile-fill\"></i>";
            break;
        case 4:
            ro.style.textAlign= "center";
            ro.style.backgroundColor="rgba(30,144,255, 0.2)"
            ro.innerHTML="<i class=\"bi bi-emoji-laughing-fill\"></i>";
            ro.style.color= "rgb(30, 144, 255)";
            break;
    }

    switch (mant) {
        case 0:
            md.style.color = "rgb(220, 20, 60)";
            md.style.textAlign="center";
            md.style.backgroundColor="rgba(220,20,60, 0.2)"
            md.innerHTML="<i class=\"bi bi-emoji-angry-fill\"></i>";
            break;
        case 1:
            md.style.color = "rgb(255, 140, 0)";
            md.style.textAlign="center";
            md.style.backgroundColor="rgba(255,140,0, 0.2)"
            md.innerHTML="<i class=\"bi bi-emoji-frown-fill\"></i>";
            break;
        case 2:
            md.style.color = "rgb(255, 215, 0)";
            md.style.textAlign="center";
            md.style.backgroundColor="rgba(255,215,0, 0.2)"
            md.innerHTML="<i class=\"bi bi-emoji-neutral-fill\"></i>";
            break;
        case 3:
            md.style.color = "rgb(46, 139, 87)";
            md.style.textAlign="center";
            md.style.backgroundColor="rgba(46,139,87, 0.2)"
            md.innerHTML="<i class=\"bi bi-emoji-smile-fill\"></i>";
            break;
        case 4:
            md.style.textAlign= "center";
            md.style.backgroundColor="rgba(30,144,255, 0.2)"
            md.innerHTML="<i class=\"bi bi-emoji-laughing-fill\"></i>";
            md.style.color= "rgb(30, 144, 255)";
            break;
    }

    switch (por) {
        case 0:
            pd.style.color = "rgb(220, 20, 60)";
            pd.style.textAlign="center";
            pd.style.backgroundColor="rgba(220,20,60, 0.2)"
            pd.innerHTML="<i class=\"bi bi-emoji-angry-fill\"></i>";
            break;
        case 1:
            pd.style.color = "rgb(255, 140, 0)";
            pd.style.textAlign="center";
            pd.style.backgroundColor="rgba(255,140,0, 0.2)"
            pd.innerHTML="<i class=\"bi bi-emoji-frown-fill\"></i>";
            break;
        case 2:
            pd.style.color = "rgb(255, 215, 0)";
            pd.style.textAlign="center";
            pd.style.backgroundColor="rgba(255,215,0, 0.2)"
            pd.innerHTML="<i class=\"bi bi-emoji-neutral-fill\"></i>";
            break;
        case 3:
            pd.style.color = "rgb(46, 139, 87)";
            pd.style.textAlign="center";
            pd.style.backgroundColor="rgba(46,139,87, 0.2)"
            pd.innerHTML="<i class=\"bi bi-emoji-smile-fill\"></i>";
            break;
        case 4:
            pd.style.textAlign= "center";
            pd.style.backgroundColor="rgba(30,144,255, 0.2)"
            pd.innerHTML="<i class=\"bi bi-emoji-laughing-fill\"></i>";
            pd.style.color= "rgb(30, 144, 255)";
            break;
    }

    switch (segu) {
        case 0:
            sd.style.color = "rgb(220, 20, 60)";
            sd.style.textAlign="center";
            sd.style.backgroundColor="rgba(220,20,60, 0.2)"
            sd.innerHTML="<i class=\"bi bi-emoji-angry-fill\"></i>";
            break;
        case 1:
            sd.style.color = "rgb(255, 140, 0)";
            sd.style.textAlign="center";
            sd.style.backgroundColor="rgba(255,140,0, 0.2)"
            sd.innerHTML="<i class=\"bi bi-emoji-frown-fill\"></i>";
            break;
        case 2:
            sd.style.color = "rgb(255, 215, 0)";
            sd.style.textAlign="center";
            sd.style.backgroundColor="rgba(255,215,0, 0.2)"
            sd.innerHTML="<i class=\"bi bi-emoji-neutral-fill\"></i>";
            break;
        case 3:
            sd.style.color = "rgb(46, 139, 87)";
            sd.style.textAlign="center";
            sd.style.backgroundColor="rgba(46,139,87, 0.2)"
            sd.innerHTML="<i class=\"bi bi-emoji-smile-fill\"></i>";
            break;
        case 4:
            sd.style.textAlign= "center";
            sd.style.backgroundColor="rgba(30,144,255, 0.2)"
            sd.innerHTML="<i class=\"bi bi-emoji-laughing-fill\"></i>";
            sd.style.color= "rgb(30, 144, 255)";
            break;
    }

    switch (comp) {
        case 0:
            cd.style.color = "rgb(220, 20, 60)";
            cd.style.textAlign="center";
            cd.style.backgroundColor="rgba(220,20,60, 0.2)"
            cd.innerHTML="<i class=\"bi bi-emoji-angry-fill\"></i>";
            break;
        case 1:
            cd.style.color = "rgb(255, 140, 0)";
            cd.style.textAlign="center";
            cd.style.backgroundColor="rgba(255,140,0, 0.2)"
            cd.innerHTML="<i class=\"bi bi-emoji-frown-fill\"></i>";
            break;
        case 2:
            cd.style.color = "rgb(255, 215, 0)";
            cd.style.textAlign="center";
            cd.style.backgroundColor="rgba(255,215,0, 0.2)"
            cd.innerHTML="<i class=\"bi bi-emoji-neutral-fill\"></i>";
            break;
        case 3:
            cd.style.color = "rgb(46, 139, 87)";
            cd.style.textAlign="center";
            cd.style.backgroundColor="rgba(46,139,87, 0.2)"
            cd.innerHTML="<i class=\"bi bi-emoji-smile-fill\"></i>";
            break;
        case 4:
            cd.style.textAlign= "center";
            cd.style.backgroundColor="rgba(30,144,255, 0.2)"
            cd.innerHTML="<i class=\"bi bi-emoji-laughing-fill\"></i>";
            cd.style.color= "rgb(30, 144, 255)";
            break;
    }
        console.log("Aquí avisa que ya se guardaron las respuestas");
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ya hay respuestas para esta encuesta y tiendita"
        });

        document.getElementById("limpiar").disabled=true;
}