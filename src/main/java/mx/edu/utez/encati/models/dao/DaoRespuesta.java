package mx.edu.utez.encati.models.dao;

import mx.edu.utez.encati.models.RespuestaBean;
import mx.edu.utez.encati.utils.MysqlConector;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class DaoRespuesta {

    public boolean save(RespuestaBean respuesta){
        boolean flag = false;
        MysqlConector conector = new MysqlConector();
        Connection connect = conector.connect();
        try {
            PreparedStatement stmt = connect.prepareStatement
                    ("INSERT INTO respuestas (tiendita_id, encuesta_id, pregunta_id, valor) VALUES (?, ?, ?, ?)");
            stmt.setString(1, respuesta.getId_tiendita());
            stmt.setString(2, respuesta.getId_encuesta());
            stmt.setString(3, respuesta.getId_pregunta());
            stmt.setInt(4, respuesta.getValor());

            flag = stmt.executeUpdate() > 0;

        } catch (SQLException e) {
            System.out.println("Error: " + e);
        }
        return flag;
    }

    public boolean exists(String id_tiendita, String id_encuesta) {
        boolean flag = false;
        MysqlConector conector = new MysqlConector();
        Connection connect = conector.connect();
        try {
            PreparedStatement stmt = connect.prepareStatement
                    ("SELECT COUNT(*) FROM respuestas WHERE tiendita_id = ? AND encuesta_id = ?");
            stmt.setString(1, id_tiendita);
            stmt.setString(2, id_encuesta);

            ResultSet rs = stmt.executeQuery();

            if (rs.next()) {
                flag = rs.getInt(1) > 0;
            }

        } catch (SQLException e) {
            System.out.println("Error: " + e);
        }
        return flag;
    }

    public List obtenerRespuestas (String tienditaId, String encuestaId){
        List<Integer> valores = new ArrayList<>();
        MysqlConector conector = new MysqlConector();
        Connection connect = conector.connect();

        try{
            PreparedStatement stmt =
                    connect.prepareStatement("SELECT valor FROM respuestas" +
                            " WHERE tiendita_id = ? and encuesta_id = ?");

            stmt.setString(1, tienditaId);
            stmt.setString(2, encuestaId);

            ResultSet rs = stmt.executeQuery();
            while (rs.next()) {
                int valor = rs.getInt("valor");
                valores.add(valor - 1);
            }
        } catch (SQLException e) {
            System.out.println("Error: " + e);
        }
        return valores;
    }

}
