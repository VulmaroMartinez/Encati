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

function actualizarPorcentaje() {
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

    actualizarPorcentaje();
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

    actualizarPorcentaje();
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

    actualizarPorcentaje();
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

    actualizarPorcentaje();
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

    actualizarPorcentaje();
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

    actualizarPorcentaje();
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

    actualizarPorcentaje();
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

    actualizarPorcentaje();
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

document.getElementById('encuesta').addEventListener('change', function () {
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
            obtenerValor(data);


            // Procesa los datos recibidos del servidor aquí
        })
        .catch(error => {
            console.error('Error al realizar la solicitud:', error);
        });

});

function redirigirTienditasPorcentaje() {
    var encuestaSelect = document.getElementById("encuesta")
    var encuestaId = encuestaSelect.options[encuestaSelect.selectedIndex].value;

    window.location.href = "resumencontroller?encuestaId=" + encuestaId;
}



/*
if (tiendaId !== '' && encuestaId !== '') {
    // Realiza una solicitud AJAX para obtener los datos del servlet
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log(xhr.responseText);

                try {
                    var jsonRequest = JSON.(xhr.responseText);
                    var valoresArray = jsonResponse.valores;
                    if (Array.isArray(valoresArray)) {
                        console.log(valoresArray);
                    } else {
                        console.error('La respuesta del servidor no es un array de números.');
                    }
                } catch (error) {
                    console.error('Error al analizar la respuesta JSON:', error);
                }
            } else {
                console.error('Error en la solicitud AJAX. Código de estado:', xhr.status);
            }
        }
    };

    // Reemplaza 'controller' con la URL de tu servlet
    xhr.open('GET', 'controller?tiendaId=' + tiendaId + '&encuestaId=' + encuestaId, true);
    xhr.send();
}


 var valoresArray = data.valores;
            //mostrar en la vista los valores seleccionados
            var respFun = document.getElementById("respFun");
            var row = document.getElementById("Funcionalidad");
            var color = valoresArray[0].color;
            var icon = valoresArray[0].icon;
            var text = valoresArray[0].text;
            respFun.style.color = color;
            respFun.innerHTML = icon + "<br>" + text;
            f = obtenerValor(color);

            row.style.backgroundColor = "rgba" + color.slice(3, -1) + ", 0.2)";
            actualizarPorcentaje();
            //confiabilidad
            var resConf = document.getElementById("resConf");
            var row = document.getElementById("Confiabilidad");
            var color = valoresArray[1].color;
            var icon = valoresArray[1].icon;
            var text = valoresArray[1].text;
            resConf.style.color = color;
            resConf.innerHTML = icon + "<br>" + text;
            c = obtenerValor(color);
            row.style.backgroundColor = "rgba" + color.slice(3, -1) + ", 0.2)";
            actualizarPorcentaje();
            //usabilidad
            var resUs = document.getElementById("resUs");
            var row = document.getElementById("Usabilidad");
            var color = valoresArray[2].color;
            var icon = valoresArray[2].icon;
            var text = valoresArray[2].text;
            resUs.style.color = color;
            resUs.innerHTML = icon + "<br>" + text;
            u = obtenerValor(color);
            row.style.backgroundColor = "rgba" + color.slice(3, -1) + ", 0.2)";
            actualizarPorcentaje();
            //rendimiento
            var resRen = document.getElementById("resRen");
            var row = document.getElementById("Rendimiento");
            var color = valoresArray[3].color;
            var icon = valoresArray[3].icon;
            var text = valoresArray[3].text;
            resRen.style.color = color;
            resRen.innerHTML = icon + "<br>" + text;
            r = obtenerValor(color);
            row.style.backgroundColor = "rgba" + color.slice(3, -1) + ", 0.2)";
            actualizarPorcentaje();
            //mantenimiento
            var resMan = document.getElementById("resMan");
            var row = document.getElementById("Mantenimiento");
            var color = valoresArray[4].color;
            var icon = valoresArray[4].icon;
            var text = valoresArray[4].text;
            resMan.style.color = color;
            resMan.innerHTML = icon + "<br>" + text;
            m = obtenerValor(color);
            row.style.backgroundColor = "rgba" + color.slice(3, -1) + ", 0.2)";
            actualizarPorcentaje();
            //portabilidad
            var resPor = document.getElementById("resPor");
            var row = document.getElementById("Portabilidad");
            var color = valoresArray[5].color;
            var icon = valoresArray[5].icon;
            var text = valoresArray[5].text;
            resPor.style.color = color;
            resPor.innerHTML = icon + "<br>" + text;
            p = obtenerValor(color);
            row.style.backgroundColor = "rgba" + color.slice(3, -1) + ", 0.2)";
            actualizarPorcentaje();
            //seguridad
            var resSeg = document.getElementById("resSeg");
            var row = document.getElementById("Seguridad");
            var color = valoresArray[6].color;
            var icon = valoresArray[6].icon;
            var text = valoresArray[6].text;
            resSeg.style.color = color;
            resSeg.innerHTML = icon + "<br>" + text;
            s = obtenerValor(color);
            row.style.backgroundColor = "rgba" + color.slice(3, -1) + ", 0.2)";
            actualizarPorcentaje();
            //compatibilidad
            var resCom = document.getElementById("resCom");
            var row = document.getElementById("Compatibilidad");
            var color = valoresArray[7].color;
            var icon = valoresArray[7].icon;
            var text = valoresArray[7].text;
            resCom.style.color = color;
            resCom.innerHTML = icon + "<br>" + text;
            com = obtenerValor(color);
            row.style.backgroundColor = "rgba" + color.slice(3, -1) + ", 0.2)";
            actualizarPorcentaje();


 */