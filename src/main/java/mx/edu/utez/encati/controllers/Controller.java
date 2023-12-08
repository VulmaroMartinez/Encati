package mx.edu.utez.encati.controllers;


import mx.edu.utez.encati.models.RespuestaBean;
import mx.edu.utez.encati.models.dao.DaoEncuesta;
import mx.edu.utez.encati.models.dao.DaoRespuesta;
import mx.edu.utez.encati.models.dao.DaoTiendita;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@WebServlet(name = "Controller", urlPatterns = "/controller")
public class Controller extends HttpServlet {

    DaoTiendita daoTiendita = new DaoTiendita();
    DaoEncuesta daoEncuesta = new DaoEncuesta();
    DaoRespuesta daoRespuesta = new DaoRespuesta();


    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        List encuestas = daoEncuesta.findAll();
        req.setAttribute("encuestas", encuestas);

        List tienditas = daoTiendita.findAll();
        req.setAttribute("tienditas", tienditas);

        req.getRequestDispatcher("/index.jsp").forward(req, resp);

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String body = req.getReader().lines().collect(Collectors.joining());

        try {
            JSONObject jsonObject = new JSONObject(body);
            String tienditaId = jsonObject.getString("tienda");
            String encuestaId = jsonObject.getString("encuesta");

            JSONArray respuestas = jsonObject.getJSONArray("respuestas");

            for (int i = 0; i < respuestas.length(); i++) {
                JSONObject obj = respuestas.getJSONObject(i);

                String preguntaId = obj.getString("pregunta_id");
                int valor = obj.getInt("valor");

                RespuestaBean r = new RespuestaBean();
                r.setId_tiendita(tienditaId);
                r.setId_encuesta(encuestaId);
                r.setId_pregunta(preguntaId);
                r.setValor(valor);

                daoRespuesta.save(r);

            }
        } catch (JSONException e) {
            throw new RuntimeException(e);
        }
    }
}
