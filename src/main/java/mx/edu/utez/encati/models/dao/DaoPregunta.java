package mx.edu.utez.encati.models.dao;

import mx.edu.utez.encati.models.PreguntaBean;
import mx.edu.utez.encati.utils.MysqlConector;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class DaoPregunta {

    public void findById(int id) {
        MysqlConector conector = new MysqlConector();
        Connection connect = conector.connect();
        try {
            PreparedStatement stmt = connect.prepareStatement("SELECT * FROM preguntas WHERE id_pregunta = ?");
            stmt.setInt(1, id);
            ResultSet rs = stmt.executeQuery();

            while(rs.next()){
                PreguntaBean pregunta = new PreguntaBean();
                pregunta.setId_pregunta(rs.getInt("id_pregunta"));
                pregunta.setPregunta(rs.getString("pregunta"));
            }

        } catch (SQLException e) {
            System.out.println("Error: " + e);
        }
    }
}
