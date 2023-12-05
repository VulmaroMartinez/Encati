package mx.edu.utez.encati.models.dao;

import mx.edu.utez.encati.models.EncuestaBean;
import mx.edu.utez.encati.utils.MysqlConector;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class DaoEncuesta {

    public List findAll(){
        List<EncuestaBean> encuestas = new ArrayList<>();
        MysqlConector conector = new MysqlConector();
        Connection connect = conector.connect();

        try{

            PreparedStatement stmt = connect.prepareStatement("SELECT * FROM encuestas");
            ResultSet rs = stmt.executeQuery();

            while(rs.next()){
                EncuestaBean encuesta = new EncuestaBean();
                encuesta.setId_encuesta(rs.getString("id_encuesta"));
                encuesta.setNombre(rs.getString("nombre"));

                encuestas.add(encuesta);
            }

        } catch (SQLException e) {
            System.out.println("Error: " + e);
        }
        return encuestas;
    }
}
