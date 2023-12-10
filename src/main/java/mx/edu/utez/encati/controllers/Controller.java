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
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@WebServlet(name = "Controller", urlPatterns = "/controller")
public class Controller extends HttpServlet {

    DaoTiendita daoTiendita = new DaoTiendita();
    DaoEncuesta daoEncuesta = new DaoEncuesta();
    DaoRespuesta daoRespuesta = new DaoRespuesta();



    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        String tienda = req.getParameter("tiendaId");
        String encuesta = req.getParameter("encuestaId");

        List encuestas = daoEncuesta.findAll();
        req.setAttribute("encuestas", encuestas);

        List tienditas = daoTiendita.findAll();
        req.setAttribute("tienditas", tienditas);


        if (daoRespuesta.exists(tienda, encuesta)) {
            List<Integer> valores = daoRespuesta.obtenerRespuestas(tienda, encuesta);
            try {
            // Convierte la lista a un array de int para facilitar la serialización a JSON
            int[] valoresArray = valores.stream().mapToInt(Integer::intValue).toArray();



                JSONArray jsonArray = new JSONArray();
                for (int valor : valoresArray) {
                    jsonArray.put(valor);
                }

// Construye un objeto JSON con el array como único elemento
                JSONObject jsonResponse = new JSONObject();
                jsonResponse.put("valores", jsonArray);

// Establece el tipo de contenido y escribe la respuesta
                resp.setContentType("application/json");
                resp.setCharacterEncoding("UTF-8");
                resp.getWriter().write(jsonResponse.toString());
                System.out.println(jsonResponse);
                return;
            } catch (JSONException e) {
                throw new RuntimeException(e);
            }


        }

        req.getRequestDispatcher("/index.jsp").forward(req, resp);

    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
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
