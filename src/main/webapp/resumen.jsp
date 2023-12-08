<%@ page contentType="text/html;charset=UTF-8" language="java" %>

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
    <link rel="stylesheet" href="assets/mejorado.css">
    <title>ENCATI</title>
</head>
<body style="font-family: 'Quicksand', sans-serif;">

<header>
    <nav class="navbar bg-body fixed-top" style="background-color: #021024 !important; position: absolute !important; ">
        <div class="container-fluid">
            <a class="navbar-brand" href="#" style="color: #c1e8ff;">
                <img src="assets/img/logoA.png" alt="Logo" width="39" height="33" class="d-inline-block align-text-top">
                ENCATI
            </a>
            <form class="d-flex" role="search">
                <div class="for_i" >
                    <i class="bi bi-calendar-date-fill" style=" margin-right: .5rem; color:white; font-size: 1rem; margin-left: .5rem; margin-bottom: 0px;"></i>
                    Encuestas
                </div>

                <select class="form-select" aria-label="Seleccione una encuesta" style="text-align: center;" id="encuesta">
                    <option selected>Seleccionar encuesta</option>
                    <option value="1">2023_V1</option>
                    <option value="2">2023_V2</option>
                    <option value="3">2023_V3</option>
                </select>
            </form>

        </div>
    </nav>
</header>


<div class="content">

    <h3>Nombre de la encuesta seleccionada</h3>

    <table class="principal">
        <tbody>

        <tr  style="border: .2rem solid #001256;">
            <td style=" border: .2rem solid #001256;"><h3 style="text-align: center;" >Tienditas</h3></td>
            <td style=" width: 19rem; border: .2rem solid #001256; border-left: none;">
                <h4 style="width: 19rem; text-align: center; font-weight: 700;">Porcentaje Individual</h4>
            </td>
        </tr>
        <tr >
        </tr>
        <tr  style="border-bottom: .2rem solid #001256;">

        </tr>
        </tbody>

    </table>

    <div class="por">
        <div class="c">
            <div class="palabra">
                Porcentaje total
            </div>
            <div class="porcentaje" id="porcentaje">
                0%
            </div>
        </div>

    </div>
    <div class="buttons">
        <button type="button" class="btn " style="background-color: #021024 !important; color: #c1e8ff;" > <a href="index.jsp">Realizar encuestas</a></button>

    </div>


</div>



</body>
<script src="assets/front.js"></script>
</html>
