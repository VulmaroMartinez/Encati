package mx.edu.utez.encati.models.dao;

import mx.edu.utez.encati.models.RespuestaBean;
import mx.edu.utez.encati.utils.MysqlConector;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

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

            stmt.executeUpdate();
            flag = stmt.executeUpdate() > 0;

        } catch (SQLException e) {
            System.out.println("Error: " + e);
        }
        return flag;
    }
}
