package mx.edu.utez.encati.models.dao;

import com.mysql.cj.jdbc.CallableStatementWrapper;
import mx.edu.utez.encati.models.TienditaBean;
import mx.edu.utez.encati.utils.MysqlConector;

import java.io.InputStream;
import java.io.Reader;
import java.math.BigDecimal;
import java.net.URL;
import java.sql.*;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Map;

public class DaoTiendita {

    public void findById(int id) {
        MysqlConector conector = new MysqlConector();
        Connection connect = conector.connect();
        try {
            PreparedStatement stmt = connect.prepareStatement("SELECT * FROM tienditas WHERE id_tiendita = ?");
            stmt.setInt(1, id);
            ResultSet rs = stmt.executeQuery();

            while(rs.next()){
                TienditaBean tiendita = new TienditaBean();
                tiendita.setId_tiendita(rs.getString("id_tiendita"));
                tiendita.setNombre(rs.getString("nombre"));
            }

        } catch (SQLException e) {
            System.out.println("Error: " + e);
        }
    }

    public List findAll() {
        List<TienditaBean> tienditas = new ArrayList<>();
        MysqlConector conector = new MysqlConector();
        Connection connect = conector.connect();
        try {
            PreparedStatement stmt = connect.prepareStatement("SELECT * FROM tienditas");
            ResultSet rs = stmt.executeQuery();

            while(rs.next()){
                TienditaBean tiendita = new TienditaBean();
                tiendita.setId_tiendita(rs.getString("id_tiendita"));
                tiendita.setNombre(rs.getString("nombre"));

                tienditas.add(tiendita);
            }

        } catch (SQLException e) {
            System.out.println("Error: " + e);
        }
        return tienditas;
    }
}
