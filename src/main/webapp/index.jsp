<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap" rel="stylesheet">
    <script src="assets/front.js"></script>
    <link rel="stylesheet" href="assets/mejorado.css">
    <title>ENCATI</title>
</head>
<body style="font-family: 'Quicksand', sans-serif;">

<header>
    <nav class="navbar bg-body fixed-top" style="background-color: #021024 !important; position: absolute !important; ">
        <div class="container-fluid">
            <a class="navbar-brand" href="#" style="color: #c1e8ff;">
                <img src="logoA.png" alt="Logo" width="39" height="33" class="d-inline-block align-text-top">
                ENCATI
            </a>
            <form action="controller" method="post" class="d-flex" role="search">
                <i class="bi bi-shop" style="margin-right: .5rem; color:white; font-size: 1.6rem;"></i>

                <select class="form-select" aria-label="Seleccione una tiendita" style="text-align: center;"
                        id="tienda">
                    <option selected>Seleccionar la tienda</option>
                    <c:forEach items="${tienditas}" var="tiendita">
                        <option value="${tiendita.id_tiendita}">${tiendita.nombre}</option>
                    </c:forEach>
                </select>

                <i class="bi bi-calendar-date-fill"
                   style="margin-right: .5rem; color:white; font-size: 1.6rem; margin-left: .5rem;"></i>
                <select class="form-select" aria-label="Seleccione una encuesta" style="text-align: center;"
                        id="encuesta">
                    <option selected>Seleccionar encuesta</option>
                    <c:forEach items="${encuestas}" var="encuesta">
                        <option value="${encuesta.id_encuesta}">${encuesta.nombre}</option>
                    </c:forEach>
                </select>
            </form>
        </div>
    </nav>
</header>


<div class="content">

    <table class="principal">
        <tbody>

        <tr style="width: 19rem; border: .2rem solid #001256;">
            <td style="width: 19rem; border: .2rem solid #001256;"><h3 style="text-align: center;">Caracteristicas</h3>
            </td>


            <td class="pregunta">
                <div class="face" style="font-size: 1.1rem; font-weight: 700;">
                    <div class="mala">
                        MALA
                    </div>
                    <div class="regular">
                        REGULAR
                    </div>
                    <div class="buena">
                        BUENA
                    </div>
                    <div class="mbuena">
                        MUY BUENA
                    </div>
                    <div class="excelente">
                        EXCELENTE
                    </div>
                </div>
            </td>
            <td style=" border: .2rem solid #001256; border-left: none;">
                <h4 style="text-align: center; font-weight: 700;">Respuesta</h4>
            </td>
        </tr>
        <tr>
            <td style="width: 19rem; border-top: .2rem solid #001256; border-right: .2rem solid #001256; border-left: .2rem solid #001256;">
                <h3><i class="bi bi-gear-wide"></i> Funcionalidad</h3></td>


            <td class="pregunta" id="Funcionalidad">
                <div class="face" id="opcFun">
                    <div class="mala" onclick="copiarPropiedades(this)">
                        <i class="bi bi-emoji-angry-fill"></i>
                    </div>
                    <div class="regular" onclick="copiarPropiedades(this)">
                        <i class="bi bi-emoji-frown-fill"></i>
                    </div>
                    <div class="buena" onclick="copiarPropiedades(this)">
                        <i class="bi bi-emoji-neutral-fill"></i>
                    </div>
                    <div class="mbuena" onclick="copiarPropiedades(this)">
                        <i class="bi bi-emoji-smile-fill"></i>
                    </div>
                    <div class="excelente" onclick="copiarPropiedades(this)">
                        <i class="bi bi-emoji-laughing-fill"></i>
                    </div>
                </div>
            </td>
            <td class="respuesta">
                <div class="re" id="respFun">

                </div>
            </td>
        </tr>
        <tr>
            <td style="width: 19rem; border-right: .2rem solid #001256; border-left: .2rem solid #001256;"><h3><i
                    class="bi bi-shield-fill-check"></i> Confiabilidad</h3></td>

            <td class="pregunta" id="Confiabilidad">
                <div class="face" id="opcConf">
                    <div class="mala" onclick="copiarPropiedadesConf(this)">
                        <i class="bi bi-emoji-angry-fill"></i>
                    </div>
                    <div class="regular" onclick="copiarPropiedadesConf(this)">
                        <i class="bi bi-emoji-frown-fill"></i>
                    </div>
                    <div class="buena" onclick="copiarPropiedadesConf(this)">
                        <i class="bi bi-emoji-neutral-fill"></i>
                    </div>
                    <div class="mbuena" onclick="copiarPropiedadesConf(this)">
                        <i class="bi bi-emoji-smile-fill"></i>
                    </div>
                    <div class="excelente" onclick="copiarPropiedadesConf(this)">
                        <i class="bi bi-emoji-laughing-fill"></i>
                    </div>
                </div>
            </td>
            <td class="respuesta">
                <div class="re" id="resConf">

                </div>
            </td>
        </tr>
        <tr>
            <td style="width: 19rem; border-right: .2rem solid #001256; border-left: .2rem solid #001256;"><h3><i
                    class="bi bi-phone"></i> Usabilidad</h3></td>

            <td class="pregunta" id="Usabilidad">
                <div class="face" id="opcUs">
                    <div class="mala" onclick="copiarPropiedadesUs(this)">
                        <i class="bi bi-emoji-angry-fill"></i>
                    </div>
                    <div class="regular" onclick="copiarPropiedadesUs(this)">
                        <i class="bi bi-emoji-frown-fill"></i>
                    </div>
                    <div class="buena" onclick="copiarPropiedadesUs(this)">
                        <i class="bi bi-emoji-neutral-fill"></i>
                    </div>
                    <div class="mbuena" onclick="copiarPropiedadesUs(this)">
                        <i class="bi bi-emoji-smile-fill"></i>
                    </div>
                    <div class="excelente" onclick="copiarPropiedadesUs(this)">
                        <i class="bi bi-emoji-laughing-fill"></i>
                    </div>
                </div>
            </td>
            <td class="respuesta">
                <div class="re" id="resUs">

                </div>
            </td>
        </tr>
        <tr>
            <td style="width: 19rem; border-right: .2rem solid #001256; border-left: .2rem solid #001256;"><h3><i
                    class="bi bi-graph-up-arrow"></i> Rendimiento</h3></td>

            <td class="pregunta" id="Rendimiento">
                <div class="face" id="opcRen">
                    <div class="mala" onclick="copiarPropiedadesRen(this)">
                        <i class="bi bi-emoji-angry-fill"></i>
                    </div>
                    <div class="regular" onclick="copiarPropiedadesRen(this)">
                        <i class="bi bi-emoji-frown-fill"></i>
                    </div>
                    <div class="buena" onclick="copiarPropiedadesRen(this)">
                        <i class="bi bi-emoji-neutral-fill"></i>
                    </div>
                    <div class="mbuena" onclick="copiarPropiedadesRen(this)">
                        <i class="bi bi-emoji-smile-fill"></i>
                    </div>
                    <div class="excelente" onclick="copiarPropiedadesRen(this)">
                        <i class="bi bi-emoji-laughing-fill"></i>
                    </div>
                </div>
            </td>
            <td class="respuesta">
                <div class="re" id="resRen">

                </div>
            </td>
        </tr>
        <tr>

            <td style="width: 19rem; border-right: .2rem solid #001256; border-left: .2rem solid #001256;"><h3><i
                    class="bi bi-wrench-adjustable-circle"></i> Mantenimiento</h3></td>
            <td class="pregunta" id="Mantenimiento">
                <div class="face" id="opcMan">
                    <div class="mala" onclick="copiarPropiedadesMan(this)">
                        <i class="bi bi-emoji-angry-fill"></i>
                    </div>
                    <div class="regular" onclick="copiarPropiedadesMan(this)">
                        <i class="bi bi-emoji-frown-fill"></i>
                    </div>
                    <div class="buena" onclick="copiarPropiedadesMan(this)">
                        <i class="bi bi-emoji-neutral-fill"></i>
                    </div>
                    <div class="mbuena" onclick="copiarPropiedadesMan(this)">
                        <i class="bi bi-emoji-smile-fill"></i>
                    </div>
                    <div class="excelente" onclick="copiarPropiedadesMan(this)">
                        <i class="bi bi-emoji-laughing-fill"></i>
                    </div>
                </div>
            </td>
            <td class="respuesta">
                <div class="re" id="resMan">

                </div>
            </td>
        </tr>
        <tr>
            <td style="width: 19rem; border-right: .2rem solid #001256; border-left: .2rem solid #001256;"><h3><i
                    class="bi bi-laptop"></i> Portabilidad</h3></td>

            <td class="pregunta" id="Portabilidad">
                <div class="face" id="opcPor">
                    <div class="mala" onclick="copiarPropiedadesPor(this)">
                        <i class="bi bi-emoji-angry-fill"></i>
                    </div>
                    <div class="regular" onclick="copiarPropiedadesPor(this)">
                        <i class="bi bi-emoji-frown-fill"></i>
                    </div>
                    <div class="buena" onclick="copiarPropiedadesPor(this)">
                        <i class="bi bi-emoji-neutral-fill"></i>
                    </div>
                    <div class="mbuena" onclick="copiarPropiedadesPor(this)">
                        <i class="bi bi-emoji-smile-fill"></i>
                    </div>
                    <div class="excelente" onclick="copiarPropiedadesPor(this)">
                        <i class="bi bi-emoji-laughing-fill"></i>
                    </div>
                </div>
            </td>
            <td class="respuesta">
                <div class="re" id="resPor">

                </div>
            </td>
        </tr>
        <tr>
            <td style="width: 19rem; border-right: .2rem solid #001256; border-left: .2rem solid #001256;"><h3><i
                    class="bi bi-lock"></i> Seguridad</h3></td>

            <td class="pregunta" id="Seguridad">
                <div class="face" id="opcSeg">
                    <div class="mala" onclick="copiarPropiedadesSeg(this)">
                        <i class="bi bi-emoji-angry-fill"></i>
                    </div>
                    <div class="regular" onclick="copiarPropiedadesSeg(this)">
                        <i class="bi bi-emoji-frown-fill"></i>
                    </div>
                    <div class="buena" onclick="copiarPropiedadesSeg(this)">
                        <i class="bi bi-emoji-neutral-fill"></i>
                    </div>
                    <div class="mbuena" onclick="copiarPropiedadesSeg(this)">
                        <i class="bi bi-emoji-smile-fill"></i>
                    </div>
                    <div class="excelente" onclick="copiarPropiedadesSeg(this)">
                        <i class="bi bi-emoji-laughing-fill"></i>
                    </div>
                </div>
            </td>
            <td class="respuesta">
                <div class="re" id="resSeg">

                </div>
            </td>
        </tr>
        <tr style="border-bottom: .2rem solid #001256;">
            <td style="width: 19rem; border-bottom: .2rem solid #001256;  border-right: .2rem solid #001256; border-left: .2rem solid #001256;">
                <h3><i class="bi bi-phone-flip"></i> Compatibilidad</h3></td>

            <td class="pregunta" id="Compatibilidad">
                <div class="face" id="opcCom">
                    <div class="mala" onclick="copiarPropiedadesCom(this)">
                        <i class="bi bi-emoji-angry-fill"></i>
                    </div>
                    <div class="regular" onclick="copiarPropiedadesCom(this)">
                        <i class="bi bi-emoji-frown-fill"></i>
                    </div>
                    <div class="buena" onclick="copiarPropiedadesCom(this)">
                        <i class="bi bi-emoji-neutral-fill"></i>
                    </div>
                    <div class="mbuena" onclick="copiarPropiedadesCom(this)">
                        <i class="bi bi-emoji-smile-fill"></i>
                    </div>
                    <div class="excelente" onclick="copiarPropiedadesCom(this)">
                        <i class="bi bi-emoji-laughing-fill"></i>
                    </div>
                </div>
            </td>
            <td class="respuesta">
                <div class="re" id="resCom">

                </div>
            </td>
        </tr>
        </tbody>

    </table>

    <div class="por">
        <div class="c">
            <div class="palabra">
                Porcentaje
            </div>
            <div class="porcentaje" id="porcentaje">
                0%
            </div>
        </div>

    </div>
    <div class="buttons">
        <button type="button" class="btn " style="background-color: #021024 !important; color: #c1e8ff;"
                onclick="location.reload()">Cancelar
        </button>
        <button type="submit" id="guardarBtn" class="btn " value="Guardar" name="action"
                style="background-color: rgb(119, 120, 121); color: aliceblue;">Guardar
        </button>

    </div>
</div>


</body>
</html>