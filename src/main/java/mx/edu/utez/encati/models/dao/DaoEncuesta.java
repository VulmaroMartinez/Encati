package mx.edu.utez.encati.models.dao;

import mx.edu.utez.encati.models.EncuestaBean;
import mx.edu.utez.encati.models.ResumenBean;
import mx.edu.utez.encati.utils.MysqlConector;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class DaoEncuesta {

    public List<EncuestaBean> findAll(){
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

    public List<ResumenBean> ObtenerResumen(String encuestaId){
        List<ResumenBean> resumen = new ArrayList<>();
        MysqlConector conector = new MysqlConector();
        Connection connect = conector.connect();

        try{
            PreparedStatement stmt = connect.prepareStatement(" SELECT t.nombre AS 'Tiendita', AVG((r.valor - 1) / 4.0) * 100 AS 'Porcentaje' FROM tienditas t \n" +
                    " JOIN respuestas r ON t.id_tiendita = r.tiendita_id" +
                    " JOIN encuestas e ON r.encuesta_id = e.id_encuesta" +
                    " WHERE e.id_encuesta = ? GROUP BY t.id_tiendita, e.id_encuesta;");

            stmt.setString(1, encuestaId);
            ResultSet rs = stmt.executeQuery();

            while (rs.next()){
                ResumenBean r = new ResumenBean();
                r.setTiendita(rs.getString("Tiendita"));
                r.setPorcentaje(rs.getDouble("Porcentaje"));

                resumen.add(r);

            }

        } catch (SQLException e) {
            System.out.println("Error: " + e);
        }
        return resumen;
    }

    public String findNombre(String encuestaId) {
        String nombre = "";
        MysqlConector conector = new MysqlConector();
        Connection connect = conector.connect();

        try{
            PreparedStatement stmt = connect.prepareStatement("SELECT nombre FROM encuestas WHERE id_encuesta = ?");
            stmt.setString(1, encuestaId);

            ResultSet rs = stmt.executeQuery();

            if (rs.next()){
                nombre = rs.getString("nombre");
            }

        } catch (SQLException e) {
            System.out.println("Error: " + e);
        }
        return nombre;
    }
}
