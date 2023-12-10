package mx.edu.utez.encati.controllers;

import mx.edu.utez.encati.models.ResumenBean;
import mx.edu.utez.encati.models.dao.DaoEncuesta;
import org.json.JSONArray;
import org.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;


@WebServlet(name = "ResumenController", urlPatterns = "/resumencontroller")
public class ResumenController extends HttpServlet {
    DaoEncuesta daoEncuesta = new DaoEncuesta();

    private double porcentajeEnTotalCalculo(List<ResumenBean> resumen){
        double porcentajeEnTotal = 0;
        for (ResumenBean r : resumen){
            porcentajeEnTotal += r.getPorcentaje();
        }
        return porcentajeEnTotal / resumen.size();
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        String encuestaId = req.getParameter("encuestaId");

        List encuestas = daoEncuesta.findAll();
        String encuestaNombre = daoEncuesta.findNombre(encuestaId);
        req.setAttribute("encuestaNombre", encuestaNombre);
        req.setAttribute("encuestas", encuestas);


        if (encuestaId != null){
            List resumen = daoEncuesta.ObtenerResumen(encuestaId);
            req.setAttribute("resumen", resumen);

            double porcentajeEnTotal = porcentajeEnTotalCalculo(resumen);
            req.setAttribute("porcentajeEnTotal", porcentajeEnTotal);
            System.out.println(porcentajeEnTotal);
        }

        req.getRequestDispatcher("/resumen.jsp").forward(req, resp);

    }
}
