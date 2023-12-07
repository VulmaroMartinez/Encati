package mx.edu.utez.encati.controllers;


import mx.edu.utez.encati.models.dao.DaoEncuesta;
import mx.edu.utez.encati.models.dao.DaoTiendita;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "Controller", urlPatterns = "/controller")
public class Controller extends HttpServlet {

    DaoTiendita daoTiendita = new DaoTiendita();
    DaoEncuesta daoEncuesta = new DaoEncuesta();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String actionC = req.getParameter("actionC");

        switch (actionC) {
            case "findAll":

                List encuestas = daoEncuesta.findAll();
                req.setAttribute("encuestas", encuestas);

                List tienditas = daoTiendita.findAll();
                req.setAttribute("tienditas", tienditas);

                req.getRequestDispatcher("/index.jsp").forward(req, resp);
                break;
        }

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

    }
}
