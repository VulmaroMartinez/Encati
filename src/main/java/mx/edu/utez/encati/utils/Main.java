package mx.edu.utez.encati.utils;

import mx.edu.utez.encati.models.EncuestaBean;
import mx.edu.utez.encati.models.TienditaBean;
import mx.edu.utez.encati.models.dao.DaoEncuesta;
import mx.edu.utez.encati.models.dao.DaoTiendita;

import java.util.List;

public class Main {
    public static void main(String[] args) {
        DaoTiendita daoTiendita = new DaoTiendita();
        List<TienditaBean> tienditas = daoTiendita.findAll();
        for (TienditaBean tienditaBean : tienditas) {
            System.out.println("Nombres tiendas: " + tienditaBean.getNombre());
        }

        DaoEncuesta dao = new DaoEncuesta();

        List<EncuestaBean> encuestas = dao.findAll();
        for (EncuestaBean encuestaBean : encuestas) {
            System.out.println("Nombres encuestas: " + encuestaBean.getNombre());
        }
    }
}
